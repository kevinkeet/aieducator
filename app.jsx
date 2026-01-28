// Watershed - AI-Powered Case-Based Medical Learning Platform
const { useState, useEffect, useRef, useCallback } = React;

// ============================================================================
// CLAUDE API SERVICE
// ============================================================================
const ClaudeAPI = {
  apiKey: null,
  baseUrl: 'https://api.anthropic.com/v1/messages',

  setApiKey(key) {
    this.apiKey = key;
    localStorage.setItem('watershed-api-key', key);
  },

  getApiKey() {
    if (!this.apiKey) {
      this.apiKey = localStorage.getItem('watershed-api-key');
    }
    return this.apiKey;
  },

  isConfigured() {
    return !!this.getApiKey();
  },

  async call(systemPrompt, userMessage, options = {}) {
    const apiKey = this.getApiKey();
    if (!apiKey) {
      throw new Error('API key not configured');
    }

    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: options.model || 'claude-sonnet-4-20250514',
        max_tokens: options.maxTokens || 2048,
        system: systemPrompt,
        messages: [{ role: 'user', content: userMessage }]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'API call failed');
    }

    const data = await response.json();
    return data.content[0].text;
  }
};

// ============================================================================
// MEDICAL EDUCATION PROMPTS
// ============================================================================
const PROMPTS = {
  CASE_ANALYSIS: `You are an expert medical educator analyzing a patient case for teaching purposes. You have deep expertise in internal medicine, particularly cardiology, pulmonology, nephrology, and critical care.

Your task is to analyze the provided patient case and identify:
1. The key medical problems/diagnoses present
2. Critical clinical findings that guide management
3. Relevant pathophysiology concepts to teach
4. Common clinical decision points/dilemmas
5. Applicable landmark trials and guidelines

Respond in JSON format:
{
  "problems": [{"name": "...", "acuity": "acute|chronic", "priority": "high|medium|low"}],
  "keyFindings": [{"finding": "...", "significance": "...", "critical": true/false}],
  "teachingTopics": [{"topic": "...", "relevance": "...", "concepts": ["..."]}],
  "clinicalDecisions": [{"decision": "...", "options": ["..."], "evidence": "..."}],
  "relevantTrials": [{"name": "...", "relevance": "..."}]
}`,

  GENERATE_QUESTIONS: `You are a medical educator creating case-based learning questions. Generate challenging but fair multiple-choice questions that test clinical reasoning, not just recall.

Guidelines:
- Questions should be directly relevant to THIS specific patient
- Include clinical context in the question stem
- All distractors should be plausible
- Explanations should teach the "why" not just the "what"
- Reference landmark trials when applicable
- Focus on decision-making that would change outcomes

Respond in JSON format:
{
  "questions": [
    {
      "category": "Diagnosis|Management|Pharmacology|Clinical Reasoning",
      "question": "...",
      "context": "Brief clinical context if needed",
      "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correctIndex": 0-3,
      "explanation": "Detailed teaching explanation",
      "keyTakeaway": "One-sentence pearl",
      "relevantTrials": ["TRIAL-NAME"]
    }
  ]
}`,

  TEACHING_EXPLANATION: `You are an attending physician teaching a resident at the bedside. Explain the requested concept in the context of THIS specific patient.

Teaching style:
- Start with the "why" - help them understand the pathophysiology
- Connect to the specific patient findings
- Highlight common mistakes and pitfalls
- Share clinical pearls from experience
- Reference evidence but make it practical
- Use the Socratic method - pose questions to deepen understanding
- Be warm but rigorous

Keep explanations focused and actionable. Aim for 2-3 paragraphs maximum unless more detail is specifically requested.`,

  SIMULATOR_FEEDBACK: `You are an attending physician providing feedback during a clinical simulation. The learner just made a management decision for this patient.

Your feedback should:
1. Acknowledge what they did well (if anything)
2. Explain why their choice was optimal/suboptimal/poor
3. Describe the likely clinical outcome
4. Teach the underlying principle
5. Reference relevant evidence/guidelines
6. If suboptimal, explain what you would have done differently and why

Be constructive and educational. Frame feedback as teaching moments, not criticism.

Respond in JSON format:
{
  "quality": "optimal|suboptimal|poor",
  "feedback": "Your detailed educational feedback",
  "outcome": "What happens to the patient",
  "teachingPoint": "Key principle to remember",
  "whatIWouldDo": "If different from their choice, explain your approach"
}`,

  FOLLOWUP_QUESTION: `You are a medical educator engaging in Socratic dialogue. Based on the learner's answer and the clinical context, generate a thoughtful follow-up question that:

1. Probes deeper understanding
2. Tests application of the concept
3. Connects to related clinical scenarios
4. Challenges assumptions appropriately

Keep it conversational and encouraging. One question only.`,

  CASE_SUMMARY: `You are a medical educator. Create a concise educational summary of this patient case that:

1. Synthesizes the key clinical problems
2. Highlights the most important teaching points
3. Identifies 3-5 "don't miss" pearls
4. Suggests areas for further study

Format as a brief attending note that a resident could reference.`
};

// ============================================================================
// CLINICAL TRIALS DATABASE (for reference in AI responses)
// ============================================================================
const CLINICAL_TRIALS = {
  'PARADIGM-HF': { name: 'PARADIGM-HF', year: 2014, journal: 'NEJM', summary: 'ARNI (sacubitril/valsartan) superior to enalapril in HFrEF' },
  'DAPA-HF': { name: 'DAPA-HF', year: 2019, journal: 'NEJM', summary: 'Dapagliflozin reduces HF hospitalization and CV death regardless of diabetes' },
  'DOSE': { name: 'DOSE', year: 2011, journal: 'NEJM', summary: 'Higher dose IV diuretics achieve better decongestion in ADHF' },
  'RALES': { name: 'RALES', year: 1999, journal: 'NEJM', summary: 'Spironolactone reduces mortality 30% in severe HFrEF' },
  'COPERNICUS': { name: 'COPERNICUS', year: 2001, journal: 'NEJM', summary: 'Carvedilol beneficial even in severe HFrEF' },
  'AFFIRM': { name: 'AFFIRM', year: 2002, journal: 'NEJM', summary: 'No mortality difference between rate and rhythm control in AF' },
  'ARISTOTLE': { name: 'ARISTOTLE', year: 2011, journal: 'NEJM', summary: 'Apixaban superior to warfarin in non-valvular AF' },
  'EMPA-REG': { name: 'EMPA-REG OUTCOME', year: 2015, journal: 'NEJM', summary: 'Empagliflozin reduces CV death in T2DM with ASCVD' }
};

// ============================================================================
// SIMULATOR SCENARIOS (Base scenarios - AI will enhance feedback)
// ============================================================================
const SIMULATOR_SCENARIOS = {
  'adhf-management': {
    id: 'adhf-management',
    title: 'ADHF Management Simulation',
    description: 'Manage acute decompensated heart failure from ED to discharge',
    steps: [
      {
        time: '7:00 AM - ED Arrival',
        narrative: 'Your patient has arrived in the ED. He is sitting upright, appears in respiratory distress, and cannot speak in full sentences.',
        vitals: { bp: '158/94', hr: '102', rr: '28', spo2: '89%', temp: '37.1' },
        findings: 'Severe respiratory distress, diffuse crackles bilaterally, JVP to angle of jaw, 3+ pitting edema to thighs',
        choices: [
          { text: 'Start BiPAP, give IV furosemide 80mg, place Foley catheter', baseQuality: 'optimal' },
          { text: 'Give IV furosemide 40mg, apply oxygen via nasal cannula, monitor', baseQuality: 'suboptimal' },
          { text: 'Prepare for intubation, give IV furosemide and morphine', baseQuality: 'poor' },
          { text: 'Order STAT echocardiogram and cardiac biomarkers before treatment', baseQuality: 'poor' }
        ]
      },
      {
        time: '9:00 AM - 2 Hours Later',
        narrative: 'Patient made 400mL urine in 2 hours. BiPAP weaned to 4L NC. Labs show Cr 1.9 (was 1.8), K 4.8.',
        vitals: { bp: '138/82', hr: '88', rr: '20', spo2: '96%', temp: '37.0' },
        findings: 'Still crackles at bases, JVP elevated at 10cm, 2+ edema',
        choices: [
          { text: 'Give another 80mg IV furosemide, continue monitoring', baseQuality: 'optimal' },
          { text: 'Hold diuretics due to rising creatinine, recheck labs in 6 hours', baseQuality: 'poor' },
          { text: 'Add metolazone 5mg and repeat furosemide 80mg', baseQuality: 'suboptimal' },
          { text: 'Switch to continuous furosemide infusion at 10mg/hr', baseQuality: 'suboptimal' }
        ]
      },
      {
        time: '6:00 PM - Day 1',
        narrative: 'Patient net negative 2.5L. Much improved. Cr now 2.0, K 3.8. Carvedilol was held on admission.',
        vitals: { bp: '118/72', hr: '76', rr: '16', spo2: '97%', temp: '36.8' },
        findings: 'Minimal crackles at bases, JVP 8cm, 1+ edema',
        choices: [
          { text: 'Continue diuretics, restart carvedilol at home dose tonight', baseQuality: 'optimal' },
          { text: 'Hold carvedilol until discharge, too risky right now', baseQuality: 'suboptimal' },
          { text: 'Restart carvedilol at half dose', baseQuality: 'suboptimal' },
          { text: 'Switch to metoprolol tartrate for easier dosing', baseQuality: 'poor' }
        ]
      },
      {
        time: 'Day 3 - Discharge Planning',
        narrative: 'Patient euvolemic, Cr back to baseline 1.3. Home meds: lisinopril 20mg, carvedilol 25mg BID, furosemide 40mg daily, Jardiance 10mg.',
        vitals: { bp: '112/68', hr: '68', rr: '14', spo2: '98%', temp: '36.7' },
        findings: 'No crackles, JVP normal, trace edema',
        choices: [
          { text: 'Increase furosemide to 80mg, add spironolactone 25mg, plan ARNI transition', baseQuality: 'optimal' },
          { text: 'Keep all home medications the same, close outpatient follow-up', baseQuality: 'poor' },
          { text: 'Double the furosemide, stop Jardiance (contributed to dehydration)', baseQuality: 'poor' },
          { text: 'Increase furosemide, add spironolactone, but hold Jardiance until outpatient', baseQuality: 'suboptimal' }
        ]
      }
    ]
  },
  'sepsis-management': {
    id: 'sepsis-management',
    title: 'Sepsis & Septic Shock',
    description: 'Manage a patient presenting with urosepsis',
    steps: [
      {
        time: '2:00 AM - ED Arrival',
        narrative: 'A 72-year-old woman from a nursing home presents with confusion, fever, and hypotension.',
        vitals: { bp: '85/52', hr: '118', rr: '26', spo2: '92%', temp: '38.9' },
        findings: 'Confused, dry mucous membranes, suprapubic tenderness, foul-smelling urine',
        choices: [
          { text: 'Start 30mL/kg crystalloid, draw cultures, give broad-spectrum antibiotics within 1 hour', baseQuality: 'optimal' },
          { text: 'Order CT abdomen to identify source before antibiotics', baseQuality: 'poor' },
          { text: 'Give 500mL fluid bolus, wait to see response before more', baseQuality: 'suboptimal' },
          { text: 'Start norepinephrine immediately for the low blood pressure', baseQuality: 'suboptimal' }
        ]
      },
      {
        time: '3:30 AM - After Initial Resuscitation',
        narrative: 'Received 2L crystalloid. Lactate 4.8. BP now 78/48. Minimal urine output.',
        vitals: { bp: '78/48', hr: '112', rr: '24', spo2: '94%', temp: '38.5' },
        findings: 'Still confused, mottled extremities, MAP 58',
        choices: [
          { text: 'Start norepinephrine to target MAP ≥65, continue fluids, repeat lactate', baseQuality: 'optimal' },
          { text: 'Give more fluids—she needs at least 6L before vasopressors', baseQuality: 'poor' },
          { text: 'Start dopamine for blood pressure support', baseQuality: 'suboptimal' },
          { text: 'Add vasopressin 0.03 units/min as first vasopressor', baseQuality: 'suboptimal' }
        ]
      },
      {
        time: '8:00 AM - ICU Day 1',
        narrative: 'On norepinephrine 12mcg/min, MAP 67. Lactate down to 3.2. Urine culture growing E. coli.',
        vitals: { bp: '92/58', hr: '98', rr: '18', spo2: '96%', temp: '37.8' },
        findings: 'More alert, good urine output, lactate clearing',
        choices: [
          { text: 'Narrow antibiotics to ciprofloxacin based on sensitivities, wean pressors', baseQuality: 'optimal' },
          { text: 'Keep broad-spectrum antibiotics for 7 more days to be safe', baseQuality: 'suboptimal' },
          { text: 'Stop antibiotics—patient is improving', baseQuality: 'poor' },
          { text: 'Add vancomycin for possible MRSA coverage', baseQuality: 'poor' }
        ]
      }
    ]
  }
};

// ============================================================================
// LOCALSTORAGE HOOK
// ============================================================================
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });

  const setValue = useCallback((value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// ============================================================================
// ICONS
// ============================================================================
const Icons = {
  Settings: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  ArrowLeft: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>,
  Check: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>,
  ChevronDown: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>,
  ChevronRight: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>,
  Sparkles: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  Brain: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
  Send: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
};

// ============================================================================
// LOADING SPINNER
// ============================================================================
function LoadingSpinner({ size = 'md', text = '' }) {
  const sizeClasses = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' };
  return (
    <div className="flex items-center gap-3">
      <div className={`${sizeClasses[size]} border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin`} />
      {text && <span className="text-gray-400">{text}</span>}
    </div>
  );
}

// ============================================================================
// API SETTINGS MODAL
// ============================================================================
function ApiSettingsModal({ isOpen, onClose }) {
  const [apiKey, setApiKey] = useState(ClaudeAPI.getApiKey() || '');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleSave = () => {
    ClaudeAPI.setApiKey(apiKey);
    setTestResult({ success: true, message: 'API key saved!' });
    setTimeout(() => onClose(), 1000);
  };

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      ClaudeAPI.setApiKey(apiKey);
      await ClaudeAPI.call(
        'You are a helpful assistant.',
        'Say "API connection successful!" in exactly those words.',
        { maxTokens: 50 }
      );
      setTestResult({ success: true, message: 'Connection successful!' });
    } catch (error) {
      setTestResult({ success: false, message: error.message });
    }
    setTesting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a24] rounded-xl border border-gray-700 max-w-lg w-full p-6 animate-fadeIn">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Icons.Settings /> API Settings
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Anthropic API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="sk-ant-..."
            className="w-full bg-[#0f0f17] border border-gray-700 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          <p className="text-xs text-gray-500 mt-2">
            Your API key is stored locally in your browser and never sent to any server except Anthropic.
          </p>
        </div>

        {testResult && (
          <div className={`mb-4 p-3 rounded-lg ${testResult.success ? 'bg-green-900/30 border border-green-700 text-green-400' : 'bg-red-900/30 border border-red-700 text-red-400'}`}>
            {testResult.message}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={handleTest}
            disabled={!apiKey || testing}
            className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            {testing ? <LoadingSpinner size="sm" /> : 'Test Connection'}
          </button>
          <button
            onClick={handleSave}
            disabled={!apiKey}
            className="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition"
          >
            Save Key
          </button>
        </div>

        <div className="mt-6 p-4 bg-[#0f0f17] rounded-lg">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Getting an API Key</h3>
          <ol className="text-sm text-gray-400 space-y-1">
            <li>1. Go to <a href="https://console.anthropic.com" target="_blank" className="text-indigo-400 hover:underline">console.anthropic.com</a></li>
            <li>2. Sign up or log in</li>
            <li>3. Navigate to API Keys</li>
            <li>4. Create a new key and copy it here</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// HEADER COMPONENT
// ============================================================================
function Header({ currentView, onNavigate, streak, onOpenSettings }) {
  const isApiConfigured = ClaudeAPI.isConfigured();

  const tabs = [
    { id: 'case', label: 'New Case', icon: '📝' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'roadmap', label: 'Roadmap', icon: '🗺️' },
    { id: 'library', label: 'Library', icon: '📚' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#12121a] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-lg">💧</div>
          <span className="font-bold text-xl">Watershed</span>
          <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 rounded text-xs font-medium">AI-Powered</span>
        </div>

        <nav className="flex gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === tab.id
                  ? 'bg-indigo-500/20 text-indigo-400'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-amber-400 text-sm">
            🔥 <span className="font-semibold">{streak}</span> day streak
          </div>
          <button
            onClick={onOpenSettings}
            className={`p-2 rounded-lg transition ${isApiConfigured ? 'text-green-400 hover:bg-gray-800' : 'text-amber-400 hover:bg-gray-800 animate-pulse'}`}
            title={isApiConfigured ? 'API Connected' : 'Configure API Key'}
          >
            <Icons.Settings />
          </button>
        </div>
      </div>
    </header>
  );
}

// ============================================================================
// CASE INPUT WITH AI ANALYSIS
// ============================================================================
function CaseInput({ onAnalyze, isAnalyzing }) {
  const [text, setText] = useState('');
  const isApiConfigured = ClaudeAPI.isConfigured();

  const sampleCase = `65 y/o male with PMH of HTN, T2DM (HbA1c 8.2%), and HFrEF (EF 35%) presenting with 3 days of progressive dyspnea on exertion and lower extremity edema.

Patient reports 10 lb weight gain over the past week and increasing orthopnea requiring 3 pillows to sleep. He has been compliant with his home medications including lisinopril 20mg daily, carvedilol 25mg BID, and furosemide 40mg daily. Recently started on Jardiance for diabetes.

On exam: BP 145/92, HR 88, RR 22, SpO2 94% on RA. JVP elevated to 12cm. Bilateral crackles at lung bases. 2+ pitting edema to knees bilaterally.

Labs: BNP 1850 (prev 450), Cr 1.8 (baseline 1.2), K 5.2, Na 134
CXR: Cardiomegaly with bilateral pleural effusions and pulmonary vascular congestion`;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">AI-Powered Case Learning</h1>
        <p className="text-gray-400">Paste a patient case and learn with personalized AI-generated teaching</p>
      </div>

      {!isApiConfigured && (
        <div className="mb-6 p-4 bg-amber-900/30 border border-amber-700 rounded-lg flex items-start gap-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <div className="font-semibold text-amber-400">API Key Required</div>
            <p className="text-sm text-gray-300">Click the settings icon in the header to configure your Anthropic API key for AI-powered features.</p>
          </div>
        </div>
      )}

      <div className="bg-[#1a1a24] rounded-xl border border-gray-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <label className="text-sm font-medium text-gray-300">Patient Case</label>
          <button onClick={() => setText(sampleCase)} className="text-sm text-indigo-400 hover:text-indigo-300 transition">
            Load sample case
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your patient case here... (H&P, progress note, consult, etc.)"
          className="w-full h-64 bg-[#0f0f17] border border-gray-700 rounded-lg p-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500 resize-none"
        />

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {text.length > 0 && `${text.split(/\s+/).filter(Boolean).length} words`}
          </div>
          <button
            onClick={() => text.trim() && onAnalyze(text)}
            disabled={isAnalyzing || !text.trim() || !isApiConfigured}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg font-medium transition-all flex items-center gap-2"
          >
            {isAnalyzing ? (
              <LoadingSpinner size="sm" text="Analyzing with AI..." />
            ) : (
              <>
                <Icons.Sparkles />
                Analyze Case
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-[#1a1a24] rounded-lg p-4 border border-gray-800">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-semibold mb-1">Personalized Questions</h3>
          <p className="text-sm text-gray-400">AI generates questions specific to your case</p>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-4 border border-gray-800">
          <div className="text-2xl mb-2">👨‍⚕️</div>
          <h3 className="font-semibold mb-1">Attending-Style Teaching</h3>
          <p className="text-sm text-gray-400">Learn concepts in context of this patient</p>
        </div>
        <div className="bg-[#1a1a24] rounded-lg p-4 border border-gray-800">
          <div className="text-2xl mb-2">🏥</div>
          <h3 className="font-semibold mb-1">Clinical Simulations</h3>
          <p className="text-sm text-gray-400">Practice decisions with AI feedback</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// AI CHAT INTERFACE
// ============================================================================
function AIChatInterface({ caseText, context, initialPrompt }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (initialPrompt && messages.length === 0) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: 'user', content: text };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemPrompt = `${PROMPTS.TEACHING_EXPLANATION}

PATIENT CASE:
${caseText}

CURRENT CONTEXT: ${context || 'General case discussion'}

Remember to:
- Always relate explanations back to THIS specific patient
- Use clinical pearls and practical tips
- Reference landmark trials when relevant
- Ask follow-up questions to deepen understanding`;

      const response = await ClaudeAPI.call(systemPrompt, text);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}. Please check your API key in settings.`, isError: true }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-[#1a1a24] rounded-xl border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center gap-2 text-indigo-400">
          <Icons.Brain />
          <span className="font-semibold">AI Teaching Assistant</span>
        </div>
        <p className="text-xs text-gray-500 mt-1">Ask questions about this case or request explanations</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <Icons.Sparkles />
            <p className="mt-2">Ask me anything about this case!</p>
            <div className="mt-4 space-y-2">
              <button onClick={() => handleSend("What are the key teaching points from this case?")} className="block w-full text-left px-3 py-2 bg-[#0f0f17] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition">
                "What are the key teaching points?"
              </button>
              <button onClick={() => handleSend("Explain the pathophysiology behind this presentation.")} className="block w-full text-left px-3 py-2 bg-[#0f0f17] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition">
                "Explain the pathophysiology"
              </button>
              <button onClick={() => handleSend("What landmark trials are relevant here?")} className="block w-full text-left px-3 py-2 bg-[#0f0f17] rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition">
                "What trials are relevant?"
              </button>
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 ${
              msg.role === 'user'
                ? 'bg-indigo-600 text-white'
                : msg.isError
                  ? 'bg-red-900/30 border border-red-700 text-red-300'
                  : 'bg-[#0f0f17] text-gray-300'
            }`}>
              <div className="whitespace-pre-wrap text-sm">{msg.content}</div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#0f0f17] rounded-lg p-3">
              <LoadingSpinner size="sm" text="Thinking..." />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a question about this case..."
            className="flex-1 bg-[#0f0f17] border border-gray-700 rounded-lg px-4 py-2 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition"
          >
            <Icons.Send />
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// AI-POWERED QUIZ QUESTION
// ============================================================================
function AIQuizQuestion({ question, caseText, onAnswer, onNext, answered, selectedAnswer, onAskAI }) {
  const [aiExplanation, setAiExplanation] = useState(null);
  const [loadingExplanation, setLoadingExplanation] = useState(false);

  const getAIExplanation = async () => {
    setLoadingExplanation(true);
    try {
      const prompt = `The learner just answered a question about this patient case.

Question: ${question.question}
Their answer: ${question.options[selectedAnswer]}
Correct answer: ${question.options[question.correctIndex]}
They got it ${selectedAnswer === question.correctIndex ? 'CORRECT' : 'WRONG'}.

Provide a detailed, educational explanation that:
1. Explains WHY the correct answer is right
2. Explains WHY the other options are wrong or suboptimal
3. Relates this to the specific patient in the case
4. Includes a memorable clinical pearl
5. Mentions any relevant trials or guidelines

Be encouraging but thorough.`;

      const response = await ClaudeAPI.call(PROMPTS.TEACHING_EXPLANATION + `\n\nPATIENT CASE:\n${caseText}`, prompt);
      setAiExplanation(response);
    } catch (error) {
      setAiExplanation(`Error getting AI explanation: ${error.message}`);
    }
    setLoadingExplanation(false);
  };

  useEffect(() => {
    if (answered && !aiExplanation && ClaudeAPI.isConfigured()) {
      getAIExplanation();
    }
  }, [answered]);

  const categoryIcons = { 'Diagnosis': '🔍', 'Management': '💊', 'Pharmacology': '💉', 'Clinical Reasoning': '🧠' };

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
          {categoryIcons[question.category] || '📚'} {question.category}
          <span className="px-2 py-0.5 bg-indigo-500/30 rounded text-xs">AI Generated</span>
        </span>
      </div>

      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>

      {question.context && (
        <div className="mb-6 p-4 bg-gray-800/50 rounded-lg text-gray-300 text-sm">
          📋 {question.context}
        </div>
      )}

      <div className="space-y-3 mb-6">
        {question.options.map((opt, i) => {
          let btnClass = 'bg-[#1a1a24] border-gray-700 hover:border-indigo-500';
          if (answered) {
            if (i === question.correctIndex) btnClass = 'bg-green-900/30 border-green-500';
            else if (i === selectedAnswer) btnClass = 'bg-red-900/30 border-red-500';
            else btnClass = 'bg-[#1a1a24] border-gray-700 opacity-50';
          }

          return (
            <button
              key={i}
              onClick={() => !answered && onAnswer(i)}
              disabled={answered}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all flex items-start gap-3 ${btnClass}`}
            >
              <span className="flex-1">{opt}</span>
              {answered && i === question.correctIndex && <span className="text-green-400">✓</span>}
              {answered && i === selectedAnswer && i !== question.correctIndex && <span className="text-red-400">✗</span>}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="animate-fadeIn space-y-4">
          <div className={`p-4 rounded-lg ${selectedAnswer === question.correctIndex ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/30 border border-red-700'}`}>
            <div className={`font-semibold mb-2 ${selectedAnswer === question.correctIndex ? 'text-green-400' : 'text-red-400'}`}>
              {selectedAnswer === question.correctIndex ? '✓ Correct!' : '✗ Not quite'}
            </div>
          </div>

          {/* AI Explanation */}
          <div className="p-4 rounded-lg bg-indigo-900/20 border border-indigo-700">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm mb-3">
              <Icons.Sparkles /> AI Teaching Explanation
            </div>
            {loadingExplanation ? (
              <LoadingSpinner size="sm" text="Generating personalized explanation..." />
            ) : aiExplanation ? (
              <div className="text-gray-300 text-sm whitespace-pre-wrap">{aiExplanation}</div>
            ) : (
              <p className="text-gray-400 text-sm">Configure API key to get AI explanations</p>
            )}
          </div>

          {question.keyTakeaway && (
            <div className="p-4 rounded-lg bg-amber-900/30 border border-amber-700">
              <div className="text-amber-400 font-semibold text-sm mb-1">💡 Key Takeaway</div>
              <p className="text-gray-300 text-sm">{question.keyTakeaway}</p>
            </div>
          )}

          <div className="flex gap-3">
            <button onClick={onAskAI} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition flex items-center gap-2">
              <Icons.Brain /> Ask AI More
            </button>
            <button onClick={onNext} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
              Continue →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// AI CLINICAL SIMULATOR
// ============================================================================
function AIClinicalSimulator({ scenario, caseText, onComplete, onBack }) {
  const [step, setStep] = useState(0);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [aiFeedback, setAiFeedback] = useState(null);
  const [loadingFeedback, setLoadingFeedback] = useState(false);

  const currentStep = scenario.steps[step];
  const isComplete = step >= scenario.steps.length;

  const handleChoice = async (index) => {
    if (selectedChoice !== null) return;

    setSelectedChoice(index);
    setLoadingFeedback(true);

    const choice = currentStep.choices[index];

    try {
      const prompt = `SIMULATION STEP: ${currentStep.time}

PATIENT STATUS:
- Vitals: BP ${currentStep.vitals.bp}, HR ${currentStep.vitals.hr}, RR ${currentStep.vitals.rr}, SpO2 ${currentStep.vitals.spo2}
- Exam: ${currentStep.findings}

SITUATION: ${currentStep.narrative}

THE LEARNER CHOSE: "${choice.text}"

This choice is generally considered: ${choice.baseQuality}

Available options were:
${currentStep.choices.map((c, i) => `${i + 1}. ${c.text} (${c.baseQuality})`).join('\n')}

Provide detailed educational feedback on their choice. Explain the clinical reasoning, what would happen to the patient, and what they should learn from this decision.`;

      const response = await ClaudeAPI.call(
        PROMPTS.SIMULATOR_FEEDBACK + `\n\nORIGINAL PATIENT CASE:\n${caseText}`,
        prompt
      );

      // Try to parse JSON, fallback to text
      let feedback;
      try {
        feedback = JSON.parse(response);
      } catch {
        feedback = {
          quality: choice.baseQuality,
          feedback: response,
          outcome: 'See feedback above for patient outcome.',
          teachingPoint: ''
        };
      }

      setAiFeedback(feedback);

      const scoreChange = feedback.quality === 'optimal' ? 10 : feedback.quality === 'suboptimal' ? 3 : -5;
      setScore(prev => prev + scoreChange);
      setHistory(prev => [...prev, { time: currentStep.time, action: choice.text, quality: feedback.quality }]);

    } catch (error) {
      setAiFeedback({
        quality: choice.baseQuality,
        feedback: `Error getting AI feedback: ${error.message}. Based on guidelines, this choice is ${choice.baseQuality}.`,
        outcome: 'Unable to generate detailed outcome.',
        teachingPoint: ''
      });
    }

    setLoadingFeedback(false);
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setAiFeedback(null);
    setStep(prev => prev + 1);
  };

  if (isComplete) {
    const maxScore = scenario.steps.length * 10;
    const percentage = Math.round((Math.max(0, score) / maxScore) * 100);

    return (
      <div className="text-center animate-fadeIn max-w-2xl mx-auto">
        <div className="text-6xl mb-4">{percentage >= 70 ? '🎉' : '📚'}</div>
        <h2 className="text-2xl font-bold mb-2">Simulation Complete!</h2>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="bg-[#1a1a24] p-4 rounded-lg">
            <div className="text-2xl font-bold text-indigo-400">{score}</div>
            <div className="text-xs text-gray-500">Points</div>
          </div>
          <div className="bg-[#1a1a24] p-4 rounded-lg">
            <div className="text-2xl font-bold text-gray-300">{maxScore}</div>
            <div className="text-xs text-gray-500">Maximum</div>
          </div>
          <div className="bg-[#1a1a24] p-4 rounded-lg">
            <div className={`text-2xl font-bold ${percentage >= 70 ? 'text-green-400' : 'text-amber-400'}`}>{percentage}%</div>
            <div className="text-xs text-gray-500">Score</div>
          </div>
        </div>

        <div className="text-left bg-[#1a1a24] rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3">Decision History</h3>
          {history.map((h, i) => (
            <div key={i} className="flex items-start gap-3 mb-2 text-sm">
              <span className={`px-2 py-0.5 rounded text-xs ${
                h.quality === 'optimal' ? 'bg-green-500/20 text-green-400' :
                h.quality === 'suboptimal' ? 'bg-amber-500/20 text-amber-400' :
                'bg-red-500/20 text-red-400'
              }`}>{h.quality}</span>
              <span className="text-gray-400">{h.action}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <button onClick={() => { setStep(0); setScore(0); setHistory([]); }} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
            Try Again
          </button>
          <button onClick={onComplete} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="mb-4">
          <button onClick={onBack} className="text-gray-400 hover:text-white text-sm mb-4 flex items-center gap-2">
            <Icons.ArrowLeft /> Back to Overview
          </button>
          <h2 className="text-xl font-bold">{scenario.title}</h2>
          <p className="text-sm text-gray-400">Step {step + 1} of {scenario.steps.length}</p>
        </div>

        <div className="bg-[#1a1a24] rounded-xl p-6 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300 mb-4">
            🕐 {currentStep.time}
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{currentStep.narrative}</p>

          <div className="grid grid-cols-4 gap-3 mb-6">
            {Object.entries(currentStep.vitals).map(([key, value]) => {
              const isCritical = (key === 'bp' && (parseInt(value) > 160 || parseInt(value) < 90)) ||
                               (key === 'hr' && parseInt(value) > 100) ||
                               (key === 'spo2' && parseInt(value.replace('%', '')) < 92);
              return (
                <div key={key} className="bg-[#0f0f17] p-3 rounded-lg text-center">
                  <div className={`text-lg font-semibold ${isCritical ? 'text-red-400' : ''}`}>{value}</div>
                  <div className="text-xs text-gray-500 uppercase">{key}</div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-[#0f0f17] rounded-lg text-sm text-gray-400">
            <strong className="text-gray-300">Exam:</strong> {currentStep.findings}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-gray-400 mb-3">What do you do?</div>
          <div className="space-y-3">
            {currentStep.choices.map((choice, i) => {
              let btnClass = 'bg-[#1a1a24] border-gray-700 hover:border-indigo-500';
              if (selectedChoice !== null) {
                if (i === selectedChoice) {
                  const q = aiFeedback?.quality || choice.baseQuality;
                  btnClass = q === 'optimal' ? 'bg-green-900/30 border-green-500' :
                            q === 'suboptimal' ? 'bg-amber-900/30 border-amber-500' :
                            'bg-red-900/30 border-red-500';
                } else {
                  btnClass = 'bg-[#1a1a24] border-gray-700 opacity-50';
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleChoice(i)}
                  disabled={selectedChoice !== null}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all ${btnClass}`}
                >
                  {choice.text}
                </button>
              );
            })}
          </div>
        </div>

        {(loadingFeedback || aiFeedback) && (
          <div className="mt-6 p-6 bg-[#1a1a24] rounded-xl animate-fadeIn">
            {loadingFeedback ? (
              <LoadingSpinner text="AI is analyzing your decision..." />
            ) : aiFeedback && (
              <>
                <div className={`font-semibold mb-3 flex items-center gap-2 ${
                  aiFeedback.quality === 'optimal' ? 'text-green-400' :
                  aiFeedback.quality === 'suboptimal' ? 'text-amber-400' :
                  'text-red-400'
                }`}>
                  <Icons.Sparkles />
                  {aiFeedback.quality === 'optimal' ? '✓ Optimal Choice' :
                   aiFeedback.quality === 'suboptimal' ? '⚠️ Suboptimal' :
                   '✗ Poor Choice'}
                </div>
                <div className="text-gray-300 mb-4 whitespace-pre-wrap text-sm">{aiFeedback.feedback}</div>
                {aiFeedback.outcome && (
                  <div className="text-gray-400 mb-4 text-sm"><strong>Outcome:</strong> {aiFeedback.outcome}</div>
                )}
                {aiFeedback.teachingPoint && (
                  <div className="p-3 bg-amber-900/30 border border-amber-700 rounded-lg text-sm text-amber-300">
                    💡 {aiFeedback.teachingPoint}
                  </div>
                )}
                <button onClick={handleNext} className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                  {step < scenario.steps.length - 1 ? 'Continue →' : 'See Results →'}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="bg-[#1a1a24] rounded-xl p-4">
          <div className="text-xs text-gray-500 uppercase mb-2">Performance</div>
          <div className="text-3xl font-bold text-indigo-400">{score}</div>
          <div className="text-sm text-gray-500">Clinical Score</div>
        </div>

        <div className="bg-[#1a1a24] rounded-xl p-4">
          <div className="text-xs text-gray-500 uppercase mb-3">Decision History</div>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {history.length === 0 ? (
              <p className="text-sm text-gray-500">No decisions yet</p>
            ) : (
              history.map((h, i) => (
                <div key={i} className="text-sm">
                  <div className="text-gray-500">{h.time.split(' - ')[0]}</div>
                  <div className={`${
                    h.quality === 'optimal' ? 'text-green-400' :
                    h.quality === 'suboptimal' ? 'text-amber-400' :
                    'text-red-400'
                  }`}>
                    {h.action.substring(0, 40)}...
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PATIENT SIDEBAR
// ============================================================================
function PatientSidebar({ patientData, currentQuestion, totalQuestions }) {
  return (
    <div className="w-80 bg-[#1a1a24] border-r border-gray-800 p-4 overflow-y-auto">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">🏥</span>
          <div>
            <div className="font-bold">{patientData.age}{patientData.sex}</div>
            <div className="text-sm text-gray-400">"{patientData.chiefComplaint}"</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-4">
          {Object.entries(patientData.vitals).map(([key, value]) => (
            <div key={key} className="bg-[#0f0f17] p-2 rounded text-center">
              <div className={`font-semibold ${value !== '--' && ((key === 'bp' && parseInt(value) > 140) || (key === 'hr' && parseInt(value) > 100)) ? 'text-red-400' : ''}`}>
                {value}
              </div>
              <div className="text-xs text-gray-500 uppercase">{key}</div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-500 uppercase mb-2">Key Findings</div>
          <div className="space-y-1">
            {patientData.keyFindings.slice(0, 4).map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span>{f.critical ? '🔴' : '🟡'}</span>
                <span className="text-gray-300">{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {patientData.problems.map((p, i) => (
            <span key={i} className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">{p}</span>
          ))}
        </div>
      </div>

      <div className="p-3 bg-[#0f0f17] rounded-lg">
        <div className="text-xs text-gray-500 uppercase mb-2">Quiz Progress</div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 transition-all" style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }} />
          </div>
          <span className="text-sm text-gray-400">{currentQuestion}/{totalQuestions}</span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// CASE RESULTS WITH AI
// ============================================================================
function CaseResults({ caseText, onNewCase, onUpdateMastery, onQuizAnswer }) {
  const [activeMode, setActiveMode] = useState('overview');
  const [analysis, setAnalysis] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [showChat, setShowChat] = useState(false);

  // Extract patient data for sidebar
  const extractPatientData = (text) => {
    const textLower = text.toLowerCase();
    const ageMatch = text.match(/(\d+)\s*y\/?o/i);
    const bpMatch = text.match(/BP\s*:?\s*(\d+\/\d+)/i);
    const hrMatch = text.match(/HR\s*:?\s*(\d+)/i);
    const rrMatch = text.match(/RR\s*:?\s*(\d+)/i);
    const spo2Match = text.match(/SpO2\s*:?\s*(\d+)/i);

    const keyFindings = [];
    if (textLower.includes('jvp') || textLower.includes('jvd')) keyFindings.push({ text: 'Elevated JVP', critical: true });
    if (textLower.includes('crackles') || textLower.includes('rales')) keyFindings.push({ text: 'Pulmonary crackles', critical: true });
    if (textLower.includes('edema')) keyFindings.push({ text: 'Peripheral edema', critical: false });
    if (textLower.includes('orthopnea')) keyFindings.push({ text: 'Orthopnea', critical: true });
    if (textLower.includes('dyspnea') || textLower.includes('sob')) keyFindings.push({ text: 'Dyspnea', critical: false });

    const problems = [];
    if (textLower.includes('hfref') || textLower.includes('heart failure')) problems.push('HFrEF');
    if (textLower.includes('htn') || textLower.includes('hypertension')) problems.push('HTN');
    if (textLower.includes('t2dm') || textLower.includes('diabetes')) problems.push('T2DM');
    if (textLower.includes('afib') || textLower.includes('atrial fibrillation')) problems.push('AFib');

    return {
      age: ageMatch ? ageMatch[1] : '65',
      sex: textLower.includes('female') || textLower.includes(' f ') ? 'F' : 'M',
      chiefComplaint: keyFindings.length > 0 ? keyFindings[0].text : 'Medical evaluation',
      vitals: {
        bp: bpMatch?.[1] || '--',
        hr: hrMatch?.[1] || '--',
        rr: rrMatch?.[1] || '--',
        spo2: spo2Match?.[1] || '--'
      },
      keyFindings,
      problems
    };
  };

  const patientData = extractPatientData(caseText);

  // Analyze case with AI
  useEffect(() => {
    const analyzeWithAI = async () => {
      setLoading(true);
      setError(null);

      try {
        // Get case analysis
        const analysisResponse = await ClaudeAPI.call(
          PROMPTS.CASE_ANALYSIS,
          `Analyze this patient case:\n\n${caseText}`
        );

        let parsedAnalysis;
        try {
          parsedAnalysis = JSON.parse(analysisResponse);
        } catch {
          parsedAnalysis = { problems: [], keyFindings: [], teachingTopics: [], clinicalDecisions: [] };
        }
        setAnalysis(parsedAnalysis);

        // Generate questions
        const questionsResponse = await ClaudeAPI.call(
          PROMPTS.GENERATE_QUESTIONS,
          `Generate 5 challenging multiple-choice questions for this case:\n\n${caseText}\n\nFocus on: ${parsedAnalysis.teachingTopics?.map(t => t.topic).join(', ') || 'general medicine'}`
        );

        let parsedQuestions;
        try {
          parsedQuestions = JSON.parse(questionsResponse);
          setQuestions(parsedQuestions.questions || []);
        } catch {
          // Fallback questions if AI fails to generate proper JSON
          setQuestions([{
            category: 'Clinical Reasoning',
            question: 'What is the most likely primary diagnosis for this patient?',
            options: ['A. Acute coronary syndrome', 'B. Acute decompensated heart failure', 'C. Pulmonary embolism', 'D. Pneumonia'],
            correctIndex: 1,
            explanation: 'Based on the presentation with dyspnea, edema, elevated JVP, and elevated BNP, this is most consistent with ADHF.',
            keyTakeaway: 'Volume overload signs + elevated BNP = think heart failure'
          }]);
        }

      } catch (err) {
        setError(err.message);
      }

      setLoading(false);
    };

    if (ClaudeAPI.isConfigured()) {
      analyzeWithAI();
    } else {
      setError('Please configure your API key in settings to use AI features.');
      setLoading(false);
    }
  }, [caseText]);

  const handleQuizAnswer = (answerIndex) => {
    const newAnswers = [...quizAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setQuizAnswers(newAnswers);

    const isCorrect = answerIndex === questions[currentQuestion].correctIndex;
    onQuizAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setActiveMode('complete');
    }
  };

  // Find applicable scenarios based on analysis
  const applicableScenarios = Object.values(SIMULATOR_SCENARIOS).filter(s => {
    const caseTextLower = caseText.toLowerCase();
    if (s.id === 'adhf-management' && (caseTextLower.includes('heart failure') || caseTextLower.includes('hfref') || caseTextLower.includes('edema'))) return true;
    if (s.id === 'sepsis-management' && (caseTextLower.includes('sepsis') || caseTextLower.includes('infection') || caseTextLower.includes('fever'))) return true;
    return false;
  });

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-400">AI is analyzing your case...</p>
          <p className="text-sm text-gray-500 mt-2">Generating personalized teaching content</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold mb-2">Error Analyzing Case</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <button onClick={onNewCase} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
          Try Again
        </button>
      </div>
    );
  }

  // Simulator mode
  if (activeMode === 'simulator' && selectedScenario) {
    return (
      <div className="p-8">
        <AIClinicalSimulator
          scenario={selectedScenario}
          caseText={caseText}
          onComplete={() => setActiveMode('overview')}
          onBack={() => setActiveMode('overview')}
        />
      </div>
    );
  }

  // Quiz complete
  if (activeMode === 'complete') {
    const correct = quizAnswers.filter((a, i) => a === questions[i]?.correctIndex).length;
    const percentage = Math.round((correct / questions.length) * 100);

    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={questions.length} totalQuestions={questions.length} />
        <div className="flex-1 p-8 flex items-center justify-center">
          <div className="text-center animate-fadeIn max-w-md">
            <div className="text-6xl mb-4">{percentage >= 70 ? '🎉' : '📚'}</div>
            <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-gray-400 mb-6">{percentage >= 90 ? 'Excellent!' : percentage >= 70 ? 'Great job!' : 'Keep studying!'}</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1a1a24] p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">{correct}</div>
                <div className="text-xs text-gray-500">Correct</div>
              </div>
              <div className="bg-[#1a1a24] p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-400">{questions.length - correct}</div>
                <div className="text-xs text-gray-500">Incorrect</div>
              </div>
              <div className="bg-[#1a1a24] p-4 rounded-lg">
                <div className="text-2xl font-bold text-indigo-400">{percentage}%</div>
                <div className="text-xs text-gray-500">Score</div>
              </div>
            </div>

            <div className="flex justify-center gap-3">
              <button onClick={() => setActiveMode('overview')} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition">
                Back to Overview
              </button>
              <button onClick={onNewCase} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
                New Case
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Questions mode
  if (activeMode === 'questions' && questions.length > 0) {
    return (
      <div className="flex min-h-screen">
        <PatientSidebar patientData={patientData} currentQuestion={currentQuestion + 1} totalQuestions={questions.length} />
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            <div className="text-sm text-gray-400 mb-4">Question {currentQuestion + 1} of {questions.length}</div>
            <AIQuizQuestion
              question={questions[currentQuestion]}
              caseText={caseText}
              onAnswer={handleQuizAnswer}
              onNext={handleNextQuestion}
              answered={quizAnswers[currentQuestion] !== undefined}
              selectedAnswer={quizAnswers[currentQuestion]}
              onAskAI={() => setShowChat(true)}
            />
          </div>
        </div>
        {showChat && (
          <div className="w-96 border-l border-gray-800">
            <div className="p-4">
              <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white mb-4">← Close Chat</button>
              <AIChatInterface caseText={caseText} context={`Question: ${questions[currentQuestion]?.question}`} />
            </div>
          </div>
        )}
      </div>
    );
  }

  // Overview mode
  return (
    <div className="flex min-h-screen">
      <PatientSidebar patientData={patientData} currentQuestion={0} totalQuestions={questions.length} />

      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Icons.Sparkles className="text-indigo-400" />
                AI Learning Hub
              </h1>
              <p className="text-gray-400">Personalized teaching for this case</p>
            </div>
            <button onClick={onNewCase} className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm transition">
              ← New Case
            </button>
          </div>

          {/* AI Analysis Summary */}
          {analysis && (
            <div className="bg-[#1a1a24] rounded-xl p-6 mb-6 border border-gray-700">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Icons.Brain className="text-indigo-400" /> AI Case Analysis
              </h3>

              {analysis.problems && analysis.problems.length > 0 && (
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Identified Problems</div>
                  <div className="flex flex-wrap gap-2">
                    {analysis.problems.map((p, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm ${
                        p.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        p.priority === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-gray-700 text-gray-300'
                      }`}>
                        {p.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {analysis.teachingTopics && analysis.teachingTopics.length > 0 && (
                <div>
                  <div className="text-sm text-gray-400 mb-2">Teaching Topics</div>
                  <div className="space-y-2">
                    {analysis.teachingTopics.slice(0, 3).map((t, i) => (
                      <div key={i} className="p-3 bg-[#0f0f17] rounded-lg">
                        <div className="font-medium text-indigo-300">{t.topic}</div>
                        <div className="text-sm text-gray-400">{t.relevance}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Learning Mode Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div
              onClick={() => questions.length > 0 && setActiveMode('questions')}
              className={`bg-[#1a1a24] rounded-xl p-6 border border-gray-700 ${questions.length > 0 ? 'hover:border-indigo-500 cursor-pointer' : 'opacity-50'} transition group`}
            >
              <div className="text-3xl mb-3">❓</div>
              <h3 className="font-semibold mb-2">AI Quiz</h3>
              <p className="text-sm text-gray-400 mb-4">{questions.length} AI-generated questions specific to this case</p>
              {questions.length > 0 && (
                <div className="text-sm text-indigo-400 group-hover:text-indigo-300">Start Quiz →</div>
              )}
            </div>

            <div
              onClick={() => {
                if (applicableScenarios.length > 0) {
                  setSelectedScenario(applicableScenarios[0]);
                  setActiveMode('simulator');
                }
              }}
              className={`bg-[#1a1a24] rounded-xl p-6 border border-gray-700 ${applicableScenarios.length > 0 ? 'hover:border-purple-500 cursor-pointer' : 'opacity-50'} transition group`}
            >
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="font-semibold mb-2">Clinical Simulator</h3>
              <p className="text-sm text-gray-400 mb-4">
                {applicableScenarios.length > 0
                  ? `${applicableScenarios.length} matching scenario${applicableScenarios.length > 1 ? 's' : ''} with AI feedback`
                  : 'No matching scenarios'}
              </p>
              {applicableScenarios.length > 0 && (
                <div className="text-sm text-purple-400 group-hover:text-purple-300">Start Simulation →</div>
              )}
            </div>

            <div
              onClick={() => setShowChat(true)}
              className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 hover:border-emerald-500 cursor-pointer transition group"
            >
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Ask AI</h3>
              <p className="text-sm text-gray-400 mb-4">Chat with AI about this case for deeper understanding</p>
              <div className="text-sm text-emerald-400 group-hover:text-emerald-300">Open Chat →</div>
            </div>
          </div>

          {/* AI Chat Panel */}
          {showChat && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">AI Teaching Assistant</h3>
                <button onClick={() => setShowChat(false)} className="text-gray-400 hover:text-white text-sm">Hide</button>
              </div>
              <AIChatInterface caseText={caseText} context="General case discussion" />
            </div>
          )}

          {/* Available Scenarios */}
          {applicableScenarios.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Clinical Scenarios</h2>
              <div className="space-y-3">
                {applicableScenarios.map(scenario => (
                  <div
                    key={scenario.id}
                    onClick={() => { setSelectedScenario(scenario); setActiveMode('simulator'); }}
                    className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700 hover:border-purple-500 cursor-pointer transition flex justify-between items-center"
                  >
                    <div>
                      <div className="font-medium">{scenario.title}</div>
                      <div className="text-sm text-gray-400">{scenario.description}</div>
                      <div className="text-xs text-gray-500 mt-1">{scenario.steps.length} decision points • AI-powered feedback</div>
                    </div>
                    <Icons.ChevronRight />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// DASHBOARD
// ============================================================================
function Dashboard({ mastery, library, streak, quizStats, onNavigate }) {
  const masteredCount = Object.values(mastery).filter(v => v >= 3).length;
  const totalTopics = Object.keys(TOPICS || {}).length || 44;
  const quizAccuracy = quizStats.total > 0 ? Math.round((quizStats.correct / quizStats.total) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
        <p className="text-gray-400">Continue your AI-powered medical education</p>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Topics Mastered</div>
          <div className="text-3xl font-bold text-indigo-400">{masteredCount}</div>
          <div className="text-xs text-gray-500">of {totalTopics}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Quiz Accuracy</div>
          <div className="text-3xl font-bold text-emerald-400">{quizAccuracy}%</div>
          <div className="text-xs text-gray-500">{quizStats.correct}/{quizStats.total}</div>
        </div>
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Library Items</div>
          <div className="text-3xl font-bold text-purple-400">{library.length}</div>
          <div className="text-xs text-gray-500">saved</div>
        </div>
        <div className="bg-[#1a1a24] rounded-xl p-5 border border-gray-800">
          <div className="text-sm text-gray-500 mb-2">Study Streak</div>
          <div className="text-3xl font-bold text-amber-400">{streak}</div>
          <div className="text-xs text-gray-500">days</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div onClick={() => onNavigate('case')} className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 hover:border-indigo-500 cursor-pointer transition">
          <div className="text-3xl mb-3">📝</div>
          <h3 className="font-semibold mb-2">Start New Case</h3>
          <p className="text-sm text-gray-400">Paste a patient case and learn with AI-generated questions and teaching</p>
        </div>
        <div onClick={() => onNavigate('roadmap')} className="bg-[#1a1a24] rounded-xl p-6 border border-gray-700 hover:border-emerald-500 cursor-pointer transition">
          <div className="text-3xl mb-3">🗺️</div>
          <h3 className="font-semibold mb-2">Browse Curriculum</h3>
          <p className="text-sm text-gray-400">Explore {totalTopics} topics organized by organ system</p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// ROADMAP
// ============================================================================
function Roadmap({ mastery, onSelectTopic }) {
  const [expandedCats, setExpandedCats] = useState({});

  const curriculum = typeof CURRICULUM !== 'undefined' ? CURRICULUM : {};

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Learning Roadmap</h1>

      <div className="grid gap-4">
        {Object.values(curriculum).map(category => {
          const subcats = Object.values(category.subcategories || {});
          const totalTopics = subcats.reduce((sum, sub) => sum + (sub.topics?.length || 0), 0);
          const masteredTopics = subcats.reduce((sum, sub) =>
            sum + (sub.topics?.filter(t => (mastery[t] || 0) >= 3).length || 0), 0);
          const progress = totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0;

          return (
            <div key={category.id} className="bg-[#1a1a24] rounded-xl border border-gray-700 overflow-hidden">
              <div
                className="p-4 cursor-pointer flex items-center gap-4 hover:bg-gray-800/50 transition"
                onClick={() => setExpandedCats(prev => ({ ...prev, [category.id]: !prev[category.id] }))}
              >
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">{category.name}</div>
                  <div className="text-sm text-gray-500">{totalTopics} topics</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-indigo-400">{progress}%</div>
                  <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <Icons.ChevronDown />
              </div>

              {expandedCats[category.id] && (
                <div className="px-4 pb-4 space-y-2">
                  {subcats.map(sub => (
                    <div key={sub.id} className="bg-[#0f0f17] rounded-lg p-3">
                      <div className="font-medium text-sm mb-2">{sub.name}</div>
                      <div className="space-y-1">
                        {sub.topics?.map(topicId => {
                          const topic = typeof TOPICS !== 'undefined' ? TOPICS[topicId] : null;
                          const topicMastery = mastery[topicId] || 0;
                          return (
                            <div
                              key={topicId}
                              onClick={() => onSelectTopic(topicId)}
                              className="p-2 bg-[#1a1a24] rounded cursor-pointer flex justify-between items-center hover:bg-gray-800 transition text-sm"
                            >
                              <span>{topic?.name || topicId}</span>
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                topicMastery >= 3 ? 'bg-emerald-500/20 text-emerald-400' :
                                topicMastery > 0 ? 'bg-indigo-500/20 text-indigo-400' :
                                'bg-gray-700 text-gray-400'
                              }`}>
                                {topicMastery >= 3 ? 'Mastered' : topicMastery > 0 ? 'In Progress' : 'Not Started'}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================================
// LIBRARY
// ============================================================================
function Library({ library, onRemove }) {
  if (library.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center">
        <div className="text-5xl mb-4">📖</div>
        <h2 className="text-xl font-bold mb-2">No items saved</h2>
        <p className="text-gray-400">Save trials and literature from your learning sessions</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-2">My Library</h1>
      <p className="text-gray-400 mb-6">{library.length} saved items</p>

      <div className="space-y-3">
        {library.map((item, i) => (
          <div key={i} className="bg-[#1a1a24] rounded-lg p-4 border border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium mb-1">{item.title || item.name}</div>
                <p className="text-sm text-gray-400">{item.summary || item.results}</p>
              </div>
              <button onClick={() => onRemove(i)} className="text-gray-500 hover:text-red-400 transition">×</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================
function App() {
  const [mastery, setMastery] = useLocalStorage('watershed-mastery', {});
  const [library, setLibrary] = useLocalStorage('watershed-library', []);
  const [streak, setStreak] = useLocalStorage('watershed-streak', 1);
  const [quizStats, setQuizStats] = useLocalStorage('watershed-quiz-stats', { correct: 0, total: 0 });

  const [currentView, setCurrentView] = useState('case');
  const [caseText, setCaseText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleAnalyze = async (text) => {
    setIsAnalyzing(true);
    setCaseText(text);
    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAnalyzing(false);
    setCurrentView('results');
  };

  const handleNewCase = () => {
    setCurrentView('case');
    setCaseText('');
  };

  const handleUpdateMastery = (topicId, points) => {
    setMastery(prev => ({ ...prev, [topicId]: (prev[topicId] || 0) + points }));
  };

  const handleQuizAnswer = (isCorrect) => {
    setQuizStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
  };

  const handleNavigate = (view) => {
    if (view === 'case') handleNewCase();
    else setCurrentView(view);
  };

  const handleRemoveFromLibrary = (index) => {
    setLibrary(library.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#0f0f17]">
      {currentView !== 'results' && (
        <Header
          currentView={currentView}
          onNavigate={handleNavigate}
          streak={streak}
          onOpenSettings={() => setShowSettings(true)}
        />
      )}

      {currentView === 'case' && (
        <div className="p-8">
          <CaseInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        </div>
      )}

      {currentView === 'results' && (
        <CaseResults
          caseText={caseText}
          onNewCase={handleNewCase}
          onUpdateMastery={handleUpdateMastery}
          onQuizAnswer={handleQuizAnswer}
        />
      )}

      {currentView === 'dashboard' && (
        <Dashboard
          mastery={mastery}
          library={library}
          streak={streak}
          quizStats={quizStats}
          onNavigate={handleNavigate}
        />
      )}

      {currentView === 'roadmap' && (
        <Roadmap mastery={mastery} onSelectTopic={(id) => console.log('Selected:', id)} />
      )}

      {currentView === 'library' && (
        <Library library={library} onRemove={handleRemoveFromLibrary} />
      )}

      <ApiSettingsModal isOpen={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
