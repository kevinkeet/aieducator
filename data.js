// Watershed Data Bundle - 44 topics
const CURRICULUM = {
  "cardiovascular": {
    "id": "cardiovascular",
    "name": "Cardiovascular",
    "icon": "\u2764\ufe0f",
    "description": "Heart and vascular system pathophysiology and management",
    "subcategories": {
      "heart-failure": {
        "id": "heart-failure",
        "name": "Heart Failure",
        "description": "Acute and chronic heart failure syndromes",
        "topics": [
          "hfref",
          "hfpef",
          "acute-hf",
          "cardiogenic-shock"
        ]
      },
      "arrhythmias": {
        "id": "arrhythmias",
        "name": "Arrhythmias",
        "description": "Cardiac rhythm disorders",
        "topics": [
          "afib",
          "vt-vf",
          "syncope"
        ]
      },
      "acs": {
        "id": "acs",
        "name": "Acute Coronary Syndromes",
        "description": "MI and unstable angina",
        "topics": [
          "stemi",
          "nstemi"
        ]
      },
      "hypertension": {
        "id": "hypertension",
        "name": "Hypertension",
        "description": "Blood pressure management",
        "topics": [
          "hypertensive-emergency"
        ]
      }
    }
  },
  "pulmonary": {
    "id": "pulmonary",
    "name": "Pulmonary",
    "icon": "\ud83e\udec1",
    "description": "Respiratory system disorders",
    "subcategories": {
      "obstructive": {
        "id": "obstructive",
        "name": "Obstructive Lung Disease",
        "description": "COPD and asthma",
        "topics": [
          "copd-acute",
          "asthma-acute"
        ]
      },
      "vte": {
        "id": "vte",
        "name": "Venous Thromboembolism",
        "description": "PE and DVT",
        "topics": [
          "pe-diagnosis",
          "pe-treatment",
          "dvt"
        ]
      },
      "respiratory-failure": {
        "id": "respiratory-failure",
        "name": "Respiratory Failure",
        "description": "Acute respiratory failure and ARDS",
        "topics": [
          "ards"
        ]
      }
    }
  },
  "renal": {
    "id": "renal",
    "name": "Renal",
    "icon": "\ud83e\uded8",
    "description": "Kidney disorders and electrolytes",
    "subcategories": {
      "aki": {
        "id": "aki",
        "name": "Acute Kidney Injury",
        "description": "Acute renal failure",
        "topics": [
          "aki-workup"
        ]
      },
      "electrolytes": {
        "id": "electrolytes",
        "name": "Electrolyte Disorders",
        "description": "Na, K abnormalities",
        "topics": [
          "hyponatremia",
          "hyperkalemia"
        ]
      },
      "uti-renal": {
        "id": "uti-renal",
        "name": "Urinary Tract Infections",
        "description": "Cystitis and pyelonephritis",
        "topics": [
          "uti"
        ]
      }
    }
  },
  "endocrine": {
    "id": "endocrine",
    "name": "Endocrine",
    "icon": "\ud83e\udd8b",
    "description": "Hormonal and metabolic disorders",
    "subcategories": {
      "diabetes": {
        "id": "diabetes",
        "name": "Diabetes Mellitus",
        "description": "Type 2 diabetes and emergencies",
        "topics": [
          "t2dm-management",
          "dka-hhs",
          "hypoglycemia"
        ]
      },
      "thyroid": {
        "id": "thyroid",
        "name": "Thyroid Disorders",
        "description": "Hyper and hypothyroidism",
        "topics": [
          "hypothyroid",
          "hyperthyroid"
        ]
      },
      "adrenal": {
        "id": "adrenal",
        "name": "Adrenal Disorders",
        "description": "Adrenal insufficiency",
        "topics": [
          "adrenal-insufficiency"
        ]
      }
    }
  },
  "infectious": {
    "id": "infectious",
    "name": "Infectious Disease",
    "icon": "\ud83e\udda0",
    "description": "Bacterial, viral, and fungal infections",
    "subcategories": {
      "sepsis-syndromes": {
        "id": "sepsis-syndromes",
        "name": "Sepsis",
        "description": "Sepsis and septic shock",
        "topics": [
          "sepsis",
          "septic-shock"
        ]
      },
      "pneumonia": {
        "id": "pneumonia",
        "name": "Pneumonia",
        "description": "Community and hospital acquired",
        "topics": [
          "cap",
          "hap-vap"
        ]
      },
      "skin-soft-tissue": {
        "id": "skin-soft-tissue",
        "name": "Skin & Soft Tissue",
        "description": "Cellulitis and soft tissue infections",
        "topics": [
          "cellulitis"
        ]
      },
      "cns-infections": {
        "id": "cns-infections",
        "name": "CNS Infections",
        "description": "Meningitis and encephalitis",
        "topics": [
          "meningitis"
        ]
      }
    }
  },
  "gi": {
    "id": "gi",
    "name": "Gastroenterology",
    "icon": "\ud83e\udec3",
    "description": "GI and hepatic disorders",
    "subcategories": {
      "bleeding": {
        "id": "bleeding",
        "name": "GI Bleeding",
        "description": "Upper GI hemorrhage",
        "topics": [
          "ugib"
        ]
      },
      "liver": {
        "id": "liver",
        "name": "Liver Disease",
        "description": "Cirrhosis and hepatic failure",
        "topics": [
          "cirrhosis",
          "hepatic-encephalopathy"
        ]
      },
      "pancreas": {
        "id": "pancreas",
        "name": "Pancreatic Disease",
        "description": "Acute pancreatitis",
        "topics": [
          "acute-pancreatitis"
        ]
      }
    }
  },
  "hematology": {
    "id": "hematology",
    "name": "Hematology",
    "icon": "\ud83e\ude78",
    "description": "Blood disorders and anticoagulation",
    "subcategories": {
      "anemia": {
        "id": "anemia",
        "name": "Anemia",
        "description": "Approach to anemia",
        "topics": [
          "anemia-workup"
        ]
      },
      "anticoagulation": {
        "id": "anticoagulation",
        "name": "Anticoagulation",
        "description": "Blood thinners and reversal",
        "topics": [
          "anticoag-reversal"
        ]
      },
      "transfusion": {
        "id": "transfusion",
        "name": "Transfusion Medicine",
        "description": "Blood products and triggers",
        "topics": [
          "transfusion-triggers"
        ]
      }
    }
  },
  "neurology": {
    "id": "neurology",
    "name": "Neurology",
    "icon": "\ud83e\udde0",
    "description": "Neurological emergencies and common conditions",
    "subcategories": {
      "stroke": {
        "id": "stroke",
        "name": "Stroke",
        "description": "Ischemic stroke and TIA",
        "topics": [
          "ischemic-stroke",
          "tia"
        ]
      },
      "altered-mental-status": {
        "id": "altered-mental-status",
        "name": "Altered Mental Status",
        "description": "Delirium and encephalopathy",
        "topics": [
          "delirium",
          "alcohol-withdrawal"
        ]
      }
    }
  },
  "rheumatology": {
    "id": "rheumatology",
    "name": "Rheumatology",
    "icon": "\ud83e\uddb4",
    "description": "Joint and connective tissue disorders",
    "subcategories": {
      "crystal-arthritis": {
        "id": "crystal-arthritis",
        "name": "Crystal Arthritis",
        "description": "Gout and pseudogout",
        "topics": [
          "gout"
        ]
      }
    }
  }
};
const TOPICS = {
  "transfusion-triggers": {
    "id": "transfusion-triggers",
    "name": "Transfusion Triggers & Blood Products",
    "category": "hematology",
    "subcategory": "transfusion",
    "knowledge": [
      "RBC transfusion thresholds",
      "Platelet transfusion indications",
      "FFP and cryoprecipitate use",
      "Massive transfusion protocols"
    ],
    "skills": [
      "Apply restrictive transfusion strategy",
      "Select appropriate blood product",
      "Manage massive hemorrhage",
      "Recognize transfusion reactions"
    ],
    "lesson": {
      "title": "Blood Transfusion: Evidence-Based Practice",
      "sections": [
        {
          "type": "intro",
          "content": "Blood transfusion is one of the most common hospital interventions. Evidence strongly supports restrictive transfusion strategies\u2014liberal transfusion doesn't improve outcomes and may cause harm. Understanding when to transfuse, what product to give, and how to manage transfusion reactions is essential."
        },
        {
          "type": "concept",
          "title": "RBC Transfusion Thresholds",
          "content": "**Restrictive strategy (Hgb <7 g/dL):**\n\u2022 Most hospitalized patients\n\u2022 GI bleeding (upper and lower)\n\u2022 Sepsis and critical illness\n\u2022 Postoperative patients\n\n**Liberal strategy (Hgb <8-9 g/dL) may be considered:**\n\u2022 Acute coronary syndrome\n\u2022 Symptomatic anemia\n\u2022 Active bleeding with hemodynamic instability\n\n**Key evidence:**\n\u2022 TRICC, TRACS, TRIGGER trials all support restrictive strategy\n\u2022 Liberal transfusion increases mortality, infections, and pulmonary edema"
        },
        {
          "type": "concept",
          "title": "Platelet Transfusion",
          "content": "**Prophylactic transfusion thresholds:**\n\u2022 <10,000/\u03bcL: Most patients (prevent spontaneous bleeding)\n\u2022 <20,000/\u03bcL: Fever, infection, or minor bleeding\n\u2022 <50,000/\u03bcL: Invasive procedure, lumbar puncture\n\u2022 <100,000/\u03bcL: Neurosurgery, ocular surgery\n\n**Therapeutic transfusion:**\n\u2022 Active bleeding with thrombocytopenia\n\u2022 Platelet dysfunction (uremia, medications)\n\n**Contraindicated/caution:**\n\u2022 TTP (unless life-threatening bleeding)\n\u2022 HIT (use alternative if bleeding)\n\u2022 ITP (usually refractory; transfuse only for severe bleeding)"
        },
        {
          "type": "concept",
          "title": "Fresh Frozen Plasma (FFP)",
          "content": "**Indications:**\n\u2022 Coagulopathy with active bleeding\n\u2022 Warfarin reversal (if PCC unavailable)\n\u2022 Massive transfusion protocol\n\u2022 TTP (therapeutic plasma exchange)\n\u2022 Liver disease with bleeding\n\n**NOT indicated:**\n\u2022 Volume expansion\n\u2022 Nutritional support\n\u2022 Mildly elevated INR without bleeding\n\u2022 Prophylaxis before procedures with minimal bleeding risk\n\n**Dosing:** 10-15 mL/kg (typically 4 units for an adult)"
        },
        {
          "type": "pearl",
          "title": "The TRICC Trial Legacy",
          "content": "The TRICC trial (1999) randomized ICU patients to restrictive (Hgb 7) vs liberal (Hgb 10) transfusion. Mortality was similar overall but LOWER in restrictive group for less sick patients. This trial transformed practice. Multiple subsequent trials confirmed: restrictive transfusion is safe and may be safer than liberal transfusion."
        },
        {
          "type": "alert",
          "title": "Massive Transfusion Protocol",
          "content": "**Activate MTP if:**\n\u2022 Massive hemorrhage expected (>10 units RBC/24h)\n\u2022 Hemorrhagic shock with ongoing bleeding\n\u2022 Trauma with critical bleeding\n\n**MTP components (balanced resuscitation):**\n\u2022 RBC:FFP:Platelets in 1:1:1 ratio\n\u2022 Early use of tranexamic acid (TXA) within 3 hours\n\u2022 Calcium replacement (citrate in blood products chelates calcium)\n\u2022 Avoid hypothermia and acidosis\n\n**Monitor:** \n\u2022 Coagulation studies (often delayed\u2014treat empirically)\n\u2022 Calcium levels\n\u2022 Temperature"
        }
      ],
      "article": {
        "title": "Transfusion Medicine: Less Is More",
        "readTime": "12 min",
        "content": "<h2>The Restrictive Revolution</h2>\n<p>For decades, the dogma was to maintain hemoglobin above 10 g/dL, the so-called '10/30 rule.' The TRICC trial and subsequent studies overturned this. We now know that transfusing to higher hemoglobin doesn't improve outcomes and may increase risks: volume overload, transfusion reactions, immunomodulation, and infection.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Each unit of RBCs carries risks: TACO (volume overload), TRALI (lung injury), febrile reactions, allergic reactions, and infection transmission. Transfusion also has immunomodulatory effects that may increase infection rates. Every transfusion decision should weigh these risks against benefits.\n</div>\n\n<h2>Special Situations</h2>\n<p><strong>Acute coronary syndrome:</strong> The REALITY trial suggested possible benefit from liberal transfusion (Hgb <10) in ACS, but evidence is mixed. Current guidelines suggest considering transfusion at Hgb <8 in ACS, especially with active ischemia.</p>\n<p><strong>TBI:</strong> The brain is sensitive to hypoxia. Some centers use Hgb threshold of 9-10 for severe TBI, though evidence is limited.</p>\n<p><strong>Chronic transfusion-dependent anemia:</strong> Maintain Hgb 9-10 for quality of life. Different context than acute illness.</p>\n\n<h2>Cryoprecipitate</h2>\n<p>Cryoprecipitate contains fibrinogen, factor VIII, vWF, and factor XIII. Main indication is hypofibrinogenemia (<100-150 mg/dL) with bleeding. Also used in massive transfusion when fibrinogen is depleted. One pool (10 units) raises fibrinogen by 50-100 mg/dL.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Tranexamic acid (TXA) should be given early in trauma with significant hemorrhage\u2014CRASH-2 showed mortality benefit when given within 3 hours of injury. It's also beneficial in postpartum hemorrhage and GI bleeding. No benefit (and possible harm) if given after 3 hours.\n</div>"
      }
    },
    "quizzes": [
      {
        "question": "A stable hospitalized patient without cardiac disease has hemoglobin of 6.8 g/dL. How many units of RBCs should be transfused?",
        "options": [
          "None - recheck in 24 hours",
          "1 unit, then reassess",
          "2 units",
          "3 units"
        ],
        "correct": 1,
        "explanation": "For stable patients, transfuse one unit at a time and reassess. The goal is to get above the threshold (Hgb 7), not to a specific target. Single-unit transfusion reduces unnecessary transfusion while achieving adequate hemoglobin. One unit raises Hgb by approximately 1 g/dL."
      },
      {
        "question": "A patient with sepsis has hemoglobin 7.2 g/dL and is hemodynamically stable. Based on current evidence, what is the recommended transfusion approach?",
        "options": [
          "Transfuse to Hgb >10 g/dL",
          "Transfuse to Hgb >9 g/dL",
          "No transfusion indicated",
          "Transfuse to Hgb >8 g/dL"
        ],
        "correct": 2,
        "explanation": "The TRISS trial specifically studied sepsis patients and found restrictive (Hgb 7) and liberal (Hgb 9) strategies had similar outcomes. Hemoglobin 7.2 in a stable sepsis patient is above the threshold; no transfusion is indicated. Restrictive transfusion is the evidence-based approach."
      },
      {
        "question": "What platelet threshold should trigger prophylactic transfusion in a stable patient with thrombocytopenia?",
        "options": [
          "<50,000/\u03bcL",
          "<30,000/\u03bcL",
          "<20,000/\u03bcL",
          "<10,000/\u03bcL"
        ],
        "correct": 3,
        "explanation": "Prophylactic platelet transfusion is generally indicated at <10,000/\u03bcL in stable patients to prevent spontaneous bleeding. Higher thresholds (20,000, 50,000, 100,000) are used for specific situations: fever/infection, invasive procedures, and neurosurgery respectively."
      },
      {
        "question": "In a massive transfusion protocol, what is the recommended ratio of RBC:FFP:Platelets?",
        "options": [
          "3:1:1",
          "2:1:1",
          "1:1:1",
          "1:2:2"
        ],
        "correct": 2,
        "explanation": "Balanced resuscitation with 1:1:1 ratio (RBC:FFP:Platelets) is recommended in massive transfusion. The PROPPR trial showed this 'whole blood' approach reduces death from exsanguination in the first 24 hours compared to less balanced ratios."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "TRICC Trial",
        "year": "1999",
        "summary": "Restrictive transfusion (Hgb 7) was as safe as liberal (Hgb 10) in ICU patients. Landmark trial establishing restrictive strategy.",
        "concepts": [
          "transfusion",
          "threshold"
        ]
      },
      {
        "type": "trial",
        "title": "PROPPR Trial",
        "year": "2015",
        "summary": "1:1:1 ratio of blood products in trauma reduced early death from exsanguination compared to 1:1:2.",
        "concepts": [
          "transfusion",
          "massive"
        ]
      },
      {
        "type": "trial",
        "title": "CRASH-2",
        "year": "2010",
        "summary": "Tranexamic acid reduced mortality in trauma patients when given within 3 hours of injury.",
        "concepts": [
          "transfusion",
          "txa"
        ]
      }
    ]
  },
  "uti": {
    "id": "uti",
    "name": "Urinary Tract Infections",
    "category": "infectious",
    "subcategory": "urinary",
    "knowledge": [
      "Uncomplicated vs complicated UTI",
      "Empiric antibiotic selection",
      "Pyelonephritis recognition",
      "Catheter-associated UTI management"
    ],
    "skills": [
      "Distinguish UTI from asymptomatic bacteriuria",
      "Select appropriate antibiotics",
      "Recognize complicated UTI",
      "Manage CAUTI"
    ],
    "lesson": {
      "title": "Urinary Tract Infections: Diagnosis and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Urinary tract infections are among the most common bacterial infections. Uncomplicated cystitis in young women can be treated empirically. Complicated UTIs (men, anatomic abnormalities, catheters, pregnancy) require broader coverage and longer courses. Pyelonephritis involves the upper tract and often requires IV antibiotics. The key challenge is distinguishing true UTI from asymptomatic bacteriuria, which should NOT be treated."
        },
        {
          "type": "concept",
          "title": "Classification",
          "content": "**Uncomplicated cystitis:**\n\u2022 Young, healthy, non-pregnant women\n\u2022 No structural abnormalities\n\u2022 Short course treatment (3-7 days)\n\n**Complicated UTI:**\n\u2022 Men\n\u2022 Pregnancy\n\u2022 Structural/functional abnormality\n\u2022 Immunocompromise\n\u2022 Diabetes\n\u2022 Catheter-associated\n\u2022 Recent instrumentation\n\n**Pyelonephritis:**\n\u2022 Upper tract infection (kidney)\n\u2022 Fever, flank pain, CVA tenderness\n\u2022 Systemic symptoms\n\u2022 May require IV antibiotics"
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Cystitis (lower tract):**\n\u2022 Dysuria (painful urination)\n\u2022 Frequency, urgency\n\u2022 Suprapubic pain\n\u2022 Hematuria\n\u2022 NO fever or systemic symptoms\n\n**Pyelonephritis (upper tract):**\n\u2022 Fever (often high)\n\u2022 Flank pain, CVA tenderness\n\u2022 Nausea, vomiting\n\u2022 May have lower tract symptoms too\n\u2022 Systemic toxicity possible\n\n**Elderly/catheterized:**\n\u2022 Atypical presentations common\n\u2022 Altered mental status may be only sign\n\u2022 Bacteriuria alone is NOT UTI"
        },
        {
          "type": "concept",
          "title": "Empiric Antibiotic Selection",
          "content": "**Uncomplicated cystitis:**\n\u2022 Nitrofurantoin 100mg BID \u00d7 5 days (first-line)\n\u2022 TMP-SMX DS BID \u00d7 3 days (if local resistance <20%)\n\u2022 Fosfomycin 3g \u00d7 1 dose\n\u2022 Avoid fluoroquinolones (save for serious infections)\n\n**Complicated UTI / mild pyelonephritis (outpatient):**\n\u2022 Fluoroquinolone (ciprofloxacin 500mg BID \u00d7 7 days)\n\u2022 TMP-SMX if susceptible \u00d7 7-14 days\n\n**Severe pyelonephritis / complicated (inpatient):**\n\u2022 Ceftriaxone 1g IV daily\n\u2022 Fluoroquinolone IV\n\u2022 Add ampicillin for Enterococcus if suspected\n\u2022 Total 10-14 days"
        },
        {
          "type": "pearl",
          "title": "Asymptomatic Bacteriuria: Don't Treat!",
          "content": "Asymptomatic bacteriuria (positive culture without symptoms) is common in elderly, diabetics, and catheterized patients. Treating it does NOT prevent symptomatic UTI and promotes resistance. Only treat asymptomatic bacteriuria in: pregnant women and patients about to undergo urologic procedures. Cloudy or malodorous urine alone is NOT an indication to treat."
        },
        {
          "type": "alert",
          "title": "Catheter-Associated UTI (CAUTI)",
          "content": "**Definition:**\n\u2022 Catheter present >2 days AND\n\u2022 Symptoms (fever, suprapubic pain, CVA tenderness, altered mental status) AND\n\u2022 Positive culture (\u226510\u00b3 CFU/mL)\n\n**Management:**\n\u2022 Remove or replace catheter if possible\n\u2022 Obtain culture from new catheter\n\u2022 Empiric antibiotics based on local resistance\n\u2022 Duration: 7 days if prompt response, 10-14 if delayed\n\n**Prevention:**\n\u2022 Remove catheters as soon as possible\n\u2022 Avoid catheterization when alternatives exist\n\u2022 Daily review of catheter necessity"
        }
      ],
      "article": {
        "title": "UTI: Evidence-Based Approach",
        "readTime": "12 min",
        "content": "<h2>The Resistance Problem</h2>\n<p>E. coli causes 80% of UTIs, followed by other Enterobacteriaceae and Enterococcus. Resistance to TMP-SMX and fluoroquinolones is increasing. Check local antibiogram\u2014if TMP-SMX resistance >20%, it shouldn't be first-line empiric therapy. Nitrofurantoin resistance remains low, making it a good choice for uncomplicated cystitis.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Fluoroquinolones should be reserved for complicated UTIs and pyelonephritis, not uncomplicated cystitis. Their overuse drives resistance. The FDA warns about serious side effects (tendinopathy, neuropathy, aortic aneurysm). Use nitrofurantoin or TMP-SMX for simple cystitis.\n</div>\n\n<h2>When to Image</h2>\n<p>Most UTIs don't need imaging. Consider CT or ultrasound for: pyelonephritis not responding to 48-72 hours of appropriate antibiotics (abscess? obstruction?), recurrent pyelonephritis, atypical organisms (Proteus, urea-splitting organisms suggest stones), or suspected structural abnormality. Men with first UTI should have post-void residual checked.</p>\n\n<h2>UTI in Men</h2>\n<p>UTIs in men are always considered complicated. Prostatitis should be suspected. Treatment duration is longer (7-14 days for cystitis, 2-4 weeks for prostatitis). Fluoroquinolones penetrate prostate well. Recurrent UTI in men warrants evaluation for obstruction (BPH), residual urine, or chronic prostatitis.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Phone or quick clinic-based diagnosis of cystitis in young women with classic symptoms (dysuria + frequency without vaginal symptoms) is supported by guidelines. The probability of UTI exceeds 90% with these symptoms. Empiric treatment without culture is appropriate.\n</div>\n\n<h2>Recurrent UTI Prevention</h2>\n<p>Recurrent UTI (\u22652 in 6 months or \u22653 in 12 months) is common in women. Non-antibiotic prevention: increase fluid intake, post-coital voiding, vaginal estrogen (postmenopausal). Antibiotic prophylaxis options: continuous low-dose, post-coital, or self-start at symptom onset. Cranberry products have inconsistent evidence.</p>"
      }
    },
    "quizzes": [
      {
        "question": "An 85-year-old nursing home resident with dementia has a urine culture showing 100,000 CFU/mL E. coli but no symptoms. What is the most appropriate management?",
        "options": [
          "Treat with nitrofurantoin \u00d7 5 days",
          "Treat with ciprofloxacin \u00d7 7 days",
          "No antibiotic treatment",
          "Repeat culture in 1 week"
        ],
        "correct": 2,
        "explanation": "This is asymptomatic bacteriuria, which should NOT be treated in most patients. Treating asymptomatic bacteriuria does not prevent symptomatic UTI and promotes antibiotic resistance. The only exceptions are pregnancy and planned urologic procedures."
      },
      {
        "question": "What is the first-line antibiotic for uncomplicated cystitis in a young healthy woman?",
        "options": [
          "Ciprofloxacin",
          "Nitrofurantoin",
          "Ceftriaxone",
          "Amoxicillin"
        ],
        "correct": 1,
        "explanation": "Nitrofurantoin 100mg BID \u00d7 5 days is first-line for uncomplicated cystitis. It has excellent urinary concentration, low resistance rates, and is well-tolerated. Fluoroquinolones should be reserved for complicated infections to prevent resistance."
      },
      {
        "question": "A patient with pyelonephritis has not improved after 72 hours of appropriate IV antibiotics. What is the next step?",
        "options": [
          "Continue same antibiotics for 2 more weeks",
          "Switch to oral antibiotics",
          "CT scan to evaluate for abscess or obstruction",
          "Discharge home"
        ],
        "correct": 2,
        "explanation": "Pyelonephritis should show improvement within 48-72 hours. Failure to respond suggests a complication: perinephric abscess, urinary obstruction (stone, stricture), or resistant organism. CT imaging is indicated to identify drainable collections or correctable obstruction."
      },
      {
        "question": "Which patient with bacteriuria SHOULD receive antibiotic treatment?",
        "options": [
          "Elderly woman with cloudy urine but no symptoms",
          "Catheterized patient with bacteriuria but no fever",
          "Pregnant woman with asymptomatic bacteriuria",
          "Diabetic with bacteriuria but no urinary symptoms"
        ],
        "correct": 2,
        "explanation": "Pregnant women with asymptomatic bacteriuria should be treated because untreated bacteriuria in pregnancy increases risk of pyelonephritis and adverse fetal outcomes. The other scenarios describe asymptomatic bacteriuria that should not be treated."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "IDSA UTI Guidelines",
        "year": "2010",
        "summary": "Evidence-based guidelines for uncomplicated cystitis and pyelonephritis, emphasizing nitrofurantoin and TMP-SMX over fluoroquinolones.",
        "concepts": [
          "uti",
          "antibiotics"
        ]
      },
      {
        "type": "guideline",
        "title": "IDSA CAUTI Guidelines",
        "year": "2010",
        "summary": "Guidelines for diagnosis and management of catheter-associated UTI, emphasizing catheter removal and symptom requirement.",
        "concepts": [
          "uti",
          "cauti"
        ]
      },
      {
        "type": "guideline",
        "title": "Asymptomatic Bacteriuria Guidelines",
        "year": "2019",
        "summary": "Updated recommendations against treating asymptomatic bacteriuria in most populations, with limited exceptions.",
        "concepts": [
          "uti",
          "bacteriuria"
        ]
      }
    ]
  },
  "septic-shock": {
    "id": "septic-shock",
    "name": "Septic Shock",
    "category": "infectious",
    "subcategory": "sepsis",
    "knowledge": [
      "Septic shock definition",
      "Early resuscitation principles",
      "Vasopressor selection",
      "Source control importance"
    ],
    "skills": [
      "Recognize septic shock",
      "Implement fluid resuscitation",
      "Titrate vasopressors",
      "Prioritize source control"
    ],
    "lesson": {
      "title": "Septic Shock: Recognition and Resuscitation",
      "sections": [
        {
          "type": "intro",
          "content": "Septic shock is sepsis with circulatory failure requiring vasopressors to maintain MAP \u226565 mmHg despite adequate fluid resuscitation, with lactate >2 mmol/L. Mortality exceeds 40%. Management focuses on early antibiotics, source control, fluid resuscitation, and vasopressor support. The Surviving Sepsis Campaign provides evidence-based bundles for systematic management."
        },
        {
          "type": "concept",
          "title": "Definitions",
          "content": "**Sepsis (Sepsis-3):**\n\u2022 Life-threatening organ dysfunction from dysregulated host response to infection\n\u2022 SOFA score increase \u22652 points\n\n**Septic shock:**\n\u2022 Sepsis PLUS\n\u2022 Vasopressors needed to maintain MAP \u226565 mmHg\n\u2022 Lactate >2 mmol/L despite adequate fluid resuscitation\n\u2022 Mortality ~40%\n\n**qSOFA (quick bedside screen):**\n\u2022 Respiratory rate \u226522\n\u2022 Altered mentation\n\u2022 Systolic BP \u2264100 mmHg\n\u2022 (\u22652 criteria suggests sepsis)"
        },
        {
          "type": "concept",
          "title": "1-Hour Bundle",
          "content": "**Start within 1 hour of sepsis recognition:**\n\n1. **Measure lactate** (remeasure if >2)\n2. **Obtain blood cultures** before antibiotics\n3. **Administer broad-spectrum antibiotics**\n4. **Begin fluid resuscitation** (30 mL/kg crystalloid for hypotension or lactate \u22654)\n5. **Start vasopressors** if hypotensive during or after fluid resuscitation (target MAP \u226565)\n\n**Remember:** Each hour of antibiotic delay increases mortality by ~7%."
        },
        {
          "type": "concept",
          "title": "Vasopressor Selection",
          "content": "**First-line: Norepinephrine**\n\u2022 Alpha > beta activity\n\u2022 Preferred for septic shock (increases SVR with minimal chronotropic effect)\n\u2022 Target MAP \u226565 mmHg\n\n**Second-line: Vasopressin**\n\u2022 Add at 0.03 units/min (fixed dose)\n\u2022 Catecholamine-sparing effect\n\u2022 Add when norepinephrine dose is rising\n\n**Third-line: Epinephrine**\n\u2022 If refractory to norepinephrine + vasopressin\n\u2022 Consider if cardiac dysfunction suspected\n\n**Avoid dopamine** (except bradycardia with low risk of tachyarrhythmia)"
        },
        {
          "type": "pearl",
          "title": "Lactate as a Guide",
          "content": "Lactate reflects tissue hypoperfusion. Initial lactate >4 mmol/L triggers aggressive resuscitation. Serial lactate measurements guide response to therapy\u2014target lactate normalization or >10% decrease every 2 hours. Persistent elevated lactate despite resuscitation suggests ongoing shock, inadequate source control, or mesenteric ischemia. Don't stop at one lactate!"
        },
        {
          "type": "alert",
          "title": "Source Control",
          "content": "**Identify and control the source:**\n\u2022 Abscess drainage\n\u2022 Infected line removal\n\u2022 Bowel perforation repair\n\u2022 Necrotizing fasciitis debridement\n\u2022 Obstructed biliary/urinary tract decompression\n\n**Timing:**\n\u2022 Source control within 6-12 hours when feasible\n\u2022 Some sources (necrotizing fasciitis, bowel perforation) need emergent intervention\n\u2022 Antibiotics alone cannot cure undrained collections\n\n**Common missed sources:** Sacral decubitus ulcer, infected hardware, Clostridium difficile colitis, endocarditis"
        }
      ],
      "article": {
        "title": "Septic Shock: What the Trials Teach Us",
        "readTime": "14 min",
        "content": "<h2>The Fluid Debate</h2>\n<p>The 30 mL/kg fluid bolus is guideline-recommended but increasingly questioned. The CLOVERS and CLASSIC trials suggest that restrictive fluid strategies may be safe. Current approach: give initial fluids rapidly, then reassess frequently. Use dynamic measures (passive leg raise, pulse pressure variation) rather than CVP to guide ongoing fluid decisions.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Fluid responsiveness is not the same as fluid need. Many patients will respond to fluids but still be harmed by excessive volume. Assess perfusion (lactate, capillary refill, urine output) and use dynamic measures to guide resuscitation.\n</div>\n\n<h2>Steroids in Septic Shock</h2>\n<p>The ADRENAL and APROCCHSS trials inform steroid use. Hydrocortisone 200 mg/day (50 mg q6h or 200 mg continuous infusion) is recommended for patients with refractory shock (high/escalating vasopressor doses). It doesn't reduce mortality but may shorten shock duration. Don't delay for cortisol testing.</p>\n\n<h2>MAP Target</h2>\n<p>MAP \u226565 mmHg is standard. The SEPSISPAM trial found no benefit to targeting MAP 80-85 vs 65-70 in most patients. However, patients with chronic hypertension may have fewer renal events with higher targets. Individualize: look at urine output, lactate clearance, and mental status, not just a number.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Capillary refill time (CRT) is making a comeback. The ANDROMEDA-SHOCK trial showed CRT-guided resuscitation may be superior to lactate-guided resuscitation. Normal CRT is <3 seconds. This simple bedside test helps assess tissue perfusion.\n</div>\n\n<h2>Antibiotic Timing</h2>\n<p>Every hour of antibiotic delay in septic shock increases mortality. Ideally, give antibiotics within 1 hour of recognition (sepsis) or immediately upon recognition (septic shock). Get cultures first if possible, but NEVER delay antibiotics for cultures. Wrong antibiotic is worse than delayed antibiotic\u2014ensure adequate coverage based on suspected source.</p>"
      }
    },
    "quizzes": [
      {
        "question": "Which vasopressor is first-line for septic shock?",
        "options": [
          "Dopamine",
          "Epinephrine",
          "Norepinephrine",
          "Phenylephrine"
        ],
        "correct": 2,
        "explanation": "Norepinephrine is first-line for septic shock per Surviving Sepsis Guidelines. It has predominantly alpha-adrenergic activity with some beta activity, providing vasoconstriction without excessive tachycardia. Dopamine is associated with more arrhythmias. Vasopressin is added as second-line agent."
      },
      {
        "question": "What defines septic shock according to Sepsis-3 criteria?",
        "options": [
          "Temperature >38.5\u00b0C with positive blood cultures",
          "Sepsis requiring vasopressors for MAP \u226565 with lactate >2 despite adequate fluids",
          "Any infection with systolic BP <90 mmHg",
          "SIRS criteria plus suspected infection"
        ],
        "correct": 1,
        "explanation": "Septic shock (Sepsis-3) is defined as sepsis with circulatory failure requiring vasopressors to maintain MAP \u226565 mmHg AND lactate >2 mmol/L despite adequate fluid resuscitation. This subset has mortality ~40%."
      },
      {
        "question": "What is the recommended initial fluid bolus for septic shock?",
        "options": [
          "10 mL/kg over 6 hours",
          "30 mL/kg crystalloid",
          "500 mL albumin",
          "1 unit PRBCs"
        ],
        "correct": 1,
        "explanation": "The Surviving Sepsis Guidelines recommend 30 mL/kg crystalloid for patients with hypotension or lactate \u22654 mmol/L. This should be given rapidly (within 1-3 hours). Reassessment after initial bolus guides further fluid decisions."
      },
      {
        "question": "How often should lactate be remeasured in septic shock?",
        "options": [
          "Only once at presentation",
          "Every 2-4 hours until normalizing",
          "Daily",
          "Only if patient deteriorates"
        ],
        "correct": 1,
        "explanation": "Serial lactate measurements (every 2-4 hours) guide resuscitation. Target is lactate normalization or >10% decrease per measurement. Persistently elevated or rising lactate suggests inadequate resuscitation, ongoing shock, or uncontrolled source."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "Surviving Sepsis Campaign 2021",
        "year": "2021",
        "summary": "Updated guidelines emphasizing 1-hour bundle, norepinephrine as first-line vasopressor, and early antibiotics.",
        "concepts": [
          "sepsis",
          "resuscitation"
        ]
      },
      {
        "type": "trial",
        "title": "CLOVERS Trial",
        "year": "2023",
        "summary": "Restrictive fluid strategy did not result in worse outcomes compared to liberal strategy in early sepsis resuscitation.",
        "concepts": [
          "sepsis",
          "fluids"
        ]
      },
      {
        "type": "trial",
        "title": "ANDROMEDA-SHOCK",
        "year": "2019",
        "summary": "Capillary refill-guided resuscitation may reduce organ dysfunction compared to lactate-guided resuscitation in septic shock.",
        "concepts": [
          "sepsis",
          "resuscitation"
        ]
      }
    ]
  },
  "copd-acute": {
    "id": "copd-acute",
    "name": "COPD Exacerbation",
    "category": "pulmonary",
    "subcategory": "obstructive",
    "knowledge": [
      "Exacerbation triggers",
      "Antibiotic indications",
      "Steroid dosing and duration",
      "NIV indications and contraindications"
    ],
    "skills": [
      "Assess exacerbation severity",
      "Initiate appropriate bronchodilator therapy",
      "Determine need for NIV",
      "Manage hypercapnic respiratory failure"
    ],
    "lesson": {
      "title": "COPD Exacerbation: Acute Management",
      "sections": [
        {
          "type": "intro",
          "content": "COPD exacerbations are defined as acute worsening of respiratory symptoms requiring additional therapy. They accelerate lung function decline, increase mortality risk, and account for significant healthcare costs. Prompt, evidence-based treatment can shorten recovery and prevent complications."
        },
        {
          "type": "concept",
          "title": "Triggers and Causes",
          "content": "**Infectious (70-80% of exacerbations):**\n\u2022 Viral (50-70%): Rhinovirus, influenza, RSV, parainfluenza\n\u2022 Bacterial (30-50%): H. influenzae, M. catarrhalis, S. pneumoniae\n\u2022 P. aeruginosa: Consider in severe COPD, frequent exacerbations, recent hospitalization\n\n**Non-infectious:**\n\u2022 Air pollution, weather changes\n\u2022 Medication non-adherence\n\u2022 Pulmonary embolism (consider if atypical presentation)\n\u2022 Heart failure exacerbation (common comorbidity)"
        },
        {
          "type": "concept",
          "title": "Severity Assessment",
          "content": "**Mild:** Treated with short-acting bronchodilators only\n\n**Moderate:** Requires bronchodilators PLUS antibiotics and/or systemic corticosteroids\n\n**Severe:** Requires hospitalization or ED visit; may have respiratory failure\n\n**Key assessment parameters:**\n\u2022 Baseline functional status and FEV1\n\u2022 Vital signs (especially respiratory rate, SpO2)\n\u2022 Use of accessory muscles, ability to speak\n\u2022 Mental status changes (suggests hypercapnia)\n\u2022 ABG if concern for respiratory failure"
        },
        {
          "type": "concept",
          "title": "Treatment Framework",
          "content": "**Bronchodilators:**\n\u2022 SABA (albuterol) via nebulizer or MDI with spacer\n\u2022 Add SAMA (ipratropium) for synergistic effect\n\u2022 Increase frequency during exacerbation (q2-4h or continuous)\n\n**Systemic Corticosteroids:**\n\u2022 Prednisone 40mg daily \u00d7 5 days (REDUCE trial)\n\u2022 IV methylprednisolone if unable to take PO\n\u2022 Longer courses NOT more effective\n\n**Antibiotics (when indicated):**\n\u2022 Increased dyspnea + increased sputum purulence\n\u2022 Mechanical ventilation requirement\n\u2022 Azithromycin, doxycycline, or respiratory fluoroquinolone"
        },
        {
          "type": "pearl",
          "title": "The 5-Day Steroid Course",
          "content": "The REDUCE trial showed that 5 days of prednisone is non-inferior to 14 days for COPD exacerbation outcomes, with fewer steroid-related side effects. There's no need to taper after a 5-day course. Longer is NOT better!"
        },
        {
          "type": "concept",
          "title": "Non-Invasive Ventilation",
          "content": "**Indications for NIV (BiPAP):**\n\u2022 Respiratory acidosis (pH <7.35, PaCO2 >45)\n\u2022 Severe dyspnea with accessory muscle use\n\u2022 Persistent hypoxemia despite supplemental O2\n\n**Contraindications:**\n\u2022 Respiratory arrest, unable to protect airway\n\u2022 Hemodynamic instability\n\u2022 Facial trauma/surgery\n\u2022 Uncooperative patient\n\u2022 Copious secretions\n\n**NIV reduces:**\n\u2022 Intubation rate\n\u2022 Mortality\n\u2022 ICU length of stay"
        },
        {
          "type": "alert",
          "title": "Oxygen Targets in COPD",
          "content": "**Target SpO2 88-92% in COPD patients**\n\nHigh-flow oxygen can worsen hypercapnia through:\n\u2022 Haldane effect (O2 displaces CO2 from hemoglobin)\n\u2022 V/Q mismatch (loss of hypoxic vasoconstriction)\n\u2022 Reduced hypoxic respiratory drive (minor contributor)\n\n**Always check ABG if:**\n\u2022 SpO2 doesn't improve appropriately\n\u2022 Patient becomes drowsy or confused\n\u2022 Concern for CO2 retention"
        }
      ],
      "article": {
        "title": "COPD Exacerbation: Evidence-Based Management",
        "readTime": "12 min",
        "content": "<h2>The Burden of Exacerbations</h2>\n<p>COPD exacerbations are not just acute events\u2014they have lasting consequences. Each exacerbation accelerates the decline in lung function and increases the risk of future exacerbations. Frequent exacerbators (\u22652 per year) have worse quality of life, faster FEV1 decline, and higher mortality.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Insight:</strong> The best predictor of future exacerbations is a history of prior exacerbations. Patients with frequent exacerbations need intensified maintenance therapy, not just treatment of acute episodes.\n</div>\n\n<h2>Bronchodilator Therapy</h2>\n<p>Short-acting bronchodilators remain the cornerstone of exacerbation treatment. Combining a SABA (albuterol) with a SAMA (ipratropium) provides additive bronchodilation through different mechanisms\u2014beta-2 agonism and muscarinic antagonism.</p>\n<p>Delivery method matters less than technique. Nebulizers are often used in severe exacerbations because they require less patient coordination, but MDI with spacer is equally effective in patients who can use it properly.</p>\n\n<h2>Systemic Corticosteroids: Less Is More</h2>\n<p>The evidence supports shorter steroid courses than traditionally used. The REDUCE trial randomized patients to 5 days versus 14 days of prednisone 40mg daily. There was no difference in time to next exacerbation, but the 5-day group had lower cumulative steroid exposure.</p>\n<p>Steroids work by reducing airway inflammation and edema. They improve FEV1, reduce treatment failure, and shorten hospital stay. But prolonged courses increase hyperglycemia, infection risk, and myopathy without additional benefit.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Prednisone 40mg \u00d7 5 days. No taper needed. This should be the standard prescription for COPD exacerbations.\n</div>\n\n<h2>When to Give Antibiotics</h2>\n<p>Not all exacerbations require antibiotics. The classic indication is the presence of increased dyspnea, increased sputum volume, AND increased sputum purulence (Anthonisen criteria). In practice, most hospitalized patients receive antibiotics because they're sick enough to warrant them.</p>\n<p>Choice of antibiotic should consider local resistance patterns. Typical options include azithromycin (convenient, anti-inflammatory properties), doxycycline, amoxicillin-clavulanate, or respiratory fluoroquinolones (reserve for more severe cases or treatment failure).</p>\n\n<h2>Non-Invasive Ventilation</h2>\n<p>NIV is one of the most evidence-based interventions in medicine. Multiple RCTs show that BiPAP in acute hypercapnic respiratory failure reduces intubation, mortality, and ICU stay. Start early\u2014don't wait until the patient is moribund.</p>\n<p>Typical starting settings: IPAP 10-12 cm H2O, EPAP 4-5 cm H2O. Titrate to comfort and ABG improvement. Target pH normalization rather than specific CO2 goals.</p>"
      },
      "podcast": {
        "title": "COPD Exacerbations with Dr. Williams, Pulmonologist",
        "duration": "11:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Williams, how do you approach a patient with COPD exacerbation?"
          },
          {
            "speaker": "Dr. Williams",
            "text": "First, I assess severity. Is this someone I can treat as an outpatient, or do they need admission? I look at their baseline, vital signs, mental status, and whether they're tiring out. Then I start treatment while doing the assessment."
          },
          {
            "speaker": "Host",
            "text": "What's your bronchodilator approach?"
          },
          {
            "speaker": "Dr. Williams",
            "text": "Albuterol-ipratropium nebulizers, frequently. Every 20 minutes in severe cases, then spread out to every 4-6 hours as they improve. The combination is more effective than either alone."
          },
          {
            "speaker": "Host",
            "text": "How long do you give steroids?"
          },
          {
            "speaker": "Dr. Williams",
            "text": "Five days. The REDUCE trial settled this\u20145 days is as good as 14 days with fewer side effects. I write for prednisone 40mg daily for 5 days, no taper. Simple and effective."
          },
          {
            "speaker": "Host",
            "text": "What about antibiotics?"
          },
          {
            "speaker": "Dr. Williams",
            "text": "If they have purulent sputum or are sick enough to be admitted, I give antibiotics. Azithromycin is my go-to\u2014it's easy, has some anti-inflammatory effect, and covers the usual pathogens. If they've been hospitalized recently or have very severe COPD, I think about Pseudomonas coverage."
          },
          {
            "speaker": "Host",
            "text": "When do you start BiPAP?"
          },
          {
            "speaker": "Dr. Williams",
            "text": "Don't wait too long\u2014that's my main advice. If the pH is below 7.35 with elevated CO2, or they're working hard to breathe with accessory muscle use, BiPAP can save them from intubation. The evidence is strong. Start it early, titrate to comfort, and check an ABG in an hour or two."
          },
          {
            "speaker": "Host",
            "text": "Any oxygen pearls?"
          },
          {
            "speaker": "Dr. Williams",
            "text": "Target 88-92% saturation. Don't blast them with high-flow oxygen\u2014you can worsen CO2 retention. If they're not improving or getting drowsy despite treatment, check a blood gas. CO2 narcosis is real and sneaky."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "What is the recommended duration of systemic corticosteroids for a COPD exacerbation?",
        "options": [
          "3 days",
          "5 days",
          "10 days",
          "14 days"
        ],
        "correct": 1,
        "explanation": "The REDUCE trial demonstrated that 5 days of prednisone 40mg daily is non-inferior to 14 days for COPD exacerbation outcomes. Shorter courses reduce cumulative steroid exposure and side effects without sacrificing efficacy. No taper is needed after a 5-day course."
      },
      {
        "question": "A COPD patient presents with pH 7.28, PaCO2 65, PaO2 55 on 2L nasal cannula. What is the best next step?",
        "options": [
          "Increase oxygen to 6L nasal cannula",
          "Initiate non-invasive ventilation (BiPAP)",
          "Immediate intubation",
          "IV methylprednisolone 125mg"
        ],
        "correct": 1,
        "explanation": "This patient has acute hypercapnic respiratory failure (respiratory acidosis with elevated CO2). NIV (BiPAP) is the intervention of choice, with strong evidence showing reduced intubation rates and mortality. Increasing oxygen alone won't address the ventilatory failure and may worsen hypercapnia. Intubation is reserved for NIV failure."
      },
      {
        "question": "What is the target SpO2 range for oxygen therapy in COPD exacerbation?",
        "options": [
          "94-98%",
          "92-96%",
          "88-92%",
          "85-88%"
        ],
        "correct": 2,
        "explanation": "Target SpO2 88-92% in COPD patients. Higher oxygen targets can worsen hypercapnia through the Haldane effect, V/Q mismatch from loss of hypoxic vasoconstriction, and (to a lesser extent) reduced respiratory drive. The BTS guideline emphasizes this conservative oxygen target for COPD."
      },
      {
        "question": "Which factor is the strongest predictor of future COPD exacerbations?",
        "options": [
          "FEV1 < 50% predicted",
          "Current smoking status",
          "History of prior exacerbations",
          "Age > 65 years"
        ],
        "correct": 2,
        "explanation": "The single strongest predictor of future exacerbations is a history of prior exacerbations. Patients who exacerbate frequently tend to continue doing so. This 'frequent exacerbator' phenotype should prompt intensification of maintenance therapy (LAMA, LAMA/LABA, or triple therapy) to prevent future events."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "REDUCE Trial",
        "year": "2013",
        "summary": "5 days of systemic corticosteroids non-inferior to 14 days for COPD exacerbation outcomes. Established shorter steroid courses as standard.",
        "concepts": [
          "copd",
          "steroids"
        ]
      },
      {
        "type": "guideline",
        "title": "GOLD 2024 Report",
        "year": "2024",
        "summary": "Global strategy for diagnosis, management, and prevention of COPD. Updated classification and treatment algorithms.",
        "concepts": [
          "copd",
          "guidelines"
        ]
      },
      {
        "type": "trial",
        "title": "Cochrane NIV Review",
        "year": "2017",
        "summary": "NIV reduces mortality (RR 0.52), intubation (RR 0.36), and treatment failure in acute hypercapnic respiratory failure from COPD.",
        "concepts": [
          "copd",
          "niv"
        ]
      }
    ]
  },
  "anticoag-reversal": {
    "id": "anticoag-reversal",
    "name": "Anticoagulation Reversal",
    "category": "hematology",
    "subcategory": "anticoagulation",
    "knowledge": [
      "Reversal agents by anticoagulant",
      "PCC vs FFP dosing",
      "DOAC-specific reversal",
      "Timing of anticoagulation restart"
    ],
    "skills": [
      "Select appropriate reversal agent",
      "Dose PCC correctly",
      "Manage DOAC-related bleeding",
      "Balance thrombotic vs bleeding risk"
    ],
    "lesson": {
      "title": "Anticoagulation Reversal: What to Give When",
      "sections": [
        {
          "type": "intro",
          "content": "Anticoagulation reversal is needed for life-threatening bleeding or urgent surgery. The approach differs dramatically by anticoagulant: warfarin has well-established reversal with vitamin K and PCC, while DOAC reversal is evolving with specific antidotes now available. Key principles: reverse appropriately, but also plan for when to restart anticoagulation."
        },
        {
          "type": "concept",
          "title": "Warfarin Reversal",
          "content": "**Vitamin K (Phytonadione):**\n\u2022 IV: 5-10mg over 20-30 minutes (risk of anaphylactoid reaction)\n\u2022 Takes 6-12 hours for full effect\n\u2022 Oral vitamin K also effective, just slower\n\n**Prothrombin Complex Concentrate (PCC):**\n\u2022 4-factor PCC: Contains II, VII, IX, X + Protein C/S\n\u2022 Dosing by INR: \n  - INR 2-4: 25 units/kg\n  - INR 4-6: 35 units/kg\n  - INR >6: 50 units/kg\n\u2022 Effect within 15-30 minutes\n\u2022 Max dose typically 5000 units\n\n**Fresh Frozen Plasma:**\n\u2022 Only if PCC unavailable\n\u2022 15-20 mL/kg needed\n\u2022 Volume overload risk, slower to prepare"
        },
        {
          "type": "concept",
          "title": "DOAC Reversal",
          "content": "**Dabigatran (direct thrombin inhibitor):**\n\u2022 Idarucizumab (Praxbind) 5g IV\n\u2022 Complete reversal within minutes\n\u2022 Dialyzable (dabigatran is renally cleared)\n\n**Factor Xa inhibitors (rivaroxaban, apixaban, edoxaban):**\n\u2022 Andexanet alfa (Andexxa) if available\n  - Low dose: 400mg bolus then 480mg infusion (apixaban \u22645mg, rivaroxaban \u226410mg, or >8h since last dose)\n  - High dose: 800mg bolus then 960mg infusion (higher doses or <8h)\n\u2022 4-factor PCC 50 units/kg if andexanet unavailable\n\u2022 Not dialyzable"
        },
        {
          "type": "concept",
          "title": "Heparin Reversal",
          "content": "**Unfractionated heparin:**\n\u2022 Protamine sulfate: 1mg per 100 units of UFH given in past 2-3 hours\n\u2022 Max 50mg per dose\n\u2022 Give slowly (risk of hypotension, anaphylaxis)\n\n**LMWH (enoxaparin):**\n\u2022 Protamine partially reverses (60-80%)\n\u2022 1mg protamine per 1mg enoxaparin if <8 hours\n\u2022 0.5mg protamine per 1mg if 8-12 hours\n\u2022 Limited efficacy after 12 hours\n\n**Fondaparinux:** No effective reversal agent; consider activated factor VII (rFVIIa) or PCC"
        },
        {
          "type": "pearl",
          "title": "PCC vs FFP",
          "content": "PCC is vastly superior to FFP for warfarin reversal: faster onset, smaller volume, no need for thawing/cross-matching. The INCH trial showed PCC normalized INR in 62% vs 10% with FFP at 3 hours. Use FFP only if PCC is unavailable or for volume resuscitation in massive hemorrhage."
        },
        {
          "type": "alert",
          "title": "When to Restart Anticoagulation",
          "content": "**After bleeding controlled:**\n\u2022 Low thrombotic risk (VTE >3 months ago): 7-14 days\n\u2022 Moderate risk (recent VTE, mechanical valve): 3-7 days\n\u2022 High risk (VTE <2 weeks, recent stroke, LVAD): 1-3 days\n\n**After intracranial hemorrhage:**\n\u2022 Most controversial\n\u2022 Generally restart 4-8 weeks if high thrombotic risk\n\u2022 Shared decision-making essential\n\n**Key point:** Untreated AF has ~5%/year stroke risk. Reversal for bleeding saves the patient today, but not restarting may cause a stroke tomorrow."
        }
      ],
      "article": {
        "title": "Anticoagulation Reversal: A Practical Guide",
        "readTime": "12 min",
        "content": "<h2>The Reversal Decision</h2>\n<p>Not all bleeding requires reversal. Minor bleeding (epistaxis, small hematoma) can often be managed with local measures while continuing anticoagulation. Major bleeding\u2014intracranial hemorrhage, hemodynamic instability, critical site bleeding\u2014requires rapid reversal. The middle ground (GI bleeding, large hematoma) requires clinical judgment.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The goal of reversal isn't necessarily normalizing lab values\u2014it's achieving hemostasis. In DOAC-related bleeding, anti-Xa levels may not correlate well with bleeding risk, and treatment decisions should be clinical, not laboratory-driven.\n</div>\n\n<h2>4-Factor vs 3-Factor PCC</h2>\n<p>4-factor PCC (Kcentra, Beriplex) contains factors II, VII, IX, X plus protein C and S. 3-factor PCC (Bebulin, Profilnine) lacks adequate factor VII. 4-factor PCC is preferred for warfarin reversal and is the only PCC recommended for DOAC reversal. The factor VII content matters for complete hemostasis.</p>\n\n<h2>Andexanet Alfa: The Evidence</h2>\n<p>The ANNEXA-4 trial showed andexanet reduced anti-Xa activity by 92% in patients with Xa inhibitor-related major bleeding. However, 12-hour hemostatic efficacy was 82%\u2014not perfect. Additionally, thrombotic events occurred in 10% of patients at 30 days, raising concerns about prothrombotic rebound. Use with caution, and don't over-reverse.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> For DOAC-related bleeding when specific antidotes aren't available, 4-factor PCC 50 units/kg is reasonable. Activated charcoal can reduce DOAC absorption if given within 2-4 hours of ingestion. Tranexamic acid may be helpful for mucosal bleeding.\n</div>\n\n<h2>Special Situations</h2>\n<p><strong>Intracranial hemorrhage:</strong> Reverse immediately regardless of anticoagulant. Time is brain\u2014every minute of ongoing bleeding worsens outcomes. Target INR <1.5 for warfarin; give specific reversal for DOACs.</p>\n<p><strong>Pre-operative:</strong> For urgent surgery, reverse warfarin with PCC (faster than vitamin K alone). For DOACs, idarucizumab or andexanet if available; otherwise PCC and proceed if surgery can't wait.</p>\n<p><strong>Over-anticoagulation without bleeding:</strong> For warfarin with INR >10 but no bleeding, oral vitamin K 2.5-5mg and hold warfarin. No need for PCC. For DOACs, simply hold and supportive care.</p>"
      },
      "podcast": {
        "title": "Anticoag Reversal with Dr. Hemato",
        "duration": "10:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Hemato, a patient on warfarin comes in with GI bleeding and INR of 8. What's your approach?"
          },
          {
            "speaker": "Dr. Hemato",
            "text": "First, is this life-threatening bleeding? If hypotensive, hematochezia with dropping hemoglobin\u2014I give PCC immediately. If it's more controlled melena with stable hemodynamics, I start with IV vitamin K and supportive care. I don't automatically reach for PCC just because the INR is high."
          },
          {
            "speaker": "Host",
            "text": "When do you use FFP versus PCC?"
          },
          {
            "speaker": "Dr. Hemato",
            "text": "PCC is always preferred if available. It's faster, smaller volume, more effective. The only time I use FFP is if there's no PCC in the hospital or if I need volume resuscitation anyway in massive hemorrhage. FFP alone is really suboptimal for reversal."
          },
          {
            "speaker": "Host",
            "text": "What about DOAC reversal?"
          },
          {
            "speaker": "Dr. Hemato",
            "text": "Dabigatran is easy\u2014idarucizumab, 5 grams IV. Done. For Xa inhibitors, it's more complex. If we have andexanet, I use it for major bleeding. If not, PCC 50 units per kilogram. Neither is perfect, but both help."
          },
          {
            "speaker": "Host",
            "text": "Any concerns about andexanet?"
          },
          {
            "speaker": "Dr. Hemato",
            "text": "It's expensive and has a concerning thrombosis rate\u2014about 10% at 30 days. I wonder if some of that is rebound from over-reversal. The key is we don't know the right dose or duration. I use it for truly life-threatening bleeding but not minor bleeding."
          },
          {
            "speaker": "Host",
            "text": "When do you restart anticoagulation?"
          },
          {
            "speaker": "Dr. Hemato",
            "text": "This is where risk-benefit gets real. A patient with mechanical mitral valve needs anticoagulation back quickly\u2014maybe 48-72 hours if bleeding is controlled. Someone with low-risk AF can wait a week. For ICH, it's case by case, usually waiting at least 4 weeks. I always involve the primary team and patient in these decisions."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient on warfarin with INR 5.8 presents with intracranial hemorrhage. What is the most appropriate reversal strategy?",
        "options": [
          "IV vitamin K alone and recheck INR in 6 hours",
          "FFP 15 mL/kg",
          "4-factor PCC 35 units/kg + IV vitamin K",
          "Hold warfarin and observe"
        ],
        "correct": 2,
        "explanation": "ICH on warfarin requires immediate, complete reversal. 4-factor PCC provides rapid reversal (within 15-30 minutes). Vitamin K is also given for sustained effect (PCC factors are consumed). FFP is inferior to PCC and takes too long. Observation alone is inappropriate for life-threatening bleeding."
      },
      {
        "question": "A patient on rivaroxaban 20mg daily presents with life-threatening GI bleeding. Andexanet alfa is not available. What is the recommended reversal?",
        "options": [
          "Idarucizumab 5g IV",
          "4-factor PCC 50 units/kg",
          "Vitamin K 10mg IV",
          "Protamine 50mg IV"
        ],
        "correct": 1,
        "explanation": "For Xa inhibitor bleeding without andexanet, 4-factor PCC 50 units/kg is recommended. Idarucizumab is specific for dabigatran (direct thrombin inhibitor), not Xa inhibitors. Vitamin K doesn't affect DOACs. Protamine reverses heparin, not Xa inhibitors."
      },
      {
        "question": "Protamine is used to reverse which anticoagulant?",
        "options": [
          "Warfarin",
          "Dabigatran",
          "Unfractionated heparin",
          "Rivaroxaban"
        ],
        "correct": 2,
        "explanation": "Protamine reverses unfractionated heparin by binding to heparin molecules. It also partially reverses LMWH (about 60-80%) but has no effect on fondaparinux, warfarin, or DOACs. Dosing is 1mg protamine per 100 units of heparin given recently, maximum 50mg."
      },
      {
        "question": "After reversing anticoagulation for major bleeding in a patient with mechanical mitral valve, when should anticoagulation be restarted?",
        "options": [
          "Never - bleeding risk too high",
          "1-3 days after bleeding controlled",
          "7-14 days",
          "After 6 weeks"
        ],
        "correct": 1,
        "explanation": "Mechanical heart valves carry very high thrombotic risk (especially mitral position). Once bleeding is controlled, anticoagulation should be restarted within 1-3 days. The thrombotic risk of not anticoagulating exceeds the rebleeding risk. Waiting 7-14 days or longer risks catastrophic valve thrombosis."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ACCP Antithrombotic Guidelines",
        "year": "2021",
        "summary": "Guidelines on reversal of anticoagulation including PCC dosing for warfarin and emerging DOAC reversal strategies.",
        "concepts": [
          "anticoagulation",
          "reversal"
        ]
      },
      {
        "type": "trial",
        "title": "ANNEXA-4",
        "year": "2019",
        "summary": "Andexanet alfa reduced anti-Xa activity and achieved hemostatic efficacy in 82% of patients with Xa inhibitor-related major bleeding.",
        "concepts": [
          "doac",
          "reversal"
        ]
      },
      {
        "type": "trial",
        "title": "INCH Trial",
        "year": "2015",
        "summary": "4-factor PCC superior to FFP for warfarin reversal in ICH, achieving INR normalization in 62% vs 10% at 3 hours.",
        "concepts": [
          "warfarin",
          "pcc"
        ]
      }
    ]
  },
  "nstemi": {
    "id": "nstemi",
    "name": "NSTEMI Management",
    "category": "cardiovascular",
    "subcategory": "acs",
    "knowledge": [
      "Risk stratification tools",
      "Invasive vs conservative strategy",
      "Antiplatelet selection",
      "Timing of catheterization"
    ],
    "skills": [
      "Calculate TIMI and GRACE scores",
      "Determine invasive timing",
      "Manage high-risk features",
      "Coordinate care transitions"
    ],
    "lesson": {
      "title": "NSTEMI: Risk-Stratified Management",
      "sections": [
        {
          "type": "intro",
          "content": "Non-ST-elevation MI represents partial coronary occlusion or microembolization causing myocardial necrosis. Unlike STEMI, there's time for risk stratification to guide timing and approach. The key decision: who needs early invasive strategy (within 24 hours) versus a more conservative approach?"
        },
        {
          "type": "concept",
          "title": "Diagnosis",
          "content": "**NSTEMI requires:**\n\u2022 Clinical presentation consistent with ACS\n\u2022 Troponin elevation (rise and/or fall pattern)\n\u2022 No ST-elevation on ECG\n\n**ECG findings may include:**\n\u2022 ST depression (especially dynamic)\n\u2022 T-wave inversions\n\u2022 Transient ST elevation\n\u2022 Non-specific changes\n\u2022 Normal ECG (doesn't rule out NSTEMI!)"
        },
        {
          "type": "concept",
          "title": "Risk Stratification",
          "content": "**TIMI Risk Score (0-7 points):**\n\u2022 Age \u226565 (1)\n\u2022 \u22653 CAD risk factors (1)\n\u2022 Known CAD (stenosis \u226550%) (1)\n\u2022 ASA use in past 7 days (1)\n\u2022 Severe angina (\u22652 episodes in 24h) (1)\n\u2022 ST changes \u22650.5mm (1)\n\u2022 Positive cardiac marker (1)\n\n**GRACE Score:** More accurate for mortality prediction\nIncludes: age, HR, SBP, creatinine, Killip class, cardiac arrest, ST deviation, elevated markers\n\n**High-risk features:**\n\u2022 Hemodynamic instability\n\u2022 Recurrent/ongoing ischemia\n\u2022 Life-threatening arrhythmias\n\u2022 Mechanical complications"
        },
        {
          "type": "concept",
          "title": "Timing of Invasive Strategy",
          "content": "**Immediate (<2 hours):** Refractory angina, hemodynamic/electrical instability\n\n**Early (within 24 hours):**\n\u2022 GRACE score >140\n\u2022 Troponin rise/fall consistent with MI\n\u2022 Dynamic ST/T-wave changes\n\n**Delayed invasive (25-72 hours):**\n\u2022 GRACE score <140\n\u2022 No high-risk features\n\u2022 Lower risk patients\n\n**Conservative (ischemia-guided):**\n\u2022 Low-risk patients\n\u2022 Patient preference\n\u2022 High bleeding/procedural risk"
        },
        {
          "type": "pearl",
          "title": "The Type 2 MI Trap",
          "content": "Not all troponin elevations are Type 1 MI (plaque rupture). Type 2 MI occurs when oxygen supply-demand mismatch causes myocardial injury without plaque rupture\u2014think tachycardia, anemia, hypoxia, hypotension. These patients don't benefit from antiplatelet intensification or early catheterization. Treat the underlying cause!"
        },
        {
          "type": "alert",
          "title": "Anticoagulation Bridge",
          "content": "All NSTEMI patients need anticoagulation:\n\n**Options:**\n\u2022 UFH (easily reversible)\n\u2022 Enoxaparin (preferred if not going to cath soon)\n\u2022 Fondaparinux (lowest bleeding, but add UFH at cath)\n\u2022 Bivalirudin (in cath lab)\n\n**Critical:** If starting enoxaparin, patient should continue through cath (don't switch to UFH\u2014increases bleeding). If UFH started, continue UFH."
        }
      ],
      "article": {
        "title": "NSTEMI: The Art of Risk Stratification",
        "readTime": "12 min",
        "content": "<h2>The Spectrum of Non-ST-Elevation ACS</h2>\n<p>NSTEMI and unstable angina exist on a spectrum. The distinguishing feature is troponin: if elevated with a rise/fall pattern, it's NSTEMI. With high-sensitivity troponin assays, we're detecting smaller infarcts than ever before.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> High-sensitivity troponin has transformed ACS diagnosis. While it catches more true MIs, it also detects chronic troponin elevations (CKD, HF) and type 2 MI. Clinical context is essential\u2014the troponin answers 'is there myocardial injury?' not 'is there plaque rupture?'\n</div>\n\n<h2>Risk Scores in Practice</h2>\n<p>The TIMI score is simple and widely used\u2014count up risk factors to get a number from 0-7. Higher scores predict higher rates of death, MI, and need for urgent revascularization. TIMI \u22653 generally warrants early invasive approach.</p>\n<p>The GRACE score is more complex but more accurate. It's particularly good at predicting in-hospital and 6-month mortality. A GRACE score >140 identifies patients who benefit from early (within 24 hour) catheterization.</p>\n\n<h2>The ISCHEMIA Trial Era</h2>\n<p>ISCHEMIA (2020) showed that in stable CAD with moderate-severe ischemia, an initial invasive strategy didn't reduce death or MI compared to conservative management. But NSTEMI is different\u2014these patients have acute plaque disruption, and guidelines still recommend invasive strategy for most.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> ISCHEMIA enrolled stable CAD patients, not ACS. Don't use it to justify conservative management of true NSTEMI. However, it reinforces that revascularization is primarily for symptom control in stable disease.\n</div>\n\n<h2>Dual Antiplatelet Selection</h2>\n<p>Aspirin is universal. The P2Y12 inhibitor choice matters:</p>\n<p><strong>Ticagrelor:</strong> PLATO showed superiority over clopidogrel in ACS. Faster onset, more potent, reversible. But causes dyspnea and must be dosed twice daily.</p>\n<p><strong>Prasugrel:</strong> TRITON-TIMI 38 showed superiority over clopidogrel but with more bleeding. Contraindicated with prior stroke. Best reserved for PCI-destined patients.</p>\n<p><strong>Clopidogrel:</strong> Still appropriate for patients on anticoagulation (to minimize bleeding), prior stroke, or other bleeding concerns.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A 68-year-old with hypertension and diabetes presents with chest pain. Troponin is elevated. ECG shows 1mm ST depression in V4-V6. TIMI score is 5. GRACE score is 162. When should catheterization occur?",
        "options": [
          "Within 2 hours",
          "Within 24 hours",
          "Within 72 hours",
          "Ischemia-guided approach"
        ],
        "correct": 1,
        "explanation": "GRACE score >140 indicates high risk and warrants early invasive strategy within 24 hours. The patient isn't hemodynamically unstable (which would warrant immediate cath), but the high GRACE score, diabetes, and ST changes all support early intervention. Delaying to 72 hours or taking a conservative approach would be inappropriate for this risk level."
      },
      {
        "question": "A patient with NSTEMI was started on enoxaparin in the ED. They're now going to the cath lab. What anticoagulation strategy is recommended?",
        "options": [
          "Stop enoxaparin, give UFH bolus in cath lab",
          "Continue enoxaparin, give supplemental dose if >8h from last dose",
          "Switch to bivalirudin",
          "Hold all anticoagulation for procedure"
        ],
        "correct": 1,
        "explanation": "Don't switch from enoxaparin to UFH\u2014SYNERGY showed this 'crossing over' increases bleeding. If the patient has been on enoxaparin and last dose was <8 hours ago, continue without supplementation. If 8-12 hours, give supplemental 0.3 mg/kg IV. Only switch strategies if last dose was >12 hours ago."
      },
      {
        "question": "A 75-year-old with atrial fibrillation on apixaban presents with NSTEMI. Which P2Y12 inhibitor is preferred?",
        "options": [
          "Prasugrel 60mg load, then 10mg daily",
          "Ticagrelor 180mg load, then 90mg BID",
          "Clopidogrel 600mg load, then 75mg daily",
          "No P2Y12 inhibitor\u2014aspirin and apixaban sufficient"
        ],
        "correct": 2,
        "explanation": "For patients on oral anticoagulation, clopidogrel is preferred to minimize bleeding risk. Triple therapy (OAC + aspirin + P2Y12) has high bleeding rates; using the least potent P2Y12 inhibitor reduces this risk. Prasugrel and ticagrelor have been associated with increased bleeding in triple therapy. The patient still needs DAPT, just with clopidogrel rather than more potent agents."
      },
      {
        "question": "Which finding most suggests Type 2 MI rather than Type 1 MI in a patient with elevated troponin?",
        "options": [
          "ST depression on ECG",
          "Troponin level >10x upper limit of normal",
          "Rapid atrial fibrillation with rate 145 and hemoglobin 7 g/dL",
          "Recurrent chest pain at rest"
        ],
        "correct": 2,
        "explanation": "Type 2 MI occurs from supply-demand mismatch without plaque rupture. Rapid AF (increased demand) with severe anemia (decreased supply) is a classic setup. These patients need rate control and transfusion, not antiplatelet intensification or catheterization. ST depression, high troponin, and rest pain can occur in either type\u2014clinical context determines the diagnosis."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2021 ACC/AHA NSTE-ACS Guidelines",
        "year": "2021",
        "summary": "Updated guidelines emphasizing risk stratification, timing of invasive strategy, and contemporary antiplatelet/anticoagulation selection.",
        "concepts": [
          "nstemi",
          "risk-stratification"
        ]
      },
      {
        "type": "trial",
        "title": "PLATO",
        "year": "2009",
        "summary": "Ticagrelor superior to clopidogrel in ACS, reducing CV death, MI, and stroke without significant increase in major bleeding.",
        "concepts": [
          "acs",
          "antiplatelet"
        ]
      },
      {
        "type": "trial",
        "title": "ISCHEMIA",
        "year": "2020",
        "summary": "In stable CAD with moderate-severe ischemia, initial invasive strategy did not reduce death/MI vs conservative. Does NOT apply to ACS.",
        "concepts": [
          "cad",
          "revascularization"
        ]
      },
      {
        "type": "trial",
        "title": "SYNERGY",
        "year": "2004",
        "summary": "Enoxaparin vs UFH in NSTE-ACS showed similar efficacy but established that crossing over between agents increases bleeding.",
        "concepts": [
          "nstemi",
          "anticoagulation"
        ]
      }
    ]
  },
  "tia": {
    "id": "tia",
    "name": "Transient Ischemic Attack",
    "category": "neurology",
    "subcategory": "stroke",
    "knowledge": [
      "TIA definition and significance",
      "ABCD2 risk stratification",
      "Urgent workup requirements",
      "Secondary prevention"
    ],
    "skills": [
      "Recognize TIA presentation",
      "Risk stratify with ABCD2",
      "Order urgent workup",
      "Initiate secondary prevention"
    ],
    "lesson": {
      "title": "Transient Ischemic Attack: Evaluation and Prevention",
      "sections": [
        {
          "type": "intro",
          "content": "A transient ischemic attack (TIA) is a brief episode of neurologic dysfunction from focal brain ischemia without infarction. Symptoms resolve within 24 hours (usually <1 hour). TIA is a medical emergency\u201410-15% of patients have stroke within 90 days, half within 48 hours. Urgent workup and treatment can dramatically reduce this risk. The modern approach: Admit high-risk TIA and complete workup within 24 hours."
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Typical TIA symptoms (sudden onset, focal):**\n\u2022 Unilateral weakness or numbness\n\u2022 Speech difficulty (aphasia, dysarthria)\n\u2022 Visual loss (monocular = amaurosis fugax)\n\u2022 Hemianopia\n\u2022 Vertigo with other brainstem signs\n\u2022 Ataxia\n\n**Duration:**\n\u2022 Most resolve in <1 hour\n\u2022 Longer symptoms more likely to show infarct on MRI\n\n**NOT typical of TIA:**\n\u2022 Isolated dizziness\n\u2022 Isolated confusion\n\u2022 Bilateral symptoms\n\u2022 Syncope\n\u2022 Gradual onset"
        },
        {
          "type": "concept",
          "title": "ABCD2 Score",
          "content": "**Risk stratification for stroke after TIA:**\n\n\u2022 **A**ge \u226560: 1 point\n\u2022 **B**P \u2265140/90: 1 point\n\u2022 **C**linical features:\n  - Unilateral weakness: 2 points\n  - Speech disturbance without weakness: 1 point\n\u2022 **D**uration:\n  - \u226560 min: 2 points\n  - 10-59 min: 1 point\n\u2022 **D**iabetes: 1 point\n\n**Risk interpretation:**\n\u2022 0-3: Low risk (~1% 2-day stroke risk)\n\u2022 4-5: Moderate risk (~4% 2-day risk)\n\u2022 6-7: High risk (~8% 2-day risk)"
        },
        {
          "type": "concept",
          "title": "Urgent Workup",
          "content": "**Within 24 hours:**\n\u2022 Brain imaging (MRI with DWI preferred, CT if MRI unavailable)\n\u2022 Vascular imaging (CTA or MRA of head/neck, or carotid ultrasound)\n\u2022 ECG\n\u2022 Labs: CBC, BMP, glucose, lipids, coagulation\n\n**Additional based on findings:**\n\u2022 Echocardiography (especially if cardiac source suspected)\n\u2022 Prolonged cardiac monitoring (if paroxysmal AFib suspected)\n\u2022 Hypercoagulability workup in young patients\n\n**Key point:** 30% of 'TIAs' show infarct on DWI MRI\u2014these are actually strokes"
        },
        {
          "type": "pearl",
          "title": "The 90-Day Risk Window",
          "content": "10-15% of TIA patients have stroke within 90 days, with HALF occurring in the first 48 hours. This is why urgent evaluation matters. Early initiation of antiplatelet therapy, statins, and treatment of identified risk factors (carotid stenosis, AFib) can reduce this risk by 80%. TIA is a warning\u2014act on it."
        },
        {
          "type": "alert",
          "title": "Secondary Prevention",
          "content": "**Start immediately:**\n\u2022 Antiplatelet therapy: Aspirin 325mg, then 81mg daily\n\u2022 Dual antiplatelet (DAPT): ASA + clopidogrel \u00d7 21 days for high-risk TIA/minor stroke (CHANCE, POINT trials)\n\u2022 Statin: High-intensity (atorvastatin 80mg)\n\u2022 BP control: Target <130/80 (after acute phase)\n\n**Based on workup:**\n\u2022 Carotid stenosis \u226570%: CEA within 2 weeks\n\u2022 Atrial fibrillation: Anticoagulation (DOACs preferred)\n\u2022 PFO with high-risk features: Consider closure\n\n**Lifestyle:** Smoking cessation, exercise, diet, limit alcohol"
        }
      ],
      "article": {
        "title": "TIA: A Stroke Prevention Opportunity",
        "readTime": "12 min",
        "content": "<h2>The Tissue vs Time Definition</h2>\n<p>The classic definition of TIA (<24 hours) is time-based. The modern tissue-based definition requires no infarction on imaging. With sensitive MRI (DWI), up to 30% of clinical TIAs show small infarcts\u2014these are technically strokes. Regardless of definition, the management is the same: urgent evaluation and aggressive prevention.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> TIA is not benign. It's the best warning a patient can get before a disabling stroke. Treat it with the same urgency as an acute stroke. The goal is to identify the mechanism (large vessel, cardioembolic, small vessel) and treat accordingly.\n</div>\n\n<h2>Dual Antiplatelet Therapy</h2>\n<p>The CHANCE and POINT trials showed that aspirin + clopidogrel for 21 days reduces recurrent stroke after high-risk TIA or minor stroke compared to aspirin alone. Beyond 21-30 days, the bleeding risk exceeds benefit. This short-term DAPT is now standard for high-risk TIA (ABCD2 \u22654).</p>\n\n<h2>Carotid Stenosis</h2>\n<p>Ipsilateral carotid stenosis \u226570% (symptomatic) is an indication for carotid endarterectomy (CEA) within 2 weeks. Benefit is greatest when surgery is performed early. CEA reduces stroke risk by ~50% for symptomatic severe stenosis. Carotid stenting is an alternative for high surgical risk patients.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> TIA mimics are common: migraine with aura, seizure, hypoglycemia, vertigo, syncope, anxiety. A detailed history is key. True TIA has sudden-onset focal neurologic symptoms that are 'negative' (loss of function) rather than 'positive' (tingling, visual scintillations). If symptoms are atypical, consider alternatives.\n</div>\n\n<h2>Long-Term Management</h2>\n<p>After the acute phase, secondary prevention continues indefinitely: antiplatelet or anticoagulation (if AFib), statin, blood pressure control, glucose management, smoking cessation, and lifestyle modification. Regular follow-up ensures adherence and addresses new risk factors.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient has sudden onset right-sided weakness that resolves after 30 minutes. Brain MRI shows a small DWI lesion. What is the diagnosis?",
        "options": [
          "TIA (time-based definition)",
          "Ischemic stroke (tissue-based definition)",
          "Migraine with aura",
          "Functional neurologic disorder"
        ],
        "correct": 1,
        "explanation": "With an infarct visible on DWI MRI, this is technically an ischemic stroke by tissue-based definition, despite clinical symptoms resolving in <24 hours. The presence of infarction changes prognosis and confirms the vascular etiology."
      },
      {
        "question": "According to CHANCE/POINT trials, what is the recommended duration of dual antiplatelet therapy after high-risk TIA?",
        "options": [
          "7 days",
          "21 days",
          "90 days",
          "Indefinitely"
        ],
        "correct": 1,
        "explanation": "CHANCE and POINT trials showed benefit of aspirin + clopidogrel for 21-30 days after high-risk TIA or minor stroke. Beyond this period, bleeding risk exceeds stroke prevention benefit. After 21 days, continue single antiplatelet therapy."
      },
      {
        "question": "A TIA patient is found to have 80% ipsilateral carotid stenosis. What is the recommended intervention?",
        "options": [
          "Medical management only",
          "Carotid endarterectomy within 2 weeks",
          "Carotid stenting as first-line",
          "Repeat imaging in 6 months"
        ],
        "correct": 1,
        "explanation": "Symptomatic carotid stenosis \u226570% is an indication for carotid endarterectomy (CEA), ideally within 2 weeks of TIA. Early surgery maximizes benefit. CEA reduces stroke risk by ~50% for symptomatic severe stenosis."
      },
      {
        "question": "What percentage of TIA patients have a stroke within 90 days?",
        "options": [
          "1-2%",
          "5-7%",
          "10-15%",
          "25-30%"
        ],
        "correct": 2,
        "explanation": "10-15% of TIA patients have stroke within 90 days, with half occurring in the first 48 hours. This high early risk is why TIA is a medical emergency requiring urgent evaluation and intervention."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "CHANCE Trial",
        "year": "2013",
        "summary": "Aspirin + clopidogrel for 21 days reduced recurrent stroke after TIA/minor stroke compared to aspirin alone in Chinese population.",
        "concepts": [
          "tia",
          "antiplatelet"
        ]
      },
      {
        "type": "trial",
        "title": "POINT Trial",
        "year": "2018",
        "summary": "Confirmed CHANCE findings in broader population; benefit of DAPT limited to first 21-30 days.",
        "concepts": [
          "tia",
          "antiplatelet"
        ]
      },
      {
        "type": "guideline",
        "title": "AHA/ASA TIA Guidelines",
        "year": "2021",
        "summary": "Updated guidelines on TIA evaluation including urgent workup, risk stratification, and secondary prevention strategies.",
        "concepts": [
          "tia",
          "prevention"
        ]
      }
    ]
  },
  "hyperkalemia": {
    "id": "hyperkalemia",
    "name": "Hyperkalemia",
    "category": "renal",
    "subcategory": "electrolytes",
    "knowledge": [
      "ECG changes progression",
      "Causes and mechanisms",
      "Treatment hierarchy",
      "Dialysis indications"
    ],
    "skills": [
      "Recognize ECG changes",
      "Prioritize emergent treatment",
      "Calculate potassium deficit",
      "Prevent recurrence"
    ],
    "lesson": {
      "title": "Hyperkalemia: A Systematic Approach",
      "sections": [
        {
          "type": "intro",
          "content": "Hyperkalemia (K+ >5.5 mEq/L) is a potentially life-threatening electrolyte emergency. Severe hyperkalemia can cause fatal arrhythmias within minutes. Rapid recognition and systematic treatment are essential\u2014but always rule out pseudohyperkalemia first."
        },
        {
          "type": "concept",
          "title": "Causes of Hyperkalemia",
          "content": "**Decreased excretion (most common):**\n\u2022 Acute or chronic kidney disease\n\u2022 Hypoaldosteronism (Type 4 RTA)\n\u2022 Medications: ACEi, ARBs, K-sparing diuretics, NSAIDs, trimethoprim, heparin\n\n**Transcellular shift (K+ moves out of cells):**\n\u2022 Acidosis (especially non-anion gap)\n\u2022 Insulin deficiency / hyperglycemia\n\u2022 Beta-blockers\n\u2022 Tissue breakdown: rhabdomyolysis, tumor lysis, hemolysis\n\u2022 Succinylcholine, digoxin toxicity\n\n**Increased intake:**\n\u2022 Oral/IV supplementation\n\u2022 Salt substitutes\n\u2022 Massive transfusion"
        },
        {
          "type": "concept",
          "title": "ECG Changes: The Progression",
          "content": "**Early (K+ 5.5-6.5):**\n\u2022 Peaked T waves (tall, narrow, symmetric)\n\u2022 May be the only finding\n\n**Moderate (K+ 6.5-7.5):**\n\u2022 PR prolongation\n\u2022 QRS widening\n\u2022 P wave flattening/loss\n\n**Severe (K+ >7.5):**\n\u2022 Sine wave pattern (merging QRS-T)\n\u2022 Ventricular fibrillation\n\u2022 Asystole\n\n**IMPORTANT:** ECG changes correlate poorly with K+ level. Some patients have severe ECG changes at 6.0; others have minimal changes at 7.5. Treat the patient, not just the number."
        },
        {
          "type": "concept",
          "title": "Treatment Hierarchy",
          "content": "**1. STABILIZE THE MEMBRANE (works in seconds):**\n\u2022 Calcium gluconate 1-2g IV over 2-3 minutes\n\u2022 Does NOT lower K+, but protects the heart\n\u2022 Repeat if ECG doesn't improve\n\n**2. SHIFT K+ INTO CELLS (works in 15-30 min):**\n\u2022 Insulin 10 units IV + D50 (prevent hypoglycemia!)\n\u2022 Albuterol 10-20mg nebulized (high dose)\n\u2022 Sodium bicarbonate (if acidotic)\n\n**3. REMOVE K+ FROM BODY (works in hours):**\n\u2022 Loop diuretics (if making urine)\n\u2022 Sodium polystyrene sulfonate (Kayexalate) - controversial efficacy\n\u2022 Patiromer or sodium zirconium cyclosilicate (newer binders)\n\u2022 Hemodialysis (definitive, if severe/refractory)"
        },
        {
          "type": "pearl",
          "title": "The Insulin-Glucose Protocol",
          "content": "Standard: 10 units regular insulin IV + 25g dextrose (D50 50mL)\n\nThis shifts K+ into cells within 15-30 minutes. BUT: hypoglycemia occurs in up to 20% of patients. Always check glucose at 1 hour. In patients with glucose <250, give the dextrose first or simultaneously."
        },
        {
          "type": "alert",
          "title": "Pseudohyperkalemia",
          "content": "**Always consider pseudohyperkalemia before treating:**\n\n\u2022 Hemolyzed sample (most common)\n\u2022 Fist clenching during blood draw\n\u2022 Extreme leukocytosis (>100k) or thrombocytosis (>1 million)\n\u2022 Delayed processing of sample\n\n**Clues to pseudohyperkalemia:**\n\u2022 Patient looks well, no ECG changes\n\u2022 No reason for true hyperkalemia\n\u2022 K+ much higher than expected\n\n**Action:** Redraw without tourniquet, no fist clenching, run sample immediately."
        }
      ],
      "article": {
        "title": "Hyperkalemia: From Recognition to Resolution",
        "readTime": "11 min",
        "content": "<h2>The Physiology of Danger</h2>\n<p>Potassium is the major intracellular cation, with an intracellular concentration of ~150 mEq/L versus an extracellular concentration of ~4 mEq/L. This steep gradient is essential for maintaining the resting membrane potential of cardiac myocytes.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Hyperkalemia depolarizes the resting membrane potential, making it easier for cells to depolarize spontaneously. This explains both the peaked T waves (rapid repolarization) and the conduction delays (depolarization threshold approached).\n</div>\n\n<h2>The Three-Compartment Approach</h2>\n<p>Think of hyperkalemia treatment as addressing three compartments:</p>\n<p><strong>Compartment 1: Cardiac membrane</strong> - Calcium provides immediate stabilization by raising the threshold potential and restoring the gradient between resting and threshold potential. This doesn't change K+ levels but buys you time.</p>\n<p><strong>Compartment 2: Intracellular space</strong> - Insulin, beta-agonists, and bicarbonate drive K+ into cells. This is a temporizing measure\u2014you're not removing K+, just redistributing it. Effect wears off in hours.</p>\n<p><strong>Compartment 3: Body</strong> - Diuretics, K+ binders, and dialysis actually remove potassium from the body. This is the only way to achieve lasting resolution.</p>\n\n<h2>Calcium: The Membrane Stabilizer</h2>\n<p>Calcium gluconate (or calcium chloride) works within 1-3 minutes to stabilize the cardiac membrane. It doesn't lower potassium\u2014think of it as putting on a seatbelt while you fix the actual problem.</p>\n<p>Calcium gluconate 1-2g IV is standard. Calcium chloride contains 3x more elemental calcium per gram but requires central access (causes tissue necrosis if extravasated). Duration of effect is 30-60 minutes; repeat if ECG changes persist.</p>\n\n<div class=\"article-pearl\">\n<strong>Clinical Pearl:</strong> Don't skip calcium because the K+ \"isn't that high.\" If there are ANY ECG changes, give calcium first. It's fast, safe, and can be life-saving.\n</div>\n\n<h2>The Shift Therapies</h2>\n<p><strong>Insulin + Glucose:</strong> Most reliable method to shift K+ into cells. Insulin activates the Na-K-ATPase, driving K+ into cells. Always pair with glucose to prevent hypoglycemia\u2014this is a real risk, occurring in up to 20% of patients. Onset 15-30 minutes, duration 4-6 hours.</p>\n<p><strong>Albuterol:</strong> Beta-2 agonists also activate Na-K-ATPase. Use high doses (10-20mg nebulized, which is 4-8x the typical asthma dose). Onset 30 minutes. About 20% of patients are non-responders. Don't rely on it alone.</p>\n<p><strong>Bicarbonate:</strong> Most effective when acidosis is present. In non-acidotic patients, the K+ lowering effect is minimal and delayed. Not a first-line agent.</p>\n\n<h2>Removing Potassium</h2>\n<p><strong>Loop diuretics:</strong> Only work if the patient has adequate kidney function and urine output. Furosemide 40-80mg IV can increase K+ excretion.</p>\n<p><strong>GI binders:</strong> Sodium polystyrene sulfonate (Kayexalate) has fallen out of favor due to weak evidence and risk of intestinal necrosis. Newer agents (patiromer, sodium zirconium cyclosilicate) are more effective and better tolerated but work over hours.</p>\n<p><strong>Hemodialysis:</strong> The definitive treatment for severe hyperkalemia. Can remove 25-50 mEq K+ per hour. Indicated for severe hyperkalemia (especially with ECG changes) not responding to medical therapy, or when there's no urine output.</p>"
      },
      "podcast": {
        "title": "Hyperkalemia Emergencies with Dr. Renal",
        "duration": "10:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Renal, how do you approach a patient with hyperkalemia?"
          },
          {
            "speaker": "Dr. Renal",
            "text": "First question: Is it real? I've treated plenty of hemolyzed samples. If the patient looks good and there's no obvious cause, repeat the lab before panicking. But if there are ECG changes, treat immediately and sort it out later."
          },
          {
            "speaker": "Host",
            "text": "Walk us through your treatment approach."
          },
          {
            "speaker": "Dr. Renal",
            "text": "It's sequential. First, calcium to stabilize the heart\u2014this is if there are any ECG changes or the K+ is very high. Then insulin and glucose to shift K+ into cells. Then work on actually removing the potassium. People forget that insulin doesn't remove K+, it just moves it around temporarily."
          },
          {
            "speaker": "Host",
            "text": "How do you give the insulin and glucose?"
          },
          {
            "speaker": "Dr. Renal",
            "text": "Ten units of regular insulin IV with an amp of D50. Check glucose in an hour because hypoglycemia is common\u2014up to 20% of patients. If their glucose is already low, I give the dextrose first."
          },
          {
            "speaker": "Host",
            "text": "What about Kayexalate?"
          },
          {
            "speaker": "Dr. Renal",
            "text": "I've largely abandoned it. The evidence is weak, it takes hours to work, and there's a small risk of intestinal necrosis. The newer binders like patiromer and sodium zirconium cyclosilicate are better, but they're also slow. For acute emergencies, dialysis is the definitive answer."
          },
          {
            "speaker": "Host",
            "text": "When do you call for dialysis?"
          },
          {
            "speaker": "Dr. Renal",
            "text": "Severe hyperkalemia with ECG changes that's not responding to medical therapy. K+ greater than 7 without good urine output. Hyperkalemia in a patient who's already oliguric or anuric. Don't wait too long\u2014dialysis can be life-saving."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient has K+ of 7.2 mEq/L with peaked T waves on ECG. What is the first medication to give?",
        "options": [
          "Insulin 10 units IV",
          "Calcium gluconate 1g IV",
          "Furosemide 40mg IV",
          "Albuterol 10mg nebulized"
        ],
        "correct": 1,
        "explanation": "Calcium gluconate should be given first when there are ECG changes. It stabilizes the cardiac membrane within minutes, protecting against arrhythmias while you address the K+ level. It doesn't lower K+ but buys critical time. Insulin/glucose and albuterol shift K+ into cells but take 15-30 minutes to work."
      },
      {
        "question": "A common complication of insulin/dextrose treatment for hyperkalemia is:",
        "options": [
          "Hyperglycemia",
          "Hypoglycemia",
          "Hyponatremia",
          "Hypercalcemia"
        ],
        "correct": 1,
        "explanation": "Hypoglycemia occurs in up to 20% of patients treated with insulin/dextrose for hyperkalemia, even with standard D50 administration. Glucose should be checked at 1 hour post-treatment. Patients with low initial glucose or renal failure are at higher risk."
      },
      {
        "question": "Which ECG finding appears first in hyperkalemia?",
        "options": [
          "QRS widening",
          "Peaked T waves",
          "Loss of P waves",
          "Sine wave pattern"
        ],
        "correct": 1,
        "explanation": "Peaked T waves (tall, narrow, symmetric) are typically the earliest ECG manifestation of hyperkalemia, appearing at K+ levels of 5.5-6.5 mEq/L. As K+ rises further, PR prolongation, QRS widening, loss of P waves, and eventually sine wave pattern and V-fib occur."
      },
      {
        "question": "A patient's K+ is reported as 6.8 mEq/L but they have no symptoms and a normal ECG. You notice the sample was drawn 3 hours ago and shows hemolysis. What should you do?",
        "options": [
          "Give calcium gluconate immediately",
          "Start insulin/glucose treatment",
          "Redraw the potassium level",
          "Initiate emergent dialysis"
        ],
        "correct": 2,
        "explanation": "This is likely pseudohyperkalemia from a hemolyzed sample with delayed processing. Key clues: patient asymptomatic, normal ECG, hemolyzed specimen. Redraw without prolonged tourniquet use, without fist clenching, and run promptly. Don't treat pseudohyperkalemia\u2014the treatments have real risks."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "AHA Hyperkalemia Management",
        "year": "2020",
        "summary": "Evidence-based approach to hyperkalemia emphasizing calcium for membrane stabilization, insulin/glucose for shifting, and dialysis for removal.",
        "concepts": [
          "hyperkalemia",
          "treatment"
        ]
      },
      {
        "type": "trial",
        "title": "OPAL-HK",
        "year": "2015",
        "summary": "Patiromer effectively lowered potassium in CKD patients on RAAS inhibitors, allowing continuation of cardioprotective medications.",
        "concepts": [
          "hyperkalemia",
          "k-binders"
        ]
      }
    ]
  },
  "stemi": {
    "id": "stemi",
    "name": "STEMI Management",
    "category": "cardiovascular",
    "subcategory": "acs",
    "knowledge": [
      "ECG recognition patterns",
      "Door-to-balloon time goals",
      "Reperfusion strategies",
      "Adjunctive pharmacotherapy",
      "Mechanical complications"
    ],
    "skills": [
      "Rapidly identify STEMI on ECG",
      "Activate cath lab appropriately",
      "Manage cardiogenic shock",
      "Recognize RV infarct"
    ],
    "lesson": {
      "title": "STEMI: Time Is Muscle",
      "sections": [
        {
          "type": "intro",
          "content": "ST-elevation myocardial infarction represents complete coronary occlusion requiring emergent reperfusion. Every minute of delay results in more myocardial necrosis. The primary goal is achieving reperfusion within 90 minutes of first medical contact at a PCI-capable hospital."
        },
        {
          "type": "concept",
          "title": "ECG Criteria for STEMI",
          "content": "**ST elevation requirements:**\n\u2022 \u22651mm in 2+ contiguous leads\n\u2022 \u22652mm in V2-V3 for men \u226540 years\n\u2022 \u22652.5mm in V2-V3 for men <40 years\n\u2022 \u22651.5mm in V2-V3 for women\n\n**STEMI equivalents (activate cath lab!):**\n\u2022 New LBBB with ischemic symptoms\n\u2022 Posterior MI (ST depression V1-V3 + ST elevation V7-V9)\n\u2022 de Winter T-waves (upsloping ST depression + tall T-waves)\n\u2022 Wellens syndrome (biphasic/inverted T-waves V2-V3)"
        },
        {
          "type": "concept",
          "title": "Immediate Management",
          "content": "**Give immediately:**\n\u2022 Aspirin 325mg chewed\n\u2022 P2Y12 inhibitor loading (ticagrelor 180mg or prasugrel 60mg preferred over clopidogrel)\n\u2022 Anticoagulation (heparin, bivalirudin, or enoxaparin)\n\n**Use with caution:**\n\u2022 Oxygen - Only if SpO2 <90% (DETO2X-AMI showed no benefit in normoxemic patients)\n\u2022 Morphine - May increase mortality; use sparingly\n\u2022 Nitrates - Contraindicated in RV infarct, hypotension, recent PDE5 inhibitors\n\u2022 Beta-blockers - Oral preferred; avoid IV in acute setting"
        },
        {
          "type": "concept",
          "title": "Reperfusion Strategy",
          "content": "**Primary PCI (preferred):**\n\u2022 Door-to-balloon \u226490 minutes if presenting to PCI center\n\u2022 First medical contact-to-device \u2264120 minutes if transfer needed\n\u2022 Superior to fibrinolysis when available in timely fashion\n\n**Fibrinolysis (if PCI not available):**\n\u2022 Door-to-needle \u226430 minutes\n\u2022 Most effective within 3 hours of symptom onset\n\u2022 Benefit diminishes significantly after 12 hours\n\u2022 Requires transfer for angiography within 3-24 hours (pharmacoinvasive strategy)"
        },
        {
          "type": "pearl",
          "title": "Posterior STEMI Pearl",
          "content": "ST depression in V1-V3 may be the only sign of posterior STEMI. Always obtain posterior leads (V7-V9) when you see anterior ST depression with a convincing story. These patients need emergent cath just like any other STEMI!"
        },
        {
          "type": "alert",
          "title": "RV Infarct Recognition",
          "content": "**Classic triad:** Inferior STEMI + hypotension + clear lungs\n\n**Key points:**\n\u2022 Get right-sided ECG leads (V3R-V6R)\n\u2022 ST elevation \u22651mm in V4R is highly specific\n\u2022 These patients are PRELOAD-DEPENDENT\n\u2022 Give fluids (even 1-2L bolus may be needed)\n\u2022 AVOID nitrates, diuretics, morphine\n\u2022 May need inotropic support\n\u2022 Higher mortality than isolated inferior MI"
        }
      ],
      "article": {
        "title": "STEMI: Optimizing Outcomes in the Golden Hour",
        "readTime": "14 min",
        "content": "<h2>The Pathophysiology of Coronary Occlusion</h2>\n<p>STEMI occurs when an atherosclerotic plaque ruptures or erodes, triggering thrombosis that completely occludes the coronary artery. Without blood flow, myocytes begin dying within minutes. The wavefront of necrosis spreads from endocardium to epicardium over 3-6 hours.</p>\n\n<div class=\"article-highlight\">\n<strong>Critical Concept:</strong> Myocardial salvage is directly proportional to time-to-reperfusion. For every 30-minute delay in reperfusion, relative mortality increases by approximately 7.5%.\n</div>\n\n<h2>The Evolution of Reperfusion</h2>\n<p>Fibrinolysis revolutionized STEMI care in the 1980s, proving that reperfusion saves lives. Primary PCI emerged in the 1990s as the superior strategy when available promptly. Today, the focus is on minimizing total ischemic time through system-level optimizations.</p>\n\n<h2>Contemporary Antiplatelet Strategy</h2>\n<p>Dual antiplatelet therapy (DAPT) with aspirin plus a P2Y12 inhibitor is mandatory. The choice of P2Y12 inhibitor has evolved:</p>\n<p><strong>Ticagrelor</strong> (PLATO trial): Reduced CV death, MI, and stroke vs. clopidogrel. Reversible binding. Can cause dyspnea and bradycardia.</p>\n<p><strong>Prasugrel</strong> (TRITON-TIMI 38): More potent than clopidogrel, but increased bleeding. Contraindicated with prior stroke/TIA, age \u226575, weight <60kg.</p>\n<p><strong>Clopidogrel:</strong> Still used if ticagrelor/prasugrel contraindicated, or in patients on oral anticoagulation (to minimize bleeding).</p>\n\n<h2>Cardiogenic Shock</h2>\n<p>Cardiogenic shock complicates 5-10% of STEMI and carries >40% mortality. Early revascularization is the only intervention proven to improve survival. The SHOCK trial established that early invasive strategy improves 6-month and 1-year mortality.</p>\n\n<div class=\"article-pearl\">\n<strong>Vasopressor Choice:</strong> Norepinephrine is preferred over dopamine in cardiogenic shock (SOAP II trial showed lower mortality and fewer arrhythmias). Inotropes like dobutamine may be added for low cardiac output.\n</div>\n\n<h2>Mechanical Complications</h2>\n<p>Rare but catastrophic complications typically occur 3-7 days post-MI:</p>\n<p><strong>Free wall rupture:</strong> Presents with sudden PEA arrest, pericardial tamponade. Usually fatal without emergent surgery.</p>\n<p><strong>VSD:</strong> New harsh holosystolic murmur, step-up in oxygen saturation from RA to RV. Requires surgical repair.</p>\n<p><strong>Papillary muscle rupture:</strong> Severe acute mitral regurgitation, pulmonary edema. More common with inferior MI (posteromedial papillary muscle has single blood supply).</p>"
      },
      "podcast": {
        "title": "STEMI Systems of Care with Dr. Martinez",
        "duration": "11:45",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Today we're discussing STEMI management with Dr. Martinez, an interventional cardiologist. Let's start with time goals\u2014why do they matter so much?"
          },
          {
            "speaker": "Dr. Martinez",
            "text": "The relationship between time and myocardial salvage is incredibly steep in the first few hours. We talk about 'time is muscle' because it's literally true\u2014you can watch the infarct size grow on imaging if reperfusion is delayed."
          },
          {
            "speaker": "Host",
            "text": "What's the biggest source of delay you see?"
          },
          {
            "speaker": "Dr. Martinez",
            "text": "Patient delay\u2014the time from symptom onset to calling 911\u2014is often the longest interval. But for things we control, it's often ED-to-cath-lab activation. Every hospital should have a streamlined process where a single call activates the entire team."
          },
          {
            "speaker": "Host",
            "text": "Talk about ECG interpretation. What do you want trainees to know?"
          },
          {
            "speaker": "Dr. Martinez",
            "text": "Know the STEMI equivalents. The classic teaching is ST elevation, but you'll miss posterior MIs, de Winter pattern, and Wellens if you only look for elevation. When in doubt with a convincing story, call the cardiologist."
          },
          {
            "speaker": "Host",
            "text": "What about patients presenting to non-PCI hospitals?"
          },
          {
            "speaker": "Dr. Martinez",
            "text": "Transfer protocols are critical. If you can get them to a PCI center within 120 minutes of first medical contact, transfer for primary PCI. If not, give lytics and transfer anyway\u2014that's the pharmacoinvasive strategy. Don't let them sit at a non-PCI hospital."
          },
          {
            "speaker": "Host",
            "text": "Any final pearls?"
          },
          {
            "speaker": "Dr. Martinez",
            "text": "Always check right-sided leads in inferior STEMI. RV involvement completely changes management. And don't give nitrates to a hypotensive patient with inferior MI\u2014you might make them much worse."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 55-year-old man presents with chest pain. ECG shows 3mm ST elevation in II, III, aVF with 1mm ST depression in I and aVL. BP is 82/50, HR 54, lungs are clear. What is the most important next step?",
        "options": [
          "Give IV nitroglycerin for pain relief",
          "Obtain right-sided ECG leads",
          "Give IV furosemide for presumed pulmonary edema",
          "Start dopamine infusion"
        ],
        "correct": 1,
        "explanation": "This patient has inferior STEMI with hypotension and bradycardia but clear lungs\u2014classic for RV infarct. Right-sided leads (especially V4R) will confirm RV involvement. Nitrates and diuretics are contraindicated as these patients are preload-dependent. Management involves fluids and possibly inotropes, not vasoconstrictors initially."
      },
      {
        "question": "A patient with anterior STEMI arrives at your PCI-capable ED. Door-to-balloon time goal is:",
        "options": [
          "60 minutes",
          "90 minutes",
          "120 minutes",
          "180 minutes"
        ],
        "correct": 1,
        "explanation": "For patients presenting directly to a PCI-capable hospital, the door-to-balloon time goal is \u226490 minutes. For transfer patients, the first medical contact-to-device time should be \u2264120 minutes. These times are associated with optimal outcomes."
      },
      {
        "question": "Which P2Y12 inhibitor is contraindicated in a STEMI patient with history of prior stroke?",
        "options": [
          "Clopidogrel",
          "Ticagrelor",
          "Prasugrel",
          "All are contraindicated"
        ],
        "correct": 2,
        "explanation": "Prasugrel is contraindicated in patients with prior stroke or TIA due to increased risk of intracranial hemorrhage (this was seen in TRITON-TIMI 38). Ticagrelor or clopidogrel should be used instead. Prasugrel is also used with caution in patients \u226575 years or <60 kg."
      },
      {
        "question": "Five days after an inferior STEMI, a patient develops a new harsh holosystolic murmur and acute pulmonary edema. What is the most likely complication?",
        "options": [
          "Papillary muscle rupture with acute MR",
          "Ventricular septal defect",
          "Free wall rupture",
          "Dressler syndrome"
        ],
        "correct": 1,
        "explanation": "While both papillary muscle rupture and VSD present with new murmurs post-MI, papillary muscle rupture is more common with inferior MI (posteromedial papillary muscle has single blood supply from PDA). The murmur of acute MR plus pulmonary edema is classic. VSD would show a step-up in oxygen saturation. Free wall rupture usually causes sudden death/tamponade."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2021 ACC/AHA STEMI Guidelines",
        "year": "2021",
        "summary": "Updated guidelines emphasizing system-based approaches, time-to-reperfusion metrics, and contemporary pharmacotherapy.",
        "concepts": [
          "stemi",
          "reperfusion"
        ]
      },
      {
        "type": "trial",
        "title": "PLATO",
        "year": "2009",
        "summary": "Ticagrelor superior to clopidogrel in ACS, reducing CV death, MI, and stroke without significant increase in major bleeding.",
        "concepts": [
          "acs",
          "antiplatelet"
        ]
      },
      {
        "type": "trial",
        "title": "SHOCK",
        "year": "1999",
        "summary": "Early revascularization improved 6-month and 1-year survival in STEMI complicated by cardiogenic shock.",
        "concepts": [
          "stemi",
          "cardiogenic-shock"
        ]
      },
      {
        "type": "trial",
        "title": "DETO2X-AMI",
        "year": "2017",
        "summary": "Routine oxygen therapy in normoxemic STEMI patients did not reduce 1-year mortality. Only give O2 if SpO2 <90%.",
        "concepts": [
          "stemi",
          "oxygen"
        ]
      }
    ]
  },
  "vt-vf": {
    "id": "vt-vf",
    "name": "Ventricular Arrhythmias",
    "category": "cardiovascular",
    "subcategory": "arrhythmias",
    "knowledge": [
      "VT recognition and classification",
      "Distinguishing VT from SVT with aberrancy",
      "ACLS algorithms",
      "Antiarrhythmic selection"
    ],
    "skills": [
      "Recognize VT on ECG",
      "Manage unstable VT",
      "Select appropriate antiarrhythmic",
      "Identify reversible causes"
    ],
    "lesson": {
      "title": "Ventricular Arrhythmias: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Ventricular tachycardia (VT) and ventricular fibrillation (VF) are life-threatening arrhythmias requiring immediate recognition and treatment. VT can be stable or unstable; VF is always a cardiac arrest rhythm. The approach depends on hemodynamic stability, underlying cause, and whether the arrhythmia is monomorphic or polymorphic."
        },
        {
          "type": "concept",
          "title": "VT Classification",
          "content": "**By morphology:**\n\u2022 Monomorphic VT: Same QRS morphology\u2014usually scar-related\n\u2022 Polymorphic VT: Varying QRS morphology\u2014often ischemia or channelopathy\n\u2022 Torsades de Pointes: Polymorphic VT with long QT\n\n**By duration:**\n\u2022 Non-sustained VT (NSVT): \u22653 beats, <30 seconds, self-terminating\n\u2022 Sustained VT: \u226530 seconds or requires intervention\n\n**By hemodynamics:**\n\u2022 Stable: Pulse present, adequate BP, no altered mental status\n\u2022 Unstable: Hypotension, AMS, chest pain, or signs of shock"
        },
        {
          "type": "concept",
          "title": "VT vs SVT with Aberrancy",
          "content": "**Wide complex tachycardia is VT until proven otherwise!**\n\n**Favors VT:**\n\u2022 AV dissociation (pathognomonic if present)\n\u2022 Fusion or capture beats\n\u2022 QRS >160 ms\n\u2022 Northwest axis (extreme axis deviation)\n\u2022 Concordance (all precordial leads positive or negative)\n\u2022 Brugada/Vereckei criteria positive\n\u2022 History of structural heart disease\n\n**Favors SVT with aberrancy:**\n\u2022 Prior ECG shows same bundle branch block\n\u2022 Typical RBBB or LBBB morphology\n\u2022 No structural heart disease"
        },
        {
          "type": "concept",
          "title": "Acute Management",
          "content": "**Unstable VT (or VF):**\n\u2022 Immediate synchronized cardioversion (VT) or defibrillation (VF)\n\u2022 Pulseless: ACLS protocol\u2014CPR, defib, epinephrine, amiodarone\n\n**Stable monomorphic VT:**\n\u2022 Amiodarone 150mg IV over 10 min, then infusion\n\u2022 Alternative: Lidocaine 1-1.5 mg/kg IV\n\u2022 Alternative: Procainamide 17 mg/kg IV (caution if poor LV function)\n\u2022 If refractory: Synchronized cardioversion\n\n**Polymorphic VT/Torsades:**\n\u2022 Magnesium 2g IV (even if Mg normal)\n\u2022 Stop QT-prolonging drugs\n\u2022 Correct hypokalemia\n\u2022 If bradycardia-dependent: Pacing to shorten QT"
        },
        {
          "type": "pearl",
          "title": "The Adenosine Question",
          "content": "Can you give adenosine for wide complex tachycardia? Yes, if hemodynamically stable. It won't hurt VT (won't terminate it, but won't harm), and it may reveal SVT. However, AVOID adenosine in pre-excited AF (WPW)\u2014can cause VF. If delta waves are present or AF is suspected, don't use adenosine."
        },
        {
          "type": "alert",
          "title": "Reversible Causes (H's and T's)",
          "content": "**Always look for reversible causes:**\n\n**H's:**\n\u2022 Hypoxia\n\u2022 Hydrogen ion (acidosis)\n\u2022 Hypokalemia/Hyperkalemia\n\u2022 Hypothermia\n\u2022 Hypovolemia\n\n**T's:**\n\u2022 Toxins (digoxin, drugs)\n\u2022 Tamponade\n\u2022 Tension pneumothorax\n\u2022 Thrombosis (MI or PE)\n\n**Also consider:** Active ischemia (treat with revascularization), electrolyte abnormalities (K, Mg, Ca)"
        }
      ],
      "article": {
        "title": "Ventricular Arrhythmias: From Recognition to ICD",
        "readTime": "13 min",
        "content": "<h2>The Substrate</h2>\n<p>Most ventricular arrhythmias occur in structurally abnormal hearts. Post-MI scar creates re-entrant circuits that generate monomorphic VT. Cardiomyopathy, whether ischemic or non-ischemic, provides the substrate. Understanding this helps with both acute management and long-term prevention.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> In a patient with known heart disease, wide complex tachycardia is VT about 80% of the time. Even in younger patients without known disease, VT is more common than SVT with aberrancy. When in doubt, treat as VT.\n</div>\n\n<h2>Antiarrhythmic Options</h2>\n<p><strong>Amiodarone:</strong> First-line for most VT. Multiple mechanisms of action. Effective acutely and long-term. Side effects limit chronic use (thyroid, pulmonary, hepatic, skin, eye).</p>\n<p><strong>Lidocaine:</strong> Fast onset, short half-life. Good for ischemic VT. CNS toxicity at high doses. Doesn't prolong QT.</p>\n<p><strong>Procainamide:</strong> Effective but causes hypotension. Avoid in HFrEF. Can unmask Brugada syndrome. Requires careful monitoring.</p>\n<p><strong>Sotalol:</strong> Beta-blocker plus class III effects. Good for chronic therapy. Avoid if QT prolonged or poor renal function.</p>\n<p><strong>Mexiletine:</strong> Oral lidocaine-like agent. Often combined with amiodarone for refractory VT.</p>\n\n<h2>Long-Term Prevention</h2>\n<p>For patients surviving sustained VT/VF, an ICD is typically indicated for secondary prevention. Primary prevention ICDs are indicated for high-risk patients: EF \u226435% despite GDMT, hypertrophic cardiomyopathy with risk factors, certain channelopathies, and ARVC.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Beta-blockers reduce sudden cardiac death more than any antiarrhythmic drug. For patients with HFrEF and VT, beta-blocker therapy is essential. Don't rely on amiodarone without optimizing beta-blockade.\n</div>\n\n<h2>VF Storm and Refractory VT</h2>\n<p>VT/VF storm (\u22653 episodes in 24 hours) requires aggressive management: deep sedation (reduces sympathetic drive), aggressive electrolyte repletion, antiarrhythmic escalation, and often catheter ablation. Mechanical support may be needed as a bridge. Neuraxial blockade (stellate ganglion block, thoracic epidural) can be life-saving for refractory cases.</p>"
      },
      "podcast": {
        "title": "VT Management with Dr. EP",
        "duration": "10:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. EP, you see a wide complex tachycardia. How do you approach it?"
          },
          {
            "speaker": "Dr. EP",
            "text": "Step one: Is the patient stable? If they're hypotensive, altered, or in distress, cardiovert them. Don't spend time analyzing the ECG if they're crashing. Step two: If stable, look at the ECG carefully. VT is much more common than SVT with aberrancy, especially in older patients or those with heart disease."
          },
          {
            "speaker": "Host",
            "text": "What ECG features do you look for?"
          },
          {
            "speaker": "Dr. EP",
            "text": "AV dissociation is pathognomonic\u2014if you see P waves marching through at a different rate, it's VT. Fusion beats, capture beats, very wide QRS over 160 milliseconds, extreme axis deviation, concordance in the precordial leads. If the QRS looks nothing like a typical bundle branch block, it's probably VT."
          },
          {
            "speaker": "Host",
            "text": "What's your first-line drug for stable VT?"
          },
          {
            "speaker": "Dr. EP",
            "text": "Amiodarone. 150 milligrams over 10 minutes, then an infusion. It works on multiple ion channels and is effective in most VT. Lidocaine is my second choice, especially if I think there's active ischemia. I avoid procainamide in patients with poor LV function."
          },
          {
            "speaker": "Host",
            "text": "What about Torsades?"
          },
          {
            "speaker": "Dr. EP",
            "text": "Torsades is different\u2014it's polymorphic VT in the setting of a long QT. First, stop all QT-prolonging drugs. Give magnesium 2 grams IV push even if the magnesium level is normal. Correct potassium to the high end of normal. If it's bradycardia-dependent, we pace them faster to shorten the QT."
          },
          {
            "speaker": "Host",
            "text": "When does someone need an ICD?"
          },
          {
            "speaker": "Dr. EP",
            "text": "Anyone surviving sustained VT or VF without a completely reversible cause needs an ICD for secondary prevention. The data is very strong. Primary prevention is for high-risk patients\u2014EF under 35% despite optimal therapy, certain genetic conditions. The ICD saves lives, but we also optimize medications and consider ablation."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient develops wide complex tachycardia at 180 bpm. BP is 78/50, and they are confused. What is the immediate next step?",
        "options": [
          "Amiodarone 150mg IV",
          "Adenosine 6mg IV push",
          "Synchronized cardioversion",
          "Obtain 12-lead ECG"
        ],
        "correct": 2,
        "explanation": "This patient is hemodynamically unstable (hypotension, altered mental status). Regardless of whether this is VT or SVT, immediate synchronized cardioversion is indicated. Don't delay for medications or diagnostic workup when the patient is crashing."
      },
      {
        "question": "Which ECG finding is pathognomonic for VT in wide complex tachycardia?",
        "options": [
          "QRS duration >140 ms",
          "AV dissociation",
          "Left axis deviation",
          "RBBB morphology"
        ],
        "correct": 1,
        "explanation": "AV dissociation (P waves marching through at a rate independent of the QRS) is pathognomonic for VT. It proves the atria and ventricles are operating independently\u2014impossible in SVT. Wide QRS and axis deviation suggest VT but aren't diagnostic. RBBB morphology can occur in either VT or SVT."
      },
      {
        "question": "A patient with polymorphic VT has a QTc of 580 ms. What is the first-line treatment?",
        "options": [
          "Amiodarone 150mg IV",
          "Magnesium 2g IV",
          "Lidocaine 100mg IV",
          "Procainamide 17 mg/kg IV"
        ],
        "correct": 1,
        "explanation": "Polymorphic VT with long QT is Torsades de Pointes. Magnesium 2g IV is first-line regardless of serum magnesium level. Amiodarone and procainamide prolong QT and could worsen Torsades. Also stop QT-prolonging drugs, correct hypokalemia, and consider overdrive pacing."
      },
      {
        "question": "Which is a contraindication to adenosine in wide complex tachycardia?",
        "options": [
          "Hypotension",
          "History of heart failure",
          "Pre-excitation (WPW) with atrial fibrillation",
          "Prior myocardial infarction"
        ],
        "correct": 2,
        "explanation": "Adenosine is contraindicated in pre-excited AF (WPW with AF) because blocking the AV node allows all conduction through the accessory pathway, potentially causing VF. In regular wide complex tachycardia without signs of pre-excitation, adenosine is safe\u2014it won't terminate VT but may help diagnose SVT."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2017 AHA/ACC/HRS Ventricular Arrhythmia Guidelines",
        "year": "2017",
        "summary": "Comprehensive guidelines on evaluation and management of ventricular arrhythmias and prevention of sudden cardiac death.",
        "concepts": [
          "vt",
          "vf",
          "icd"
        ]
      },
      {
        "type": "guideline",
        "title": "ACLS Guidelines",
        "year": "2020",
        "summary": "Updated cardiac arrest algorithms including VT/VF management, emphasizing high-quality CPR and early defibrillation.",
        "concepts": [
          "vf",
          "cardiac-arrest"
        ]
      },
      {
        "type": "trial",
        "title": "SCD-HeFT",
        "year": "2005",
        "summary": "ICD reduced mortality by 23% in patients with EF \u226435% and NYHA II-III HF. Established primary prevention ICD indication.",
        "concepts": [
          "icd",
          "prevention"
        ]
      }
    ]
  },
  "hypertensive-emergency": {
    "id": "hypertensive-emergency",
    "name": "Hypertensive Emergency",
    "category": "cardiovascular",
    "subcategory": "hypertension",
    "knowledge": [
      "Emergency vs urgency distinction",
      "Target organ damage recognition",
      "Appropriate BP reduction rate",
      "IV antihypertensive selection"
    ],
    "skills": [
      "Identify end-organ damage",
      "Select IV antihypertensive",
      "Titrate to appropriate BP target",
      "Avoid excessive BP reduction"
    ],
    "lesson": {
      "title": "Hypertensive Emergency: Recognition and Treatment",
      "sections": [
        {
          "type": "intro",
          "content": "Hypertensive emergency is severe hypertension (usually >180/120) with acute end-organ damage. This differs from hypertensive urgency (severe BP without organ damage). Emergencies require IV antihypertensives in an ICU setting with controlled BP reduction. Too rapid BP lowering can cause stroke or MI from hypoperfusion. The specific target and agent depend on the type of organ damage."
        },
        {
          "type": "concept",
          "title": "End-Organ Damage",
          "content": "**Neurologic:**\n\u2022 Hypertensive encephalopathy (headache, confusion, visual changes)\n\u2022 Ischemic stroke, hemorrhagic stroke\n\u2022 Posterior reversible encephalopathy (PRES)\n\n**Cardiac:**\n\u2022 Acute coronary syndrome\n\u2022 Acute pulmonary edema\n\u2022 Aortic dissection\n\n**Renal:**\n\u2022 Acute kidney injury with hematuria, proteinuria\n\u2022 Hypertensive nephrosclerosis\n\n**Other:**\n\u2022 Eclampsia (seizures in pregnancy)\n\u2022 Microangiopathic hemolytic anemia (MAHA)"
        },
        {
          "type": "concept",
          "title": "BP Reduction Strategy",
          "content": "**General rule (most emergencies):**\n\u2022 Reduce MAP by ~10-20% in first hour\n\u2022 Then to 160/100-110 over next 2-6 hours\n\u2022 Then gradual reduction to normal over 24-48 hours\n\u2022 Avoid rapid drops \u2192 cerebral/coronary hypoperfusion\n\n**Exceptions requiring faster reduction:**\n\u2022 Aortic dissection: SBP <120 and HR <60 within minutes\n\u2022 Eclampsia: Immediate treatment to prevent seizures\n\n**Exceptions allowing slower approach:**\n\u2022 Ischemic stroke: Generally don't treat unless >220/120 (or >185/110 if thrombolysis planned)"
        },
        {
          "type": "concept",
          "title": "IV Antihypertensive Selection",
          "content": "**First-line agents:**\n\u2022 Nicardipine: CCB, titratable, good for most situations\n\u2022 Labetalol: Alpha/beta blocker, good for ACS, dissection, pregnancy\n\u2022 Clevidipine: Ultra-short acting CCB, easy titration\n\n**Specific situations:**\n\u2022 Aortic dissection: Esmolol (or labetalol) + vasodilator\n\u2022 Acute pulmonary edema: Nitroglycerin (afterload reduction + venodilation)\n\u2022 Eclampsia: Labetalol or hydralazine + magnesium\n\u2022 Pheochromocytoma: Phentolamine (alpha blocker first, then beta)\n\n**Avoid:**\n\u2022 Oral agents (unpredictable absorption)\n\u2022 Sublingual nifedipine (uncontrolled drops)\n\u2022 Hydralazine in ACS (reflex tachycardia)"
        },
        {
          "type": "pearl",
          "title": "The Aortic Dissection Exception",
          "content": "Aortic dissection is the ONE emergency where rapid BP control is essential\u2014target SBP <120 AND HR <60 immediately. The combination reduces aortic wall stress (dP/dt). Start with a beta-blocker (esmolol or labetalol) to control HR, THEN add a vasodilator (nicardipine, nitroprusside). Vasodilator alone causes reflex tachycardia, which increases wall stress."
        },
        {
          "type": "alert",
          "title": "Danger of Over-Treatment",
          "content": "**Cerebral autoregulation shifts in chronic hypertension:**\n\u2022 The brain adapts to higher pressures\n\u2022 Rapid BP drops can cause watershed infarcts\n\u2022 Patients may have ischemic symptoms if BP drops too fast\n\n**Monitor for:**\n\u2022 New confusion or altered mental status\n\u2022 Chest pain (coronary hypoperfusion)\n\u2022 Worsening renal function\n\n**If symptoms develop:**\n\u2022 Stop or slow the infusion\n\u2022 Allow BP to rise slightly\n\u2022 Reassess for new pathology"
        }
      ],
      "article": {
        "title": "Hypertensive Emergency: Matching Treatment to Pathology",
        "readTime": "13 min",
        "content": "<h2>Emergency vs Urgency</h2>\n<p>The distinction matters for management. Hypertensive urgency (severe BP without organ damage) can often be managed with oral medications and outpatient follow-up. Hypertensive emergency (organ damage) requires ICU admission, IV medications, and arterial line monitoring. Don't automatically admit every patient with high BP\u2014assess for organ damage.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The absolute BP number matters less than the presence of organ damage. A patient with chronic poorly controlled hypertension may tolerate SBP 200 without symptoms, while someone with typically normal BP may have encephalopathy at 180. Look for organ damage, not just numbers.\n</div>\n\n<h2>Nicardipine vs Labetalol</h2>\n<p>Both are first-line agents with different profiles. Nicardipine: Dihydropyridine CCB, predictable dose-response, no heart rate effects\u2014good for most emergencies including stroke. Labetalol: Combined alpha/beta blocker, reduces HR, good for ACS and dissection\u2014avoid in cocaine-induced emergency (unopposed alpha risk).</p>\n\n<h2>Special Populations</h2>\n<p>Pregnancy (eclampsia/preeclampsia): Labetalol and hydralazine are safe. Add magnesium for seizure prophylaxis. Delivery is definitive treatment. Cocaine-associated: Benzodiazepines first (calm sympathetic surge), then nicardipine or phentolamine. Avoid beta-blockers (unopposed alpha causes coronary vasoconstriction).</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> After stabilization, always investigate causes of hypertensive emergency. Consider: medication non-adherence (most common), renovascular disease, pheochromocytoma, primary aldosteronism, or drug interactions (MAOIs + tyramine). A thorough history reveals most causes.\n</div>\n\n<h2>Transition to Oral Therapy</h2>\n<p>Once stable on IV therapy, overlap with oral agents before discontinuing IV. Long-acting medications (amlodipine, lisinopril) take days to reach steady state\u2014start early. Address the underlying cause of the emergency (medication adherence, secondary causes) before discharge.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with SBP 210 presents with chest pain and a widened mediastinum on CXR concerning for aortic dissection. What is the initial BP target?",
        "options": [
          "Reduce MAP by 25% over 24 hours",
          "SBP <140 within 6 hours",
          "SBP <120 AND HR <60 within minutes",
          "No BP treatment until diagnosis confirmed"
        ],
        "correct": 2,
        "explanation": "Aortic dissection requires immediate aggressive BP control. Target SBP <120 AND HR <60 to reduce aortic wall stress. Start beta-blocker first, then add vasodilator. This is the exception to the 'gradual reduction' rule."
      },
      {
        "question": "A patient with chronic hypertension presents with BP 200/120 and headache but no focal deficits, normal renal function, and no cardiac symptoms. What is this condition classified as?",
        "options": [
          "Hypertensive emergency",
          "Hypertensive urgency",
          "Malignant hypertension",
          "Hypertensive crisis"
        ],
        "correct": 1,
        "explanation": "Hypertensive urgency is severely elevated BP WITHOUT evidence of end-organ damage. This patient has no neurologic deficits, renal injury, or cardiac involvement. Urgency can often be managed with oral medications and outpatient follow-up, unlike emergency which requires ICU and IV therapy."
      },
      {
        "question": "Which IV antihypertensive should be AVOIDED in cocaine-induced hypertensive emergency?",
        "options": [
          "Nicardipine",
          "Phentolamine",
          "Labetalol",
          "Nitroglycerin"
        ],
        "correct": 2,
        "explanation": "Beta-blockers (including labetalol, despite alpha blockade) should be avoided in cocaine toxicity due to risk of unopposed alpha-adrenergic stimulation causing coronary vasoconstriction. First-line is benzodiazepines, then nicardipine or phentolamine if needed."
      },
      {
        "question": "What is the general initial BP reduction goal in most hypertensive emergencies?",
        "options": [
          "Normal BP (<130/80) within 1 hour",
          "Reduce MAP by 10-20% in first hour",
          "SBP <100 immediately",
          "No treatment until etiology determined"
        ],
        "correct": 1,
        "explanation": "In most hypertensive emergencies, reduce MAP by 10-20% in the first hour, then gradually to 160/100-110 over the next 2-6 hours. Overly rapid reduction risks cerebral and coronary hypoperfusion, especially in patients with chronically elevated BP."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ACC/AHA Hypertension Guidelines",
        "year": "2017",
        "summary": "Comprehensive guidelines including definition and management of hypertensive crises, with specific BP targets by clinical scenario.",
        "concepts": [
          "hypertension",
          "emergency"
        ]
      },
      {
        "type": "guideline",
        "title": "AHA Aortic Dissection Guidelines",
        "year": "2022",
        "summary": "Updated guidelines on diagnosis and management of aortic dissection including aggressive BP targets.",
        "concepts": [
          "hypertension",
          "dissection"
        ]
      },
      {
        "type": "trial",
        "title": "Nicardipine vs Labetalol Comparison",
        "year": "2014",
        "summary": "Both agents effective for hypertensive emergency; nicardipine may provide more predictable BP control.",
        "concepts": [
          "hypertension",
          "treatment"
        ]
      }
    ]
  },
  "ards": {
    "id": "ards",
    "name": "ARDS",
    "category": "pulmonary",
    "subcategory": "respiratory-failure",
    "knowledge": [
      "Berlin definition criteria",
      "Lung-protective ventilation",
      "Prone positioning evidence",
      "Adjunctive therapies"
    ],
    "skills": [
      "Recognize ARDS early",
      "Set initial ventilator parameters",
      "Manage refractory hypoxemia",
      "Calculate driving pressure"
    ],
    "lesson": {
      "title": "ARDS: Evidence-Based Critical Care",
      "sections": [
        {
          "type": "intro",
          "content": "Acute respiratory distress syndrome (ARDS) is a syndrome of acute hypoxemic respiratory failure with bilateral infiltrates not fully explained by cardiac failure. Management centers on treating the underlying cause, lung-protective ventilation, and avoiding ventilator-induced lung injury. Despite decades of research, mortality remains 30-40%."
        },
        {
          "type": "concept",
          "title": "Berlin Definition",
          "content": "**ARDS requires ALL of:**\n\n1. **Timing:** Within 1 week of clinical insult or new/worsening respiratory symptoms\n\n2. **Imaging:** Bilateral opacities not fully explained by effusions, collapse, or nodules\n\n3. **Origin:** Not fully explained by cardiac failure or fluid overload (echo if uncertain)\n\n4. **Oxygenation (P/F ratio on PEEP \u22655):**\n   \u2022 Mild: 200-300\n   \u2022 Moderate: 100-200\n   \u2022 Severe: <100"
        },
        {
          "type": "concept",
          "title": "Lung-Protective Ventilation",
          "content": "**The ARDSNet protocol:**\n\n\u2022 **Tidal volume:** 6 mL/kg PREDICTED body weight (PBW)\n  - Men: PBW = 50 + 2.3 \u00d7 (height in inches - 60)\n  - Women: PBW = 45.5 + 2.3 \u00d7 (height in inches - 60)\n\n\u2022 **Plateau pressure:** Keep \u226430 cm H2O\n\n\u2022 **PEEP:** Titrate using PEEP/FiO2 table or best compliance\n\n\u2022 **Driving pressure:** Pplat - PEEP, target <15 cm H2O\n\n**Initial settings:**\n\u2022 Mode: Volume control (AC/VC)\n\u2022 Vt: 6 mL/kg PBW\n\u2022 Rate: 16-20 to maintain minute ventilation\n\u2022 PEEP: Start 5-10, titrate to oxygenation"
        },
        {
          "type": "concept",
          "title": "Adjunctive Therapies",
          "content": "**Prone positioning (PROSEVA trial):**\n\u2022 For P/F <150 on FiO2 \u22650.6, PEEP \u22655\n\u2022 Prone for \u226516 hours/day\n\u2022 Reduces mortality in severe ARDS\n\n**Neuromuscular blockade:**\n\u2022 Early paralysis (48h) debated after ROSE trial\n\u2022 Consider for severe dyssynchrony, very high driving pressures\n\n**Conservative fluid management:**\n\u2022 Target CVP 4-6, avoid positive balance\n\u2022 FACTT trial showed more ventilator-free days\n\n**NOT proven beneficial:**\n\u2022 Routine high-dose steroids (maybe in COVID, some phenotypes)\n\u2022 Inhaled nitric oxide (transient effect only)\n\u2022 ECMO (rescue, not routine)"
        },
        {
          "type": "pearl",
          "title": "The Driving Pressure Concept",
          "content": "Driving pressure = Plateau pressure - PEEP. It reflects the stress applied to the aerated lung. A driving pressure <15 cm H2O is associated with better outcomes. If plateau is 28 and PEEP is 14, driving pressure is 14\u2014acceptable. If PEEP is 8 with the same plateau, driving pressure is 20\u2014too high. Consider lowering Vt further or accepting permissive hypercapnia."
        },
        {
          "type": "alert",
          "title": "Refractory Hypoxemia Escalation",
          "content": "**Stepwise approach:**\n1. Optimize PEEP (higher PEEP if responsive)\n2. Prone positioning (\u226516 hours/day)\n3. Neuromuscular blockade (if dyssynchrony)\n4. Inhaled pulmonary vasodilators (iNO or epoprostenol)\n5. VV-ECMO for candidates meeting criteria\n\n**ECMO criteria (varies by center):**\n\u2022 P/F <80 on optimal settings\n\u2022 pH <7.25 with PaCO2 \u226560 despite Vt adjustment\n\u2022 Murray score \u22653\n\u2022 Potentially reversible cause\n\u2022 No contraindications (irreversible neuro injury, metastatic cancer)"
        }
      ],
      "article": {
        "title": "ARDS: Thirty Years of Progress",
        "readTime": "14 min",
        "content": "<h2>The Landmark ARDSNet Trial</h2>\n<p>Before 2000, ventilator management of ARDS was guided by tradition\u2014tidal volumes of 10-15 mL/kg were common. The ARMA trial (ARDSNet, 2000) randomized patients to 6 vs 12 mL/kg Vt and showed a 22% relative reduction in mortality with low tidal volumes. This established lung-protective ventilation as standard of care.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The benefit of low tidal volume ventilation comes from preventing ventilator-induced lung injury (VILI). Overdistension of alveoli causes inflammation, cytokine release, and biotrauma that damages the lungs and other organs. Protecting the lungs protects the whole patient.\n</div>\n\n<h2>Calculating Predicted Body Weight</h2>\n<p>A critical and often neglected step. Tidal volume is based on PREDICTED body weight (from height), not actual weight. An obese 5'4\" woman has the same lung size as a thin 5'4\" woman. Using actual weight in obesity leads to dangerous overtidal volumes. Always calculate PBW and write it on the ventilator.</p>\n\n<h2>Prone Positioning Revolution</h2>\n<p>The PROSEVA trial (2013) showed that prone positioning for 16+ hours daily reduces mortality by about 50% in severe ARDS. Mechanisms include better V/Q matching, recruitment of dorsal lung, and more homogeneous distribution of ventilation. It's one of the most powerful interventions in critical care.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Prone positioning is underutilized. Barriers include perceived complexity and staffing needs, but the mortality benefit is enormous. Start early (within 12-24 hours of intubation), prone for \u226516 hours, and continue until P/F improves off prone or patient improves.\n</div>\n\n<h2>The PEEP Debate</h2>\n<p>Higher PEEP can improve oxygenation by recruiting collapsed alveoli, but may also cause overdistension. Individual trials (ALVEOLI, LOV, ExPress) didn't show clear benefit, but meta-analyses suggest benefit in moderate-severe ARDS. Bedside approaches include PEEP/FiO2 tables, best compliance titration, and driving pressure optimization.</p>"
      },
      "podcast": {
        "title": "ARDS Management with Dr. Critical",
        "duration": "12:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Critical, a patient develops bilateral infiltrates and P/F ratio of 120 on PEEP 8. How do you approach this?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "First, confirm it's ARDS\u2014does it meet Berlin criteria? Bilateral infiltrates, within a week of an insult, not fully explained by heart failure. If the echo shows good function and there's a clear precipitant like pneumonia or aspiration, it's ARDS. Moderate severity with that P/F ratio."
          },
          {
            "speaker": "Host",
            "text": "What are your initial ventilator settings?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "6 mL/kg predicted body weight\u2014I calculate that from height, not actual weight. Start PEEP around 10, rate of 18-20. Check a plateau pressure immediately and keep it under 30. Calculate the driving pressure\u2014plateau minus PEEP\u2014and try to keep that under 15."
          },
          {
            "speaker": "Host",
            "text": "When do you prone the patient?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "If P/F stays below 150 despite optimizing PEEP and FiO2 is 0.6 or higher, I prone them. That's the PROSEVA criteria. I do it early\u2014within 24 hours of meeting criteria. They need to be prone for at least 16 hours a day. The mortality benefit is huge."
          },
          {
            "speaker": "Host",
            "text": "What about paralysis?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "The ROSE trial muddied the waters. I don't paralyze everyone anymore. But if they're fighting the vent, if I can't achieve safe pressures because of dyssynchrony, if driving pressure is high despite proper settings\u2014I'll use a 24-48 hour paralytic infusion. Facilitate proning too."
          },
          {
            "speaker": "Host",
            "text": "When do you think about ECMO?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "When I've done everything\u2014proned, paralyzed, optimized PEEP, tried pulmonary vasodilators\u2014and the P/F is still below 80, or pH is critical despite allowing hypercapnia. They need a potentially reversible cause and no major contraindications. I involve the ECMO team early for these discussions."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 5'6\" (66 inch) woman with ARDS weighs 95 kg. What is the target tidal volume using ARDSNet protocol?",
        "options": [
          "570 mL (6 \u00d7 95)",
          "380 mL (4 \u00d7 95)",
          "340 mL (6 \u00d7 57)",
          "480 mL (5 \u00d7 95)"
        ],
        "correct": 2,
        "explanation": "Tidal volume is based on PREDICTED body weight (PBW), not actual weight. For women: PBW = 45.5 + 2.3 \u00d7 (height in inches - 60) = 45.5 + 2.3 \u00d7 6 = 59.3 kg. Target Vt = 6 mL/kg \u00d7 59 kg \u2248 354 mL. Using actual weight (95 kg) would result in dangerous overdistension."
      },
      {
        "question": "According to PROSEVA criteria, which patient should be proned?",
        "options": [
          "P/F 180 on FiO2 0.4, PEEP 8",
          "P/F 120 on FiO2 0.7, PEEP 12",
          "P/F 250 on FiO2 0.5, PEEP 10",
          "P/F 90 on FiO2 0.4, PEEP 5"
        ],
        "correct": 1,
        "explanation": "PROSEVA criteria: P/F <150 on FiO2 \u22650.6 with PEEP \u22655. Patient B meets these criteria (P/F 120, FiO2 0.7, PEEP 12). Patient A has P/F too high. Patient C has P/F too high. Patient D has P/F low but FiO2 is only 0.4\u2014would need to increase FiO2 first to see if meets criteria."
      },
      {
        "question": "A patient on mechanical ventilation has plateau pressure 28 cm H2O and PEEP 14. What is the driving pressure and is it acceptable?",
        "options": [
          "28 cm H2O, too high",
          "14 cm H2O, acceptable",
          "42 cm H2O, too high",
          "14 cm H2O, too high"
        ],
        "correct": 1,
        "explanation": "Driving pressure = Plateau pressure - PEEP = 28 - 14 = 14 cm H2O. Target is <15 cm H2O, so this is acceptable. Driving pressure correlates with outcome better than plateau pressure alone because it accounts for PEEP and reflects stress on the aerated lung."
      },
      {
        "question": "Which intervention has proven mortality benefit in moderate-severe ARDS?",
        "options": [
          "Inhaled nitric oxide",
          "Prone positioning",
          "High-frequency oscillatory ventilation",
          "Routine early ECMO"
        ],
        "correct": 1,
        "explanation": "Prone positioning (PROSEVA trial) showed ~50% relative reduction in mortality in severe ARDS (P/F <150). Inhaled NO improves oxygenation transiently but doesn't reduce mortality. HFOV may worsen outcomes (OSCILLATE trial). ECMO is rescue therapy; EOLIA showed no definitive mortality benefit with routine early use."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "ARDSNet ARMA Trial",
        "year": "2000",
        "summary": "Low tidal volume (6 mL/kg PBW) reduced mortality by 22% compared to traditional volumes. Established lung-protective ventilation as standard of care.",
        "concepts": [
          "ards",
          "ventilation"
        ]
      },
      {
        "type": "trial",
        "title": "PROSEVA",
        "year": "2013",
        "summary": "Prone positioning \u226516 hours/day reduced mortality by ~50% in severe ARDS (P/F <150). One of most effective ICU interventions.",
        "concepts": [
          "ards",
          "prone"
        ]
      },
      {
        "type": "trial",
        "title": "FACTT",
        "year": "2006",
        "summary": "Conservative fluid strategy improved lung function and shortened ICU stay without increasing organ failure in ARDS.",
        "concepts": [
          "ards",
          "fluids"
        ]
      },
      {
        "type": "trial",
        "title": "ROSE",
        "year": "2019",
        "summary": "Early neuromuscular blockade did not improve outcomes in moderate-severe ARDS. Changed practice from routine paralysis.",
        "concepts": [
          "ards",
          "paralysis"
        ]
      }
    ]
  },
  "sepsis": {
    "id": "sepsis",
    "name": "Sepsis Recognition & Management",
    "category": "infectious",
    "subcategory": "sepsis-cat",
    "knowledge": [
      "Sepsis-3 definitions",
      "qSOFA criteria",
      "Hour-1 bundle components",
      "Vasopressor selection"
    ],
    "skills": [
      "Recognize sepsis early",
      "Initiate Hour-1 bundle",
      "Manage fluid resuscitation",
      "Titrate vasopressors"
    ],
    "lesson": {
      "title": "Sepsis: The Hour-1 Bundle",
      "sections": [
        {
          "type": "intro",
          "content": "Sepsis is life-threatening organ dysfunction caused by dysregulated host response to infection. Early recognition and treatment are critical\u2014mortality increases 4% for every hour antibiotics are delayed."
        },
        {
          "type": "concept",
          "title": "Sepsis-3 Definitions",
          "content": "**Sepsis**: Suspected infection + acute change in SOFA score \u22652\n\n**qSOFA (screening, not diagnostic)**:\n\u2022 Altered mental status\n\u2022 RR \u226522\n\u2022 SBP \u2264100\n(\u22652 points = high risk, not diagnostic)\n\n**Septic Shock**: Sepsis + vasopressors to maintain MAP \u226565 + lactate >2 despite adequate fluid resuscitation"
        },
        {
          "type": "concept",
          "title": "Hour-1 Bundle",
          "content": "**Start within 1 hour of recognition**:\n1. Measure lactate (repeat if >2)\n2. Blood cultures before antibiotics\n3. Broad-spectrum antibiotics\n4. 30 mL/kg crystalloid for hypotension or lactate \u22654\n5. Vasopressors for persistent hypotension (MAP <65)\n\nDon't delay antibiotics to obtain cultures\u2014get cultures and start antibiotics immediately."
        },
        {
          "type": "pearl",
          "title": "Clinical Pearl",
          "content": "Norepinephrine is the first-line vasopressor in septic shock. Add vasopressin (0.03 U/min) as second-line to reduce norepinephrine requirements. Avoid dopamine (more arrhythmias)."
        },
        {
          "type": "alert",
          "title": "Reassess Fluid Responsiveness",
          "content": "After initial resuscitation, assess fluid responsiveness before giving more fluids. Use passive leg raise, pulse pressure variation, or IVC ultrasound. Excess fluids worsen outcomes in sepsis."
        }
      ]
    },
    "quizzes": [
      {
        "question": "What is the first-line vasopressor in septic shock?",
        "options": [
          "Dopamine",
          "Norepinephrine",
          "Vasopressin",
          "Phenylephrine"
        ],
        "correct": 1,
        "explanation": "Norepinephrine is first-line for septic shock. It provides both alpha (vasoconstriction) and beta (inotropic) effects. Dopamine is associated with more arrhythmias and higher mortality. Vasopressin is second-line."
      },
      {
        "question": "A patient with sepsis has lactate of 4.5, MAP of 58 after 2L crystalloid. What defines septic shock?",
        "options": [
          "Lactate >2 alone",
          "Hypotension requiring vasopressors + lactate >2 despite fluids",
          "Any patient requiring vasopressors",
          "qSOFA score \u22652"
        ],
        "correct": 1,
        "explanation": "Septic shock = sepsis + need for vasopressors to maintain MAP \u226565 + lactate >2 mmol/L despite adequate fluid resuscitation. Both criteria must be met. This identifies patients with ~40% hospital mortality."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "Surviving Sepsis Campaign 2021",
        "year": "2021",
        "summary": "Updated sepsis guidelines emphasizing Hour-1 bundle and personalized resuscitation.",
        "concepts": [
          "sepsis"
        ]
      },
      {
        "type": "trial",
        "title": "PROCESS/ARISE/PROMISE",
        "year": "2014-2015",
        "summary": "Protocolized EGDT not superior to usual care, but early recognition and treatment remain critical.",
        "concepts": [
          "sepsis",
          "resuscitation"
        ]
      }
    ]
  },
  "afib": {
    "id": "afib",
    "name": "Atrial Fibrillation",
    "category": "cardiovascular",
    "subcategory": "arrhythmias",
    "knowledge": [
      "CHA\u2082DS\u2082-VASc scoring",
      "Rate vs rhythm control indications",
      "Anticoagulation selection",
      "Cardioversion requirements"
    ],
    "skills": [
      "Calculate stroke risk",
      "Choose rate control agents",
      "Select appropriate anticoagulation"
    ],
    "lesson": {
      "title": "Atrial Fibrillation: Rate, Rhythm, and Anticoagulation",
      "sections": [
        {
          "type": "intro",
          "content": "Atrial fibrillation (AF) is the most common sustained arrhythmia. Management centers on three key decisions: rate vs. rhythm control, stroke prevention, and addressing underlying causes."
        },
        {
          "type": "concept",
          "title": "Rate vs. Rhythm Control",
          "content": "The AFFIRM trial showed no mortality difference between strategies. Rate control is often preferred for:\n- Older patients (>65)\n- Persistent AF >1 year\n- Failed cardioversion\n- Minimal symptoms\n\nRhythm control preferred for:\n- Young, symptomatic patients\n- First episode\n- Clear trigger (surgery, infection)\n- Tachycardia-mediated cardiomyopathy"
        },
        {
          "type": "concept",
          "title": "CHA\u2082DS\u2082-VASc Score",
          "content": "Calculate stroke risk to guide anticoagulation:\n- C: CHF (1 point)\n- H: Hypertension (1)\n- A\u2082: Age \u226575 (2 points)\n- D: Diabetes (1)\n- S\u2082: Prior Stroke/TIA (2 points)\n- V: Vascular disease (1)\n- A: Age 65-74 (1)\n- Sc: Sex category female (1)\n\nScore \u22652 in men, \u22653 in women \u2192 Anticoagulate"
        },
        {
          "type": "pearl",
          "title": "Clinical Pearl",
          "content": "DOACs are preferred over warfarin for non-valvular AF. They have better safety profiles, don't require INR monitoring, and have specific reversal agents available."
        }
      ]
    },
    "quizzes": [
      {
        "question": "A 72-year-old woman with hypertension and diabetes presents with new AF. Her CHA\u2082DS\u2082-VASc score is:",
        "options": [
          "2",
          "3",
          "4",
          "5"
        ],
        "correct": 2,
        "explanation": "Age 65-74 (1) + Hypertension (1) + Diabetes (1) + Female sex (1) = 4 points. With a score \u22653 in women, anticoagulation is indicated."
      },
      {
        "question": "Which rate control target is recommended for most AF patients?",
        "options": [
          "Resting HR <60 bpm",
          "Resting HR <80 bpm",
          "Resting HR <110 bpm",
          "Resting HR <120 bpm"
        ],
        "correct": 2,
        "explanation": "The RACE II trial showed that lenient rate control (<110 bpm at rest) was non-inferior to strict control (<80 bpm) with fewer medication side effects. Lenient control is now preferred for most asymptomatic patients."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "AFFIRM",
        "year": "2002",
        "summary": "No mortality difference between rate and rhythm control strategies. Rhythm control had more hospitalizations.",
        "concepts": [
          "afib"
        ]
      },
      {
        "type": "trial",
        "title": "ARISTOTLE",
        "year": "2011",
        "summary": "Apixaban superior to warfarin for stroke prevention in AF with less bleeding.",
        "concepts": [
          "afib",
          "anticoagulation"
        ]
      }
    ]
  },
  "hyponatremia": {
    "id": "hyponatremia",
    "name": "Hyponatremia",
    "category": "renal",
    "subcategory": "electrolytes",
    "knowledge": [
      "Classification by volume status",
      "SIADH diagnostic criteria",
      "Osmotic demyelination risk",
      "Correction rate guidelines"
    ],
    "skills": [
      "Determine volume status clinically",
      "Calculate free water deficit/excess",
      "Safely correct sodium",
      "Manage overcorrection"
    ],
    "lesson": {
      "title": "Hyponatremia: A Systematic Approach",
      "sections": [
        {
          "type": "intro",
          "content": "Hyponatremia (Na <135 mEq/L) is the most common electrolyte disorder in hospitalized patients. The key to management is determining the cause through volume status assessment and urine studies, then correcting at an appropriate rate to avoid osmotic demyelination syndrome."
        },
        {
          "type": "concept",
          "title": "Step 1: Rule Out Pseudohyponatremia",
          "content": "**Check serum osmolality first:**\n\n\u2022 **Hypotonic (<280):** True hyponatremia\u2014proceed to evaluation\n\u2022 **Isotonic (280-295):** Pseudohyponatremia from severe hyperlipidemia or hyperproteinemia\n\u2022 **Hypertonic (>295):** Translocational\u2014glucose, mannitol, contrast\n\n**Glucose correction:**\nFor every 100 mg/dL glucose >100, add 1.6-2.4 mEq/L to measured sodium"
        },
        {
          "type": "concept",
          "title": "Step 2: Assess Volume Status",
          "content": "**HYPOVOLEMIC hyponatremia:**\n\u2022 Causes: GI losses, diuretics, third-spacing, adrenal insufficiency\n\u2022 Urine Na <20 (renal conservation) or >40 (renal wasting)\n\u2022 Treatment: Normal saline\n\n**EUVOLEMIC hyponatremia:**\n\u2022 Causes: SIADH, hypothyroidism, adrenal insufficiency, psychogenic polydipsia\n\u2022 Most common cause: SIADH\n\u2022 Urine Na typically >40, UOsm >100\n\n**HYPERVOLEMIC hyponatremia:**\n\u2022 Causes: CHF, cirrhosis, nephrotic syndrome\n\u2022 Dilutional\u2014total body water increased more than sodium\n\u2022 Urine Na <20 (except CKD)"
        },
        {
          "type": "concept",
          "title": "SIADH Criteria",
          "content": "**All must be present:**\n\u2022 Serum osmolality <275 mOsm/kg\n\u2022 Urine osmolality >100 mOsm/kg (inappropriately concentrated)\n\u2022 Urine sodium >30-40 mEq/L\n\u2022 Clinical euvolemia\n\u2022 Normal thyroid and adrenal function\n\u2022 No diuretics\n\n**Common causes:** Malignancy (lung, GI, GU), CNS disorders, pulmonary disease, medications (SSRIs, carbamazepine), pain, nausea"
        },
        {
          "type": "pearl",
          "title": "The Urine Sodium Trick",
          "content": "Urine sodium helps distinguish hypovolemic causes:\n\u2022 UNa <20: Volume depletion (GI losses, third-spacing)\u2014kidneys conserving sodium\n\u2022 UNa >40: Renal salt wasting (diuretics, adrenal insufficiency, cerebral salt wasting)\n\nBut remember: recent diuretic use invalidates urine sodium. Check FEUrea if on diuretics."
        },
        {
          "type": "alert",
          "title": "Safe Correction Rates",
          "content": "**Risk of osmotic demyelination syndrome (ODS) if corrected too fast!**\n\nHigh-risk patients: Na <105, chronic (>48h), alcoholism, malnutrition, liver disease, hypokalemia\n\n**Safe correction limits:**\n\u2022 Goal: 6-8 mEq/L per 24 hours (max 8)\n\u2022 Never exceed 10-12 mEq/L in any 24h period\n\u2022 Recheck sodium q2-4h during treatment\n\n**If overcorrection occurs:**\n\u2022 Give D5W to lower sodium back down\n\u2022 Consider DDAVP 1-2 mcg q6-8h to prevent water excretion\n\u2022 Target: bring back to safe correction rate"
        }
      ],
      "article": {
        "title": "Hyponatremia: Pathophysiology and Management",
        "readTime": "14 min",
        "content": "<h2>Why Does Hyponatremia Matter?</h2>\n<p>Sodium is the primary determinant of serum osmolality and extracellular fluid volume. When sodium drops, water moves into cells, causing cellular edema. In the brain\u2014constrained by the skull\u2014this causes symptoms ranging from headache and confusion to seizures, herniation, and death.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Symptoms correlate with both severity and acuity. Acute hyponatremia (developing over hours) is much more dangerous than chronic hyponatremia at the same sodium level, because the brain hasn't had time to adapt.\n</div>\n\n<h2>Brain Adaptation</h2>\n<p>When hyponatremia develops slowly, the brain extrudes osmolytes (organic solutes) to reduce cellular swelling. This adaptation takes 24-48 hours. The adapted brain has fewer intracellular solutes\u2014which is why rapid correction is dangerous. Raising serum sodium quickly causes water to rush out of brain cells, causing osmotic demyelination syndrome.</p>\n\n<h2>Osmotic Demyelination Syndrome</h2>\n<p>ODS (formerly central pontine myelinolysis) occurs when chronic hyponatremia is corrected too rapidly. Symptoms appear 2-6 days after correction: dysarthria, dysphagia, quadriparesis, locked-in syndrome. MRI shows characteristic pontine and extrapontine lesions. It can be fatal or cause permanent disability.</p>\n<p>Risk factors: chronic hyponatremia, alcoholism, malnutrition, hypokalemia, liver disease. The risk increases dramatically when correction exceeds 10-12 mEq/L in 24 hours.</p>\n\n<div class=\"article-pearl\">\n<strong>Clinical Pearl:</strong> When treating hypovolemic hyponatremia with saline, watch for rapid autocorrection. As volume is restored, ADH suppression can cause a water diuresis, rapidly increasing sodium. Check sodium every 2-4 hours during treatment.\n</div>\n\n<h2>Treatment by Cause</h2>\n<p><strong>Hypovolemic:</strong> Normal saline. The sodium will rise as volume is restored. Watch for overcorrection.</p>\n<p><strong>Euvolemic (SIADH):</strong> Fluid restriction first (typically <1L/day). If refractory: salt tablets, loop diuretics (to excrete free water), or vaptans (tolvaptan).</p>\n<p><strong>Hypervolemic:</strong> Fluid and salt restriction. Treat underlying cause (optimize HF, manage cirrhosis). Vaptans can help but don't improve outcomes.</p>\n<p><strong>Symptomatic/severe:</strong> Hypertonic (3%) saline. Give 100-150 mL bolus, can repeat twice. Goal is to raise sodium 4-6 mEq/L to improve symptoms, then slow down.</p>"
      },
      "podcast": {
        "title": "Hyponatremia with Dr. Nephron, Nephrologist",
        "duration": "11:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Nephron, hyponatremia seems to confuse a lot of trainees. What's your framework?"
          },
          {
            "speaker": "Dr. Nephron",
            "text": "I keep it simple. First, is this real? Check serum osmolality\u2014if it's not low, you don't have true hypotonic hyponatremia. Then assess volume status. That's 80% of the diagnosis right there."
          },
          {
            "speaker": "Host",
            "text": "How do you assess volume status?"
          },
          {
            "speaker": "Dr. Nephron",
            "text": "It's clinical. Look at the mucous membranes, skin turgor, JVP. Check orthostatic vitals. Look at the BUN-to-creatinine ratio. But honestly, the history often tells you\u2014are they vomiting, taking diuretics, or do they have heart failure or cirrhosis?"
          },
          {
            "speaker": "Host",
            "text": "When do you check urine studies?"
          },
          {
            "speaker": "Dr. Nephron",
            "text": "Always get urine sodium and osmolality. Urine sodium tells you if kidneys are conserving or wasting sodium. Urine osmolality tells you if ADH is active. In SIADH, the urine is inappropriately concentrated\u2014the kidney should be diluting to get rid of excess water, but ADH won't let it."
          },
          {
            "speaker": "Host",
            "text": "What's your approach to correction?"
          },
          {
            "speaker": "Dr. Nephron",
            "text": "Slow and steady. I aim for 4-6 mEq/L in the first 24 hours, max 8. I check sodium every 2-4 hours during active treatment. And I always have a plan for overcorrection\u2014D5W and DDAVP ready to go."
          },
          {
            "speaker": "Host",
            "text": "When do you give 3% saline?"
          },
          {
            "speaker": "Dr. Nephron",
            "text": "Only for symptomatic hyponatremia\u2014seizures, severe confusion, obtundation. Give 100-150 mL over 10-20 minutes, check sodium, repeat up to twice if needed. The goal is to stop symptoms, not normalize sodium. Once symptoms improve, switch to a slower strategy."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 70-year-old woman with SCLC has sodium of 118 mEq/L. She's clinically euvolemic. Urine osmolality is 450 mOsm/kg, urine sodium 55 mEq/L. What is the most likely diagnosis?",
        "options": [
          "Psychogenic polydipsia",
          "SIADH",
          "Adrenal insufficiency",
          "Cerebral salt wasting"
        ],
        "correct": 1,
        "explanation": "This is classic SIADH: euvolemic, low serum sodium, inappropriately concentrated urine (UOsm >100), high urine sodium (>30-40), with a classic cause (SCLC). Psychogenic polydipsia has maximally dilute urine. Adrenal insufficiency can mimic SIADH but should be ruled out. Cerebral salt wasting is hypovolemic."
      },
      {
        "question": "A patient with chronic hyponatremia (Na 112 mEq/L) is started on treatment. After 18 hours, sodium is 124 mEq/L. What is the most appropriate next step?",
        "options": [
          "Continue current therapy",
          "Switch to 3% saline",
          "Give D5W and consider DDAVP",
          "No intervention needed"
        ],
        "correct": 2,
        "explanation": "This patient's sodium increased 12 mEq/L in 18 hours\u2014exceeding the safe limit of 8-10 mEq/24h and putting them at high risk for osmotic demyelination. You must actively lower the sodium back down using D5W infusion. DDAVP (1-2 mcg IV) can prevent ongoing water diuresis. Goal is to stay within safe correction limits."
      },
      {
        "question": "In a hypovolemic patient with hyponatremia, urine sodium is 8 mEq/L. This most likely indicates:",
        "options": [
          "Diuretic use",
          "Adrenal insufficiency",
          "Appropriate renal sodium conservation",
          "SIADH"
        ],
        "correct": 2,
        "explanation": "Low urine sodium (<20 mEq/L) in hypovolemic hyponatremia indicates the kidneys are appropriately conserving sodium in response to volume depletion. This suggests extrarenal losses (GI, skin, third-spacing). Diuretic use and adrenal insufficiency cause renal salt wasting (UNa >40). SIADH is euvolemic with high UNa."
      },
      {
        "question": "A 55-year-old with sodium of 108 mEq/L is having a seizure. What is the immediate treatment?",
        "options": [
          "Fluid restriction and observation",
          "Normal saline at 200 mL/hr",
          "3% saline 100-150 mL bolus",
          "Tolvaptan 15mg PO"
        ],
        "correct": 2,
        "explanation": "Symptomatic severe hyponatremia (seizures, coma) is a medical emergency requiring hypertonic (3%) saline. Give 100-150 mL over 10-20 minutes, check sodium, repeat up to twice. Goal is to raise sodium 4-6 mEq/L to stop symptoms. Normal saline is too slow. Tolvaptan is contraindicated in symptomatic hyponatremia and takes too long to work."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "European Hyponatremia Guidelines",
        "year": "2014",
        "summary": "Comprehensive guidelines on diagnosis and management of hyponatremia, including detailed algorithms based on volume status and acuity.",
        "concepts": [
          "hyponatremia",
          "siadh"
        ]
      },
      {
        "type": "guideline",
        "title": "AJM Expert Panel Recommendations",
        "year": "2013",
        "summary": "Expert panel recommendations emphasizing safe correction rates and management of overcorrection to prevent osmotic demyelination.",
        "concepts": [
          "hyponatremia",
          "correction"
        ]
      },
      {
        "type": "trial",
        "title": "SALT-1 and SALT-2",
        "year": "2006",
        "summary": "Tolvaptan improved serum sodium in SIADH and hypervolemic hyponatremia. Limited by hepatotoxicity concerns and lack of outcome benefit.",
        "concepts": [
          "hyponatremia",
          "vaptans"
        ]
      }
    ]
  },
  "acute-pancreatitis": {
    "id": "acute-pancreatitis",
    "name": "Acute Pancreatitis",
    "category": "gi",
    "subcategory": "pancreas",
    "knowledge": [
      "Atlanta classification",
      "Fluid resuscitation strategies",
      "Nutrition timing",
      "Complication recognition"
    ],
    "skills": [
      "Diagnose acute pancreatitis",
      "Assess severity early",
      "Guide fluid resuscitation",
      "Manage complications"
    ],
    "lesson": {
      "title": "Acute Pancreatitis: Evidence-Based Management",
      "sections": [
        {
          "type": "intro",
          "content": "Acute pancreatitis is inflammation of the pancreas with variable severity\u2014from mild self-limited disease to severe necrotizing pancreatitis with organ failure. Management has evolved from aggressive early intervention to supportive care with fluid resuscitation, early feeding, and selective management of complications."
        },
        {
          "type": "concept",
          "title": "Diagnosis",
          "content": "**Requires 2 of 3 criteria:**\n\n1. **Abdominal pain:** Epigastric, often radiating to back, severe\n2. **Lipase:** \u22653\u00d7 upper limit of normal (more sensitive/specific than amylase)\n3. **Imaging:** CT or MRI showing characteristic findings\n\n**Note:** If pain and lipase are classic, imaging is NOT required for diagnosis (avoid unnecessary radiation/contrast)"
        },
        {
          "type": "concept",
          "title": "Etiology",
          "content": "**Common (>80%):**\n\u2022 Gallstones (40%): Check RUQ ultrasound\n\u2022 Alcohol (30%): Usually requires years of heavy use\n\u2022 Idiopathic (15-20%): After workup negative\n\n**Less common:**\n\u2022 Hypertriglyceridemia (TG >1000 mg/dL)\n\u2022 Post-ERCP\n\u2022 Medications (azathioprine, valproic acid, GLP-1 agonists)\n\u2022 Autoimmune pancreatitis\n\u2022 Pancreatic divisum, tumors\n\n**Mnemonic:** I GET SMASHED (Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps/Malignancy, Autoimmune, Scorpion bite, Hyperlipidemia/Hypercalcemia, ERCP, Drugs)"
        },
        {
          "type": "concept",
          "title": "Severity Assessment",
          "content": "**Atlanta Classification:**\n\u2022 **Mild:** No organ failure, no local complications (80%)\n\u2022 **Moderate:** Transient organ failure (<48h) or local complications\n\u2022 **Severe:** Persistent organ failure (\u226548h) (10-20%)\n\n**Prognostic scores:**\n\u2022 BISAP (Bedside Index): BUN >25, Impaired mental status, SIRS, Age >60, Pleural effusion\n\u2022 BISAP \u22653 = higher mortality\n\n**Early predictors of severity:**\n\u2022 Hemoconcentration (Hct >44%)\n\u2022 Rising BUN\n\u2022 SIRS criteria"
        },
        {
          "type": "pearl",
          "title": "Fluid Resuscitation: The New Evidence",
          "content": "Traditional teaching was aggressive fluids (250-500 mL/hr). Recent evidence (WATERFALL trial) suggests moderate resuscitation (1.5 mL/kg/hr) with boluses for hypovolemia is safer than aggressive fluids. Over-resuscitation may cause pulmonary edema, abdominal compartment syndrome, and worse outcomes. Use goal-directed therapy: target urine output >0.5 mL/kg/hr, improving BUN/Hct."
        },
        {
          "type": "alert",
          "title": "Complications",
          "content": "**Early (<1 week):**\n\u2022 Organ failure (respiratory, renal, cardiovascular)\n\u2022 Acute peripancreatic fluid collections\n\n**Late (>1 week):**\n\u2022 Pancreatic pseudocyst (walled-off fluid, >4 weeks)\n\u2022 Walled-off necrosis (WON)\n\u2022 Infected necrosis (suspect if fever, rising WBC after initial improvement)\n\n**Management of infected necrosis:**\n\u2022 Antibiotics (carbapenems penetrate well)\n\u2022 Delay intervention if possible (>4 weeks allows wall to mature)\n\u2022 Prefer minimally invasive: endoscopic or percutaneous drainage\n\u2022 Surgery if minimally invasive fails"
        }
      ],
      "article": {
        "title": "Acute Pancreatitis: What's Changed",
        "readTime": "13 min",
        "content": "<h2>The Fluid Debate</h2>\n<p>For decades, 'aggressive' fluid resuscitation was dogma in acute pancreatitis. The rationale: pancreatitis causes third-spacing and hemoconcentration; replace fluids to prevent necrosis. But aggressive fluids come with risks\u2014pulmonary edema, abdominal compartment syndrome, and possibly worsened outcomes.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The WATERFALL trial (2022) was stopped early because aggressive fluids caused harm. Moderate resuscitation (1.5 mL/kg/hr Lactated Ringer's) is now preferred for most patients. Give boluses for hypotension or oliguria, but don't blindly push liters of fluid.\n</div>\n\n<h2>Early Feeding Wins</h2>\n<p>The old approach was NPO until pain resolved and enzymes normalized. Multiple trials now show early oral feeding (within 24 hours) is safe and may reduce complications. Start with low-fat, solid diet when nausea/vomiting resolve. The 'pancreatic rest' concept is obsolete.</p>\n<p>For patients who can't tolerate oral feeding, enteral nutrition (via nasoenteric tube) is preferred over TPN. Enteral feeding maintains gut barrier function and reduces infectious complications. TPN is reserved for those who fail enteral trials.</p>\n\n<h2>Antibiotic Stewardship</h2>\n<p>Prophylactic antibiotics for severe pancreatitis don't prevent infected necrosis and aren't recommended. Use antibiotics only for documented or strongly suspected infection: infected necrosis (gas on CT, culture-positive aspiration), cholangitis, or other confirmed infection. Carbapenems penetrate pancreatic tissue well.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Gallstone pancreatitis with cholangitis needs urgent ERCP within 24 hours. Gallstone pancreatitis without cholangitis can have interval cholecystectomy during the same admission (for mild cases) to prevent recurrence.\n</div>\n\n<h2>Managing Necrosis</h2>\n<p>Sterile necrosis is managed conservatively. Infected necrosis requires intervention, but timing matters\u2014delay drainage until week 4 if possible to allow the necrosis to organize and wall off. This makes minimally invasive approaches (endoscopic necrosectomy, video-assisted retroperitoneal debridement) more successful and reduces surgical morbidity.</p>"
      },
      "podcast": {
        "title": "Pancreatitis Updates with Dr. Pancreas",
        "duration": "11:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Pancreas, a patient presents with severe epigastric pain and lipase of 1200. What's your approach?"
          },
          {
            "speaker": "Dr. Pancreas",
            "text": "Confirm pancreatitis\u2014pain, lipase more than 3 times normal, I don't need imaging for diagnosis. Then assess severity. I look for organ failure: is oxygen needed, is kidney function declining, is blood pressure dropping? I calculate BISAP for prognosis."
          },
          {
            "speaker": "Host",
            "text": "What about fluids?"
          },
          {
            "speaker": "Dr. Pancreas",
            "text": "This is where practice has changed. I don't blindly push aggressive fluids anymore. WATERFALL showed moderate resuscitation is safer. I give Lactated Ringer's at about 1.5 mL/kg/hr, with boluses if they're hypovolemic or oliguric. I monitor urine output, BUN, hematocrit to guide therapy."
          },
          {
            "speaker": "Host",
            "text": "When do you feed them?"
          },
          {
            "speaker": "Dr. Pancreas",
            "text": "Early\u2014within 24 hours if they can tolerate it. Low-fat solid diet once nausea resolves. The 'NPO until enzymes normalize' approach is outdated. If they can't eat, I place a nasoenteric tube for enteral nutrition rather than TPN. The gut needs to work."
          },
          {
            "speaker": "Host",
            "text": "What workup do you do for etiology?"
          },
          {
            "speaker": "Dr. Pancreas",
            "text": "Right upper quadrant ultrasound for gallstones in everyone\u2014it's the most common cause. Lipid panel for hypertriglyceridemia. Careful medication history. If those are negative and they don't drink, I consider EUS or MRCP to look for occult stones, pancreatic divisum, or mass."
          },
          {
            "speaker": "Host",
            "text": "When do you worry about infected necrosis?"
          },
          {
            "speaker": "Dr. Pancreas",
            "text": "Clinical deterioration after initial improvement\u2014fever spike, rising white count, worsening sepsis. Gas in the necrosis collection on CT is diagnostic. I don't do prophylactic antibiotics, but if infection is suspected, I start carbapenems and involve interventional team. We try to delay drainage to week 4 if patient is stable enough."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient presents with epigastric pain and lipase of 800 U/L (normal <60). A CT scan is ordered by the ED. Is imaging necessary for diagnosis?",
        "options": [
          "Yes, CT is required to diagnose pancreatitis",
          "No, diagnosis is made with pain + lipase elevation",
          "Yes, to determine etiology",
          "Only if lipase >1000"
        ],
        "correct": 1,
        "explanation": "Acute pancreatitis is diagnosed when 2 of 3 criteria are met: characteristic pain, lipase \u22653\u00d7 normal, and/or imaging findings. With classic pain and lipase >3\u00d7 normal, imaging is NOT required for diagnosis. CT is indicated if diagnosis is uncertain, complications are suspected, or no improvement after 48-72 hours."
      },
      {
        "question": "Based on the WATERFALL trial, what is the recommended fluid resuscitation strategy for acute pancreatitis?",
        "options": [
          "Aggressive fluids (250-500 mL/hr) for all patients",
          "Moderate fluids (~1.5 mL/kg/hr) with boluses for hypovolemia",
          "Restrict fluids to prevent edema",
          "Colloids rather than crystalloids"
        ],
        "correct": 1,
        "explanation": "The WATERFALL trial showed aggressive fluids caused harm (increased fluid overload). Moderate resuscitation (~1.5 mL/kg/hr Lactated Ringer's) with boluses for hypotension or oliguria is now preferred. Goal-directed therapy targeting urine output >0.5 mL/kg/hr and improving BUN is recommended."
      },
      {
        "question": "A patient with gallstone pancreatitis has fever, RUQ pain, elevated bilirubin, and dilated CBD. What is the priority intervention?",
        "options": [
          "Interval cholecystectomy within 6 weeks",
          "ERCP within 24 hours",
          "CT scan to evaluate necrosis",
          "Conservative management with antibiotics"
        ],
        "correct": 1,
        "explanation": "This patient has cholangitis (fever, jaundice, RUQ pain) in addition to gallstone pancreatitis. Cholangitis requires urgent biliary decompression via ERCP within 24 hours. Without cholangitis, cholecystectomy can be scheduled during the same admission (mild cases) or within 2-4 weeks."
      },
      {
        "question": "When should intervention for infected pancreatic necrosis ideally be performed?",
        "options": [
          "Immediately upon diagnosis",
          "Within 1 week",
          "After 4 weeks if patient is stable",
          "Only if septic shock develops"
        ],
        "correct": 2,
        "explanation": "Delaying intervention until week 4 allows the necrosis to wall off, making minimally invasive approaches (endoscopic, percutaneous) more successful. If the patient can be supported with antibiotics and ICU care, delay is preferred. Early intervention has higher morbidity. Immediate surgery is reserved for rapidly deteriorating patients."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "WATERFALL Trial",
        "year": "2022",
        "summary": "Aggressive fluid resuscitation increased fluid overload without improving outcomes compared to moderate resuscitation in acute pancreatitis. Trial stopped early for safety.",
        "concepts": [
          "pancreatitis",
          "fluids"
        ]
      },
      {
        "type": "guideline",
        "title": "ACG Acute Pancreatitis Guidelines",
        "year": "2013",
        "summary": "Comprehensive guidelines covering diagnosis, severity assessment, fluid management, nutrition, and management of complications.",
        "concepts": [
          "pancreatitis",
          "management"
        ]
      },
      {
        "type": "trial",
        "title": "PONCHO Trial",
        "year": "2014",
        "summary": "Same-admission cholecystectomy reduced gallstone-related complications compared to interval cholecystectomy in mild gallstone pancreatitis.",
        "concepts": [
          "pancreatitis",
          "cholecystectomy"
        ]
      }
    ]
  },
  "dvt": {
    "id": "dvt",
    "name": "Deep Vein Thrombosis",
    "category": "pulmonary",
    "subcategory": "vte",
    "knowledge": [
      "Wells criteria for DVT",
      "Diagnostic imaging approach",
      "Anticoagulation selection",
      "IVC filter indications"
    ],
    "skills": [
      "Apply clinical decision rules",
      "Interpret compression ultrasound",
      "Select anticoagulation",
      "Determine treatment duration"
    ],
    "lesson": {
      "title": "Deep Vein Thrombosis: Diagnosis and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Deep vein thrombosis (DVT) is clot formation in the deep venous system, most commonly in the lower extremities. Proximal DVT (above the knee) poses significant risk for pulmonary embolism and requires anticoagulation. Diagnosis combines clinical probability assessment with imaging, and treatment has been revolutionized by DOACs."
        },
        {
          "type": "concept",
          "title": "Wells Criteria for DVT",
          "content": "**Wells DVT Score:**\n\u2022 Active cancer: +1\n\u2022 Paralysis/paresis or recent immobilization of leg: +1\n\u2022 Bedridden >3 days or surgery within 12 weeks: +1\n\u2022 Localized tenderness along deep veins: +1\n\u2022 Entire leg swelling: +1\n\u2022 Calf swelling >3cm vs other leg: +1\n\u2022 Pitting edema (greater in symptomatic leg): +1\n\u2022 Collateral superficial veins: +1\n\u2022 Previously documented DVT: +1\n\u2022 Alternative diagnosis as likely as DVT: -2\n\n**Interpretation:**\n\u2022 \u22640: Low probability (~5% DVT)\n\u2022 1-2: Moderate probability (~17% DVT)\n\u2022 \u22653: High probability (~53% DVT)"
        },
        {
          "type": "concept",
          "title": "Diagnostic Algorithm",
          "content": "**Low probability:**\n\u2022 D-dimer first\n\u2022 If negative \u2192 DVT ruled out\n\u2022 If positive \u2192 Compression ultrasound\n\n**Moderate probability:**\n\u2022 D-dimer or direct to ultrasound\n\u2022 If D-dimer negative \u2192 DVT ruled out\n\u2022 If positive \u2192 Ultrasound\n\n**High probability:**\n\u2022 Compression ultrasound (skip D-dimer)\n\u2022 If negative \u2192 Consider repeat in 1 week or whole-leg US"
        },
        {
          "type": "concept",
          "title": "Treatment",
          "content": "**Proximal DVT (popliteal and above):**\n\u2022 Requires anticoagulation\n\u2022 DOACs preferred for most patients\n\u2022 Rivaroxaban or apixaban: No parenteral lead-in\n\u2022 Edoxaban or dabigatran: Requires 5+ days LMWH first\n\n**Distal DVT (below knee):**\n\u2022 Controversial\u2014can observe with serial imaging\n\u2022 Treat if: Severe symptoms, high risk for extension, unprovoked\n\n**Duration:**\n\u2022 Provoked (surgery, immobilization): 3 months\n\u2022 Unprovoked: Extended (consider patient factors)"
        },
        {
          "type": "pearl",
          "title": "Upper Extremity DVT",
          "content": "Upper extremity DVT is less common but increasingly seen with central lines and PICCs. Effort thrombosis (Paget-Schroetter) occurs in young athletes. Treatment is similar to lower extremity DVT\u2014anticoagulation for at least 3 months. Remove the inciting line if possible. Thrombolysis may be considered for severe, acute cases in young patients."
        },
        {
          "type": "alert",
          "title": "IVC Filter Indications",
          "content": "**Absolute indication:**\n\u2022 Acute proximal DVT or PE + absolute contraindication to anticoagulation\n\n**Relative/controversial:**\n\u2022 Large clot burden with limited cardiopulmonary reserve\n\u2022 Recurrent PE despite therapeutic anticoagulation\n\n**Key points:**\n\u2022 Retrievable filters should be removed when anticoagulation is resumed\n\u2022 Filters reduce PE but increase DVT recurrence and don't improve survival\n\u2022 Anticoagulation should be started as soon as contraindication resolves"
        }
      ],
      "article": {
        "title": "DVT: Modern Diagnostic and Treatment Approach",
        "readTime": "11 min",
        "content": "<h2>The D-dimer Decision</h2>\n<p>D-dimer is a fibrin degradation product elevated when clot is being broken down. It's sensitive but not specific\u2014elevated in infection, inflammation, pregnancy, cancer, recent surgery, and advanced age. Its value is in ruling OUT DVT when negative in low-to-moderate probability patients.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Age-adjusted D-dimer cutoffs (age \u00d7 10 for patients >50) improve specificity without sacrificing sensitivity. A 70-year-old with D-dimer 650 can have DVT ruled out if clinical probability is low.\n</div>\n\n<h2>Compression Ultrasound</h2>\n<p>Compression ultrasound is the imaging test of choice. The principle is simple: a normal vein collapses completely under probe pressure; a vein with thrombus doesn't. Sensitivity for proximal DVT exceeds 95%. Sensitivity for isolated calf DVT is lower (~70%), which is why serial imaging is sometimes needed.</p>\n\n<h2>The Calf DVT Debate</h2>\n<p>Isolated distal DVT (below the knee) is controversial. About 15% extend proximally if untreated, and these can cause PE. Options include: anticoagulation for 3 months, serial ultrasound with treatment only if extension, or short-course anticoagulation. Most experts lean toward treatment if unprovoked or symptomatic.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Leg elevation and early ambulation are encouraged. Bed rest doesn't prevent PE and may promote deconditioning. Compression stockings were once standard but are now optional after the SOX trial showed no prevention of post-thrombotic syndrome.\n</div>\n\n<h2>Post-Thrombotic Syndrome</h2>\n<p>PTS occurs in up to 40% of patients after DVT\u2014chronic leg swelling, pain, skin changes, even ulceration. Risk factors include proximal location, recurrent DVT, obesity, and possibly inadequate initial anticoagulation. Once believed preventable with compression stockings, the SOX trial found no benefit. Treatment is supportive.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with Wells score of 0 for DVT has a negative D-dimer. What is the next step?",
        "options": [
          "Compression ultrasound",
          "CT venography",
          "DVT ruled out - no further workup",
          "Repeat D-dimer in 24 hours"
        ],
        "correct": 2,
        "explanation": "With low clinical probability (Wells \u22640) and negative D-dimer, DVT is effectively ruled out. No imaging is needed. This is the power of combining clinical probability with D-dimer\u2014it safely reduces unnecessary imaging."
      },
      {
        "question": "A patient has acute proximal DVT but also active GI bleeding. What is the most appropriate management?",
        "options": [
          "Start anticoagulation despite bleeding",
          "IVC filter placement",
          "Observation with serial ultrasounds",
          "Thrombolysis"
        ],
        "correct": 1,
        "explanation": "Active bleeding is an absolute contraindication to anticoagulation. An IVC filter is indicated for acute proximal DVT when anticoagulation is contraindicated to prevent PE. Once bleeding is controlled, anticoagulation should be started and the filter retrieved."
      },
      {
        "question": "How long should anticoagulation be continued for DVT provoked by knee replacement surgery?",
        "options": [
          "1 month",
          "3 months",
          "6 months",
          "Indefinite"
        ],
        "correct": 1,
        "explanation": "DVT provoked by major surgery (strong transient risk factor) should be treated with anticoagulation for 3 months. The risk factor has resolved, and recurrence risk after stopping is low. Indefinite therapy is reserved for unprovoked DVT or persistent risk factors."
      },
      {
        "question": "Which DOAC can be started immediately for DVT without parenteral anticoagulation lead-in?",
        "options": [
          "Dabigatran",
          "Edoxaban",
          "Rivaroxaban",
          "Warfarin"
        ],
        "correct": 2,
        "explanation": "Rivaroxaban (and apixaban) can be started as single-drug therapy without parenteral lead-in. They use higher initial doses for the first few weeks. Dabigatran and edoxaban require at least 5 days of LMWH/UFH before starting. Warfarin always requires bridge therapy."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ASH VTE Guidelines",
        "year": "2020",
        "summary": "Evidence-based guidelines on VTE diagnosis and management, including anticoagulation selection, duration, and special populations.",
        "concepts": [
          "dvt",
          "anticoagulation"
        ]
      },
      {
        "type": "trial",
        "title": "SOX Trial",
        "year": "2014",
        "summary": "Compression stockings did not prevent post-thrombotic syndrome after DVT. Changed practice from routine stocking use.",
        "concepts": [
          "dvt",
          "pts"
        ]
      },
      {
        "type": "trial",
        "title": "EINSTEIN-DVT",
        "year": "2010",
        "summary": "Rivaroxaban non-inferior to enoxaparin/warfarin for DVT treatment, establishing single-drug DOAC approach.",
        "concepts": [
          "dvt",
          "doac"
        ]
      }
    ]
  },
  "alcohol-withdrawal": {
    "id": "alcohol-withdrawal",
    "name": "Alcohol Withdrawal",
    "category": "neurology",
    "subcategory": "altered-mental-status",
    "knowledge": [
      "CIWA-Ar scoring",
      "Benzodiazepine protocols",
      "Delirium tremens recognition",
      "Wernicke's encephalopathy prevention"
    ],
    "skills": [
      "Assess withdrawal severity",
      "Titrate benzodiazepines",
      "Recognize complications",
      "Prevent Wernicke's"
    ],
    "lesson": {
      "title": "Alcohol Withdrawal: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Alcohol withdrawal syndrome (AWS) occurs when chronic alcohol users abruptly reduce or stop drinking. Severity ranges from mild tremor to life-threatening delirium tremens. Management centers on symptom-triggered benzodiazepine therapy guided by validated scoring systems. Thiamine should be given to all patients to prevent Wernicke's encephalopathy."
        },
        {
          "type": "concept",
          "title": "Clinical Spectrum",
          "content": "**Timeline after last drink:**\n\n**6-24 hours:** Minor withdrawal\n\u2022 Tremor, anxiety, insomnia\n\u2022 Nausea, sweating\n\u2022 Tachycardia, hypertension\n\n**12-48 hours:** Withdrawal seizures\n\u2022 Generalized tonic-clonic\n\u2022 Usually single or brief cluster\n\u2022 3% of patients with withdrawal\n\n**48-72 hours:** Alcoholic hallucinosis\n\u2022 Visual, auditory, tactile hallucinations\n\u2022 Clear sensorium (not delirious)\n\n**48-96 hours:** Delirium tremens (DT)\n\u2022 Delirium (confusion, disorientation)\n\u2022 Autonomic instability (fever, tachycardia, hypertension)\n\u2022 5% of withdrawal patients; 5-15% mortality if untreated"
        },
        {
          "type": "concept",
          "title": "CIWA-Ar Assessment",
          "content": "**Clinical Institute Withdrawal Assessment for Alcohol (CIWA-Ar):**\n\n10 items, max score 67:\n\u2022 Nausea/vomiting (0-7)\n\u2022 Tremor (0-7)\n\u2022 Sweating (0-7)\n\u2022 Anxiety (0-7)\n\u2022 Agitation (0-7)\n\u2022 Tactile disturbances (0-7)\n\u2022 Auditory disturbances (0-7)\n\u2022 Visual disturbances (0-7)\n\u2022 Headache (0-7)\n\u2022 Orientation (0-4)\n\n**Severity:**\n\u2022 <10: Mild\n\u2022 10-18: Moderate\n\u2022 >18: Severe"
        },
        {
          "type": "concept",
          "title": "Treatment Protocol",
          "content": "**Symptom-triggered therapy (preferred):**\n\u2022 Assess CIWA-Ar q1h\n\u2022 CIWA \u226510: Give benzodiazepine\n\u2022 Recheck and repeat until CIWA <10\n\u2022 Then assess q4h, treat if \u226510\n\n**Typical dosing:**\n\u2022 Chlordiazepoxide 25-100mg PO q1h PRN\n\u2022 Lorazepam 1-4mg IV/PO q1h PRN\n\u2022 Diazepam 5-20mg IV/PO q1h PRN\n\n**Fixed-schedule (for patients who can't be assessed):**\n\u2022 Standing doses with PRN supplementation\n\u2022 Higher total benzodiazepine use\n\u2022 Reserved for ICU, intubated patients"
        },
        {
          "type": "pearl",
          "title": "Thiamine First!",
          "content": "Give thiamine BEFORE glucose. Glucose metabolism consumes thiamine; giving glucose first can precipitate or worsen Wernicke's encephalopathy in a thiamine-depleted patient. Dose: Thiamine 100-500mg IV for 3-5 days. The classic triad (confusion, ataxia, ophthalmoplegia) is present in <20% of Wernicke's cases\u2014have a low threshold to treat."
        },
        {
          "type": "alert",
          "title": "Delirium Tremens",
          "content": "**Recognize DT:**\n\u2022 Onset 48-96 hours after last drink\n\u2022 Delirium (fluctuating confusion, disorientation)\n\u2022 Severe autonomic instability (fever, diaphoresis, tachycardia)\n\u2022 Visual hallucinations common\n\u2022 Mortality 5-15% without treatment\n\n**Management:**\n\u2022 ICU monitoring\n\u2022 High-dose benzodiazepines (may need hundreds of mg)\n\u2022 If refractory: Phenobarbital or propofol\n\u2022 Supportive: IV fluids, electrolyte repletion, cooling if febrile\n\u2022 Look for concurrent illness (infection, trauma, pancreatitis)"
        }
      ],
      "article": {
        "title": "Alcohol Withdrawal: Evidence-Based Management",
        "readTime": "12 min",
        "content": "<h2>Pathophysiology</h2>\n<p>Chronic alcohol exposure causes CNS adaptation: GABA receptors downregulate, and glutamate (NMDA) receptors upregulate. When alcohol is removed, the inhibitory GABA effect is lost while excitatory glutamate is unopposed. This imbalance causes the hyperexcitable state of withdrawal.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Symptom-triggered therapy results in less total benzodiazepine use and shorter treatment duration compared to fixed-schedule dosing. It requires reliable CIWA-Ar scoring, which may not be possible in intubated, sedated, or delirious patients.\n</div>\n\n<h2>Benzodiazepine Selection</h2>\n<p><strong>Diazepam and chlordiazepoxide:</strong> Long half-life provides smooth coverage and self-tapering effect. Preferred for most patients.</p>\n<p><strong>Lorazepam:</strong> No active metabolites, safer in liver disease. Shorter half-life means more frequent dosing.</p>\n<p><strong>Phenobarbital:</strong> Alternative for benzodiazepine-refractory withdrawal or patients with DT. Additive CNS depression\u2014use carefully.</p>\n\n<h2>Wernicke's Encephalopathy</h2>\n<p>Thiamine deficiency causes Wernicke's encephalopathy\u2014the classic triad of confusion, ataxia, and ophthalmoplegia is present in minority of cases. Any altered mental status in a chronic alcohol user should prompt empiric thiamine. IV thiamine is preferred for absorption. Untreated, Wernicke's can progress to Korsakoff syndrome with permanent memory impairment.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Risk factors for severe withdrawal (DT, seizures) include: prior DT or seizures, high alcohol intake, comorbid illness, abnormal LFTs, concurrent drug use. These patients may benefit from loading-dose strategies or closer monitoring.\n</div>\n\n<h2>The 'Kindling' Phenomenon</h2>\n<p>Each withdrawal episode sensitizes the brain, making future withdrawals more severe. Patients with multiple prior withdrawals are at higher risk for seizures and DT. This is 'kindling'\u2014the neurobiological basis for escalating severity with repeated withdrawal episodes.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with chronic alcohol use is admitted for pneumonia. He last drank 48 hours ago and now has tremor, diaphoresis, and visual hallucinations with disorientation. What is the likely diagnosis?",
        "options": [
          "Alcoholic hallucinosis",
          "Minor withdrawal",
          "Delirium tremens",
          "Wernicke's encephalopathy"
        ],
        "correct": 2,
        "explanation": "Delirium (disorientation) plus visual hallucinations at 48 hours is delirium tremens. Alcoholic hallucinosis has hallucinations but preserved orientation (clear sensorium). Minor withdrawal has tremor and sweating but no confusion. Wernicke's has the triad of confusion, ataxia, and ophthalmoplegia\u2014not hallucinations."
      },
      {
        "question": "According to symptom-triggered therapy, when should a benzodiazepine be administered?",
        "options": [
          "Every 4 hours regardless of symptoms",
          "When CIWA-Ar score is \u226510",
          "Only if seizure occurs",
          "Only if blood pressure >180/100"
        ],
        "correct": 1,
        "explanation": "Symptom-triggered therapy uses CIWA-Ar scoring to guide treatment. Benzodiazepines are given when CIWA-Ar \u226510, then patient is reassessed and redosed until CIWA <10. This approach uses less total benzodiazepine than fixed-schedule dosing."
      },
      {
        "question": "Why should thiamine be given BEFORE glucose in a patient with suspected alcohol withdrawal?",
        "options": [
          "Glucose inactivates thiamine",
          "Glucose metabolism requires thiamine and can precipitate Wernicke's",
          "Thiamine enhances glucose absorption",
          "Glucose causes seizures in withdrawal"
        ],
        "correct": 1,
        "explanation": "Glucose metabolism consumes thiamine. In a thiamine-depleted patient (chronic alcohol use), giving glucose first can precipitate or worsen Wernicke's encephalopathy by further depleting limited thiamine stores. Always give thiamine first or concurrently with glucose."
      },
      {
        "question": "Which benzodiazepine is preferred for alcohol withdrawal in a patient with cirrhosis?",
        "options": [
          "Diazepam",
          "Chlordiazepoxide",
          "Lorazepam",
          "Midazolam"
        ],
        "correct": 2,
        "explanation": "Lorazepam has no active metabolites and is metabolized by glucuronidation, which is preserved in liver disease. Diazepam and chlordiazepoxide have active metabolites that accumulate in hepatic impairment, causing prolonged sedation. Lorazepam is safer in cirrhosis."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ASAM Alcohol Withdrawal Guidelines",
        "year": "2020",
        "summary": "Evidence-based guidelines on alcohol withdrawal management, emphasizing symptom-triggered therapy and CIWA-Ar scoring.",
        "concepts": [
          "withdrawal",
          "benzodiazepines"
        ]
      },
      {
        "type": "trial",
        "title": "Symptom-Triggered vs Fixed-Schedule",
        "year": "1994",
        "summary": "Symptom-triggered therapy reduced benzodiazepine use and treatment duration compared to fixed-schedule dosing.",
        "concepts": [
          "withdrawal",
          "ciwa"
        ]
      },
      {
        "type": "guideline",
        "title": "Wernicke's Encephalopathy Guidelines",
        "year": "2018",
        "summary": "Recommendations for thiamine dosing in alcohol use disorder to prevent and treat Wernicke's encephalopathy.",
        "concepts": [
          "wernicke",
          "thiamine"
        ]
      }
    ]
  },
  "hfpef": {
    "id": "hfpef",
    "name": "HFpEF (EF \u226550%)",
    "category": "cardiovascular",
    "subcategory": "heart-failure",
    "knowledge": [
      "H2FPEF diagnostic score",
      "HFpEF phenotypes",
      "SGLT2 inhibitor evidence",
      "Comorbidity management"
    ],
    "skills": [
      "Diagnose HFpEF using clinical criteria",
      "Differentiate from mimics",
      "Manage volume status",
      "Prescribe SGLT2 inhibitors"
    ],
    "lesson": {
      "title": "HFpEF: The Other Half of Heart Failure",
      "sections": [
        {
          "type": "intro",
          "content": "Heart failure with preserved ejection fraction (HFpEF) accounts for roughly half of all heart failure cases and is increasing in prevalence. Unlike HFrEF, treatment options were historically limited to diuretics and comorbidity management\u2014until SGLT2 inhibitors changed the landscape."
        },
        {
          "type": "concept",
          "title": "The Diagnostic Challenge",
          "content": "HFpEF is a diagnosis of exclusion requiring:\n\n1. **Signs/symptoms of HF** - Dyspnea, edema, orthopnea\n2. **LVEF \u226550%** on echo\n3. **Evidence of elevated filling pressures** - E/e' ratio, LA enlargement, elevated BNP\n4. **Exclusion of mimics** - Constrictive pericarditis, restrictive cardiomyopathy, pulmonary hypertension\n\nThe H2FPEF score helps estimate probability when diagnosis is uncertain."
        },
        {
          "type": "concept",
          "title": "H2FPEF Score",
          "content": "Calculate probability of HFpEF:\n\n\u2022 **H**eavy (BMI >30): 2 points\n\u2022 **H**ypertensive (\u22652 BP meds): 1 point\n\u2022 **F**ibrillation (Atrial): 3 points\n\u2022 **P**ulmonary HTN (PASP >35): 1 point\n\u2022 **E**lder (age >60): 1 point\n\u2022 **F**illing pressures (E/e' >9): 1 point\n\nScore 0-1: Low probability (\u226420%)\nScore 2-5: Intermediate (20-80%)\nScore 6-9: High probability (\u226580%)"
        },
        {
          "type": "pearl",
          "title": "Clinical Pearl",
          "content": "SGLT2 inhibitors are now the ONLY medication class with proven benefit in HFpEF. Both EMPEROR-Preserved and DELIVER showed reduced HF hospitalization. Unlike HFrEF, ACE inhibitors, ARBs, beta-blockers, and MRAs have NOT shown consistent benefit in HFpEF."
        },
        {
          "type": "concept",
          "title": "Management Strategy",
          "content": "**Disease-modifying therapy:**\n\u2022 SGLT2 inhibitors (dapagliflozin or empagliflozin)\n\n**Symptom management:**\n\u2022 Diuretics for congestion (often need lower doses than HFrEF)\n\u2022 Avoid over-diuresis (preload-dependent physiology)\n\n**Comorbidity optimization:**\n\u2022 Aggressive BP control\n\u2022 Rate control for AF\n\u2022 Weight loss (GLP-1 agonists showing promise)\n\u2022 Treat sleep apnea\n\u2022 Manage anemia"
        },
        {
          "type": "alert",
          "title": "Don't Miss the Mimics",
          "content": "Before diagnosing HFpEF, rule out:\n\n\u2022 **Cardiac amyloidosis** - Low-voltage ECG, echo strain pattern, technetium scan\n\u2022 **Constrictive pericarditis** - Septal bounce, annulus reversus\n\u2022 **High-output heart failure** - Anemia, thyrotoxicosis, AV fistula\n\u2022 **Pulmonary hypertension** - Group 1 PAH has different treatment\n\nMissing amyloidosis is increasingly common and has specific therapies!"
        }
      ],
      "article": {
        "title": "HFpEF: From Diagnostic Dilemma to Treatment Target",
        "readTime": "12 min",
        "content": "<h2>The HFpEF Epidemic</h2>\n<p>HFpEF now accounts for more than half of heart failure cases in many registries, and its prevalence continues to rise. The typical patient is elderly, female, and has multiple comorbidities including hypertension, diabetes, obesity, and atrial fibrillation.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Insight:</strong> HFpEF is not simply \"diastolic dysfunction.\" It represents a systemic syndrome involving cardiac, vascular, skeletal muscle, and adipose tissue abnormalities driven by inflammation and metabolic dysfunction.\n</div>\n\n<h2>Why Diagnosis Is Difficult</h2>\n<p>Unlike HFrEF where a reduced EF confirms the diagnosis, HFpEF requires demonstrating elevated filling pressures in someone with preserved EF and HF symptoms. The challenge is that many conditions can cause dyspnea and edema.</p>\n\n<p>Natriuretic peptides help but have limitations. BNP may be falsely low in obesity (adipose tissue expresses neprilysin) and falsely elevated in AF, CKD, and advanced age.</p>\n\n<h2>The SGLT2 Inhibitor Revolution</h2>\n<p>For decades, HFpEF trials were uniformly negative. CHARM-Preserved, PEP-CHF, I-PRESERVE, TOPCAT\u2014none showed definitive benefit for their primary endpoints.</p>\n\n<p>Then came EMPEROR-Preserved (2021) and DELIVER (2022). Both showed that SGLT2 inhibitors reduce the combined endpoint of cardiovascular death and HF hospitalization by approximately 20%. This benefit was consistent regardless of EF (as long as >40%), diabetes status, or background therapy.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> SGLT2 inhibitors should now be considered for ALL heart failure patients regardless of EF. The line between HFrEF and HFpEF treatment is blurring.\n</div>\n\n<h2>Phenotyping Matters</h2>\n<p>HFpEF is heterogeneous. Emerging phenotypes include:</p>\n<p><strong>Obesity-HFpEF:</strong> Marked by metabolic syndrome, often younger, may benefit from aggressive weight loss (GLP-1 agonists, bariatric surgery)</p>\n<p><strong>Aging/fibrosis phenotype:</strong> Elderly with stiff ventricles, arterial stiffness, chronotropic incompetence</p>\n<p><strong>AF-predominant:</strong> Rhythm control may provide symptomatic benefit</p>\n<p><strong>Pulmonary vascular phenotype:</strong> Combined pre- and post-capillary PH, poor prognosis</p>"
      }
    },
    "quizzes": [
      {
        "question": "A 72-year-old obese woman with hypertension and AF presents with dyspnea. Echo shows EF 60%, E/e' 14, and LA volume index 38 mL/m\u00b2. What is her H2FPEF score?",
        "options": [
          "4",
          "6",
          "7",
          "8"
        ],
        "correct": 3,
        "explanation": "BMI >30 (2) + Age >60 (1) + AF (3) + E/e' >9 (1) + likely on \u22652 BP meds for HTN (1) = 8 points. This indicates >90% probability of HFpEF. Note: We'd need to confirm \u22652 BP meds, but even without that point, the score would be 7, still indicating high probability."
      },
      {
        "question": "Which medication class has proven mortality or hospitalization benefit in HFpEF?",
        "options": [
          "ACE inhibitors",
          "Beta-blockers",
          "SGLT2 inhibitors",
          "Mineralocorticoid receptor antagonists"
        ],
        "correct": 2,
        "explanation": "SGLT2 inhibitors are the ONLY class with proven benefit in HFpEF (EMPEROR-Preserved, DELIVER trials). ACE-I, beta-blockers, and MRAs have all failed to show consistent benefit in HFpEF trials, unlike their clear benefit in HFrEF."
      },
      {
        "question": "Which finding should prompt evaluation for cardiac amyloidosis in a patient with suspected HFpEF?",
        "options": [
          "Left atrial enlargement",
          "Low voltage on ECG despite increased LV wall thickness",
          "Elevated BNP",
          "Bilateral lower extremity edema"
        ],
        "correct": 1,
        "explanation": "Low voltage on ECG (or voltage-mass mismatch) despite increased LV wall thickness is a classic red flag for cardiac amyloidosis. The infiltrative protein doesn't conduct electricity well, leading to low voltage despite thick walls. This should prompt technetium pyrophosphate scan and/or serum free light chains."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "EMPEROR-Preserved",
        "year": "2021",
        "summary": "Empagliflozin reduced CV death/HF hospitalization by 21% in HFpEF (EF >40%). First positive trial in HFpEF after decades of failures.",
        "concepts": [
          "hfpef",
          "sglt2i"
        ]
      },
      {
        "type": "trial",
        "title": "DELIVER",
        "year": "2022",
        "summary": "Dapagliflozin reduced worsening HF/CV death by 18% in HFpEF. Confirmed SGLT2i benefit across the EF spectrum.",
        "concepts": [
          "hfpef",
          "sglt2i"
        ]
      },
      {
        "type": "trial",
        "title": "TOPCAT",
        "year": "2014",
        "summary": "Spironolactone showed regional variation in results. Americas subset suggested benefit, but overall trial neutral. MRA use in HFpEF remains controversial.",
        "concepts": [
          "hfpef",
          "mra"
        ]
      }
    ]
  },
  "hypoglycemia": {
    "id": "hypoglycemia",
    "name": "Hypoglycemia",
    "category": "endocrine",
    "subcategory": "glucose",
    "knowledge": [
      "Whipple's triad",
      "Causes in diabetics vs non-diabetics",
      "Diagnostic approach",
      "Acute management"
    ],
    "skills": [
      "Recognize hypoglycemia symptoms",
      "Treat acute hypoglycemia",
      "Investigate non-diabetic hypoglycemia",
      "Adjust diabetic medications"
    ],
    "lesson": {
      "title": "Hypoglycemia: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Hypoglycemia is plasma glucose <70 mg/dL with symptoms that resolve when glucose is corrected (Whipple's triad). In diabetics, it's usually iatrogenic from insulin or sulfonylureas. In non-diabetics, hypoglycemia is rare and requires systematic evaluation for insulinoma, adrenal insufficiency, critical illness, or factitious causes. Acute management is simple; determining the cause requires careful workup."
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Autonomic (adrenergic) symptoms:**\n\u2022 Sweating, tremor\n\u2022 Palpitations, anxiety\n\u2022 Hunger, nausea\n\u2022 Usually at glucose 55-70 mg/dL\n\n**Neuroglycopenic symptoms:**\n\u2022 Confusion, difficulty concentrating\n\u2022 Behavioral changes\n\u2022 Visual changes\n\u2022 Weakness, incoordination\n\u2022 Seizures, loss of consciousness\n\u2022 Usually at glucose <50 mg/dL\n\n**Hypoglycemia unawareness:**\n\u2022 Recurrent hypoglycemia blunts counter-regulatory response\n\u2022 Autonomic symptoms lost; neuroglycopenia is first sign\n\u2022 Common in tight diabetes control, long-standing diabetes"
        },
        {
          "type": "concept",
          "title": "Causes by Population",
          "content": "**Diabetics (most common):**\n\u2022 Insulin excess (dose, timing, type)\n\u2022 Sulfonylureas (especially glipizide, glyburide in renal failure)\n\u2022 Missed meal, increased exercise\n\u2022 Alcohol\n\u2022 Drug interactions (beta-blockers mask symptoms)\n\n**Non-diabetics:**\n\u2022 Critical illness (liver failure, sepsis, renal failure)\n\u2022 Adrenal insufficiency\n\u2022 Alcohol (inhibits gluconeogenesis)\n\u2022 Insulinoma (rare)\n\u2022 Factitious (exogenous insulin or sulfonylurea)\n\u2022 Reactive/postprandial (post-gastric bypass)"
        },
        {
          "type": "concept",
          "title": "Acute Treatment",
          "content": "**Conscious patient:**\n\u2022 15-20g fast-acting carbohydrate (glucose tabs, juice, regular soda)\n\u2022 Recheck glucose in 15 min\n\u2022 Repeat if still <70 mg/dL\n\u2022 Follow with complex carb/protein once >70\n\n**Unconscious or unable to swallow:**\n\u2022 D50W 25-50 mL IV (or D10W if no central access)\n\u2022 Glucagon 1mg IM/SC (works in minutes, may cause vomiting)\n\u2022 Recheck frequently\n\n**Sulfonylurea-induced:**\n\u2022 May need prolonged glucose infusion (long half-life)\n\u2022 Octreotide 50-100 mcg SC q8h (blocks insulin release)\n\u2022 Admit for monitoring (hypoglycemia can recur for 24-72h)"
        },
        {
          "type": "pearl",
          "title": "The 72-Hour Fast",
          "content": "For non-diabetics with suspected fasting hypoglycemia, the gold standard is a 72-hour supervised fast. Most insulinomas cause hypoglycemia within 48 hours. During hypoglycemia (glucose <55), draw insulin, C-peptide, proinsulin, and beta-hydroxybutyrate. High insulin with high C-peptide = insulinoma or sulfonylurea. High insulin with LOW C-peptide = exogenous insulin. The workup requires expertise\u2014refer to endocrinology."
        },
        {
          "type": "alert",
          "title": "Sulfonylurea Hypoglycemia Warning",
          "content": "**Sulfonylurea-induced hypoglycemia is dangerous:**\n\u2022 Long half-life (especially glyburide, glipizide)\n\u2022 Recurrent hypoglycemia for 24-72 hours\n\u2022 Elderly and renal impairment at highest risk\n\u2022 May require prolonged D10 infusion\n\n**Management:**\n\u2022 Admit all patients for monitoring\n\u2022 D10W infusion to maintain glucose 100-150\n\u2022 Octreotide 50-100 mcg SC q8-12h reduces insulin secretion\n\u2022 Serial glucose checks every 1-2 hours\n\u2022 Don't discharge until normoglycemia maintained off glucose infusion for 12-24h"
        }
      ],
      "article": {
        "title": "Hypoglycemia: Beyond the Acute Episode",
        "readTime": "12 min",
        "content": "<h2>Whipple's Triad</h2>\n<p>True hypoglycemia requires Whipple's triad: (1) symptoms consistent with hypoglycemia, (2) low plasma glucose at time of symptoms, and (3) resolution with glucose correction. This triad distinguishes true hypoglycemia from pseudohypoglycemia (lab artifact) or symptoms with normal glucose.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> In a non-diabetic without obvious cause, hypoglycemia is rare. Low glucose without symptoms may be artifact (blood sat in tube). Symptoms without documented low glucose may be anxiety or other cause. Confirm Whipple's triad before extensive workup.\n</div>\n\n<h2>Insulinoma Workup</h2>\n<p>Insulinoma is a rare insulin-secreting pancreatic neuroendocrine tumor causing fasting hypoglycemia. During documented hypoglycemia: inappropriately high insulin, high C-peptide (endogenous insulin), elevated proinsulin, suppressed beta-hydroxybutyrate. Localization with CT, MRI, or endoscopic ultrasound. Treatment is surgical resection.</p>\n\n<h2>Reactive Hypoglycemia</h2>\n<p>Post-prandial hypoglycemia occurs 2-4 hours after eating, often after gastric bypass surgery (dumping syndrome). Rapid gastric emptying causes excessive insulin response. Management: small frequent meals, low glycemic index foods, avoid simple sugars. Acarbose can help by slowing carbohydrate absorption.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Beta-blockers can mask autonomic symptoms of hypoglycemia (tremor, tachycardia, sweating) and impair gluconeogenesis. Diabetic patients on beta-blockers may present with neuroglycopenic symptoms without warning. This is especially important in elderly patients.\n</div>\n\n<h2>Preventing Recurrent Hypoglycemia</h2>\n<p>After treating acute hypoglycemia in a diabetic, identify the cause and adjust regimen. Common issues: insulin dose too high, missed meal, increased activity, new medication interaction, declining renal function (slows sulfonylurea clearance). Consider liberalizing glycemic targets in elderly or those with hypoglycemia unawareness.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with diabetes on glyburide presents with glucose of 42 mg/dL. After initial treatment, what is the most appropriate disposition?",
        "options": [
          "Discharge home after glucose normalizes",
          "Admit for monitoring with D10 infusion",
          "Give glucagon and discharge",
          "Increase glyburide dose"
        ],
        "correct": 1,
        "explanation": "Sulfonylurea-induced hypoglycemia requires admission. These drugs have long half-lives (24-72 hours for glyburide), and hypoglycemia can recur. Patients need D10 infusion, serial glucose monitoring, and possibly octreotide. Don't discharge until normoglycemic off glucose infusion."
      },
      {
        "question": "During a 72-hour fast, a patient develops hypoglycemia with high insulin and HIGH C-peptide. What is the most likely cause?",
        "options": [
          "Exogenous insulin administration",
          "Insulinoma",
          "Adrenal insufficiency",
          "Liver failure"
        ],
        "correct": 1,
        "explanation": "High insulin with high C-peptide indicates endogenous hyperinsulinism\u2014insulinoma or sulfonylurea use. C-peptide is co-secreted with insulin from beta cells. Exogenous insulin causes high insulin but LOW C-peptide (suppressed endogenous secretion). Adrenal insufficiency and liver failure cause hypoglycemia but low insulin."
      },
      {
        "question": "Which medication can help prevent recurrent hypoglycemia in sulfonylurea overdose?",
        "options": [
          "Metformin",
          "Insulin",
          "Octreotide",
          "Glucagon"
        ],
        "correct": 2,
        "explanation": "Octreotide inhibits insulin secretion from pancreatic beta cells, helping to prevent sulfonylurea-induced hypoglycemia. Glucagon provides only temporary glucose rise and doesn't address ongoing sulfonylurea-stimulated insulin release. Octreotide 50-100 mcg SC q8-12h is adjunctive therapy."
      },
      {
        "question": "A 45-year-old non-diabetic presents with recurrent fasting hypoglycemia. Labs during an episode show glucose 45, insulin elevated, C-peptide LOW. What is the most likely diagnosis?",
        "options": [
          "Insulinoma",
          "Sulfonylurea use",
          "Factitious hypoglycemia from exogenous insulin",
          "Adrenal insufficiency"
        ],
        "correct": 2,
        "explanation": "High insulin with LOW C-peptide indicates exogenous insulin administration (factitious hypoglycemia). Endogenous insulin (insulinoma) would have high C-peptide. Sulfonylureas stimulate endogenous insulin, so C-peptide would be high. This pattern is diagnostic for exogenous insulin."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ADA Hypoglycemia Guidelines",
        "year": "2023",
        "summary": "Guidelines on hypoglycemia prevention and management in diabetes, including medication adjustment and patient education.",
        "concepts": [
          "hypoglycemia",
          "diabetes"
        ]
      },
      {
        "type": "guideline",
        "title": "Endocrine Society Hypoglycemia Evaluation",
        "year": "2009",
        "summary": "Systematic approach to evaluating hypoglycemia in adults, including the 72-hour fast protocol and diagnostic criteria.",
        "concepts": [
          "hypoglycemia",
          "insulinoma"
        ]
      },
      {
        "type": "trial",
        "title": "Octreotide for Sulfonylurea Hypoglycemia",
        "year": "2001",
        "summary": "Octreotide effectively prevents recurrent hypoglycemia in sulfonylurea overdose by inhibiting insulin secretion.",
        "concepts": [
          "hypoglycemia",
          "sulfonylurea"
        ]
      }
    ]
  },
  "anemia-workup": {
    "id": "anemia-workup",
    "name": "Anemia Workup",
    "category": "hematology",
    "subcategory": "anemia",
    "knowledge": [
      "MCV-based classification",
      "Reticulocyte index interpretation",
      "Iron studies patterns",
      "Hemolysis workup"
    ],
    "skills": [
      "Classify anemia by MCV",
      "Interpret reticulocyte count",
      "Distinguish iron deficiency from anemia of chronic disease",
      "Recognize hemolytic anemia"
    ],
    "lesson": {
      "title": "Anemia: A Systematic Diagnostic Approach",
      "sections": [
        {
          "type": "intro",
          "content": "Anemia is defined as hemoglobin below normal for age and sex (<13 g/dL in men, <12 g/dL in women). The approach starts with MCV to classify as microcytic, normocytic, or macrocytic, then uses the reticulocyte count to assess marrow response. Iron studies, peripheral smear, and hemolysis labs complete the workup."
        },
        {
          "type": "concept",
          "title": "MCV Classification",
          "content": "**Microcytic (MCV <80 fL):**\n\u2022 Iron deficiency (most common overall)\n\u2022 Thalassemia (high RBC count, low MCV)\n\u2022 Anemia of chronic disease (can be normocytic)\n\u2022 Sideroblastic anemia\n\u2022 Lead poisoning\n\n**Normocytic (MCV 80-100 fL):**\n\u2022 Anemia of chronic disease\n\u2022 Early iron deficiency\n\u2022 Renal failure (EPO deficiency)\n\u2022 Acute blood loss\n\u2022 Hemolysis\n\u2022 Bone marrow failure\n\n**Macrocytic (MCV >100 fL):**\n\u2022 B12 deficiency\n\u2022 Folate deficiency\n\u2022 Alcohol, liver disease\n\u2022 Hypothyroidism\n\u2022 MDS\n\u2022 Drugs (methotrexate, AZT)"
        },
        {
          "type": "concept",
          "title": "Reticulocyte Count",
          "content": "**Reticulocyte index (RI):** Corrects for degree of anemia\nRI = Retic % \u00d7 (Hgb/15) \u00d7 (1/maturation factor)\nMaturation factor: 1.0 if Hct 45%, 1.5 if 35%, 2.0 if 25%\n\n**Interpretation:**\n\u2022 RI >2%: Appropriate marrow response (blood loss or hemolysis)\n\u2022 RI <2%: Inadequate marrow response (production problem)\n\n**Simplified approach:**\n\u2022 Absolute reticulocyte count >100,000 = adequate response\n\u2022 If hemolysis suspected, check: LDH, haptoglobin, indirect bilirubin, smear for schistocytes"
        },
        {
          "type": "concept",
          "title": "Iron Studies Interpretation",
          "content": "**Iron deficiency anemia:**\n\u2022 Serum iron: LOW\n\u2022 TIBC: HIGH (liver makes more transferrin)\n\u2022 Ferritin: LOW (<30, or <100 in inflammation)\n\u2022 Transferrin saturation: LOW (<20%)\n\n**Anemia of chronic disease:**\n\u2022 Serum iron: LOW\n\u2022 TIBC: LOW or normal\n\u2022 Ferritin: NORMAL or HIGH\n\u2022 Transferrin saturation: LOW or normal\n\n**Combined IDA + ACD:** Common! Low ferritin is diagnostic of iron deficiency even with inflammation. Use ferritin <100 as cutoff when CRP elevated."
        },
        {
          "type": "pearl",
          "title": "The RDW Trick",
          "content": "Red cell distribution width (RDW) measures variation in RBC size. Elevated RDW (>14.5%) suggests mixed population of cells.\n\n\u2022 Iron deficiency: HIGH RDW (new small cells mixing with old normal cells)\n\u2022 Thalassemia trait: NORMAL RDW (uniformly small cells)\n\nThis helps distinguish iron deficiency (high RDW) from thalassemia trait (normal RDW) in microcytic anemia. Mentzer index (MCV/RBC) >13 also suggests iron deficiency."
        },
        {
          "type": "alert",
          "title": "Hemolysis Workup",
          "content": "**Suspect hemolysis if:**\n\u2022 Anemia with elevated reticulocytes\n\u2022 Elevated LDH, indirect bilirubin\n\u2022 Low (or absent) haptoglobin\n\u2022 Spherocytes or schistocytes on smear\n\n**Classification:**\n\u2022 Intravascular: Schistocytes, hemoglobinuria, low haptoglobin, high LDH\n\u2022 Extravascular: Spherocytes, splenomegaly, jaundice\n\n**DAT (Coombs) test:**\n\u2022 Positive: Autoimmune hemolytic anemia (warm or cold)\n\u2022 Negative: Non-immune (TTP, DIC, mechanical valve, G6PD, hereditary spherocytosis)"
        }
      ],
      "article": {
        "title": "Anemia: The Diagnostic Algorithm",
        "readTime": "13 min",
        "content": "<h2>Starting with MCV</h2>\n<p>The MCV immediately narrows the differential. Microcytic anemia is almost always iron deficiency, thalassemia, or anemia of chronic disease. Macrocytic anemia prompts B12/folate testing and often liver function assessment. Normocytic anemia is the broadest category, requiring further classification.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Iron deficiency is the most common cause of anemia worldwide. Never assume iron deficiency is 'dietary' without investigating for GI blood loss, especially in men and postmenopausal women. Colonoscopy is indicated if no obvious source.\n</div>\n\n<h2>Ferritin Interpretation</h2>\n<p>Ferritin is the best single test for iron deficiency, but it's also an acute phase reactant. In healthy patients, ferritin <30 ng/mL is diagnostic of iron deficiency. In inflammatory states, ferritin <100 ng/mL suggests iron deficiency. A 'normal' ferritin of 50-100 in a patient with active inflammation may still represent iron deficiency.</p>\n\n<h2>Soluble Transferrin Receptor</h2>\n<p>When ferritin is elevated due to inflammation and you're unsure about iron status, soluble transferrin receptor (sTfR) can help. sTfR is elevated in iron deficiency but NOT affected by inflammation. The sTfR/log ferritin ratio is particularly useful in distinguishing pure ACD from combined IDA + ACD.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> The peripheral blood smear is underutilized. It can show hypochromic microcytes (iron deficiency), target cells (thalassemia), macro-ovalocytes with hypersegmented neutrophils (B12/folate), schistocytes (microangiopathic process), and spherocytes (hemolysis). Ask for the smear.\n</div>\n\n<h2>Macrocytic Anemia: B12 vs Folate</h2>\n<p>Both cause megaloblastic anemia with identical smear findings. B12 deficiency can cause irreversible neurological damage if untreated. Key differences: B12 deficiency has neurological symptoms (peripheral neuropathy, subacute combined degeneration); folate deficiency doesn't. B12 deficiency takes years to develop (liver stores); folate deficiency occurs within months. If unsure, treat both, but always check B12 before giving folate\u2014folate can mask B12 deficiency while neurological damage progresses.</p>"
      },
      "podcast": {
        "title": "Anemia Workup with Dr. Heme",
        "duration": "11:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Heme, you see a patient with hemoglobin of 9. Walk us through your approach."
          },
          {
            "speaker": "Dr. Heme",
            "text": "First, I look at the MCV. That immediately tells me if I'm dealing with microcytic, normocytic, or macrocytic anemia. Each has a different differential. Then I look at the reticulocyte count to see if the bone marrow is responding appropriately."
          },
          {
            "speaker": "Host",
            "text": "The MCV is 72. It's microcytic. What next?"
          },
          {
            "speaker": "Dr. Heme",
            "text": "Microcytic anemia is iron deficiency until proven otherwise. I check iron studies: ferritin, TIBC, serum iron, transferrin saturation. Low ferritin is diagnostic. If ferritin is normal or high, I think about thalassemia or anemia of chronic disease. The RDW helps\u2014high RDW favors iron deficiency, normal RDW suggests thalassemia."
          },
          {
            "speaker": "Host",
            "text": "If it's iron deficiency, do you always look for a source?"
          },
          {
            "speaker": "Dr. Heme",
            "text": "Absolutely. In men and postmenopausal women, iron deficiency means GI blood loss until proven otherwise. I do colonoscopy and often upper endoscopy. Young menstruating women might have heavy periods, but even then, I have a low threshold to scope if there are any GI symptoms."
          },
          {
            "speaker": "Host",
            "text": "What about macrocytic anemia?"
          },
          {
            "speaker": "Dr. Heme",
            "text": "B12 and folate levels first. Check MMA and homocysteine if B12 is borderline. Ask about alcohol and check liver function. Review medications\u2014methotrexate, hydroxyurea, AZT cause macrocytosis. If those are negative and they're cytopenias with a high MCV, I worry about MDS and do a bone marrow biopsy."
          },
          {
            "speaker": "Host",
            "text": "When do you suspect hemolysis?"
          },
          {
            "speaker": "Dr. Heme",
            "text": "When the reticulocyte count is appropriately elevated\u2014the marrow is responding. Then I look for the markers: high LDH, high indirect bilirubin, low haptoglobin. The smear tells me if it's microangiopathic (schistocytes) or immune (spherocytes). Coombs test distinguishes autoimmune from non-immune causes."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient has hemoglobin 8 g/dL, MCV 68, ferritin 8 ng/mL, and TIBC 450 (elevated). What is the diagnosis?",
        "options": [
          "Anemia of chronic disease",
          "Iron deficiency anemia",
          "Thalassemia trait",
          "Sideroblastic anemia"
        ],
        "correct": 1,
        "explanation": "Low ferritin (<30) is diagnostic of iron deficiency. The elevated TIBC (body making more transferrin to capture iron) and low MCV confirm IDA. Anemia of chronic disease would have normal/high ferritin and low/normal TIBC. Thalassemia has normal iron studies."
      },
      {
        "question": "Which finding best distinguishes iron deficiency from thalassemia trait in microcytic anemia?",
        "options": [
          "Hemoglobin level",
          "MCV value",
          "RDW (red cell distribution width)",
          "Reticulocyte count"
        ],
        "correct": 2,
        "explanation": "RDW is elevated in iron deficiency (mixed population of normal and microcytic cells) but normal in thalassemia trait (uniformly small cells). Both have low MCV. Hemoglobin can be low in either. Reticulocyte count doesn't distinguish between them. Mentzer index (MCV/RBC) is another useful discriminant."
      },
      {
        "question": "A patient has anemia, elevated LDH, low haptoglobin, and elevated indirect bilirubin. The peripheral smear shows schistocytes. What type of hemolysis is this?",
        "options": [
          "Autoimmune hemolytic anemia",
          "Hereditary spherocytosis",
          "Microangiopathic hemolytic anemia",
          "G6PD deficiency"
        ],
        "correct": 2,
        "explanation": "Schistocytes (fragmented red cells) indicate microangiopathic hemolytic anemia (MAHA)\u2014mechanical destruction of RBCs. Causes include TTP, HUS, DIC, malignant hypertension, and mechanical heart valves. Autoimmune hemolysis shows spherocytes. Hereditary spherocytosis shows spherocytes. G6PD shows bite cells."
      },
      {
        "question": "A patient with rheumatoid arthritis has Hgb 10, MCV 88, ferritin 250, and low serum iron. This pattern suggests:",
        "options": [
          "Iron deficiency anemia",
          "Anemia of chronic disease",
          "Combined iron deficiency and anemia of chronic disease",
          "Thalassemia trait"
        ],
        "correct": 1,
        "explanation": "This is classic anemia of chronic disease: normocytic anemia (MCV 88), low serum iron (iron sequestered in macrophages), but elevated ferritin (acute phase reactant increased in inflammation). TIBC would be low or normal. Iron deficiency would have low ferritin; combined would have ferritin <100 despite inflammation."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ASH Anemia Guidelines",
        "year": "2020",
        "summary": "Evidence-based approach to anemia diagnosis including iron studies interpretation, reticulocyte count use, and indications for further testing.",
        "concepts": [
          "anemia",
          "iron"
        ]
      },
      {
        "type": "guideline",
        "title": "WHO Anemia Definition",
        "year": "2011",
        "summary": "Standard definitions of anemia by age and sex, with hemoglobin cutoffs for diagnosis.",
        "concepts": [
          "anemia",
          "definition"
        ]
      },
      {
        "type": "trial",
        "title": "Iron Studies in Inflammation",
        "year": "2017",
        "summary": "Meta-analysis showing ferritin <100 ng/mL indicates iron deficiency even in inflammatory states, with soluble transferrin receptor aiding diagnosis.",
        "concepts": [
          "anemia",
          "iron"
        ]
      }
    ]
  },
  "acute-hf": {
    "id": "acute-hf",
    "name": "Acute Decompensated Heart Failure",
    "category": "cardiovascular",
    "subcategory": "heart-failure",
    "knowledge": [
      "Hemodynamic profiles (warm/cold, wet/dry)",
      "Diuretic strategies",
      "Vasodilator indications",
      "Inotrope selection"
    ],
    "skills": [
      "Assess volume and perfusion status",
      "Titrate IV diuretics",
      "Recognize cardiogenic shock",
      "Optimize discharge planning"
    ],
    "lesson": {
      "title": "Acute Decompensated Heart Failure: Stabilization and Beyond",
      "sections": [
        {
          "type": "intro",
          "content": "Acute decompensated heart failure (ADHF) is the most common cause of hospitalization in patients over 65. Management requires rapid hemodynamic assessment, aggressive decongestion, identification of precipitants, and optimization of guideline-directed therapy before discharge. The goal isn't just to get them out of the hospital\u2014it's to prevent readmission."
        },
        {
          "type": "concept",
          "title": "Hemodynamic Profiles",
          "content": "**Assess two axes: Congestion (wet vs dry) and Perfusion (warm vs cold)**\n\n**Warm and Wet (most common, ~70%):**\n\u2022 Adequate perfusion, volume overloaded\n\u2022 Treatment: Diuretics \u00b1 vasodilators\n\n**Cold and Wet (~20%):**\n\u2022 Poor perfusion AND volume overloaded\n\u2022 Treatment: Inotropes + diuretics, consider MCS\n\n**Cold and Dry (~5%):**\n\u2022 Poor perfusion, NOT volume overloaded\n\u2022 Treatment: Careful volume challenge, then inotropes\n\n**Warm and Dry (~5%):**\n\u2022 Not actually decompensated\u2014look for other causes"
        },
        {
          "type": "concept",
          "title": "Congestion Assessment",
          "content": "**Signs of congestion:**\n\u2022 JVD (most specific physical exam finding)\n\u2022 Orthopnea and PND\n\u2022 Peripheral edema\n\u2022 Hepatomegaly, ascites\n\u2022 Rales (often ABSENT in chronic HF!)\n\u2022 S3 gallop\n\n**Labs/imaging:**\n\u2022 Elevated BNP/NT-proBNP\n\u2022 Chest X-ray: Cardiomegaly, pulmonary edema, pleural effusions\n\u2022 IVC plethora on echo"
        },
        {
          "type": "concept",
          "title": "Diuretic Strategy",
          "content": "**Initial dosing:**\n\u2022 Loop diuretic-naive: Furosemide 20-40mg IV\n\u2022 On chronic loop diuretic: Give 1-2.5x home dose IV\n\u2022 Goal: Urine output 100-150 mL/hr initially\n\n**If inadequate response:**\n1. Increase dose (ceiling effect\u2014max single dose 200mg furosemide)\n2. Continuous infusion (same total daily dose, better for some)\n3. Add thiazide (metolazone 2.5-5mg) for sequential nephron blockade\n4. Consider ultrafiltration if truly refractory\n\n**Monitor:** Daily weights, strict I/Os, creatinine, electrolytes"
        },
        {
          "type": "pearl",
          "title": "The Creatinine Rise Dilemma",
          "content": "Creatinine often rises during aggressive diuresis. This doesn't always mean you're causing harm\u2014it may reflect improved cardiac output and better kidney perfusion (pseudo-worsening renal function). If the patient is still congested and creatinine rises modestly (<0.5 mg/dL), continue diuresis. True cardiorenal syndrome requires a different approach."
        },
        {
          "type": "alert",
          "title": "When to Use Inotropes",
          "content": "**Indications (cold and wet/dry profiles):**\n\u2022 SBP <90 mmHg\n\u2022 Signs of hypoperfusion: Cool extremities, altered mental status, poor urine output, rising lactate\n\u2022 Cardiogenic shock\n\n**Options:**\n\u2022 Dobutamine: First-line, increases contractility and causes vasodilation\n\u2022 Milrinone: PDE3 inhibitor, also causes vasodilation, caution in renal failure\n\u2022 Dopamine: Less preferred, more arrhythmogenic\n\n**Avoid:** Using inotropes for diuretic-resistant congestion if perfusion is adequate\u2014they increase mortality"
        }
      ],
      "article": {
        "title": "ADHF: From Admission to Discharge",
        "readTime": "14 min",
        "content": "<h2>The Precipitant Hunt</h2>\n<p>Every ADHF admission has a trigger. Finding it prevents readmission. The common culprits: dietary indiscretion (salt/fluid), medication non-adherence, new or uncontrolled AF, ischemia, infection, uncontrolled hypertension, and medication effects (NSAIDs, calcium channel blockers in HFrEF).</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> ACS can present as ADHF without chest pain, especially in diabetics and the elderly. Check troponins on admission. If elevated, the management changes dramatically\u2014revascularization may be the treatment for the heart failure.\n</div>\n\n<h2>The BNP Trajectory</h2>\n<p>Admission BNP/NT-proBNP predicts outcomes, but the discharge value is more important. A decrease of >30% from admission is associated with better outcomes. If BNP doesn't fall despite clinical improvement, consider whether the patient is truly decongested or whether there's another process (PE, infection, AF).</p>\n\n<h2>Vasodilators in ADHF</h2>\n<p>For patients with elevated BP and pulmonary edema, IV vasodilators can provide rapid relief:</p>\n<p><strong>Nitroglycerin:</strong> Primarily venodilator, reduces preload. Start 10-20 mcg/min, titrate to effect. Watch for headache and tolerance.</p>\n<p><strong>Nitroprusside:</strong> Balanced arterial and venous dilator. Powerful but requires arterial line monitoring. Watch for cyanide toxicity with prolonged use.</p>\n<p><strong>Nesiritide:</strong> Recombinant BNP. Fell out of favor after ASCEND-HF showed no benefit over standard care.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> The DOSE trial compared high vs low dose and bolus vs continuous furosemide. High dose (2.5x home dose) trended toward better decongestion without significant renal harm. Don't be afraid to use adequate diuretic doses.\n</div>\n\n<h2>Discharge Optimization</h2>\n<p>Before discharge, ensure GDMT is initiated or optimized: beta-blocker (start low if new), ACEi/ARB/ARNI, MRA, and SGLT2i. The hospital stay is an opportunity to start these medications in a monitored setting. Schedule close follow-up (within 7 days), arrange diuretic adjustment protocol, and ensure patient education on daily weights and sodium restriction.</p>"
      },
      "podcast": {
        "title": "ADHF Management with Dr. Cardio",
        "duration": "11:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Cardio, what's your initial approach to ADHF?"
          },
          {
            "speaker": "Dr. Cardio",
            "text": "First, I categorize by hemodynamic profile. Most patients are warm and wet\u2014they have adequate blood pressure and perfusion but are volume overloaded. These patients need diuretics. The cold and wet patients are the ones I worry about\u2014they need more than just diuretics."
          },
          {
            "speaker": "Host",
            "text": "How do you assess perfusion?"
          },
          {
            "speaker": "Dr. Cardio",
            "text": "Physical exam first. Warm extremities, good mentation, adequate urine output\u2014that's warm. Cool, clammy skin, confusion, oliguria, rising lactate\u2014that's cold. The proportional pulse pressure can help too\u2014less than 25% suggests low cardiac output."
          },
          {
            "speaker": "Host",
            "text": "Walk us through your diuretic strategy."
          },
          {
            "speaker": "Dr. Cardio",
            "text": "I start with IV furosemide at 1-2.5 times their home dose. I want to see urine output within 2 hours. If they're not responding, I double the dose or add metolazone. The DOSE trial taught us that higher doses are generally safe and more effective. Don't be timid."
          },
          {
            "speaker": "Host",
            "text": "What about the creatinine bump?"
          },
          {
            "speaker": "Dr. Cardio",
            "text": "This is where people get scared and back off. A small creatinine rise during decongestion is often okay\u2014it may reflect improved venous congestion of the kidneys. If the patient is still wet and the bump is modest, I continue. If they're dry and creatinine keeps rising, that's different."
          },
          {
            "speaker": "Host",
            "text": "How do you know when they're ready for discharge?"
          },
          {
            "speaker": "Dr. Cardio",
            "text": "Euvolemic on exam\u2014no JVD lying flat, no more than trace edema, stable weight for 24-48 hours, tolerating oral diuretics, and on optimized GDMT. I need to know they have follow-up within a week and understand their weight monitoring and when to call."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient with HFrEF presents with dyspnea, JVD, and bilateral leg edema. BP is 142/88, HR 96. Extremities are warm. What is the hemodynamic profile?",
        "options": [
          "Warm and dry",
          "Warm and wet",
          "Cold and wet",
          "Cold and dry"
        ],
        "correct": 1,
        "explanation": "This patient has signs of congestion (JVD, edema) with adequate perfusion (warm extremities, adequate BP). This is 'warm and wet'\u2014the most common ADHF presentation (~70%). Treatment is diuretics, possibly with vasodilators if hypertensive."
      },
      {
        "question": "A patient on furosemide 80mg PO daily at home is admitted with ADHF. What is an appropriate initial IV furosemide dose?",
        "options": [
          "20mg IV",
          "40mg IV",
          "80-200mg IV",
          "400mg IV"
        ],
        "correct": 2,
        "explanation": "For patients on chronic loop diuretics, initial IV dose should be 1-2.5x the home oral dose. With 80mg PO at home, 80-200mg IV is appropriate. The DOSE trial showed higher doses (2.5x) trended toward better decongestion. Starting at the low end (20-40mg) will likely be inadequate."
      },
      {
        "question": "Which finding best indicates poor perfusion (cold profile) in ADHF?",
        "options": [
          "Elevated JVP",
          "Proportional pulse pressure <25%",
          "Lower extremity edema",
          "Elevated BNP"
        ],
        "correct": 1,
        "explanation": "Proportional pulse pressure (pulse pressure \u00f7 systolic BP) <25% suggests low cardiac output. JVP, edema, and BNP indicate congestion but not perfusion status. Other cold signs include cool extremities, altered mental status, oliguria, and rising lactate."
      },
      {
        "question": "During aggressive diuresis for ADHF, creatinine rises from 1.2 to 1.5 mg/dL. The patient still has JVD and 2+ edema. What is the most appropriate action?",
        "options": [
          "Stop diuretics to protect kidneys",
          "Switch to ultrafiltration",
          "Continue diuresis\u2014patient is still congested",
          "Start dobutamine for cardiorenal syndrome"
        ],
        "correct": 2,
        "explanation": "A modest creatinine rise during decongestion in a still-congested patient often represents improving venous congestion rather than true kidney injury. The patient has ongoing JVD and edema\u2014they need continued diuresis. Stopping diuretics prematurely leaves them congested and at risk for readmission."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "DOSE Trial",
        "year": "2011",
        "summary": "High-dose furosemide (2.5x home dose) vs low-dose showed trend toward better decongestion without significantly worse renal function. Continuous vs bolus showed no significant difference.",
        "concepts": [
          "adhf",
          "diuretics"
        ]
      },
      {
        "type": "guideline",
        "title": "2022 AHA/ACC/HFSA Heart Failure Guidelines",
        "year": "2022",
        "summary": "Updated guidelines emphasizing GDMT optimization during hospitalization and close post-discharge follow-up to prevent readmission.",
        "concepts": [
          "adhf",
          "management"
        ]
      },
      {
        "type": "trial",
        "title": "CARRESS-HF",
        "year": "2012",
        "summary": "Ultrafiltration not superior to stepped pharmacologic therapy for ADHF with cardiorenal syndrome. Pharmacologic diuresis remains first-line.",
        "concepts": [
          "adhf",
          "ultrafiltration"
        ]
      }
    ]
  },
  "cirrhosis": {
    "id": "cirrhosis",
    "name": "Cirrhosis Complications",
    "category": "gi",
    "subcategory": "liver",
    "knowledge": [
      "Child-Pugh and MELD scoring",
      "Ascites management",
      "SBP diagnosis and treatment",
      "Hepatorenal syndrome types",
      "Variceal bleeding prophylaxis"
    ],
    "skills": [
      "Calculate prognostic scores",
      "Perform diagnostic paracentesis",
      "Manage refractory ascites",
      "Recognize HRS early"
    ],
    "lesson": {
      "title": "Cirrhosis: Managing the Complications",
      "sections": [
        {
          "type": "intro",
          "content": "Cirrhosis represents end-stage liver disease with irreversible architectural distortion. Management focuses on preventing and treating complications: ascites, spontaneous bacterial peritonitis (SBP), hepatic encephalopathy, variceal bleeding, and hepatorenal syndrome. Understanding these complications is essential for any internist."
        },
        {
          "type": "concept",
          "title": "Prognostic Scoring",
          "content": "**Child-Pugh Score (A, B, C):**\nAssesses 5 parameters: bilirubin, albumin, INR, ascites, encephalopathy\n\u2022 Class A (5-6 points): Well-compensated\n\u2022 Class B (7-9 points): Significant functional compromise\n\u2022 Class C (10-15 points): Decompensated\n\n**MELD Score:**\nMELD = 10 \u00d7 [0.957 \u00d7 ln(Cr) + 0.378 \u00d7 ln(Bili) + 1.12 \u00d7 ln(INR)] + 6.43\n\u2022 Used for transplant allocation\n\u2022 Higher score = higher 90-day mortality\n\u2022 MELD-Na incorporates sodium (hyponatremia = worse prognosis)"
        },
        {
          "type": "concept",
          "title": "Ascites Management",
          "content": "**Initial workup:** Diagnostic paracentesis on ALL new ascites\n\u2022 Cell count, albumin, total protein, culture\n\u2022 Calculate SAAG (Serum-Ascites Albumin Gradient)\n\u2022 SAAG \u22651.1 = portal hypertension\n\n**Treatment ladder:**\n1. Sodium restriction (2g/day)\n2. Diuretics: Spironolactone 100mg + Furosemide 40mg (100:40 ratio)\n3. Titrate up to Spiro 400mg + Lasix 160mg\n4. Large-volume paracentesis for tense/refractory ascites\n5. TIPS for diuretic-refractory ascites"
        },
        {
          "type": "concept",
          "title": "Spontaneous Bacterial Peritonitis",
          "content": "**Diagnosis:** Ascitic fluid PMN count \u2265250 cells/mm\u00b3\n\u2022 Don't wait for culture\u2014treat empirically\n\u2022 Typical organisms: E. coli, Klebsiella, Streptococcus\n\n**Treatment:**\n\u2022 Cefotaxime 2g IV q8h (or ceftriaxone) \u00d7 5 days\n\u2022 Albumin 1.5 g/kg day 1, then 1 g/kg day 3 (reduces mortality and HRS)\n\n**Prophylaxis:**\n\u2022 After SBP episode: Lifelong fluoroquinolone\n\u2022 GI bleeding: Ceftriaxone \u00d7 7 days\n\u2022 Low protein ascites (<1.5 g/dL) + high risk: Norfloxacin"
        },
        {
          "type": "pearl",
          "title": "The 100:40 Ratio",
          "content": "Always use spironolactone and furosemide together in a 100:40 ratio. Spironolactone blocks aldosterone (key driver of sodium retention in cirrhosis), while furosemide prevents hyperkalemia. Start at 100mg/40mg and increase together. Aim for 0.5-1 kg weight loss per day (faster if peripheral edema)."
        },
        {
          "type": "alert",
          "title": "Hepatorenal Syndrome",
          "content": "**Type 1 HRS:** Rapid decline (Cr doubles to >2.5 in <2 weeks)\n\u2022 Often precipitated by SBP or GI bleed\n\u2022 Median survival days without treatment\n\n**Type 2 HRS:** Gradual decline, often with refractory ascites\n\n**Diagnosis criteria:**\n\u2022 Cirrhosis with ascites\n\u2022 Cr >1.5 mg/dL (or 50% increase)\n\u2022 No improvement after 2 days of diuretic withdrawal and albumin challenge\n\u2022 No shock, nephrotoxins, or parenchymal kidney disease\n\n**Treatment:** Albumin + vasoconstrictors (octreotide/midodrine or terlipressin), bridge to transplant"
        }
      ],
      "article": {
        "title": "Decompensated Cirrhosis: A Comprehensive Review",
        "readTime": "14 min",
        "content": "<h2>The Pathophysiology of Portal Hypertension</h2>\n<p>Cirrhosis causes architectural distortion that increases intrahepatic vascular resistance. This leads to portal hypertension, defined as a hepatic venous pressure gradient (HVPG) >5 mmHg. Clinically significant portal hypertension (HVPG \u226510 mmHg) leads to varices, ascites, and splenomegaly.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Portal hypertension triggers systemic vasodilation (via nitric oxide and other mediators), leading to decreased effective circulating volume. The kidney responds by retaining sodium and water, creating ascites. This \"underfilling\" hypothesis explains why cirrhotic patients are total-body volume overloaded yet intravascularly depleted.\n</div>\n\n<h2>The Diagnostic Paracentesis</h2>\n<p>Every patient with new ascites needs a diagnostic paracentesis. It's safe (complication rate <1% even with INR >2 or platelets <50k), and it provides critical information.</p>\n<p>Calculate the SAAG: Serum albumin minus ascites albumin. If \u22651.1, portal hypertension is the cause (97% accuracy). Low SAAG suggests peritoneal carcinomatosis, TB peritonitis, or nephrotic syndrome.</p>\n<p>Always send cell count. PMN \u2265250/mm\u00b3 = SBP, even if the patient looks well. Don't wait for cultures\u2014they're positive in only 40% of cases.</p>\n\n<h2>Spontaneous Bacterial Peritonitis</h2>\n<p>SBP is bacterial infection of ascites without an obvious intra-abdominal source. It occurs in up to 30% of hospitalized cirrhotics and has 20% mortality. Symptoms may be subtle: low-grade fever, vague abdominal discomfort, worsening encephalopathy, or just \"not doing well.\"</p>\n<p>The combination of antibiotics (cefotaxime or ceftriaxone) plus albumin is evidence-based. The albumin prevents the renal dysfunction that often follows SBP and reduces mortality from 29% to 10%.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> After one episode of SBP, the 1-year recurrence rate is 70%. These patients need lifelong prophylaxis with a fluoroquinolone. They should also be evaluated for transplant.\n</div>\n\n<h2>Hepatorenal Syndrome</h2>\n<p>HRS represents the kidney's response to the extreme hemodynamic derangements of advanced cirrhosis. Severe splanchnic vasodilation leads to renal vasoconstriction and falling GFR. The kidneys are structurally normal\u2014in fact, they can function normally if transplanted into a healthy recipient.</p>\n<p>Treatment aims to increase effective arterial volume. Vasoconstrictors (terlipressin, norepinephrine, or octreotide/midodrine) plus albumin can reverse HRS in 40-50% of patients. But HRS is really a sign that the patient needs a liver transplant.</p>"
      },
      "podcast": {
        "title": "Cirrhosis Complications with Dr. Hepatos",
        "duration": "12:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Hepatos, what's your approach to a cirrhotic patient with new ascites?"
          },
          {
            "speaker": "Dr. Hepatos",
            "text": "Tap it. Everyone with new ascites gets a diagnostic paracentesis. I need to know the SAAG to confirm portal hypertension, and more importantly, I need to rule out SBP. It's safe\u2014don't let an elevated INR stop you."
          },
          {
            "speaker": "Host",
            "text": "How do you interpret the results?"
          },
          {
            "speaker": "Dr. Hepatos",
            "text": "SAAG greater than or equal to 1.1 confirms portal hypertension. Then I look at the PMN count. Greater than 250? That's SBP\u2014start antibiotics immediately. I also look at protein; low protein ascites under 1.5 is a risk factor for SBP and might warrant prophylaxis."
          },
          {
            "speaker": "Host",
            "text": "Talk about diuretic management."
          },
          {
            "speaker": "Dr. Hepatos",
            "text": "Salt restriction first\u20142 grams per day, which is hard to achieve. Then dual diuretics: spironolactone and furosemide in a 100:40 ratio. I start at 100/40 and titrate up together, max 400/160. Monitor weight, electrolytes, and creatinine. Target half a kilo per day weight loss, or a full kilo if there's peripheral edema."
          },
          {
            "speaker": "Host",
            "text": "When does it become refractory?"
          },
          {
            "speaker": "Dr. Hepatos",
            "text": "When they can't lose weight on max diuretics, or when diuretics cause unacceptable complications\u2014creatinine rise, severe hyponatremia, encephalopathy. That's when you consider serial large-volume paracentesis or TIPS. And definitely refer for transplant evaluation."
          },
          {
            "speaker": "Host",
            "text": "What about hepatorenal syndrome?"
          },
          {
            "speaker": "Dr. Hepatos",
            "text": "HRS is diagnosed by exclusion\u2014creatinine rising without other explanation, no improvement with albumin challenge. It's really a marker of how sick the liver is. We try midodrine, octreotide, and albumin as a bridge, but these patients need a liver. Without transplant, mortality is very high."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A cirrhotic patient undergoes paracentesis. Ascites albumin is 0.8 g/dL; serum albumin is 2.5 g/dL. What does this SAAG indicate?",
        "options": [
          "Portal hypertension",
          "Peritoneal carcinomatosis",
          "Tuberculous peritonitis",
          "Nephrotic syndrome"
        ],
        "correct": 0,
        "explanation": "SAAG = 2.5 - 0.8 = 1.7, which is \u22651.1. This indicates portal hypertension with 97% accuracy. Low SAAG (<1.1) would suggest non-portal hypertensive causes like malignancy, TB, or nephrotic syndrome."
      },
      {
        "question": "A cirrhotic patient with ascites has PMN count of 380 cells/mm\u00b3 in peritoneal fluid. Temperature is 99.5\u00b0F. What is the next step?",
        "options": [
          "Repeat paracentesis in 24 hours",
          "Wait for culture results",
          "Start cefotaxime and albumin",
          "Start broad-spectrum antibiotics and CT abdomen"
        ],
        "correct": 2,
        "explanation": "PMN \u2265250 cells/mm\u00b3 = SBP. Don't wait for cultures (only 40% positive). Start empiric cefotaxime 2g IV q8h plus albumin 1.5 g/kg day 1, 1 g/kg day 3. The albumin reduces HRS risk and mortality. CT is not needed for straightforward SBP."
      },
      {
        "question": "What is the recommended starting ratio of spironolactone to furosemide for ascites management?",
        "options": [
          "40:40 mg",
          "100:40 mg",
          "100:100 mg",
          "200:40 mg"
        ],
        "correct": 1,
        "explanation": "The 100:40 ratio (spironolactone 100mg : furosemide 40mg) is standard. Spironolactone antagonizes aldosterone, the main driver of sodium retention in cirrhosis. Furosemide is added to prevent hyperkalemia. Titrate both together, maintaining the ratio, up to maximum of 400mg/160mg."
      },
      {
        "question": "Which criterion is required to diagnose hepatorenal syndrome?",
        "options": [
          "Bilirubin >3 mg/dL",
          "No improvement with albumin and diuretic withdrawal",
          "Urine sodium >40 mEq/L",
          "Positive urine culture"
        ],
        "correct": 1,
        "explanation": "HRS is diagnosed by exclusion. Key criteria include: cirrhosis with ascites, Cr >1.5 or \u226550% increase, NO improvement after 2 days of diuretic withdrawal plus albumin challenge (1g/kg/day), and exclusion of shock, nephrotoxins, and intrinsic kidney disease. The albumin challenge is essential to rule out volume depletion."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "AASLD Ascites Guidelines",
        "year": "2021",
        "summary": "Comprehensive guidelines on diagnosis and management of ascites, SBP, and hepatorenal syndrome in cirrhosis.",
        "concepts": [
          "cirrhosis",
          "ascites",
          "sbp"
        ]
      },
      {
        "type": "trial",
        "title": "Sort et al. - Albumin in SBP",
        "year": "1999",
        "summary": "Albumin plus antibiotics reduced renal impairment and mortality in SBP compared to antibiotics alone. Established albumin as standard of care.",
        "concepts": [
          "sbp",
          "albumin"
        ]
      },
      {
        "type": "guideline",
        "title": "Baveno VII Consensus",
        "year": "2022",
        "summary": "Updated portal hypertension guidelines including non-invasive assessment, variceal management, and TIPS indications.",
        "concepts": [
          "portal-hypertension",
          "varices"
        ]
      }
    ]
  },
  "asthma-acute": {
    "id": "asthma-acute",
    "name": "Acute Asthma Exacerbation",
    "category": "pulmonary",
    "subcategory": "obstructive",
    "knowledge": [
      "Severity assessment",
      "Bronchodilator dosing",
      "Steroid timing and route",
      "ICU admission criteria"
    ],
    "skills": [
      "Assess exacerbation severity",
      "Administer acute treatment",
      "Recognize impending respiratory failure",
      "Optimize discharge planning"
    ],
    "lesson": {
      "title": "Acute Asthma Exacerbation: Emergency Management",
      "sections": [
        {
          "type": "intro",
          "content": "Acute asthma exacerbation is reversible airway obstruction requiring urgent treatment. Management is tiered based on severity: bronchodilators and steroids for most, adding magnesium and close monitoring for severe cases, and mechanical ventilation for respiratory failure. The goal is rapid improvement and preventing deterioration."
        },
        {
          "type": "concept",
          "title": "Severity Assessment",
          "content": "**Mild-Moderate:**\n\u2022 Speaking in sentences\n\u2022 RR <30, HR <120\n\u2022 SpO2 >90% on RA\n\u2022 Peak flow >50% predicted\n\n**Severe:**\n\u2022 Speaking in words only\n\u2022 RR \u226530, HR \u2265120\n\u2022 SpO2 <90%\n\u2022 Peak flow \u226450%\n\u2022 Accessory muscle use\n\n**Life-threatening:**\n\u2022 Unable to speak\n\u2022 Silent chest (no air movement)\n\u2022 Cyanosis, altered consciousness\n\u2022 Peak flow <25%\n\u2022 PaCO2 normal or elevated (patient tiring)"
        },
        {
          "type": "concept",
          "title": "Acute Treatment",
          "content": "**All patients:**\n\u2022 Oxygen to target SpO2 93-95%\n\u2022 Albuterol MDI 4-8 puffs or nebulizer 2.5-5mg q20min \u00d7 3\n\u2022 Ipratropium (first hour): 0.5mg nebulizer with albuterol\n\u2022 Systemic corticosteroids: Prednisone 40-60mg PO or methylprednisolone 125mg IV\n\n**Severe exacerbation:**\n\u2022 Continuous nebulized albuterol 10-15mg/hr\n\u2022 Magnesium sulfate 2g IV over 20 min\n\u2022 Consider epinephrine 0.3-0.5mg IM if not responding"
        },
        {
          "type": "concept",
          "title": "Monitoring Response",
          "content": "**Reassess at 60-90 minutes:**\n\n**Good response (discharge candidate):**\n\u2022 Peak flow >70%\n\u2022 Symptom resolution\n\u2022 Normal oxygen saturation\n\u2022 Can speak in full sentences\n\n**Incomplete response:**\n\u2022 Peak flow 50-70%\n\u2022 Ongoing symptoms\n\u2022 Continue treatment, consider admission\n\n**Poor response:**\n\u2022 Peak flow <50%\n\u2022 Worsening or minimal improvement\n\u2022 Admit to ICU, prepare for intubation"
        },
        {
          "type": "pearl",
          "title": "The Normalizing CO2 Warning",
          "content": "In acute asthma, patients hyperventilate and have LOW PaCO2. A 'normal' PaCO2 (40 mmHg) in a tachypneic asthmatic is ominous\u2014it means they're tiring and can't maintain their compensatory hyperventilation. A rising PaCO2 signals impending respiratory failure. Don't be falsely reassured by a 'normal' blood gas."
        },
        {
          "type": "alert",
          "title": "Intubation Considerations",
          "content": "**Indications for intubation:**\n\u2022 Respiratory arrest or apnea\n\u2022 Refractory hypoxemia\n\u2022 Altered consciousness\n\u2022 Severe respiratory fatigue\n\n**Key points:**\n\u2022 Intubation is HIGH RISK in asthma\u2014air trapping causes hypotension\n\u2022 Use ketamine for induction (bronchodilator properties)\n\u2022 Start with low respiratory rate to allow exhalation\n\u2022 Expect high airway pressures initially\n\u2022 Volume over pressure\u2014accept hypercapnia\n\u2022 Consider heliox, inhaled anesthetics in refractory cases"
        }
      ],
      "article": {
        "title": "Status Asthmaticus: Critical Care Approach",
        "readTime": "12 min",
        "content": "<h2>Bronchodilator Strategy</h2>\n<p>Short-acting beta-agonists (SABA) are the cornerstone of acute treatment. In moderate-severe exacerbations, continuous nebulized albuterol (10-15 mg/hour) is more effective than intermittent dosing. Ipratropium adds benefit in the first hour but doesn't need to be continued after initial treatment.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> MDI with spacer is as effective as nebulizer for mild-moderate exacerbations in cooperative patients. It's faster, cheaper, and reduces aerosolization. Reserve nebulizers for severe exacerbations or patients who can't coordinate MDI use.\n</div>\n\n<h2>The Steroid Question</h2>\n<p>Systemic steroids reduce inflammation, prevent relapse, and are essential in all but the mildest exacerbations. Oral and IV are equally effective\u2014use IV if patient can't tolerate oral or is severely ill. A 5-day course is standard; longer courses don't improve outcomes. There's no need to taper short courses.</p>\n\n<h2>Magnesium Sulfate</h2>\n<p>IV magnesium (2g over 20 minutes) causes bronchial smooth muscle relaxation. It's indicated for severe exacerbations not responding to initial bronchodilators. NNT is about 7 to prevent one admission. It's safe, inexpensive, and should be used early in severe cases.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Before discharge, ensure patients have: peak flow >70% predicted, minimal symptoms, proper inhaler technique, a written action plan, and scheduled follow-up within 1-2 weeks. Prescribe an ICS (or ICS-LABA) even if they weren't on one before\u2014any exacerbation requiring steroids indicates poor control.\n</div>\n\n<h2>Mechanical Ventilation in Asthma</h2>\n<p>Intubation in status asthmaticus is dangerous. Severe air trapping causes auto-PEEP, which impairs venous return. Post-intubation hypotension is common. Strategies: low respiratory rate (8-10), short inspiratory time, tolerate hypercapnia (permissive hypercapnia), and watch for pneumothorax. Paralysis may be needed initially to allow permissive hypoventilation.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with acute asthma has RR 34, can only speak in single words, and has SpO2 88%. Peak flow is 40% predicted. What is the severity classification?",
        "options": [
          "Mild",
          "Moderate",
          "Severe",
          "Life-threatening"
        ],
        "correct": 2,
        "explanation": "This is severe asthma: speaking in words only, RR \u226530, SpO2 <90%, peak flow \u226450%. Life-threatening would include silent chest, cyanosis, altered consciousness, or peak flow <25%. This patient needs aggressive treatment with continuous nebulizers, IV magnesium, and close monitoring."
      },
      {
        "question": "A patient with acute asthma exacerbation has improved with treatment. Peak flow is 75% predicted, she's speaking normally, and SpO2 is 96%. What is the appropriate disposition?",
        "options": [
          "ICU admission",
          "Hospital admission for observation",
          "Discharge home with follow-up",
          "Repeat bronchodilator treatment"
        ],
        "correct": 2,
        "explanation": "Peak flow >70%, resolved symptoms, and normal oxygenation indicate good response to treatment. She can be discharged with: oral steroid course (5 days), rescue inhaler, ICS (initiation or step-up), written action plan, and follow-up in 1-2 weeks."
      },
      {
        "question": "A tachypneic patient with severe asthma has an ABG showing pH 7.38, PaCO2 42, PaO2 65. What does the normal PaCO2 indicate?",
        "options": [
          "The patient is improving",
          "The patient has chronic CO2 retention",
          "The patient is tiring and may need intubation",
          "The ABG is likely erroneous"
        ],
        "correct": 2,
        "explanation": "In acute asthma, hyperventilation causes LOW PaCO2. A 'normal' PaCO2 in a tachypneic asthmatic indicates respiratory muscle fatigue\u2014they can't maintain compensatory hyperventilation. This is a warning sign of impending respiratory failure. The patient needs escalated care and preparation for possible intubation."
      },
      {
        "question": "Which medication should be added for severe asthma exacerbation not responding to initial albuterol and ipratropium?",
        "options": [
          "Theophylline IV",
          "Magnesium sulfate 2g IV",
          "Heliox",
          "Antibiotics"
        ],
        "correct": 1,
        "explanation": "IV magnesium sulfate (2g over 20 min) is recommended for severe asthma not responding to initial bronchodilators. It's safe, effective, and inexpensive. Theophylline is no longer recommended due to side effects. Heliox is reserved for refractory cases. Antibiotics aren't routinely indicated unless infection is suspected."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "GINA Asthma Guidelines",
        "year": "2023",
        "summary": "Global Initiative for Asthma guidelines on acute exacerbation management, emphasizing severity assessment, bronchodilators, and steroids.",
        "concepts": [
          "asthma",
          "exacerbation"
        ]
      },
      {
        "type": "trial",
        "title": "3Mg Trial",
        "year": "2013",
        "summary": "Intravenous magnesium sulfate reduced hospital admissions in severe acute asthma. NNT approximately 7.",
        "concepts": [
          "asthma",
          "magnesium"
        ]
      },
      {
        "type": "guideline",
        "title": "BTS Asthma Guidelines",
        "year": "2019",
        "summary": "British Thoracic Society guidelines on acute asthma management including severity classification and escalation criteria.",
        "concepts": [
          "asthma",
          "management"
        ]
      }
    ]
  },
  "meningitis": {
    "id": "meningitis",
    "name": "Bacterial Meningitis",
    "category": "infectious",
    "subcategory": "cns-infections",
    "knowledge": [
      "Clinical presentation triad",
      "Empiric antibiotic selection",
      "Role of dexamethasone",
      "Lumbar puncture interpretation"
    ],
    "skills": [
      "Recognize meningitis clinically",
      "Select empiric therapy by age",
      "Interpret CSF findings",
      "Time dexamethasone appropriately"
    ],
    "lesson": {
      "title": "Bacterial Meningitis: Recognition and Treatment",
      "sections": [
        {
          "type": "intro",
          "content": "Bacterial meningitis is infection of the meninges with high morbidity and mortality if not treated promptly. The classic triad (fever, neck stiffness, altered mental status) is present in only 44% of cases. Empiric antibiotics should be given immediately\u2014do NOT delay for LP or imaging. Dexamethasone reduces mortality in pneumococcal meningitis when given before or with the first antibiotic dose."
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Classic triad (present in ~44%):**\n\u2022 Fever\n\u2022 Nuchal rigidity (neck stiffness)\n\u2022 Altered mental status\n\n**Other features:**\n\u2022 Headache (most common symptom)\n\u2022 Photophobia\n\u2022 Nausea, vomiting\n\u2022 Kernig sign (pain with knee extension when hip flexed)\n\u2022 Brudzinski sign (hip flexion when neck flexed)\n\u2022 Petechial rash (suggests N. meningitidis)\n\n**High-risk presentations:**\n\u2022 Rapid deterioration\n\u2022 Seizures\n\u2022 Focal neurologic deficits\n\u2022 Papilledema (suggests elevated ICP)"
        },
        {
          "type": "concept",
          "title": "Common Organisms by Age",
          "content": "**Neonates (<1 month):**\n\u2022 Group B Streptococcus\n\u2022 E. coli\n\u2022 Listeria monocytogenes\n\n**Infants/children (1 mo - 50 yrs):**\n\u2022 Streptococcus pneumoniae\n\u2022 Neisseria meningitidis\n\u2022 H. influenzae (if unvaccinated)\n\n**Adults >50, immunocompromised, alcoholics:**\n\u2022 S. pneumoniae\n\u2022 N. meningitidis\n\u2022 Listeria monocytogenes\n\u2022 Gram-negative bacilli"
        },
        {
          "type": "concept",
          "title": "Empiric Antibiotic Therapy",
          "content": "**Adults 18-50 years:**\n\u2022 Ceftriaxone 2g IV q12h + Vancomycin\n\u2022 (Vancomycin for resistant pneumococcus)\n\n**Adults >50, alcoholics, immunocompromised:**\n\u2022 Ceftriaxone 2g IV q12h + Vancomycin + Ampicillin 2g IV q4h\n\u2022 (Ampicillin covers Listeria)\n\n**Neonates:**\n\u2022 Ampicillin + Cefotaxime (or gentamicin)\n\n**Key:** Give antibiotics IMMEDIATELY. Do not wait for LP or CT."
        },
        {
          "type": "pearl",
          "title": "The Dexamethasone Decision",
          "content": "Dexamethasone 0.15 mg/kg q6h \u00d7 4 days reduces mortality in PNEUMOCOCCAL meningitis when given BEFORE or WITH the first antibiotic dose. Give it empirically to all adults with suspected bacterial meningitis. If cultures show organism other than pneumococcus, you can stop dexamethasone. Benefit is lost if given >1 hour after antibiotics."
        },
        {
          "type": "alert",
          "title": "When to Image Before LP",
          "content": "**CT head BEFORE LP if:**\n\u2022 Immunocompromised\n\u2022 History of CNS disease\n\u2022 New seizure (within 1 week)\n\u2022 Papilledema\n\u2022 Altered consciousness\n\u2022 Focal neurologic deficit\n\n**Critical:** Do NOT delay antibiotics for imaging! Give empiric antibiotics, then CT, then LP. Blood cultures before antibiotics if possible, but don't delay treatment.\n\n**LP contraindicated if:**\n\u2022 Midline shift on CT\n\u2022 Obstructive hydrocephalus\n\u2022 Posterior fossa mass"
        }
      ],
      "article": {
        "title": "Bacterial Meningitis: Evidence-Based Management",
        "readTime": "14 min",
        "content": "<h2>CSF Interpretation</h2>\n<p>Bacterial meningitis has characteristic CSF findings: elevated WBC (usually >1000/\u03bcL, predominantly neutrophils), elevated protein (>50 mg/dL), and low glucose (<40 mg/dL or CSF/serum ratio <0.4). Gram stain is positive in 60-90% of untreated cases but drops significantly after antibiotics.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> CSF studies can help distinguish bacterial from viral meningitis, but treat empirically if there's any doubt. Partially treated bacterial meningitis can have atypical CSF findings resembling viral meningitis.\n</div>\n\n<h2>Timing Is Critical</h2>\n<p>Every hour of delay in antibiotic administration increases mortality. The sequence should be: clinical suspicion \u2192 blood cultures (if immediately available) \u2192 dexamethasone + antibiotics \u2192 CT (if indicated) \u2192 LP. Never withhold antibiotics waiting for diagnostic tests.</p>\n\n<h2>Chemoprophylaxis</h2>\n<p>Close contacts of patients with N. meningitidis meningitis need prophylaxis within 24 hours of diagnosis: ciprofloxacin 500mg \u00d7 1, rifampin 600mg BID \u00d7 2 days, or ceftriaxone 250mg IM \u00d7 1. Close contact means household members, daycare contacts, or anyone exposed to oral secretions.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Herpes simplex encephalitis (HSV) presents similarly but affects the temporal lobes. If there's any concern for HSV encephalitis (altered consciousness, seizures, focal findings), add acyclovir 10 mg/kg IV q8h to your empiric regimen.\n</div>\n\n<h2>Complications</h2>\n<p>Early complications include cerebral edema, hydrocephalus, seizures, and septic shock. Late complications include hearing loss (especially with pneumococcal meningitis\u2014audiometry recommended), cognitive impairment, and focal neurologic deficits. The dexamethasone benefit in reducing these complications is most pronounced for pneumococcal meningitis.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A 65-year-old with fever, headache, and confusion is suspected of having bacterial meningitis. Which empiric antibiotic regimen is most appropriate?",
        "options": [
          "Ceftriaxone alone",
          "Ceftriaxone + Vancomycin",
          "Ceftriaxone + Vancomycin + Ampicillin",
          "Penicillin G alone"
        ],
        "correct": 2,
        "explanation": "Adults >50 years need coverage for Listeria in addition to pneumococcus and meningococcus. Ampicillin covers Listeria. Ceftriaxone covers most organisms but not resistant pneumococcus (vancomycin) or Listeria (ampicillin)."
      },
      {
        "question": "When should dexamethasone be given in suspected bacterial meningitis?",
        "options": [
          "After LP confirms bacterial infection",
          "Only if CSF shows pneumococcus",
          "Before or with the first dose of antibiotics",
          "48 hours after starting antibiotics"
        ],
        "correct": 2,
        "explanation": "Dexamethasone benefit is only seen when given BEFORE or WITH the first antibiotic dose. Delaying until after LP or culture results eliminates the survival benefit. Give empirically and discontinue if cultures show organism other than pneumococcus."
      },
      {
        "question": "Which finding is an indication for CT head BEFORE lumbar puncture?",
        "options": [
          "Fever",
          "Neck stiffness",
          "New seizure within past week",
          "Headache"
        ],
        "correct": 2,
        "explanation": "New seizure (within 1 week), immunocompromised state, focal neurologic deficit, papilledema, altered consciousness, and history of CNS disease are indications for CT before LP to rule out mass lesion or elevated ICP. Fever, neck stiffness, and headache alone do not require CT first."
      },
      {
        "question": "Classic CSF findings in bacterial meningitis include:",
        "options": [
          "Low WBC, high glucose, low protein",
          "High WBC (lymphocyte predominant), normal glucose",
          "High WBC (neutrophil predominant), low glucose, high protein",
          "Normal WBC, elevated protein only"
        ],
        "correct": 2,
        "explanation": "Bacterial meningitis typically shows elevated WBC (often >1000/\u03bcL) with neutrophil predominance, low glucose (<40 or CSF/serum ratio <0.4), and elevated protein. Viral meningitis has lymphocyte predominance with normal glucose."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "IDSA Bacterial Meningitis Guidelines",
        "year": "2017",
        "summary": "Evidence-based guidelines on diagnosis and management of bacterial meningitis, including empiric therapy, adjunctive dexamethasone, and chemoprophylaxis.",
        "concepts": [
          "meningitis",
          "antibiotics"
        ]
      },
      {
        "type": "trial",
        "title": "European Dexamethasone Trial",
        "year": "2002",
        "summary": "Dexamethasone reduced mortality in adults with pneumococcal meningitis when given before or with first antibiotic dose.",
        "concepts": [
          "meningitis",
          "dexamethasone"
        ]
      },
      {
        "type": "trial",
        "title": "Meningitis Diagnostic Accuracy",
        "year": "2004",
        "summary": "Classic triad present in only 44% of cases. Jolt accentuation test has high sensitivity for meningitis.",
        "concepts": [
          "meningitis",
          "diagnosis"
        ]
      }
    ]
  },
  "delirium": {
    "id": "delirium",
    "name": "Delirium",
    "category": "neurology",
    "subcategory": "altered-mental-status",
    "knowledge": [
      "CAM diagnostic criteria",
      "Common precipitants",
      "Non-pharmacologic prevention",
      "Medication management"
    ],
    "skills": [
      "Screen for delirium using CAM",
      "Identify reversible causes",
      "Implement HELP protocol",
      "Manage agitation safely"
    ],
    "lesson": {
      "title": "Delirium: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Delirium is an acute confusional state characterized by fluctuating attention and awareness. It affects 20-50% of hospitalized elderly patients and is associated with increased mortality, prolonged hospitalization, and cognitive decline. Most cases are preventable, and management focuses on treating underlying causes while providing supportive care."
        },
        {
          "type": "concept",
          "title": "CAM Criteria",
          "content": "**Confusion Assessment Method (CAM):**\n\nDelirium requires features 1 AND 2, PLUS either 3 OR 4:\n\n1. **Acute onset and fluctuating course**\n   - Is this a change from baseline?\n   - Does it come and go?\n\n2. **Inattention**\n   - Difficulty focusing, easily distracted\n   - Days of week backward, serial 7s\n\n3. **Disorganized thinking**\n   - Rambling, illogical speech\n   - Unpredictable topic switching\n\n4. **Altered level of consciousness**\n   - Hyperalert, lethargic, stuporous"
        },
        {
          "type": "concept",
          "title": "Delirium Subtypes",
          "content": "**Hyperactive (25%):**\n\u2022 Agitation, restlessness\n\u2022 Hallucinations common\n\u2022 Easily recognized\n\n**Hypoactive (25%):**\n\u2022 Withdrawn, quiet\n\u2022 Decreased activity\n\u2022 Often MISSED\u2014looks like depression or fatigue\n\n**Mixed (50%):**\n\u2022 Fluctuates between hyper and hypoactive\n\u2022 Most common subtype\n\n**Key point:** Hypoactive delirium has WORSE outcomes but is under-recognized. Screen all elderly patients, not just the agitated ones."
        },
        {
          "type": "concept",
          "title": "Common Precipitants",
          "content": "**Mnemonic: DELIRIUM**\n\u2022 **D**rugs (anticholinergics, benzos, opioids, steroids)\n\u2022 **E**lectrolytes (Na, Ca, glucose)\n\u2022 **L**ack of drugs (withdrawal from alcohol, benzos)\n\u2022 **I**nfection (UTI, pneumonia, sepsis)\n\u2022 **R**educed sensory input (vision/hearing impairment)\n\u2022 **I**ntracranial (stroke, bleed, seizure)\n\u2022 **U**rinary retention/fecal impaction\n\u2022 **M**yocardial/pulmonary (MI, PE, hypoxia)\n\n**Also consider:** Pain, sleep deprivation, ICU environment, restraints"
        },
        {
          "type": "pearl",
          "title": "Prevention Is Better Than Treatment",
          "content": "The HELP (Hospital Elder Life Program) protocol reduces delirium incidence by 40%:\n\u2022 Orientation (clocks, calendars, familiar objects)\n\u2022 Mobilization (get patients out of bed)\n\u2022 Sleep hygiene (minimize nighttime interruptions)\n\u2022 Sensory optimization (glasses, hearing aids)\n\u2022 Hydration and nutrition\n\u2022 Avoid deliriogenic medications\n\nEvery patient \u226570 should have delirium prevention in their care plan."
        },
        {
          "type": "alert",
          "title": "Pharmacologic Management",
          "content": "**First line: Treat the cause!**\nMedications are for safety only when severe agitation threatens patient or staff.\n\n**If medications needed:**\n\u2022 Haloperidol 0.5-1mg IV/IM (avoid in Parkinson's, QTc prolongation)\n\u2022 Quetiapine 12.5-25mg PO (preferred if Parkinson's or high fall risk)\n\u2022 Avoid benzodiazepines (worsen delirium) EXCEPT for alcohol/benzo withdrawal\n\n**NEVER use:**\n\u2022 Restraints as first-line (worsen agitation)\n\u2022 Diphenhydramine (anticholinergic)\n\u2022 Long-acting sedatives\n\n**De-escalate:** Use lowest effective dose, reassess daily, stop when delirium resolves"
        }
      ],
      "article": {
        "title": "Delirium: The Sixth Vital Sign",
        "readTime": "12 min",
        "content": "<h2>The Scope of the Problem</h2>\n<p>Delirium is not just confusion\u2014it's a medical emergency. Delirious patients have 2-3x higher mortality, longer hospital stays, higher rates of nursing home placement, and accelerated cognitive decline. Yet it remains under-recognized, particularly the hypoactive subtype that presents quietly.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Delirium is often the ONLY sign of serious illness in elderly patients. A new-onset confusion may be the presenting symptom of MI, PE, sepsis, or stroke. Never dismiss delirium as 'sundowning' or 'old age' without thorough evaluation.\n</div>\n\n<h2>The Vulnerable Brain</h2>\n<p>Delirium occurs when a vulnerable brain (baseline cognitive impairment, advanced age, sensory deficits) encounters a precipitant (infection, medication, surgery). The more vulnerable the patient, the smaller the insult needed to tip them into delirium. A young healthy adult might tolerate multiple deliriogenic medications; an 85-year-old with dementia might become delirious from a UTI alone.</p>\n\n<h2>The Medication Culprits</h2>\n<p>Medications are the most modifiable risk factor. The Beers Criteria identifies high-risk drugs, but the main categories are:</p>\n<p><strong>Anticholinergics:</strong> Diphenhydramine, oxybutynin, tricyclic antidepressants, first-generation antihistamines. These block acetylcholine, essential for cognition.</p>\n<p><strong>Sedatives:</strong> Benzodiazepines and Z-drugs. Even 'as needed' doses accumulate in elderly patients with altered metabolism.</p>\n<p><strong>Opioids:</strong> Necessary for pain but start low, use scheduled mild analgesics, and minimize PRN narcotics.</p>\n<p><strong>Others:</strong> Steroids, fluoroquinolones, H2 blockers, and many cardiac medications.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> When evaluating delirium, review EVERY medication including 'as needed' orders. The combination of a scheduled opioid, PRN lorazepam, and diphenhydramine for sleep is a delirium recipe.\n</div>\n\n<h2>Post-Hospital Course</h2>\n<p>Delirium doesn't end at discharge. Up to 50% of patients have persistent cognitive impairment at discharge, and many never return to baseline. Delirium may unmask underlying dementia or accelerate cognitive decline. Counsel families that recovery is gradual and some deficits may be permanent.</p>"
      },
      "podcast": {
        "title": "Delirium Prevention with Dr. Geri",
        "duration": "10:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Geri, why is delirium so important?"
          },
          {
            "speaker": "Dr. Geri",
            "text": "Because it's common, preventable, and deadly. Up to half of hospitalized elderly patients develop delirium, and it doubles their mortality risk. Yet we under-recognize it constantly, especially the quiet hypoactive type. It's a vital sign we're not measuring."
          },
          {
            "speaker": "Host",
            "text": "How do you screen for it?"
          },
          {
            "speaker": "Dr. Geri",
            "text": "The CAM takes 2 minutes. Acute change plus inattention, plus either disorganized thinking or altered consciousness. I teach nurses to do it every shift on anyone over 70. The patients who are quietly staring at the ceiling? Those are the ones we're missing."
          },
          {
            "speaker": "Host",
            "text": "What's your prevention strategy?"
          },
          {
            "speaker": "Dr. Geri",
            "text": "Non-pharmacologic, always. Orientation\u2014get the patient's glasses and hearing aids. Mobilization\u2014no one should be in bed 24/7. Sleep hygiene\u2014cluster care, minimize nighttime vitals. And review medications obsessively. Every anticholinergic, every sedative needs justification."
          },
          {
            "speaker": "Host",
            "text": "When do you use medications for delirium?"
          },
          {
            "speaker": "Dr. Geri",
            "text": "Only for safety\u2014when the patient is pulling lines, climbing out of bed, threatening staff. And even then, the lowest dose possible. Haloperidol 0.5mg, maybe quetiapine 12.5mg. Never benzos unless it's alcohol withdrawal. And I stop it as soon as they're safe."
          },
          {
            "speaker": "Host",
            "text": "What do you tell families?"
          },
          {
            "speaker": "Dr. Geri",
            "text": "I prepare them that this might not be quick. Delirium can take weeks to resolve. Some patients have persistent cognitive effects. It's frightening for families to see their loved one suddenly not recognizing them. I validate that fear and set realistic expectations."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "An 82-year-old with dementia is admitted for pneumonia. On day 2, she becomes withdrawn, sleepy, and can't follow commands. What type of delirium is this?",
        "options": [
          "Hyperactive delirium",
          "Hypoactive delirium",
          "Mixed delirium",
          "This is not delirium, it's progression of dementia"
        ],
        "correct": 1,
        "explanation": "This is hypoactive delirium\u2014characterized by decreased activity, withdrawal, and lethargy. It's often missed because patients aren't disruptive. The acute change (day 2 of admission) distinguishes it from baseline dementia. Hypoactive delirium has worse outcomes than hyperactive and requires the same urgent evaluation."
      },
      {
        "question": "Which medication is MOST likely to precipitate delirium in an elderly patient?",
        "options": [
          "Acetaminophen",
          "Diphenhydramine",
          "Metoprolol",
          "Furosemide"
        ],
        "correct": 1,
        "explanation": "Diphenhydramine is a potent anticholinergic that crosses the blood-brain barrier and is strongly associated with delirium in elderly patients. It's on the Beers Criteria list of medications to avoid in older adults. Despite being 'over the counter,' it's one of the most deliriogenic drugs commonly used."
      },
      {
        "question": "An agitated delirious patient is pulling at IV lines and attempting to climb out of bed. The CAM is positive. What is the most appropriate first intervention?",
        "options": [
          "Apply physical restraints",
          "Lorazepam 2mg IV",
          "Re-orient, remove unnecessary lines, have family at bedside",
          "Haloperidol 5mg IV"
        ],
        "correct": 2,
        "explanation": "Non-pharmacologic interventions are always first-line for delirium agitation: re-orientation, removing unnecessary tethers (lines, catheters, monitors), family presence, and addressing underlying causes. Restraints worsen agitation. Medications (low-dose antipsychotics, NOT benzos) are only for severe agitation threatening safety. The doses listed for lorazepam and haloperidol are too high."
      },
      {
        "question": "Which component is NOT part of the CAM (Confusion Assessment Method) criteria?",
        "options": [
          "Acute onset and fluctuating course",
          "Inattention",
          "Visual hallucinations",
          "Disorganized thinking"
        ],
        "correct": 2,
        "explanation": "The four CAM features are: 1) Acute onset and fluctuating course, 2) Inattention, 3) Disorganized thinking, 4) Altered level of consciousness. Diagnosis requires 1+2 plus either 3 or 4. Visual hallucinations may occur in delirium but are not part of the CAM diagnostic criteria."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "AGS Delirium Guidelines",
        "year": "2014",
        "summary": "American Geriatrics Society guidelines on prevention and management of delirium in older adults, emphasizing non-pharmacologic interventions.",
        "concepts": [
          "delirium",
          "prevention"
        ]
      },
      {
        "type": "trial",
        "title": "HELP Study (Hospital Elder Life Program)",
        "year": "1999",
        "summary": "Multicomponent intervention (orientation, mobility, sleep, vision/hearing) reduced delirium incidence by 40% in hospitalized elderly.",
        "concepts": [
          "delirium",
          "prevention"
        ]
      },
      {
        "type": "trial",
        "title": "REDUCE Trial",
        "year": "2018",
        "summary": "Haloperidol prophylaxis did not reduce delirium incidence in ICU patients. Reinforces that prevention is multicomponent, not pharmacologic.",
        "concepts": [
          "delirium",
          "prevention"
        ]
      }
    ]
  },
  "hfref": {
    "id": "hfref",
    "name": "HFrEF (EF \u226440%)",
    "category": "cardiovascular",
    "subcategory": "heart-failure",
    "knowledge": [
      "GDMT four pillars",
      "Target doses for each medication class",
      "Sequencing and titration of therapy",
      "Device indications (ICD/CRT)"
    ],
    "skills": [
      "Initiate and titrate GDMT",
      "Assess volume status",
      "Determine ICD/CRT eligibility"
    ],
    "lesson": {
      "title": "HFrEF: Heart Failure with Reduced Ejection Fraction",
      "sections": [
        {
          "type": "intro",
          "content": "Heart failure with reduced ejection fraction (HFrEF), defined as LVEF \u226440%, represents the phenotype with the most robust evidence base for pharmacologic therapy. Understanding the four pillars of guideline-directed medical therapy (GDMT) is essential for every clinician."
        },
        {
          "type": "concept",
          "title": "The Four Pillars of GDMT",
          "content": "Every patient with HFrEF should be on all four medication classes unless contraindicated:\n\n1. **ACE-I/ARB/ARNI** - Block RAAS activation\n2. **Beta-Blockers** - Reduce sympathetic overdrive\n3. **MRAs** - Block aldosterone-mediated fibrosis\n4. **SGLT2 Inhibitors** - Multiple mechanisms including diuresis and improved energetics"
        },
        {
          "type": "pearl",
          "title": "Clinical Pearl",
          "content": "Don't wait to optimize one drug before starting another. Simultaneous initiation of multiple GDMT agents is safe and gets patients to goal faster. The old \"start low, go slow, one at a time\" approach is outdated."
        },
        {
          "type": "concept",
          "title": "Target Doses Matter",
          "content": "The mortality benefit comes from target doses, not just any dose. Carvedilol 25mg BID, lisinopril 40mg daily, spironolactone 25-50mg daily. Titrate at each visit if BP and labs allow."
        },
        {
          "type": "alert",
          "title": "Common Pitfall",
          "content": "Don't stop GDMT for a systolic BP of 90-95 if the patient is asymptomatic. Tolerating low BP is a feature, not a bug\u2014it means the neurohormonal blockade is working."
        }
      ],
      "article": {
        "title": "Heart Failure: A Comprehensive Deep Dive",
        "readTime": "15 min",
        "content": "<h2>Understanding Heart Failure</h2>\n<p>Heart failure is not a single disease but a clinical syndrome characterized by the heart's inability to meet the metabolic demands of the body. It affects approximately 6.2 million adults in the United States, with over 900,000 new diagnoses annually.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Definition:</strong> Heart failure is defined as a structural or functional cardiac abnormality resulting in reduced cardiac output and/or elevated intracardiac pressures at rest or during stress.\n</div>\n\n<h2>Classification by Ejection Fraction</h2>\n<p><strong>HFrEF (LVEF \u226440%):</strong> \"Classic\" systolic heart failure. The ventricle cannot contract forcefully enough to maintain adequate forward flow. This is the phenotype with the most robust evidence base for pharmacologic therapy.</p>\n\n<p><strong>HFmrEF (LVEF 41-49%):</strong> A \"gray zone\" that may behave more like HFrEF or HFpEF. Emerging data suggests these patients may benefit from HFrEF therapies, particularly SGLT2 inhibitors.</p>\n\n<p><strong>HFpEF (LVEF \u226550%):</strong> Evidence of diastolic dysfunction with elevated filling pressures. Accounts for nearly half of all HF cases.</p>\n\n<div class=\"article-pearl\">\n<strong>Clinical Pearl:</strong> EF alone doesn't tell the whole story. A patient with an EF of 45% who was previously at 60% has significant systolic dysfunction, even though they technically have HFmrEF. Always consider the trajectory, not just the absolute number.\n</div>\n\n<h2>Pathophysiology: The Neurohormonal Model</h2>\n<p>Understanding why GDMT works requires understanding the neurohormonal cascade:</p>\n\n<p><strong>1. Initial Insult:</strong> Myocardial injury (MI, viral, toxic) or chronic stress (HTN, valvular disease) reduces cardiac output.</p>\n\n<p><strong>2. Compensatory Response:</strong> The body activates the sympathetic nervous system and RAAS to maintain perfusion.</p>\n\n<p><strong>3. Maladaptive Remodeling:</strong> These \"compensations\" become harmful over time. Chronic catecholamine exposure is cardiotoxic. Angiotensin II promotes fibrosis.</p>\n\n<p><strong>4. Progressive Dysfunction:</strong> The ventricle dilates, wall stress increases, and function deteriorates\u2014perpetuating the cycle.</p>\n\n<blockquote>\"The failing heart is bathing in its own poison.\" \u2014 This captures why neurohormonal blockade is so effective. We're not making the heart pump harder; we're removing the toxic milieu that drives progression.</blockquote>\n\n<h2>The Four Pillars of GDMT</h2>\n<p>For HFrEF, four drug classes have proven mortality benefit:</p>\n\n<p><strong>1. ACE Inhibitors / ARBs / ARNI:</strong> Block the RAAS. ARNI adds neprilysin inhibition, enhancing natriuretic peptides. PARADIGM-HF showed ARNI superiority over enalapril.</p>\n\n<p><strong>2. Beta-Blockers:</strong> Only carvedilol, metoprolol succinate, and bisoprolol have mortality evidence. They reduce heart rate and counteract toxic catecholamine effects.</p>\n\n<p><strong>3. MRAs:</strong> Spironolactone and eplerenone block aldosterone-mediated fibrosis. RALES demonstrated 30% mortality reduction.</p>\n\n<p><strong>4. SGLT2 Inhibitors:</strong> The newest pillar. Reduce HF hospitalization and CV death regardless of diabetes status. DAPA-HF was practice-changing.</p>\n\n<h2>Acute Decompensated Heart Failure</h2>\n<p>ADHF requires different priorities: relieving congestion and maintaining perfusion.</p>\n\n<p><strong>Diuresis:</strong> IV loop diuretics first-line. Start at home dose or higher. The DOSE trial showed higher doses achieve better decongestion.</p>\n\n<p><strong>Cardiorenal Syndrome:</strong> Creatinine often rises during diuresis. This shouldn't reflexively stop decongestion. A Cr bump with good urine output often reflects prerenal changes that improve once euvolemia is achieved.</p>"
      },
      "podcast": {
        "title": "Heart Failure Deep Dive with Dr. Chen",
        "duration": "12:34",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Welcome to Watershed Rounds. Today we're diving deep into heart failure management with Dr. Chen, a heart failure specialist."
          },
          {
            "speaker": "Dr. Chen",
            "text": "Thanks for having me. Heart failure is one of those topics where understanding the 'why' behind our treatments transforms how you approach each patient."
          },
          {
            "speaker": "Host",
            "text": "Let's start with the basics. When a student presents a patient with HFrEF, what's the first thing you're thinking about?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "I'm immediately asking: Are they on all four pillars of GDMT? And if not, why not? Too often I see patients on a baby dose of lisinopril and nothing else. That's a missed opportunity."
          },
          {
            "speaker": "Host",
            "text": "The four pillars being ACE-I or ARNI, beta-blocker, MRA, and SGLT2i, right?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "Exactly. Each one reduces mortality 20-35%. Combined, the benefit is synergistic. We're not just treating symptoms\u2014we're fundamentally changing the disease trajectory."
          },
          {
            "speaker": "Host",
            "text": "What about the fear of dropping blood pressure or raising creatinine?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "This is where trainees get stuck. Yes, these medications can lower BP and bump creatinine. But we tolerate a systolic in the 90s if the patient is asymptomatic. And a 30% rise in creatinine from an ACE-I is acceptable\u2014it reflects efferent arteriolar dilation, which is actually nephroprotective long-term."
          },
          {
            "speaker": "Host",
            "text": "Let's talk about acute decompensation. The patient is admitted with volume overload. Walk me through your approach."
          },
          {
            "speaker": "Dr. Chen",
            "text": "First, IV diuretics. I start at least home dose converted to IV, often double. Oral furosemide has terrible bioavailability when your gut is edematous. If they're on 40mg PO at home, I'm giving 80mg IV or more."
          },
          {
            "speaker": "Host",
            "text": "And if the creatinine starts rising during diuresis?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "This is where the mantra 'the kidney that decongests survives' is so important. Venous congestion itself causes AKI. A small Cr bump with good urine output and clinical improvement? Keep going. Now, if Cr doubles and they're anuric, that's different\u2014but that's rare when you're adequately decongesting."
          },
          {
            "speaker": "Host",
            "text": "Any final teaching points for our learners?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "Know your landmark trials. PARADIGM, DAPA-HF, RALES, COPERNICUS\u2014these inform every decision we make. And remember: the question isn't if to start GDMT, it's how quickly you can get to goal doses. Your patients' lives depend on it."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 58-year-old man with HFrEF (EF 30%) is on lisinopril 5mg daily and metoprolol succinate 25mg daily. His BP is 118/72. What is the most appropriate next step?",
        "options": [
          "Add spironolactone 25mg daily",
          "Uptitrate both current medications toward target doses",
          "Start SGLT2 inhibitor before any dose changes",
          "Continue current doses since BP is controlled"
        ],
        "correct": 1,
        "explanation": "While adding additional GDMT agents is important, the priority here is uptitrating existing medications toward target doses. Sub-therapeutic doses don't provide the same mortality benefit as target doses. With a BP of 118/72, there's room to increase both lisinopril (target 40mg) and metoprolol succinate (target 200mg)."
      },
      {
        "question": "Which beta-blocker does NOT have mortality benefit evidence in HFrEF?",
        "options": [
          "Carvedilol",
          "Metoprolol succinate",
          "Metoprolol tartrate",
          "Bisoprolol"
        ],
        "correct": 2,
        "explanation": "Only three beta-blockers have mortality evidence in HFrEF: carvedilol, metoprolol succinate (the extended-release form), and bisoprolol. Metoprolol tartrate (immediate-release) does NOT have HFrEF mortality data and should not be used for this indication."
      },
      {
        "question": "A patient on enalapril 10mg BID is being switched to sacubitril/valsartan (ARNI). What is the required washout period?",
        "options": [
          "12 hours",
          "24 hours",
          "36 hours",
          "48 hours"
        ],
        "correct": 2,
        "explanation": "A 36-hour washout is mandatory when switching from an ACE inhibitor to ARNI (sacubitril/valsartan) to prevent angioedema. This is because neprilysin inhibition combined with ACE inhibition can cause dangerous bradykinin accumulation. This is non-negotiable."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "PARADIGM-HF",
        "year": "2014",
        "summary": "Sacubitril/valsartan (ARNI) superior to enalapril in HFrEF, reducing CV death and HF hospitalization by 20%.",
        "concepts": [
          "arni",
          "hfref"
        ]
      },
      {
        "type": "trial",
        "title": "DAPA-HF",
        "year": "2019",
        "summary": "Dapagliflozin reduced worsening HF and CV death by 26% in HFrEF regardless of diabetes status. Made SGLT2i the 4th pillar.",
        "concepts": [
          "sglt2i",
          "hfref"
        ]
      },
      {
        "type": "guideline",
        "title": "2022 AHA/ACC/HFSA Heart Failure Guidelines",
        "year": "2022",
        "summary": "Comprehensive guidelines establishing 4-pillar GDMT and updated treatment algorithms.",
        "concepts": [
          "hfref",
          "gdmt"
        ]
      },
      {
        "type": "trial",
        "title": "COPERNICUS",
        "year": "2001",
        "summary": "Carvedilol reduces mortality 35% even in severe HFrEF (EF <25%, NYHA IV). Proved beta-blockers safe in decompensated patients.",
        "concepts": [
          "beta-blockers",
          "hfref"
        ]
      }
    ]
  },
  "adrenal-insufficiency": {
    "id": "adrenal-insufficiency",
    "name": "Adrenal Insufficiency",
    "category": "endocrine",
    "subcategory": "adrenal",
    "knowledge": [
      "Primary vs secondary causes",
      "Cosyntropin stimulation test",
      "Stress dosing protocols",
      "Adrenal crisis recognition"
    ],
    "skills": [
      "Diagnose adrenal insufficiency",
      "Interpret stimulation testing",
      "Manage glucocorticoid replacement",
      "Treat adrenal crisis"
    ],
    "lesson": {
      "title": "Adrenal Insufficiency: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Adrenal insufficiency (AI) is inadequate cortisol production. Primary AI (Addison's disease) is adrenal gland failure; secondary AI is pituitary/hypothalamic dysfunction. The most common cause in developed countries is iatrogenic\u2014chronic glucocorticoid use suppressing the HPA axis. Recognition is critical because untreated AI can be fatal."
        },
        {
          "type": "concept",
          "title": "Classification",
          "content": "**Primary adrenal insufficiency (Addison's):**\n\u2022 Problem in adrenal glands\n\u2022 Low cortisol, HIGH ACTH (feedback)\n\u2022 ALSO low aldosterone (mineralocorticoid deficiency)\n\u2022 Causes: Autoimmune (80%), TB, adrenal hemorrhage, metastases, drugs (ketoconazole, etomidate)\n\n**Secondary adrenal insufficiency:**\n\u2022 Problem in pituitary (ACTH deficiency) or hypothalamus (CRH deficiency)\n\u2022 Low cortisol, LOW/normal ACTH\n\u2022 Aldosterone usually PRESERVED (regulated by RAAS, not ACTH)\n\u2022 Causes: Chronic glucocorticoid use (most common!), pituitary tumors, surgery, radiation"
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Symptoms:**\n\u2022 Fatigue (universal)\n\u2022 Weakness, weight loss\n\u2022 Nausea, vomiting, abdominal pain\n\u2022 Salt craving (primary AI)\n\u2022 Dizziness, orthostatic hypotension\n\n**Signs:**\n\u2022 Hyperpigmentation (primary AI only\u2014high ACTH stimulates melanocytes)\n\u2022 Hypotension, tachycardia\n\u2022 Vitiligo (if autoimmune)\n\n**Lab abnormalities:**\n\u2022 Hyponatremia (cortisol and aldosterone deficiency)\n\u2022 Hyperkalemia (primary AI\u2014aldosterone deficiency)\n\u2022 Hypoglycemia\n\u2022 Eosinophilia"
        },
        {
          "type": "concept",
          "title": "Diagnostic Testing",
          "content": "**Screening:**\n\u2022 Morning cortisol <3 \u03bcg/dL = AI likely\n\u2022 Morning cortisol >15 \u03bcg/dL = AI unlikely\n\u2022 Cortisol 3-15 = needs stimulation testing\n\n**Cosyntropin (ACTH) stimulation test:**\n\u2022 Give 250 \u03bcg IV/IM cosyntropin\n\u2022 Measure cortisol at 30 and 60 minutes\n\u2022 Normal: Peak cortisol \u226518-20 \u03bcg/dL\n\u2022 Abnormal: Confirms AI (primary or secondary)\n\n**Distinguishing primary vs secondary:**\n\u2022 Check ACTH: High = primary, Low = secondary\n\u2022 Primary AI: Check 21-hydroxylase antibodies, aldosterone"
        },
        {
          "type": "pearl",
          "title": "The Steroid Withdrawal Problem",
          "content": "Chronic glucocorticoid use (>3 weeks at supraphysiologic doses) suppresses the HPA axis. Recovery can take months to a year. These patients need stress-dose steroids during illness or surgery even after stopping chronic steroids. Ask about ANY steroid use: oral, inhaled, topical, injected. Assume HPA suppression if \u22653 weeks of prednisone \u22657.5mg or equivalent."
        },
        {
          "type": "alert",
          "title": "Adrenal Crisis",
          "content": "**Life-threatening emergency!**\n\n**Presentation:**\n\u2022 Hypotension/shock refractory to fluids\n\u2022 Severe nausea, vomiting, abdominal pain\n\u2022 Altered mental status\n\u2022 Fever (or hypothermia)\n\u2022 Precipitants: Infection, surgery, trauma, stopping steroids\n\n**Treatment (don't wait for labs!):**\n\u2022 Hydrocortisone 100mg IV STAT, then 50-100mg IV q6-8h\n\u2022 NS volume resuscitation (may need several liters)\n\u2022 Dextrose if hypoglycemic\n\u2022 Treat precipitant\n\u2022 After stabilization: Taper to maintenance, add fludrocortisone if primary AI"
        }
      ],
      "article": {
        "title": "Adrenal Insufficiency: Don't Miss It",
        "readTime": "12 min",
        "content": "<h2>The Great Mimicker</h2>\n<p>Adrenal insufficiency presents with nonspecific symptoms\u2014fatigue, nausea, weight loss\u2014that overlap with many common conditions. The diagnosis is often delayed years. Maintain a high index of suspicion in patients with unexplained hypotension, hyponatremia, or symptoms that worsen with stress.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Hyperpigmentation (in sun-exposed areas, palmar creases, mucous membranes, scars) is specific for PRIMARY adrenal insufficiency. It results from elevated ACTH, which stimulates melanocyte-stimulating hormone receptors. Secondary AI doesn't cause hyperpigmentation because ACTH is low.\n</div>\n\n<h2>The Cortisol-Aldosterone Distinction</h2>\n<p>Primary AI loses both glucocorticoids (cortisol) and mineralocorticoids (aldosterone). Secondary AI usually preserves aldosterone because it's primarily regulated by the renin-angiotensin-aldosterone system, not ACTH. This explains why primary AI has hyperkalemia and more severe hyponatremia, while secondary AI has milder electrolyte disturbances.</p>\n\n<h2>Replacement Therapy</h2>\n<p><strong>Glucocorticoid replacement:</strong> Hydrocortisone 15-25 mg daily in divided doses (two-thirds AM, one-third PM to mimic circadian rhythm). Alternatively, prednisone 3-5 mg daily. Overreplacement causes Cushing's features; underreplacement leaves patients fatigued and at risk for crisis.</p>\n<p><strong>Mineralocorticoid replacement (primary AI only):</strong> Fludrocortisone 0.05-0.2 mg daily. Monitor blood pressure and potassium.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Every patient with AI needs a medical alert bracelet and emergency injection kit. They need written instructions on stress dosing: double or triple the dose for moderate illness, and seek emergency care with IV hydrocortisone for severe illness, vomiting (can't absorb oral), or trauma.\n</div>\n\n<h2>Stress Dosing</h2>\n<p>During physiological stress, cortisol output increases dramatically. AI patients can't mount this response and need supplemental glucocorticoids:</p>\n<p><strong>Minor stress (dental procedure, mild illness):</strong> Double maintenance dose for 2-3 days</p>\n<p><strong>Moderate stress (fever, outpatient surgery):</strong> Hydrocortisone 50mg IV before procedure, then 25mg q8h for 24-48h</p>\n<p><strong>Major stress (surgery, sepsis):</strong> Hydrocortisone 100mg IV, then 50mg q6-8h, taper as stress resolves</p>"
      },
      "podcast": {
        "title": "Adrenal Insufficiency with Dr. Endo",
        "duration": "10:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Endo, when do you suspect adrenal insufficiency?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "The classic presentation is fatigue, weight loss, and GI symptoms\u2014but those are so nonspecific. I think about it when I see unexplained hypotension, hyponatremia, or a patient who keeps getting sicker with minor illnesses. Hyperpigmentation is a big clue for primary AI."
          },
          {
            "speaker": "Host",
            "text": "How do you test for it?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "Start with morning cortisol. Under 3 is diagnostic, over 15 essentially rules it out. For values in between, I do the cosyntropin stimulation test. Give 250 micrograms, measure cortisol at 30 and 60 minutes. A peak under 18-20 confirms adrenal insufficiency."
          },
          {
            "speaker": "Host",
            "text": "How do you distinguish primary from secondary?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "ACTH level. In primary AI, ACTH is sky-high because the pituitary is desperately trying to stimulate failing adrenals. In secondary AI, ACTH is low or inappropriately normal. Also, primary AI has mineralocorticoid deficiency\u2014check potassium and aldosterone."
          },
          {
            "speaker": "Host",
            "text": "What's the most common cause you see?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "Iatrogenic\u2014chronic steroid use. Any patient on more than 3 weeks of prednisone at doses above 7.5 mg, or equivalent, has HPA suppression. I always ask about steroids: oral, injections, inhalers, even topical in large amounts. These patients need stress dosing during illness."
          },
          {
            "speaker": "Host",
            "text": "How do you manage adrenal crisis?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "Don't wait for labs if you suspect it. Give hydrocortisone 100 mg IV immediately, then 50-100 mg every 6-8 hours. Massive volume resuscitation with normal saline. Check for and treat the precipitant\u2014usually infection. Once stable, taper to maintenance and add fludrocortisone if it's primary AI."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient with primary adrenal insufficiency presents with severe vomiting and hypotension (BP 70/40). What is the immediate treatment?",
        "options": [
          "Fludrocortisone 0.1mg PO",
          "Hydrocortisone 100mg IV",
          "Dexamethasone 4mg IV",
          "Cosyntropin stimulation test first"
        ],
        "correct": 1,
        "explanation": "This is adrenal crisis\u2014treat immediately with IV hydrocortisone 100mg plus aggressive fluid resuscitation. Don't delay for testing. Fludrocortisone is for chronic mineralocorticoid replacement, not acute crisis. Dexamethasone has no mineralocorticoid activity and is less ideal for acute crisis (though it won't interfere with later cortisol testing if diagnosis uncertain)."
      },
      {
        "question": "Which finding distinguishes primary from secondary adrenal insufficiency?",
        "options": [
          "Fatigue",
          "Hyperpigmentation",
          "Hyponatremia",
          "Low morning cortisol"
        ],
        "correct": 1,
        "explanation": "Hyperpigmentation is specific for PRIMARY adrenal insufficiency. It's caused by elevated ACTH (feedback from low cortisol), which cross-reacts with melanocyte receptors. In secondary AI, ACTH is low, so hyperpigmentation doesn't occur. Fatigue, hyponatremia, and low cortisol can occur in either type."
      },
      {
        "question": "A patient on prednisone 20mg daily for 2 months is undergoing elective knee surgery. What perioperative steroid management is recommended?",
        "options": [
          "Continue home prednisone dose",
          "Stop prednisone for surgery",
          "Hydrocortisone 100mg IV before surgery, then 50mg q8h \u00d7 24-48h",
          "No steroids needed if surgery is minor"
        ],
        "correct": 2,
        "explanation": "Chronic glucocorticoid use (>3 weeks supraphysiologic dose) suppresses the HPA axis. This patient cannot mount an appropriate cortisol response to surgical stress and needs stress-dose steroids: hydrocortisone 100mg IV before surgery, then 50mg q8h, tapering back to maintenance as stress resolves."
      },
      {
        "question": "In secondary adrenal insufficiency, which hormone is typically PRESERVED?",
        "options": [
          "Cortisol",
          "ACTH",
          "Aldosterone",
          "DHEA"
        ],
        "correct": 2,
        "explanation": "Aldosterone is primarily regulated by the renin-angiotensin-aldosterone system, not ACTH. In secondary AI (pituitary/hypothalamic problem), ACTH is low so cortisol is low, but aldosterone is usually preserved. This is why secondary AI has less severe electrolyte disturbances (less hyperkalemia) than primary AI."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "Endocrine Society Adrenal Insufficiency Guidelines",
        "year": "2016",
        "summary": "Comprehensive guidelines on diagnosis, treatment, and monitoring of primary and secondary adrenal insufficiency.",
        "concepts": [
          "adrenal-insufficiency",
          "management"
        ]
      },
      {
        "type": "guideline",
        "title": "Adrenal Crisis Guidelines",
        "year": "2020",
        "summary": "Emergency management of adrenal crisis including immediate treatment protocols and prevention strategies.",
        "concepts": [
          "adrenal-crisis",
          "emergency"
        ]
      },
      {
        "type": "trial",
        "title": "HPA Axis Suppression from Glucocorticoids",
        "year": "2015",
        "summary": "Systematic review of HPA suppression from various glucocorticoid preparations and routes, informing stress-dosing recommendations.",
        "concepts": [
          "adrenal-insufficiency",
          "steroids"
        ]
      }
    ]
  },
  "gout": {
    "id": "gout",
    "name": "Gout",
    "category": "rheumatology",
    "subcategory": "crystal-arthritis",
    "knowledge": [
      "Acute flare diagnosis",
      "Treatment options for acute attack",
      "Urate-lowering therapy indications",
      "When NOT to start allopurinol"
    ],
    "skills": [
      "Recognize acute gout clinically",
      "Treat acute flares appropriately",
      "Initiate urate-lowering therapy",
      "Manage prophylaxis during initiation"
    ],
    "lesson": {
      "title": "Gout: Diagnosis and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Gout is the most common inflammatory arthritis, caused by monosodium urate crystal deposition. Acute flares present with sudden, severe monoarticular pain\u2014classically the first MTP joint (podagra). Diagnosis is clinical or by crystal identification. Acute treatment focuses on inflammation; long-term management requires urate-lowering therapy. The key principle: don't start or stop urate-lowering therapy during an acute flare."
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Acute gout flare:**\n\u2022 Sudden onset, often nocturnal\n\u2022 Severe pain, swelling, erythema\n\u2022 Peak within 12-24 hours\n\u2022 First MTP most common (podagra)\n\u2022 Also: ankle, knee, wrist, fingers\n\u2022 May have fever, leukocytosis\n\n**Classic presentation:**\n\u2022 Middle-aged man\n\u2022 History of hyperuricemia\n\u2022 Trigger: alcohol, dietary excess, dehydration, surgery, diuretic use\n\u2022 Spontaneous resolution in 7-14 days without treatment"
        },
        {
          "type": "concept",
          "title": "Diagnosis",
          "content": "**Gold standard:**\n\u2022 Joint aspiration with crystal analysis\n\u2022 Needle-shaped, negatively birefringent crystals under polarized microscopy\n\u2022 WBC elevated (often >10,000)\n\n**Clinical diagnosis (when aspiration not feasible):**\n\u2022 Typical presentation (podagra, acute monoarthritis)\n\u2022 Hyperuricemia (though 20% have normal uric acid during flare)\n\u2022 Response to therapy\n\u2022 Prior documented gout\n\n**Exclude septic arthritis:**\n\u2022 Fever + monoarthritis = tap the joint\n\u2022 Gout and infection can coexist"
        },
        {
          "type": "concept",
          "title": "Acute Flare Treatment",
          "content": "**NSAIDs (first-line if no contraindications):**\n\u2022 Indomethacin 50mg TID or naproxen 500mg BID\n\u2022 Use for 5-7 days or until flare resolves\n\n**Colchicine:**\n\u2022 Low-dose: 1.2mg, then 0.6mg 1 hour later (day 1)\n\u2022 Then 0.6mg BID until flare resolves\n\u2022 Most effective within first 24 hours\n\n**Corticosteroids:**\n\u2022 Prednisone 30-40mg daily \u00d7 5-7 days\n\u2022 Good for CKD, NSAID contraindications\n\u2022 Intra-articular injection for single joint\n\n**Key: Treat EARLY for best response**"
        },
        {
          "type": "pearl",
          "title": "The Uric Acid Paradox",
          "content": "Serum uric acid may be normal during an acute flare (crystals have deposited into the joint). Don't exclude gout based on normal uric acid. Also, don't initiate or discontinue urate-lowering therapy during a flare\u2014any change in uric acid level can mobilize crystals and prolong or worsen the attack. Wait 2-4 weeks after flare resolution to start allopurinol."
        },
        {
          "type": "alert",
          "title": "Urate-Lowering Therapy",
          "content": "**Indications:**\n\u2022 \u22652 flares per year\n\u2022 Tophi present\n\u2022 Chronic kidney disease with gout\n\u2022 Uric acid nephrolithiasis\n\u2022 First flare with CKD stage 3+ or uric acid \u22659\n\n**Agents:**\n\u2022 Allopurinol: Start low (100mg daily), titrate to uric acid goal <6\n\u2022 Febuxostat: Alternative if allopurinol intolerant\n\n**Flare prophylaxis when starting:**\n\u2022 Colchicine 0.6mg daily or BID\n\u2022 Continue for 3-6 months\n\u2022 Prevents mobilization flares\n\n**Target:** Serum uric acid <6 mg/dL (or <5 if tophi)"
        }
      ],
      "article": {
        "title": "Gout: Modern Management Principles",
        "readTime": "12 min",
        "content": "<h2>The Burden of Undertreated Gout</h2>\n<p>Gout is undertreated despite effective therapies. Many patients receive only acute treatment without addressing underlying hyperuricemia. Chronic poorly controlled gout leads to tophi, joint destruction, and frequent debilitating flares. The goal of urate-lowering therapy is to dissolve existing crystals and prevent new deposition.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> 'Treat to target' means titrating allopurinol (or febuxostat) to achieve serum uric acid <6 mg/dL. This requires starting low (100mg) and increasing every 2-4 weeks based on uric acid levels. Most patients need 300-400mg; some need more. Don't stop at a fixed dose\u2014titrate to goal.\n</div>\n\n<h2>Why Wait to Start Allopurinol?</h2>\n<p>Starting urate-lowering therapy during a flare can worsen and prolong it. As uric acid drops, crystals mobilize from tophi into the joint space, triggering more inflammation. Wait 2-4 weeks after flare resolution. However, once started, don't stop allopurinol during future flares\u2014that causes the same problem.</p>\n\n<h2>The CARES Trial Controversy</h2>\n<p>The CARES trial suggested febuxostat had higher cardiovascular mortality than allopurinol. This led to an FDA black box warning. However, subsequent analyses (including FAST trial) showed no difference. Allopurinol remains first-line; febuxostat is reasonable alternative, especially for allopurinol hypersensitivity.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> HLA-B*5801 testing is recommended before allopurinol in patients of Korean, Han Chinese, or Thai descent due to high risk of severe cutaneous adverse reactions (SCAR). In other populations, start low and titrate slowly. Symptoms of SCAR (rash, fever, eosinophilia) require immediate discontinuation.\n</div>\n\n<h2>Diet and Lifestyle</h2>\n<p>Lifestyle modifications help but rarely achieve target uric acid alone. Limit purine-rich foods (organ meats, shellfish), alcohol (especially beer), and fructose-sweetened beverages. Weight loss helps. Cherries may reduce flare risk. Dietary modification alone typically lowers uric acid by only 1-2 mg/dL\u2014most patients still need medication.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient presents with acute podagra. When should urate-lowering therapy (allopurinol) be initiated?",
        "options": [
          "Immediately during the acute flare",
          "2-4 weeks after the flare resolves",
          "Only if uric acid is elevated during the flare",
          "Never - acute treatment only"
        ],
        "correct": 1,
        "explanation": "Urate-lowering therapy should not be initiated during an acute flare\u2014changing uric acid levels can mobilize crystals and worsen/prolong the attack. Wait 2-4 weeks after flare resolution. If already on allopurinol, don't stop it during a flare."
      },
      {
        "question": "A patient with known gout presents with acute monoarthritis and fever. What is the most important diagnostic step?",
        "options": [
          "Check serum uric acid level",
          "Joint aspiration with Gram stain and culture",
          "Start colchicine and observe response",
          "X-ray of the joint"
        ],
        "correct": 1,
        "explanation": "Fever with monoarthritis requires joint aspiration to exclude septic arthritis\u2014gout and infection can coexist. Gram stain and culture are essential. Serum uric acid is unreliable during flares. Never assume gout in a febrile patient without excluding infection."
      },
      {
        "question": "What is the target serum uric acid level for patients on urate-lowering therapy?",
        "options": [
          "<8 mg/dL",
          "<7 mg/dL",
          "<6 mg/dL",
          "<4 mg/dL"
        ],
        "correct": 2,
        "explanation": "The target uric acid level is <6 mg/dL (or <5 mg/dL if tophi present). This is below the saturation point for urate crystal formation and allows existing crystals to dissolve over time. Titrate allopurinol to this target, not to a fixed dose."
      },
      {
        "question": "Why is flare prophylaxis (colchicine) given when starting allopurinol?",
        "options": [
          "Allopurinol causes immediate joint inflammation",
          "Lowering uric acid mobilizes crystals, which can trigger flares",
          "Colchicine enhances allopurinol absorption",
          "It is not needed if uric acid is very high"
        ],
        "correct": 1,
        "explanation": "When uric acid levels drop, crystals deposited in tissues can mobilize and enter the joint space, triggering flares. Prophylactic colchicine (0.6mg daily) for 3-6 months prevents these 'mobilization flares' during initiation of urate-lowering therapy."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ACR Gout Guidelines",
        "year": "2020",
        "summary": "Evidence-based guidelines on gout management including acute treatment, urate-lowering therapy initiation, and treat-to-target approach.",
        "concepts": [
          "gout",
          "allopurinol"
        ]
      },
      {
        "type": "trial",
        "title": "CARES Trial",
        "year": "2018",
        "summary": "Febuxostat associated with higher cardiovascular mortality than allopurinol in gout patients with CV disease, leading to FDA warning.",
        "concepts": [
          "gout",
          "febuxostat"
        ]
      },
      {
        "type": "trial",
        "title": "FAST Trial",
        "year": "2020",
        "summary": "Febuxostat noninferior to allopurinol for cardiovascular outcomes, questioning CARES results.",
        "concepts": [
          "gout",
          "febuxostat"
        ]
      }
    ]
  },
  "ugib": {
    "id": "ugib",
    "name": "Upper GI Bleeding",
    "category": "gi",
    "subcategory": "bleeding",
    "knowledge": [
      "Risk stratification scores",
      "Resuscitation endpoints",
      "Timing of endoscopy",
      "PPI therapy evidence"
    ],
    "skills": [
      "Calculate Glasgow-Blatchford score",
      "Manage variceal vs non-variceal bleed",
      "Determine transfusion thresholds",
      "Coordinate multidisciplinary care"
    ],
    "lesson": {
      "title": "Upper GI Bleeding: A Systematic Approach",
      "sections": [
        {
          "type": "intro",
          "content": "Upper GI bleeding (UGIB) presents as hematemesis, melena, or hematochezia (if massive). Management priorities are resuscitation, risk stratification to guide disposition and timing of endoscopy, and specific therapy based on bleeding source. PPI therapy is standard, but the role of pre-endoscopic prokinetics and timing of endoscopy remain areas of nuance."
        },
        {
          "type": "concept",
          "title": "Initial Assessment",
          "content": "**History clues:**\n\u2022 Hematemesis: Likely upper source\n\u2022 Coffee-ground emesis: Older blood, slower bleed\n\u2022 Melena: Upper source or proximal colon\n\u2022 Bright red blood per rectum: Usually lower, but massive UGIB can cause this\n\n**Physical exam:**\n\u2022 Hemodynamic status (HR, BP, orthostatics)\n\u2022 Signs of chronic liver disease (varices more likely)\n\u2022 Rectal exam: Stool color\n\u2022 NG lavage: Controversial, but bloody aspirate confirms upper source"
        },
        {
          "type": "concept",
          "title": "Risk Stratification",
          "content": "**Glasgow-Blatchford Score (GBS):**\n\u2022 BUN, hemoglobin, systolic BP, heart rate\n\u2022 Melena, syncope, hepatic disease, heart failure\n\u2022 Score 0-1: Can consider outpatient management\n\u2022 Score \u22656: High risk for intervention/mortality\n\n**Rockall Score:** Incorporates endoscopic findings, better for rebleed/mortality after EGD\n\n**AIMS65:** Albumin <3, INR >1.5, Mental status change, SBP \u226490, age >65\n\u2022 Each point increases in-hospital mortality"
        },
        {
          "type": "concept",
          "title": "Resuscitation",
          "content": "**Fluid resuscitation:**\n\u2022 Crystalloid initially\n\u2022 Avoid over-resuscitation in variceal bleed (increases portal pressure)\n\n**Transfusion:**\n\u2022 Target Hgb 7-8 g/dL in most patients\n\u2022 Higher threshold (8-9) if active ischemia, symptomatic\n\u2022 Restrictive strategy associated with better outcomes\n\n**Reverse anticoagulation:**\n\u2022 Warfarin: Vitamin K, consider PCC for INR >2.5 with active bleed\n\u2022 DOACs: Reversal agents if available, PCC if not\n\u2022 Aspirin: Generally continue unless life-threatening bleed"
        },
        {
          "type": "pearl",
          "title": "The Restrictive Transfusion Evidence",
          "content": "The TRIGGER trial and others showed restrictive transfusion (target Hgb 7-8) in UGIB reduces mortality compared to liberal strategy. Over-transfusion may increase portal pressure and rebleeding in variceal bleeding. Exception: patients with active ischemia (ACS, symptomatic anemia) may benefit from higher targets."
        },
        {
          "type": "alert",
          "title": "Variceal vs Non-Variceal",
          "content": "**If varices suspected (cirrhosis, portal HTN):**\n\u2022 Start IV PPI AND octreotide (vasoactive agent)\n\u2022 Antibiotic prophylaxis (ceftriaxone 1g daily \u00d7 7 days)\n\u2022 Target SBP ~100 (avoid over-resuscitation)\n\u2022 Urgent EGD within 12 hours\n\u2022 If massive bleed: Consider balloon tamponade, TIPS\n\n**Non-variceal:**\n\u2022 IV PPI (bolus then infusion or intermittent dosing)\n\u2022 EGD within 24 hours (or urgent if hemodynamically unstable)\n\u2022 Prokinetics (erythromycin 250mg IV) improve visualization"
        }
      ],
      "article": {
        "title": "Upper GI Bleeding: Evidence-Based Management",
        "readTime": "14 min",
        "content": "<h2>Epidemiology and Etiology</h2>\n<p>UGIB is responsible for over 300,000 hospitalizations annually in the US. The most common causes are peptic ulcer disease (35-50%), erosive disease (20-30%), and varices (10-20%). Despite advances, mortality remains 2-10%, higher in hospitalized patients who develop bleeding.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The BUN/creatinine ratio can help localize bleeding. Ratio >30 suggests upper GI source\u2014the digested blood provides a protein load that increases BUN. However, pre-renal azotemia from volume depletion also increases the ratio.\n</div>\n\n<h2>The Role of PPI</h2>\n<p>Proton pump inhibitors reduce rebleeding after endoscopic therapy for ulcers. High-dose IV PPI (80mg bolus then 8mg/hr infusion) was traditional, but intermittent dosing (40-80mg IV q12h) appears equivalent. PPIs stabilize clots by maintaining gastric pH >6. Pre-endoscopic PPI doesn't reduce mortality but may downstage lesions and reduce need for endoscopic intervention.</p>\n\n<h2>Timing of Endoscopy</h2>\n<p>Guidelines recommend EGD within 24 hours for most UGIB. Urgent endoscopy (<12 hours) is indicated for hemodynamic instability, suspected variceal bleed, or high-risk features. Very early endoscopy (<6 hours) hasn't consistently improved outcomes and may be technically difficult if patient is unstable.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Erythromycin 250mg IV given 20-90 minutes before EGD acts as a prokinetic, clearing blood from the stomach and improving visualization. Studies show it reduces need for repeat endoscopy. Watch for QT prolongation.\n</div>\n\n<h2>Post-Endoscopic Management</h2>\n<p>For high-risk ulcers (active bleeding, visible vessel, adherent clot), combine endoscopic therapy with high-dose PPI. Oral PPI is appropriate once tolerating diet. Test and treat H. pylori in all peptic ulcer patients. Resume antiplatelet therapy as soon as safely possible\u2014cardiovascular risk generally outweighs rebleeding risk.</p>"
      },
      "podcast": {
        "title": "UGIB Management with Dr. GI",
        "duration": "11:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. GI, walk us through your approach to a patient with hematemesis."
          },
          {
            "speaker": "Dr. GI",
            "text": "First priority is resuscitation and hemodynamic stability. Two large-bore IVs, type and screen, labs including hemoglobin, platelets, coags, and chemistry. I assess volume status and start crystalloid. Then I risk stratify using Glasgow-Blatchford to determine urgency."
          },
          {
            "speaker": "Host",
            "text": "When do you transfuse?"
          },
          {
            "speaker": "Dr. GI",
            "text": "I target hemoglobin 7-8 in most patients. The evidence is pretty clear that restrictive transfusion improves outcomes, probably by not increasing portal pressure. If someone has active cardiac ischemia or is very symptomatic, I'll go higher, but that's the exception."
          },
          {
            "speaker": "Host",
            "text": "How do you differentiate variceal from non-variceal?"
          },
          {
            "speaker": "Dr. GI",
            "text": "Clinical context. Signs of cirrhosis\u2014spider angiomata, ascites, jaundice, splenomegaly\u2014make me think varices. If I'm suspecting varices, I start octreotide and antibiotics before endoscopy. The antibiotics are for SBP prophylaxis and clearly reduce mortality in cirrhotic UGIB."
          },
          {
            "speaker": "Host",
            "text": "What about timing of endoscopy?"
          },
          {
            "speaker": "Dr. GI",
            "text": "Most patients get EGD within 24 hours. If they're hemodynamically unstable despite resuscitation, I push for urgent endoscopy\u2014that's when intervention makes the biggest difference. For stable patients with low Glasgow-Blatchford scores, next-morning endoscopy is fine."
          },
          {
            "speaker": "Host",
            "text": "Any tips on pre-endoscopy management?"
          },
          {
            "speaker": "Dr. GI",
            "text": "I give IV PPI early\u2014it may downstage ulcers. And erythromycin as a prokinetic 30 minutes before\u2014it clears the stomach and improves our view. Both are low risk and make the procedure better."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 58-year-old man with cirrhosis presents with hematemesis. BP is 92/58, HR 118. After 2L crystalloid, BP is 100/65. What is the most appropriate next step?",
        "options": [
          "Transfuse to hemoglobin 10 g/dL",
          "Start octreotide and ceftriaxone, arrange urgent EGD",
          "Give IV PPI bolus and schedule EGD for tomorrow",
          "Obtain CT angiography to localize bleeding"
        ],
        "correct": 1,
        "explanation": "This patient has suspected variceal bleeding (cirrhosis + hematemesis). Management includes vasoactive therapy (octreotide reduces portal pressure), antibiotic prophylaxis (ceftriaxone reduces mortality from SBP), and urgent EGD within 12 hours. Transfuse restrictively (target 7-8, not 10). IV PPI is also indicated but doesn't replace octreotide in variceal bleed."
      },
      {
        "question": "What is the target hemoglobin for transfusion in most patients with UGIB?",
        "options": [
          "10 g/dL",
          "9 g/dL",
          "7-8 g/dL",
          "6 g/dL"
        ],
        "correct": 2,
        "explanation": "Restrictive transfusion targeting hemoglobin 7-8 g/dL improves outcomes in UGIB compared to liberal strategies. Over-transfusion may increase portal pressure and rebleeding risk, particularly in variceal bleeding. Higher targets (8-9) may be appropriate for patients with active cardiac ischemia."
      },
      {
        "question": "A patient with UGIB has Glasgow-Blatchford Score of 0. What is the recommended management?",
        "options": [
          "Admit to ICU for monitoring",
          "Urgent EGD within 6 hours",
          "May consider outpatient management with scheduled EGD",
          "CT angiography before endoscopy"
        ],
        "correct": 2,
        "explanation": "Glasgow-Blatchford Score of 0-1 identifies very low-risk patients who can potentially be managed as outpatients. These patients have normal hemodynamics, no anemia, no melena or syncope, and no comorbidities. They can be discharged with outpatient EGD follow-up if reliable and appropriate resources available."
      },
      {
        "question": "Which medication should be given pre-endoscopically to improve visualization in UGIB?",
        "options": [
          "Ondansetron",
          "Metoclopramide",
          "Erythromycin",
          "Sucralfate"
        ],
        "correct": 2,
        "explanation": "Erythromycin (250mg IV) is a prokinetic that accelerates gastric emptying, clearing blood from the stomach and improving endoscopic visualization. Given 20-90 minutes before EGD, it reduces need for repeat endoscopy. Metoclopramide is less effective. Ondansetron is an antiemetic without prokinetic effects."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ACG UGIB Guidelines",
        "year": "2021",
        "summary": "Updated guidelines emphasizing risk stratification, restrictive transfusion, pre-endoscopic PPI, and timing of endoscopy.",
        "concepts": [
          "ugib",
          "management"
        ]
      },
      {
        "type": "trial",
        "title": "TRIGGER (Transfusion in GI Bleeding)",
        "year": "2015",
        "summary": "Restrictive transfusion (Hgb 8 threshold) feasible and potentially reduces mortality compared to liberal strategy in UGIB.",
        "concepts": [
          "ugib",
          "transfusion"
        ]
      },
      {
        "type": "trial",
        "title": "Baveno VII",
        "year": "2022",
        "summary": "Consensus on portal hypertension including variceal bleeding management, emphasizing early antibiotics, vasoactive drugs, and EGD timing.",
        "concepts": [
          "varices",
          "cirrhosis"
        ]
      }
    ]
  },
  "hypothyroid": {
    "id": "hypothyroid",
    "name": "Hypothyroidism",
    "category": "endocrine",
    "subcategory": "thyroid",
    "knowledge": [
      "Primary vs secondary hypothyroidism",
      "TSH interpretation",
      "Levothyroxine dosing",
      "Myxedema coma recognition"
    ],
    "skills": [
      "Diagnose hypothyroidism",
      "Initiate and titrate levothyroxine",
      "Manage subclinical hypothyroidism",
      "Recognize myxedema coma"
    ],
    "lesson": {
      "title": "Hypothyroidism: Diagnosis and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Hypothyroidism is thyroid hormone deficiency, most commonly from autoimmune destruction (Hashimoto's). Diagnosis relies on TSH and free T4. Treatment with levothyroxine is straightforward but requires attention to dosing, drug interactions, and monitoring. Myxedema coma is the rare but life-threatening extreme."
        },
        {
          "type": "concept",
          "title": "Classification",
          "content": "**Primary hypothyroidism (95%):**\n\u2022 Problem is in the thyroid gland itself\n\u2022 TSH HIGH, Free T4 LOW\n\u2022 Causes: Hashimoto's (most common), post-thyroidectomy, post-radioiodine, medications (lithium, amiodarone)\n\n**Secondary (central) hypothyroidism (5%):**\n\u2022 Problem is pituitary (TSH deficiency) or hypothalamus (TRH deficiency)\n\u2022 TSH LOW or inappropriately normal, Free T4 LOW\n\u2022 Causes: Pituitary tumor, surgery, radiation, infiltrative disease\n\n**Subclinical hypothyroidism:**\n\u2022 TSH elevated, Free T4 NORMAL\n\u2022 May or may not require treatment"
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Symptoms:**\n\u2022 Fatigue, cold intolerance\n\u2022 Weight gain (modest\u2014not massive obesity)\n\u2022 Constipation\n\u2022 Dry skin, hair loss\n\u2022 Cognitive slowing, depression\n\u2022 Menstrual irregularities\n\n**Signs:**\n\u2022 Bradycardia\n\u2022 Delayed relaxation of deep tendon reflexes\n\u2022 Non-pitting edema (myxedema)\n\u2022 Goiter (Hashimoto's) or absent thyroid (post-surgical)\n\n**Lab abnormalities:**\n\u2022 Elevated LDL cholesterol\n\u2022 Elevated CK\n\u2022 Hyponatremia\n\u2022 Anemia (normocytic or macrocytic)"
        },
        {
          "type": "concept",
          "title": "Levothyroxine (T4) Therapy",
          "content": "**Starting dose:**\n\u2022 Young, healthy: 1.6 mcg/kg/day (full replacement)\n\u2022 Elderly or cardiac disease: Start low (25-50 mcg), titrate slowly\n\u2022 Subclinical: Start 25-50 mcg\n\n**Administration:**\n\u2022 Take on empty stomach, 30-60 min before breakfast\n\u2022 OR at bedtime, 3+ hours after eating\n\u2022 Separate from calcium, iron, PPIs by 4 hours\n\n**Monitoring:**\n\u2022 Recheck TSH in 6-8 weeks after starting or dose change\n\u2022 Goal TSH: 0.5-2.5 mU/L for most; higher acceptable in elderly"
        },
        {
          "type": "pearl",
          "title": "The Drug Interaction Problem",
          "content": "Levothyroxine absorption is affected by many medications and foods:\n\u2022 DECREASE absorption: Calcium, iron, antacids, PPIs, cholestyramine, sucralfate, coffee\n\u2022 INCREASE metabolism: Rifampin, phenytoin, carbamazepine\n\u2022 DECREASE T4 to T3 conversion: Amiodarone, beta-blockers, steroids\n\nIf TSH rises on stable dose, ask about new medications or changes in timing."
        },
        {
          "type": "alert",
          "title": "Myxedema Coma",
          "content": "**Life-threatening decompensated hypothyroidism:**\n\u2022 Altered mental status (not actually 'coma' in all cases)\n\u2022 Hypothermia\n\u2022 Bradycardia, hypotension\n\u2022 Hypoventilation, hypoxia, hypercapnia\n\u2022 Precipitants: Infection, cold exposure, sedatives, surgery\n\n**Treatment (ICU):**\n\u2022 IV levothyroxine 200-400 mcg loading, then 50-100 mcg daily\n\u2022 Consider adding T3 if severe or not responding\n\u2022 Hydrocortisone 100mg IV q8h (until adrenal insufficiency ruled out)\n\u2022 Supportive: Warming, ventilation, fluids\n\u2022 Treat precipitant"
        }
      ],
      "article": {
        "title": "Hypothyroidism: Beyond TSH",
        "readTime": "12 min",
        "content": "<h2>Hashimoto's Thyroiditis</h2>\n<p>Autoimmune thyroiditis is the most common cause of hypothyroidism in iodine-sufficient areas. Anti-TPO antibodies are present in >90% of cases. The thyroid may be enlarged (goiter) early but becomes atrophic over time. Hashimoto's is associated with other autoimmune conditions\u2014check for celiac disease if GI symptoms.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Subclinical hypothyroidism (elevated TSH, normal T4) is common and usually doesn't require treatment. Consider treating if: TSH >10, symptoms suggestive of hypothyroidism, positive TPO antibodies (predicts progression), pregnancy or trying to conceive, or cardiovascular risk factors.\n</div>\n\n<h2>Special Populations</h2>\n<p><strong>Pregnancy:</strong> TSH targets are lower (first trimester <2.5, second/third <3.0). Levothyroxine dose usually increases 25-50% during pregnancy. Untreated hypothyroidism increases miscarriage and developmental issues.</p>\n<p><strong>Elderly:</strong> TSH normally increases with age. A TSH of 6-7 in an 80-year-old may be physiologic. Avoid overtreatment\u2014iatrogenic hyperthyroidism increases AF and fracture risk. Start low (25 mcg), go slow.</p>\n<p><strong>Cardiac disease:</strong> Levothyroxine increases myocardial oxygen demand. Start 12.5-25 mcg in patients with CAD or arrhythmias. Accepting slightly elevated TSH (4-6) may be safer than aggressive replacement.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Persistent symptoms despite 'normal' TSH is common. Ensure TSH is truly optimal (0.5-2.5). Check for other causes of fatigue (anemia, depression, sleep apnea). Some patients feel better with TSH in lower-normal range. T3 supplementation is not routinely recommended but may help select patients.\n</div>\n\n<h2>Central Hypothyroidism Pitfall</h2>\n<p>In secondary hypothyroidism, TSH is unreliable\u2014it may be low, normal, or even slightly elevated (biologically inactive TSH). If pituitary disease is suspected (visual changes, other pituitary hormone deficiencies, pituitary mass), use free T4 to monitor therapy, not TSH. Always check for adrenal insufficiency before starting thyroid replacement\u2014treating hypothyroidism can precipitate adrenal crisis.</p>"
      },
      "podcast": {
        "title": "Hypothyroidism Pearls with Dr. Thyroid",
        "duration": "10:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Thyroid, a patient has TSH of 12 and normal free T4. Do they need treatment?"
          },
          {
            "speaker": "Dr. Thyroid",
            "text": "That's subclinical hypothyroidism. It depends. TSH over 10 is a common threshold to treat. I also consider symptoms, TPO antibodies (which predict progression), age, and cardiovascular risk. In a young woman with fatigue and positive antibodies, I'd treat. In an asymptomatic 75-year-old, I might just monitor."
          },
          {
            "speaker": "Host",
            "text": "What dose do you start?"
          },
          {
            "speaker": "Dr. Thyroid",
            "text": "For overt hypothyroidism in young healthy patients, I calculate 1.6 mcg/kg and round to a convenient dose. For subclinical, I start 25-50 mcg. In elderly or patients with heart disease, I start very low\u201412.5 to 25 mcg\u2014and increase every 6-8 weeks."
          },
          {
            "speaker": "Host",
            "text": "How do you counsel on taking it?"
          },
          {
            "speaker": "Dr. Thyroid",
            "text": "Consistency matters more than timing. The traditional advice is first thing in the morning, 30-60 minutes before food or coffee. But bedtime works too\u2014some studies suggest better absorption. The key is separating it from calcium, iron, and antacids by 4 hours."
          },
          {
            "speaker": "Host",
            "text": "When is TSH unreliable?"
          },
          {
            "speaker": "Dr. Thyroid",
            "text": "Central hypothyroidism. If you suspect pituitary disease\u2014visual field changes, other hormone deficiencies, known pituitary mass\u2014don't trust the TSH. It might be normal despite significant hypothyroidism. Use free T4 to diagnose and monitor. Also, always rule out adrenal insufficiency first."
          },
          {
            "speaker": "Host",
            "text": "Tell us about myxedema coma."
          },
          {
            "speaker": "Dr. Thyroid",
            "text": "It's rare but deadly\u2014usually precipitated by infection, cold exposure, or sedatives in someone with untreated hypothyroidism. They present with altered mental status, hypothermia, bradycardia, and hypoventilation. Treat in the ICU with IV levothyroxine loading dose, hydrocortisone, warming, and address the precipitant."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 45-year-old woman has TSH 0.8 and free T4 0.4 (low). She has fatigue and weight gain. What is the most likely diagnosis?",
        "options": [
          "Primary hypothyroidism",
          "Secondary (central) hypothyroidism",
          "Subclinical hypothyroidism",
          "Euthyroid sick syndrome"
        ],
        "correct": 1,
        "explanation": "Low free T4 with inappropriately normal/low TSH indicates secondary (central) hypothyroidism\u2014the pituitary isn't making enough TSH. Primary hypothyroidism would have HIGH TSH. This patient needs pituitary evaluation (MRI, other pituitary hormones) and assessment for adrenal insufficiency before starting levothyroxine."
      },
      {
        "question": "Which medication interaction most commonly causes levothyroxine absorption problems?",
        "options": [
          "Metformin",
          "Lisinopril",
          "Calcium carbonate",
          "Atorvastatin"
        ],
        "correct": 2,
        "explanation": "Calcium (and iron, antacids, PPIs) reduces levothyroxine absorption. Patients should separate levothyroxine from calcium supplements by at least 4 hours. If TSH rises on a stable levothyroxine dose, ask about new medications or changes in timing of administration."
      },
      {
        "question": "An 80-year-old with CAD has TSH of 15 and free T4 of 0.6. What is the appropriate starting dose of levothyroxine?",
        "options": [
          "100 mcg daily (full replacement)",
          "75 mcg daily",
          "25 mcg daily",
          "No treatment needed"
        ],
        "correct": 2,
        "explanation": "In elderly patients and those with cardiac disease, start levothyroxine at low doses (12.5-25 mcg) and titrate slowly. Levothyroxine increases myocardial oxygen demand, and rapid replacement can precipitate angina or arrhythmias. Increase dose every 6-8 weeks as tolerated."
      },
      {
        "question": "A patient with longstanding hypothyroidism presents with confusion, hypothermia (34\u00b0C), and bradycardia after a respiratory infection. What medication should be given WITH levothyroxine?",
        "options": [
          "Liothyronine (T3) only",
          "Hydrocortisone",
          "Amiodarone",
          "Beta-blocker"
        ],
        "correct": 1,
        "explanation": "This is myxedema coma. Hydrocortisone (100mg IV q8h) should be given with levothyroxine because concomitant adrenal insufficiency is common and treating hypothyroidism alone can precipitate adrenal crisis by increasing cortisol metabolism. Continue hydrocortisone until adrenal function is confirmed normal."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ATA Hypothyroidism Guidelines",
        "year": "2014",
        "summary": "Comprehensive guidelines on diagnosis and management of hypothyroidism, including levothyroxine dosing, monitoring, and special populations.",
        "concepts": [
          "hypothyroidism",
          "levothyroxine"
        ]
      },
      {
        "type": "guideline",
        "title": "ATA Thyroid and Pregnancy Guidelines",
        "year": "2017",
        "summary": "Recommendations for thyroid disease management in pregnancy, including TSH targets and levothyroxine adjustment.",
        "concepts": [
          "hypothyroidism",
          "pregnancy"
        ]
      },
      {
        "type": "trial",
        "title": "TRUST Trial",
        "year": "2017",
        "summary": "Levothyroxine for subclinical hypothyroidism in elderly did not improve symptoms or quality of life. Supports conservative approach in older patients.",
        "concepts": [
          "hypothyroidism",
          "elderly"
        ]
      }
    ]
  },
  "pe-diagnosis": {
    "id": "pe-diagnosis",
    "name": "PE Diagnosis & Risk Stratification",
    "category": "pulmonary",
    "subcategory": "vte",
    "knowledge": [
      "Wells criteria for PE",
      "PERC rule application",
      "D-dimer interpretation",
      "PESI scoring"
    ],
    "skills": [
      "Apply clinical decision rules",
      "Order appropriate imaging",
      "Risk stratify PE patients",
      "Identify high-risk PE"
    ],
    "lesson": {
      "title": "Pulmonary Embolism: From Suspicion to Diagnosis",
      "sections": [
        {
          "type": "intro",
          "content": "PE diagnosis requires integrating clinical probability assessment with appropriate testing. The goal is to avoid missing PE while minimizing unnecessary CT scans. Clinical decision rules help standardize this process and identify patients who need no further testing."
        },
        {
          "type": "concept",
          "title": "Wells Criteria for PE",
          "content": "**Wells Score components:**\n\u2022 Clinical signs/symptoms of DVT: 3 points\n\u2022 PE is #1 diagnosis or equally likely: 3 points\n\u2022 Heart rate >100: 1.5 points\n\u2022 Immobilization (\u22653 days) or surgery (past 4 weeks): 1.5 points\n\u2022 Previous PE/DVT: 1.5 points\n\u2022 Hemoptysis: 1 point\n\u2022 Malignancy (treatment within 6 months): 1 point\n\n**Interpretation:**\n\u2022 \u22644: PE unlikely (consider D-dimer)\n\u2022 >4: PE likely (imaging indicated)"
        },
        {
          "type": "concept",
          "title": "The PERC Rule",
          "content": "**When to use PERC:** Only in LOW pretest probability patients\n\n**If ALL criteria are negative, PE is ruled out without D-dimer:**\n\u2022 Age <50\n\u2022 HR <100\n\u2022 SpO2 \u226595%\n\u2022 No hemoptysis\n\u2022 No estrogen use\n\u2022 No prior DVT/PE\n\u2022 No unilateral leg swelling\n\u2022 No surgery/trauma requiring hospitalization in past 4 weeks\n\n**Key point:** PERC is only valid when gestalt probability is <15%. Don't use it to rule out PE in intermediate/high probability patients."
        },
        {
          "type": "concept",
          "title": "D-dimer Strategy",
          "content": "**Age-adjusted D-dimer cutoff:**\nFor patients >50 years: cutoff = age \u00d7 10 \u03bcg/L\n(e.g., 65-year-old: cutoff is 650 \u03bcg/L)\n\n**When D-dimer is useful:**\n\u2022 Low/intermediate pretest probability\n\u2022 Negative D-dimer rules out PE\n\n**When D-dimer is NOT useful:**\n\u2022 High pretest probability (imaging needed regardless)\n\u2022 Hospitalized patients (often elevated)\n\u2022 Recent surgery, trauma, pregnancy\n\u2022 Known malignancy\n\u2022 Age-adjusted may help in elderly"
        },
        {
          "type": "pearl",
          "title": "The YEARS Algorithm",
          "content": "YEARS simplifies PE workup using just 3 items: DVT signs, hemoptysis, and 'PE most likely diagnosis.' If none present AND D-dimer <1000, PE is ruled out. If 1+ present AND D-dimer <500, PE is ruled out. Otherwise, CT needed. This reduces CT use by ~14% compared to Wells."
        },
        {
          "type": "alert",
          "title": "High-Risk PE Recognition",
          "content": "**Massive PE (high-risk):**\n\u2022 Sustained hypotension (SBP <90 for >15 min)\n\u2022 Requires vasopressors\n\u2022 Cardiac arrest\n\n**Submassive PE (intermediate-risk):**\n\u2022 Hemodynamically stable BUT\n\u2022 RV dysfunction on imaging, OR\n\u2022 Elevated troponin/BNP, OR\n\u2022 PESI class III-V\n\n**Low-risk PE:** None of the above\n\nHigh-risk PE needs emergent treatment (thrombolytics, thrombectomy). Submassive PE requires close monitoring and consideration of escalated therapy if deteriorating."
        }
      ],
      "article": {
        "title": "Pulmonary Embolism Diagnosis: A Modern Approach",
        "readTime": "13 min",
        "content": "<h2>The Diagnostic Challenge</h2>\n<p>PE is the great mimicker. It can present with pleuritic chest pain, dyspnea, syncope, hemoptysis, or be completely silent. The classic triad of dyspnea, chest pain, and hemoptysis is present in fewer than 20% of cases.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The pretest probability determines the testing strategy. A positive D-dimer in a high-risk patient doesn't help\u2014they need imaging anyway. A negative D-dimer in a low-risk patient is reassuring. The art is in accurately assessing pretest probability.\n</div>\n\n<h2>CTPA: The Gold Standard</h2>\n<p>CT pulmonary angiography has become the primary diagnostic test for PE. It's fast, widely available, and can diagnose alternative conditions. Sensitivity exceeds 95% for lobar or larger PE, though subsegmental PE may be missed.</p>\n<p>The radiation exposure is equivalent to 2-3 years of background radiation. In pregnancy, CTPA delivers less fetal radiation than V/Q scan, though breast tissue exposure is higher. Both are acceptable in pregnancy when PE is suspected.</p>\n\n<h2>Risk Stratification After Diagnosis</h2>\n<p>Once PE is confirmed, risk stratification guides management:</p>\n<p><strong>High-risk (massive) PE:</strong> 5-10% of cases. Defined by hemodynamic instability. Mortality 25-50%. Consider thrombolytics, catheter-directed therapy, or surgical embolectomy.</p>\n<p><strong>Intermediate-risk (submassive) PE:</strong> 30-40% of cases. Hemodynamically stable but with RV strain (imaging or biomarkers). Close monitoring essential; rescue thrombolytics if decompensation.</p>\n<p><strong>Low-risk PE:</strong> 50-60% of cases. Normal hemodynamics, no RV dysfunction. May be candidates for outpatient management.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> The PESI (Pulmonary Embolism Severity Index) helps identify low-risk patients. PESI class I-II (or simplified PESI = 0) have <1% 30-day mortality and may be appropriate for outpatient anticoagulation.\n</div>\n\n<h2>Subsegmental PE: To Treat or Not?</h2>\n<p>The clinical significance of isolated subsegmental PE is debated. These tiny clots are increasingly detected with modern CT scanners but may not all require anticoagulation. Consider observation without treatment if: single subsegmental PE, no DVT on leg imaging, low risk for recurrence, and high bleeding risk.</p>"
      },
      "podcast": {
        "title": "PE Workup with Dr. Chen, Pulmonologist",
        "duration": "11:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Chen, walk us through your approach when PE is suspected."
          },
          {
            "speaker": "Dr. Chen",
            "text": "First, I assess pretest probability. Is this patient truly low risk, or am I being anchored by a normal exam? I use Wells, but I also trust my gestalt. If my gut says this patient could have PE, I image them regardless of the score."
          },
          {
            "speaker": "Host",
            "text": "When do you use PERC?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "Only when pretest probability is genuinely low\u2014the patient who comes in with chest pain that really sounds musculoskeletal, but you want to make sure. If ALL eight PERC criteria are negative, you're done. But if you have any real suspicion, don't use PERC to talk yourself out of working them up."
          },
          {
            "speaker": "Host",
            "text": "What about D-dimer?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "D-dimer is great for ruling OUT PE in low-to-intermediate risk patients. But it's useless in hospitalized patients, post-surgical patients, and the elderly. The age-adjusted cutoff helps\u2014for a 70-year-old, I use 700 as my cutoff instead of 500. This reduces false positives without missing PE."
          },
          {
            "speaker": "Host",
            "text": "How do you risk stratify once PE is confirmed?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "First question: are they hemodynamically stable? If not, that's massive PE\u2014call interventional, consider lytics. If stable, look for RV strain on CT, check troponin and BNP. Any of those positive? That's submassive PE\u2014they need close monitoring, often ICU. Low-risk patients with normal RV and biomarkers might go home on DOACs."
          },
          {
            "speaker": "Host",
            "text": "Outpatient PE treatment\u2014when is that safe?"
          },
          {
            "speaker": "Dr. Chen",
            "text": "PESI or sPESI helps here. Low PESI with good social situation, no major comorbidities, able to follow up? Consider outpatient treatment. But they need same-day anticoagulation, close follow-up, and clear return precautions."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 45-year-old woman with no significant history presents with dyspnea. She has normal vitals, SpO2 98%, no leg swelling, and takes no medications. Wells score is 1.5 (tachycardia). What is the next step?",
        "options": [
          "CT pulmonary angiography",
          "Apply PERC criteria",
          "D-dimer",
          "V/Q scan"
        ],
        "correct": 1,
        "explanation": "With Wells \u22644 (PE unlikely) and low clinical suspicion, apply PERC first. If all 8 PERC criteria are negative (age <50, HR <100, SpO2 \u226595%, no hemoptysis, no estrogen, no prior VTE, no leg swelling, no recent surgery), PE is ruled out without any testing. Her HR is >100 based on Wells, so PERC fails\u2014proceed to D-dimer."
      },
      {
        "question": "A 72-year-old man with suspected PE has a D-dimer of 680 \u03bcg/L. Using age-adjusted cutoff, this result is:",
        "options": [
          "Positive\u2014proceed to CT",
          "Negative\u2014PE ruled out",
          "Indeterminate\u2014repeat in 24 hours",
          "Invalid\u2014D-dimer shouldn't be used in elderly"
        ],
        "correct": 1,
        "explanation": "Age-adjusted D-dimer cutoff = age \u00d7 10. For a 72-year-old, cutoff is 720 \u03bcg/L. His D-dimer of 680 is below this threshold, so PE is ruled out. The age-adjusted cutoff increases specificity in elderly patients without sacrificing sensitivity, reducing unnecessary CT scans."
      },
      {
        "question": "A patient with confirmed PE has BP 85/60 despite 2L fluid resuscitation and requires norepinephrine. This is classified as:",
        "options": [
          "Low-risk PE",
          "Intermediate-low risk PE",
          "Intermediate-high risk PE",
          "High-risk PE"
        ],
        "correct": 3,
        "explanation": "Hemodynamic instability (sustained SBP <90 or requiring vasopressors) defines high-risk (massive) PE. These patients have 30-day mortality of 25-50% and should be considered for thrombolysis, catheter-directed therapy, or surgical embolectomy. This is a medical emergency."
      },
      {
        "question": "Which finding on CT pulmonary angiography indicates right ventricular strain?",
        "options": [
          "RV:LV ratio >0.9",
          "Left atrial enlargement",
          "Pericardial effusion",
          "Pulmonary nodule"
        ],
        "correct": 0,
        "explanation": "RV:LV ratio >0.9 (or >1.0 in some criteria) indicates RV dilation from pressure overload\u2014a sign of RV strain. This finding, along with elevated troponin and BNP, helps identify intermediate-risk (submassive) PE. Other CT findings of RV strain include interventricular septal bowing toward the LV and contrast reflux into the IVC/hepatic veins."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2019 ESC Guidelines on PE",
        "year": "2019",
        "summary": "Comprehensive guidelines covering diagnosis, risk stratification, and management of acute PE including algorithm for clinical decision rules.",
        "concepts": [
          "pe",
          "diagnosis",
          "risk-stratification"
        ]
      },
      {
        "type": "trial",
        "title": "YEARS Study",
        "year": "2017",
        "summary": "YEARS algorithm (3 clinical items + D-dimer) safely reduced CT use by 14% compared to Wells-based approach in suspected PE.",
        "concepts": [
          "pe",
          "diagnosis"
        ]
      },
      {
        "type": "trial",
        "title": "ADJUST-PE",
        "year": "2014",
        "summary": "Validated age-adjusted D-dimer cutoff (age \u00d7 10) in patients >50 years, increasing specificity without sacrificing safety.",
        "concepts": [
          "pe",
          "d-dimer"
        ]
      },
      {
        "type": "trial",
        "title": "Hestia Study",
        "year": "2011",
        "summary": "Hestia criteria identify low-risk PE patients suitable for outpatient treatment with 2% VTE recurrence at 3 months.",
        "concepts": [
          "pe",
          "outpatient"
        ]
      }
    ]
  },
  "t2dm-management": {
    "id": "t2dm-management",
    "name": "T2DM Management",
    "category": "endocrine",
    "subcategory": "diabetes",
    "knowledge": [
      "Individualized A1c targets",
      "Comorbidity-based drug selection",
      "SGLT2i and GLP-1 RA benefits",
      "Cardiovascular outcome trials"
    ],
    "skills": [
      "Select appropriate second-line agents",
      "Titrate therapy based on A1c",
      "Manage diabetes in CKD",
      "Recognize cardiorenal benefits"
    ],
    "lesson": {
      "title": "Type 2 Diabetes: Beyond Glucose Control",
      "sections": [
        {
          "type": "intro",
          "content": "The management of type 2 diabetes has fundamentally shifted from a glucose-centric approach to one focused on cardiorenal risk reduction. The choice of second-line agent after metformin should be driven by the patient's comorbidities, not just their A1c level."
        },
        {
          "type": "concept",
          "title": "The New Treatment Paradigm",
          "content": "**Step 1: Lifestyle + Metformin** (unless contraindicated)\n\n**Step 2: Choose based on compelling indications:**\n\n\u2022 **ASCVD or high CV risk \u2192** GLP-1 RA with proven benefit (semaglutide, liraglutide, dulaglutide) or SGLT2i\n\n\u2022 **Heart failure \u2192** SGLT2i (first choice regardless of EF)\n\n\u2022 **CKD \u2192** SGLT2i (preferred) or GLP-1 RA\n\n\u2022 **Need to minimize hypoglycemia \u2192** GLP-1 RA, SGLT2i, or DPP-4i\n\n\u2022 **Need weight loss \u2192** GLP-1 RA (most effective) or SGLT2i\n\n\u2022 **Cost is primary barrier \u2192** Sulfonylurea or TZD"
        },
        {
          "type": "concept",
          "title": "Individualized A1c Targets",
          "content": "**<7% for most adults**\n\u2022 Non-pregnant adults with diabetes\n\u2022 Achievable without significant hypoglycemia\n\n**<6.5% (more stringent) for:**\n\u2022 Newly diagnosed\n\u2022 Long life expectancy\n\u2022 No significant CVD\n\u2022 Achievable without hypoglycemia\n\n**<8% (less stringent) for:**\n\u2022 Limited life expectancy\n\u2022 Advanced complications\n\u2022 Extensive comorbidities\n\u2022 Long-standing diabetes difficult to control\n\u2022 History of severe hypoglycemia"
        },
        {
          "type": "pearl",
          "title": "The CV Outcome Trial Revolution",
          "content": "Before 2008, we assumed glucose lowering would reduce CV events. Then ACCORD showed that intensive glucose control actually increased mortality. The FDA mandated CV outcome trials for new diabetes drugs.\n\nThe result? We discovered that SGLT2i and GLP-1 RAs reduce CV events and death INDEPENDENT of glucose lowering. This has completely changed how we approach diabetes management."
        },
        {
          "type": "concept",
          "title": "SGLT2 Inhibitors",
          "content": "**Mechanism:** Block glucose reabsorption in proximal tubule \u2192 glucosuria + natriuresis\n\n**Benefits beyond glucose:**\n\u2022 Reduce HF hospitalization ~30%\n\u2022 Slow CKD progression\n\u2022 Modest weight loss (2-3 kg)\n\u2022 BP reduction (3-5 mmHg)\n\u2022 CV death reduction (some agents)\n\n**Cautions:**\n\u2022 Euglycemic DKA (hold before surgery)\n\u2022 Genital mycotic infections\n\u2022 Volume depletion in elderly\n\u2022 Fournier's gangrene (rare)"
        },
        {
          "type": "concept",
          "title": "GLP-1 Receptor Agonists",
          "content": "**Mechanism:** Incretin mimetic \u2192 stimulates insulin secretion, suppresses glucagon, slows gastric emptying, increases satiety\n\n**Benefits:**\n\u2022 Significant weight loss (5-15% with newer agents)\n\u2022 CV event reduction (MACE)\n\u2022 Low hypoglycemia risk\n\u2022 May reduce NASH progression\n\n**Cautions:**\n\u2022 GI side effects (nausea, vomiting) - usually transient\n\u2022 Contraindicated in personal/family history of MTC\n\u2022 Avoid in gastroparesis"
        },
        {
          "type": "alert",
          "title": "Sick Day Rules for SGLT2i",
          "content": "Patients on SGLT2 inhibitors MUST know sick day rules:\n\n**Hold SGLT2i when:**\n\u2022 Unable to eat or drink normally\n\u2022 Vomiting or diarrhea\n\u2022 Acute illness/infection\n\u2022 Before and after surgery (hold 3-4 days)\n\n**Why:** Risk of euglycemic DKA. Glucose may be normal or only mildly elevated, but patient is in DKA. High index of suspicion needed!"
        }
      ],
      "article": {
        "title": "Diabetes Management: The Cardiorenal Era",
        "readTime": "15 min",
        "content": "<h2>The Paradigm Shift</h2>\n<p>For decades, diabetes management focused on achieving glycemic targets. The assumption was that lower glucose levels would translate to fewer complications. This approach was challenged by landmark trials that reshaped our understanding.</p>\n\n<div class=\"article-highlight\">\n<strong>The ACCORD Wake-Up Call:</strong> In 2008, the ACCORD trial was stopped early because the intensive glucose control arm (targeting A1c <6%) had HIGHER mortality than standard control. Aggressive glucose lowering wasn't inherently beneficial\u2014and could be harmful.\n</div>\n\n<h2>Enter the CV Outcome Trials</h2>\n<p>The FDA's 2008 mandate requiring CV outcome trials for new diabetes drugs produced unexpected results. Rather than just proving safety, several drugs showed remarkable cardiovascular and renal benefits.</p>\n\n<h3>The SGLT2 Inhibitor Story</h3>\n<p><strong>EMPA-REG OUTCOME (2015):</strong> Empagliflozin reduced CV death by 38% and HF hospitalization by 35% in patients with T2DM and ASCVD. This was unprecedented for a diabetes drug.</p>\n<p><strong>CANVAS Program (2017):</strong> Canagliflozin reduced MACE but raised concerns about amputations (later not confirmed in real-world data).</p>\n<p><strong>DECLARE-TIMI 58 (2019):</strong> Dapagliflozin reduced HF hospitalization in a broader population including those with CV risk factors.</p>\n<p><strong>DAPA-HF and EMPEROR-Reduced (2019-2020):</strong> Extended benefits to HFrEF patients WITHOUT diabetes, establishing SGLT2i as heart failure drugs.</p>\n\n<h3>The GLP-1 RA Story</h3>\n<p><strong>LEADER (2016):</strong> Liraglutide reduced MACE and CV death in high-risk T2DM patients.</p>\n<p><strong>SUSTAIN-6 and PIONEER-6:</strong> Semaglutide (injectable and oral) showed CV benefits.</p>\n<p><strong>REWIND (2019):</strong> Dulaglutide showed CV benefit in a lower-risk population.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Implication:</strong> If your patient has T2DM plus ASCVD, HF, or CKD, the question isn't WHETHER to add an SGLT2i or GLP-1 RA\u2014it's WHICH ONE to choose. These are no longer just glucose-lowering drugs; they're cardioprotective and renoprotective therapies.\n</div>\n\n<h2>Renal Benefits</h2>\n<p>The renal protection afforded by SGLT2 inhibitors deserves special attention. CREDENCE and DAPA-CKD showed dramatic reductions in kidney failure progression\u2014benefits that appeared quickly and were independent of diabetes status.</p>\n<p>Current guidelines recommend SGLT2i for diabetic kidney disease with albuminuria when eGFR allows. The threshold for use has been lowered to eGFR 20-25 for renal protection, even though glycemic efficacy diminishes at lower eGFR.</p>"
      },
      "podcast": {
        "title": "Modern Diabetes Management with Dr. Singh",
        "duration": "12:15",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Singh, how has diabetes management changed in the last decade?"
          },
          {
            "speaker": "Dr. Singh",
            "text": "It's been revolutionary. We've moved from a glucose-centric approach to a comorbidity-driven approach. The question used to be 'what will lower the A1c most?' Now it's 'what will help this patient's heart and kidneys while also improving glucose?'"
          },
          {
            "speaker": "Host",
            "text": "Can you explain the role of SGLT2 inhibitors?"
          },
          {
            "speaker": "Dr. Singh",
            "text": "SGLT2 inhibitors are remarkable. They cause the kidney to excrete glucose, which lowers blood sugar. But the cardiovascular and renal benefits are out of proportion to the glucose lowering. We now use them in heart failure patients who don't even have diabetes."
          },
          {
            "speaker": "Host",
            "text": "And GLP-1 receptor agonists?"
          },
          {
            "speaker": "Dr. Singh",
            "text": "GLP-1 RAs are incretin mimetics\u2014they enhance insulin secretion when glucose is high. The big advantages are weight loss and low hypoglycemia risk. Semaglutide can produce 10-15% weight loss. They also reduce cardiovascular events in high-risk patients."
          },
          {
            "speaker": "Host",
            "text": "How do you choose between them?"
          },
          {
            "speaker": "Dr. Singh",
            "text": "If the patient has heart failure, I reach for an SGLT2i first\u2014the evidence is strongest there. If CKD is the main concern, also SGLT2i. If weight loss is the priority and they don't have heart failure, GLP-1 RA. Often I end up using both because they have complementary mechanisms."
          },
          {
            "speaker": "Host",
            "text": "What about metformin?"
          },
          {
            "speaker": "Dr. Singh",
            "text": "Metformin is still first-line for most patients\u2014it's effective, cheap, and has a long safety record. But in someone with ASCVD or heart failure, I'd argue the SGLT2i or GLP-1 RA is more important than the metformin. Don't let metformin intolerance delay starting these cardioprotective agents."
          },
          {
            "speaker": "Host",
            "text": "Final advice for learners?"
          },
          {
            "speaker": "Dr. Singh",
            "text": "Know the landmark trials\u2014EMPA-REG, LEADER, DAPA-HF, CREDENCE. Understand that we're not just treating glucose anymore. And always ask: does this patient have ASCVD, heart failure, or CKD? If yes, they probably need an SGLT2i or GLP-1 RA regardless of their A1c."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 62-year-old with T2DM, A1c 8.2%, and established ASCVD is on metformin 1000mg BID. What should be added?",
        "options": [
          "Glipizide",
          "Sitagliptin",
          "Semaglutide",
          "Pioglitazone"
        ],
        "correct": 2,
        "explanation": "In patients with T2DM and established ASCVD, a GLP-1 RA with proven CV benefit (semaglutide, liraglutide, dulaglutide) or an SGLT2i should be added regardless of A1c. Semaglutide has demonstrated CV benefit in SUSTAIN-6. Sulfonylureas, DPP-4i, and TZDs don't have the same CV protection."
      },
      {
        "question": "A patient with T2DM and HFrEF (EF 35%) asks about the best medication to add. Which class provides the most HF benefit?",
        "options": [
          "GLP-1 receptor agonists",
          "SGLT2 inhibitors",
          "DPP-4 inhibitors",
          "Sulfonylureas"
        ],
        "correct": 1,
        "explanation": "SGLT2 inhibitors have the strongest evidence for HF benefit, reducing HF hospitalization by ~30% in multiple trials (EMPA-REG, DAPA-HF, EMPEROR-Reduced). This benefit extends to patients without diabetes. GLP-1 RAs have CV benefit but haven't shown the same HF-specific outcomes. DPP-4i and sulfonylureas have no HF benefit."
      },
      {
        "question": "A diabetic patient on empagliflozin presents with nausea, vomiting, and abdominal pain. Glucose is 180 mg/dL. What should you check?",
        "options": [
          "Hemoglobin A1c",
          "Serum ketones and blood gas",
          "Lipase",
          "Urine microalbumin"
        ],
        "correct": 1,
        "explanation": "This presentation is concerning for euglycemic DKA, a known complication of SGLT2 inhibitors. The glucose may be normal or only mildly elevated because SGLT2i cause glucosuria. Check ketones and blood gas immediately. High index of suspicion is needed because the 'normal' glucose can be falsely reassuring."
      },
      {
        "question": "Which A1c target is most appropriate for a 78-year-old with T2DM, dementia, and history of severe hypoglycemia?",
        "options": [
          "<6.5%",
          "<7.0%",
          "<7.5%",
          "<8.0%"
        ],
        "correct": 3,
        "explanation": "A less stringent target of <8% is appropriate for patients with limited life expectancy, advanced complications, extensive comorbidities, or history of severe hypoglycemia. In this elderly patient with dementia and hypoglycemia history, avoiding hypoglycemia is more important than tight control. Tight control could increase falls, confusion, and mortality."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ADA Standards of Care 2024",
        "year": "2024",
        "summary": "Annual comprehensive guidelines emphasizing comorbidity-driven therapy selection, with SGLT2i and GLP-1 RA prioritized for cardiorenal benefit.",
        "concepts": [
          "t2dm",
          "guidelines"
        ]
      },
      {
        "type": "trial",
        "title": "EMPA-REG OUTCOME",
        "year": "2015",
        "summary": "Empagliflozin reduced CV death by 38% and HF hospitalization by 35% in T2DM with ASCVD. First diabetes drug to show CV mortality benefit.",
        "concepts": [
          "sglt2i",
          "cv-outcomes"
        ]
      },
      {
        "type": "trial",
        "title": "LEADER",
        "year": "2016",
        "summary": "Liraglutide reduced MACE by 13% and CV death by 22% in T2DM with high CV risk. Established GLP-1 RA as cardioprotective.",
        "concepts": [
          "glp1-ra",
          "cv-outcomes"
        ]
      },
      {
        "type": "trial",
        "title": "CREDENCE",
        "year": "2019",
        "summary": "Canagliflozin reduced kidney failure by 30% in diabetic nephropathy. Led to SGLT2i becoming standard of care for DKD.",
        "concepts": [
          "sglt2i",
          "ckd"
        ]
      },
      {
        "type": "trial",
        "title": "SUSTAIN-6",
        "year": "2016",
        "summary": "Semaglutide reduced MACE by 26% in T2DM with CV risk. Demonstrated CV benefit for this highly effective GLP-1 RA.",
        "concepts": [
          "glp1-ra",
          "semaglutide"
        ]
      }
    ]
  },
  "dka-hhs": {
    "id": "dka-hhs",
    "name": "DKA and HHS",
    "category": "endocrine",
    "subcategory": "diabetes",
    "knowledge": [
      "Diagnostic criteria for DKA vs HHS",
      "Anion gap calculation",
      "Fluid and insulin protocols",
      "Electrolyte management"
    ],
    "skills": [
      "Differentiate DKA from HHS",
      "Calculate corrected sodium",
      "Manage insulin infusion",
      "Transition to subcutaneous insulin"
    ],
    "lesson": {
      "title": "Diabetic Emergencies: DKA and HHS",
      "sections": [
        {
          "type": "intro",
          "content": "Diabetic ketoacidosis (DKA) and hyperosmolar hyperglycemic state (HHS) are life-threatening complications of diabetes. DKA is characterized by hyperglycemia, ketosis, and acidosis; HHS by severe hyperglycemia and hyperosmolality without significant ketosis. Both require aggressive fluid resuscitation and careful electrolyte management."
        },
        {
          "type": "concept",
          "title": "Diagnostic Criteria",
          "content": "**DKA:**\n\u2022 Glucose >250 mg/dL\n\u2022 pH <7.3 or HCO3 <18\n\u2022 Anion gap >12\n\u2022 Positive ketones (serum or urine)\n\u2022 Severity: Mild (pH 7.25-7.3), Moderate (7.0-7.24), Severe (<7.0)\n\n**HHS:**\n\u2022 Glucose >600 mg/dL\n\u2022 Serum osmolality >320 mOsm/kg\n\u2022 pH >7.3 and HCO3 >18 (minimal acidosis)\n\u2022 Absent to mild ketosis\n\u2022 Often AMS/obtundation\n\n**Overlap:** Some patients have features of both"
        },
        {
          "type": "concept",
          "title": "Initial Fluid Resuscitation",
          "content": "**Both DKA and HHS start with fluids:**\n\n\u2022 Initial bolus: NS 1-1.5 L in first hour\n\u2022 Then assess corrected sodium:\n  - If corrected Na LOW/normal: Continue NS\n  - If corrected Na HIGH: Switch to 0.45% NS\n\u2022 Rate: 250-500 mL/hr based on hemodynamics\n\u2022 Total deficit: 6-9L (DKA) or 8-12L (HHS)\n\n**Add dextrose when glucose <200-250:**\n\u2022 Switch to D5 0.45% NS\n\u2022 Prevents hypoglycemia while continuing insulin"
        },
        {
          "type": "concept",
          "title": "Insulin Therapy",
          "content": "**DKA:**\n\u2022 Regular insulin 0.1 units/kg IV bolus (some protocols skip bolus)\n\u2022 Then 0.1 units/kg/hr infusion\n\u2022 Goal: Decrease glucose 50-70 mg/dL per hour\n\u2022 If not dropping: Double rate after checking hydration\n\n**HHS:**\n\u2022 More fluid-responsive\n\u2022 Some experts defer insulin until K+ >3.3\n\u2022 Lower doses may suffice (0.05-0.1 units/kg/hr)\n\n**Don't stop insulin when glucose normalizes\u2014continue until anion gap closes!**"
        },
        {
          "type": "pearl",
          "title": "The Potassium Paradox",
          "content": "Initial serum K+ may be normal or HIGH despite total body depletion. Why? Insulin deficiency and acidosis shift K+ out of cells. When you give insulin, K+ rushes back into cells and serum K+ plummets.\n\n**Rule:** If K+ <3.3, HOLD insulin and replete K+ first. If K+ 3.3-5.0, give K+ 20-30 mEq/L in fluids. If K+ >5.0, check q2h and add K+ when <5.0."
        },
        {
          "type": "alert",
          "title": "Resolution Criteria",
          "content": "**DKA is resolved when:**\n\u2022 Glucose <200 mg/dL\n\u2022 Anion gap \u226412 (or normalized)\n\u2022 HCO3 \u226515 mEq/L\n\u2022 pH >7.3\n\u2022 Patient can eat\n\n**Then transition to subcutaneous insulin:**\n\u2022 Give long-acting + first meal dose SQ\n\u2022 Continue IV insulin for 1-2 hours AFTER SQ given\n\u2022 Don't just stop the drip!\n\n**HHS resolution:** Glucose <300, Osm <315, mental status normal"
        }
      ],
      "article": {
        "title": "DKA and HHS: Mastering the Management",
        "readTime": "15 min",
        "content": "<h2>Pathophysiology</h2>\n<p>In DKA, absolute insulin deficiency leads to unopposed glucagon action. The liver produces glucose (gluconeogenesis) and ketone bodies (beta-hydroxybutyrate, acetoacetate). The ketoacids cause metabolic acidosis. Osmotic diuresis from glycosuria leads to profound dehydration and electrolyte depletion.</p>\n\n<p>In HHS, there's enough insulin to prevent ketogenesis but not enough to prevent hyperglycemia. The glucose climbs to extreme levels (often >1000 mg/dL), causing severe hyperosmolality and dehydration. The lack of acidosis means patients may not seek care until severely ill.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The anion gap in DKA reflects ketoacid accumulation. As you treat, the gap should close. If glucose normalizes but gap remains elevated, something else is going on (lactic acidosis, sepsis, toxic ingestion).\n</div>\n\n<h2>Fluid Management Nuances</h2>\n<p>Volume resuscitation is arguably more important than insulin in the first hours. Fluids alone can drop glucose by 50-100 mg/dL/hr through dilution and improved renal perfusion.</p>\n<p>The corrected sodium guides fluid choice after initial resuscitation: Corrected Na = Measured Na + 1.6 \u00d7 [(glucose-100)/100]. If high, use half-normal saline to provide free water. If low/normal, continue normal saline.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Cerebral edema is a feared complication, especially in pediatric DKA. Risk factors include young age, new-onset diabetes, severe acidosis, and overly aggressive fluid resuscitation. In children, use more gradual rehydration (over 24-48 hours).\n</div>\n\n<h2>The Two-Bag System</h2>\n<p>Some centers use a two-bag system for DKA management: one bag of NS with potassium, one bag of D10 NS with potassium. By adjusting the ratio of the two bags, you can titrate dextrose content without changing insulin rate. This prevents the common error of stopping insulin when glucose drops.</p>\n\n<h2>Euglycemic DKA</h2>\n<p>SGLT2 inhibitors can cause DKA with near-normal glucose levels (euglycemic DKA). The mechanism involves increased glucagon, reduced glucose availability (due to urinary losses), and enhanced ketogenesis. Suspect it in any diabetic patient on SGLT2i with acidosis and ketosis, regardless of glucose level.</p>"
      },
      "podcast": {
        "title": "DKA Management with Dr. Endo",
        "duration": "12:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Endo, what's your initial approach to a patient with suspected DKA?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "First, confirm the diagnosis\u2014glucose, pH, anion gap, ketones. Then I think about precipitants: infection is number one, then medication non-adherence, new-onset diabetes, pancreatitis, MI. While I'm thinking about cause, I'm starting fluids aggressively."
          },
          {
            "speaker": "Host",
            "text": "Talk about fluid management."
          },
          {
            "speaker": "Dr. Endo",
            "text": "I give 1-1.5 liters of normal saline in the first hour. Then I check the corrected sodium to decide whether to continue NS or switch to half-normal. Most DKA patients are 6-9 liters down. I aim for about 4-6 liters in the first 6 hours depending on hemodynamics and urine output."
          },
          {
            "speaker": "Host",
            "text": "When do you start insulin?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "After fluids are running and if potassium is above 3.3. If K is low, I replete first\u2014insulin will drive it lower and cause arrhythmias. I typically use 0.1 units/kg/hr without a bolus, though protocols vary."
          },
          {
            "speaker": "Host",
            "text": "What's the most common mistake you see?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "Stopping insulin when glucose normalizes. DKA isn't about glucose\u2014it's about acidosis and ketosis. The glucose might be 180, but if the anion gap is still 20, you keep the insulin running. Add dextrose to prevent hypoglycemia, but don't stop the insulin."
          },
          {
            "speaker": "Host",
            "text": "How do you transition off the drip?"
          },
          {
            "speaker": "Dr. Endo",
            "text": "When the gap closes, patient is eating, and glucose is controlled, I give their long-acting insulin plus a meal-time dose. Then I keep the drip going for 1-2 more hours. This overlap prevents rebound DKA. It's one of those things you have to do right or they bounce back."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient with DKA has glucose 320 mg/dL, pH 7.18, HCO3 8, and initial potassium of 5.8 mEq/L. After 4 hours of treatment, K+ is 3.1 mEq/L. What happened?",
        "options": [
          "Laboratory error",
          "Insulin shifted potassium intracellularly",
          "Excessive potassium losses in urine",
          "Dilution from fluid resuscitation"
        ],
        "correct": 1,
        "explanation": "This is the 'potassium paradox' in action. Initial hyperkalemia in DKA is due to insulin deficiency and acidosis shifting K+ out of cells, despite total body potassium depletion. When insulin is given, K+ moves back into cells, revealing the true deficit. This is why K+ must be monitored closely and replaced aggressively during DKA treatment."
      },
      {
        "question": "A patient being treated for DKA has glucose of 180 mg/dL but pH remains 7.22 with anion gap of 18. What should you do?",
        "options": [
          "Stop insulin infusion",
          "Continue insulin and add dextrose to fluids",
          "Switch to subcutaneous insulin",
          "Give IV bicarbonate"
        ],
        "correct": 1,
        "explanation": "DKA resolution requires gap closure, not just glucose normalization. Continue the insulin drip to clear ketones, but add dextrose (D5 or D10) to prevent hypoglycemia. Stopping insulin prematurely causes ketone reaccumulation and worsening acidosis. Don't transition to subcutaneous insulin until the gap closes and patient can eat."
      },
      {
        "question": "Which finding differentiates HHS from DKA?",
        "options": [
          "Glucose >400 mg/dL",
          "Serum osmolality >320 with minimal ketosis",
          "Altered mental status",
          "Need for IV insulin"
        ],
        "correct": 1,
        "explanation": "HHS is defined by severe hyperglycemia (>600), hyperosmolality (>320), and minimal ketosis/acidosis (pH >7.3, HCO3 >18). DKA has significant ketosis and acidosis regardless of glucose level. Both can cause altered mental status, and both often need IV insulin, though HHS is more fluid-responsive."
      },
      {
        "question": "A diabetic patient on empagliflozin presents with fatigue, nausea, and abdominal pain. Glucose is 195 mg/dL. pH is 7.24, HCO3 is 14, anion gap is 20, and ketones are elevated. What is the diagnosis?",
        "options": [
          "Alcoholic ketoacidosis",
          "Euglycemic DKA",
          "Starvation ketosis",
          "Lactic acidosis"
        ],
        "correct": 1,
        "explanation": "This is euglycemic DKA\u2014DKA with near-normal glucose\u2014a known complication of SGLT2 inhibitors (empagliflozin). SGLT2i increase glucosuria, reducing glucose levels while promoting ketogenesis through increased glucagon and reduced insulin. Treatment is the same as regular DKA: fluids, insulin, and potassium replacement."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ADA DKA/HHS Consensus Statement",
        "year": "2009",
        "summary": "Classic guidelines on DKA and HHS management including diagnostic criteria, fluid and insulin protocols, and transition to subcutaneous insulin.",
        "concepts": [
          "dka",
          "hhs"
        ]
      },
      {
        "type": "guideline",
        "title": "Joint British Diabetes Societies DKA Guidelines",
        "year": "2021",
        "summary": "Updated UK guidelines emphasizing weight-based insulin dosing and fixed-rate insulin infusion approach.",
        "concepts": [
          "dka",
          "insulin"
        ]
      },
      {
        "type": "trial",
        "title": "SGLT2i and Euglycemic DKA",
        "year": "2020",
        "summary": "FDA warnings and case series describing euglycemic DKA associated with SGLT2 inhibitors, especially during illness, surgery, or fasting.",
        "concepts": [
          "dka",
          "sglt2i"
        ]
      }
    ]
  },
  "hap-vap": {
    "id": "hap-vap",
    "name": "Hospital & Ventilator-Associated Pneumonia",
    "category": "infectious",
    "subcategory": "pneumonia",
    "knowledge": [
      "HAP vs VAP definitions",
      "MDR risk factors",
      "Empiric antibiotic selection",
      "De-escalation principles"
    ],
    "skills": [
      "Diagnose HAP/VAP",
      "Assess MDR risk",
      "Select appropriate empiric coverage",
      "De-escalate based on cultures"
    ],
    "lesson": {
      "title": "Hospital-Acquired and Ventilator-Associated Pneumonia",
      "sections": [
        {
          "type": "intro",
          "content": "Hospital-acquired pneumonia (HAP) and ventilator-associated pneumonia (VAP) are pneumonias developing in the hospital setting, with different pathogens than community-acquired pneumonia. These infections carry significant morbidity and mortality. Management requires balancing broad empiric coverage against antibiotic stewardship through de-escalation."
        },
        {
          "type": "concept",
          "title": "Definitions",
          "content": "**Hospital-acquired pneumonia (HAP):**\n\u2022 Pneumonia developing \u226548 hours after hospital admission\n\u2022 Patient NOT intubated at time of diagnosis\n\n**Ventilator-associated pneumonia (VAP):**\n\u2022 Pneumonia developing >48 hours after endotracheal intubation\n\u2022 Most common ICU-acquired infection\n\n**Healthcare-associated pneumonia (HCAP):**\n\u2022 Retired term\u2014no longer used in guidelines\n\u2022 Previously included nursing home, recent hospitalization\n\u2022 Now individualize based on specific risk factors"
        },
        {
          "type": "concept",
          "title": "Common Pathogens",
          "content": "**HAP/VAP pathogens differ from CAP:**\n\n**Gram-negatives (predominant):**\n\u2022 Pseudomonas aeruginosa\n\u2022 Klebsiella pneumoniae\n\u2022 E. coli\n\u2022 Acinetobacter\n\u2022 Enterobacter\n\n**Gram-positives:**\n\u2022 Staphylococcus aureus (including MRSA)\n\u2022 Streptococcus pneumoniae\n\n**Key point:** Local microbiology matters! Know your hospital's antibiogram and common resistant organisms."
        },
        {
          "type": "concept",
          "title": "MDR Risk Factors",
          "content": "**High risk for MDR pathogens:**\n\u2022 IV antibiotics within prior 90 days\n\u2022 Hospitalization \u22655 days\n\u2022 Septic shock at time of VAP\n\u2022 ARDS preceding VAP\n\u2022 Renal replacement therapy prior to VAP\n\u2022 Structural lung disease (bronchiectasis)\n\u2022 Known colonization with MDR organisms\n\n**If NO risk factors AND low local MRSA/Pseudomonas prevalence:**\n\u2022 May use narrower spectrum\n\u2022 Target S. aureus and common gram-negatives"
        },
        {
          "type": "pearl",
          "title": "The Antibiogram is Your Friend",
          "content": "Empiric therapy should be guided by local resistance patterns. If your ICU has 30% Pseudomonas resistance to piperacillin-tazobactam, pip-tazo isn't a good empiric choice. Many hospitals publish unit-specific antibiograms. Review them and choose agents with >90% susceptibility for your empiric regimen."
        },
        {
          "type": "alert",
          "title": "Empiric Antibiotic Selection",
          "content": "**HAP (non-severe, no MDR risk):**\n\u2022 Piperacillin-tazobactam, OR\n\u2022 Cefepime, OR\n\u2022 Levofloxacin\n\n**HAP/VAP (severe or MDR risk factors):**\n\u2022 Two antipseudomonal agents from different classes:\n  - Beta-lactam: Pip-tazo, cefepime, meropenem\n  - PLUS: Fluoroquinolone OR aminoglycoside\n\u2022 PLUS MRSA coverage: Vancomycin or linezolid\n\n**Duration:** 7 days for most uncomplicated cases (shorter courses = less resistance)"
        }
      ],
      "article": {
        "title": "HAP/VAP: Evolving Management Strategies",
        "readTime": "13 min",
        "content": "<h2>The Diagnostic Challenge</h2>\n<p>HAP/VAP diagnosis is clinical\u2014new or progressive infiltrate plus clinical signs of infection (fever, purulent secretions, leukocytosis, declining oxygenation). No single criterion is sensitive or specific. The challenge is distinguishing pneumonia from other causes of infiltrates and fever in hospitalized patients.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> VAP is overdiagnosed. Fever, leukocytosis, and infiltrates in ventilated patients have many causes: atelectasis, aspiration, ARDS, PE, drug fever. Clinical criteria have poor specificity. Always reassess at 48-72 hours and de-escalate if cultures are negative or improving.\n</div>\n\n<h2>The Double Coverage Debate</h2>\n<p>Guidelines recommend two antipseudomonal agents for severe HAP/VAP or MDR risk. The rationale is to ensure at least one active agent if the organism is resistant. However, once susceptibilities return, de-escalate to a single agent. Continued double coverage doesn't improve outcomes and promotes resistance.</p>\n\n<h2>MRSA Coverage</h2>\n<p>Add MRSA coverage (vancomycin or linezolid) if: prior MRSA infection or colonization, high unit MRSA prevalence (>20%), severe sepsis/shock, or recent antibiotics. Vancomycin and linezolid have similar efficacy for MRSA pneumonia; linezolid may have better lung penetration and doesn't require levels monitoring.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Procalcitonin can help guide duration. Stopping antibiotics when procalcitonin drops by 80% or to <0.5 ng/mL is safe and reduces antibiotic exposure without worse outcomes.\n</div>\n\n<h2>Prevention Bundles</h2>\n<p>VAP prevention is critical: head of bed elevation (30-45\u00b0), oral care with chlorhexidine, daily sedation interruption and spontaneous breathing trials, DVT and stress ulcer prophylaxis (the 'VAP bundle'). These interventions have reduced VAP rates more than any treatment advance.</p>"
      },
      "podcast": {
        "title": "HAP/VAP with Dr. Critical",
        "duration": "10:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Critical, your ventilated patient develops fever and a new infiltrate. Is it VAP?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "Maybe. The clinical criteria for VAP are notoriously non-specific. I consider VAP if there's a new infiltrate plus two or more of: fever, leukocytosis, purulent secretions, or declining oxygenation. But atelectasis, fluid overload, and aspiration can look similar."
          },
          {
            "speaker": "Host",
            "text": "What's your approach to empiric therapy?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "I assess MDR risk first. Recent antibiotics, prolonged hospitalization, structural lung disease, known colonization\u2014these increase my concern for resistant organisms. For high-risk patients, I use two antipseudomonal agents plus MRSA coverage. For low-risk, I can be narrower."
          },
          {
            "speaker": "Host",
            "text": "How do you choose specific agents?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "The antibiogram is essential. I know what my ICU's Pseudomonas looks like. If 25% are resistant to pip-tazo, I use cefepime or meropenem instead. I want empiric agents with greater than 90% susceptibility. And I always check what antibiotics the patient has received recently\u2014I avoid agents from the same class."
          },
          {
            "speaker": "Host",
            "text": "When do you de-escalate?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "As soon as I have culture data\u2014usually 48-72 hours. If cultures grow a susceptible organism, I narrow to a single agent targeting it. If cultures are negative and the patient is improving, I question whether it was ever VAP and consider stopping antibiotics. Procalcitonin helps guide duration."
          },
          {
            "speaker": "Host",
            "text": "How long do you treat?"
          },
          {
            "speaker": "Dr. Critical",
            "text": "Seven days for most VAP. Studies show no benefit to longer courses, and shorter is better for minimizing resistance. I extend only if there's Pseudomonas or Acinetobacter, extensive necrosis, or slow clinical response."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient intubated for 5 days develops fever, purulent secretions, and new infiltrate. They received piperacillin-tazobactam 2 weeks ago for UTI. What is the most appropriate empiric regimen?",
        "options": [
          "Piperacillin-tazobactam alone",
          "Ceftriaxone plus azithromycin",
          "Meropenem plus vancomycin plus ciprofloxacin",
          "Cefazolin plus doxycycline"
        ],
        "correct": 2,
        "explanation": "This is VAP with MDR risk factors (prior antibiotics, intubation >48h). Empiric coverage should include two antipseudomonal agents from different classes (meropenem + ciprofloxacin) plus MRSA coverage (vancomycin). Pip-tazo alone is insufficient given recent pip-tazo exposure. CAP regimens don't cover HAP/VAP pathogens."
      },
      {
        "question": "Which factor is a risk for MDR organisms in HAP/VAP?",
        "options": [
          "Age >65 years",
          "COPD without recent hospitalization",
          "IV antibiotics within prior 90 days",
          "Diabetes mellitus"
        ],
        "correct": 2,
        "explanation": "Recent IV antibiotics (within 90 days) is a significant risk factor for MDR organisms. Other MDR risk factors include hospitalization \u22655 days, prior MDR colonization, structural lung disease, and septic shock. Advanced age, COPD without hospitalization, and diabetes are not specifically MDR risk factors."
      },
      {
        "question": "After 48 hours, respiratory cultures from a VAP patient grow only MSSA (methicillin-sensitive S. aureus). What is the appropriate antibiotic adjustment?",
        "options": [
          "Continue broad-spectrum coverage",
          "De-escalate to cefazolin or nafcillin",
          "Add an aminoglycoside",
          "Switch to linezolid"
        ],
        "correct": 1,
        "explanation": "With confirmed MSSA and clinical improvement, de-escalate to narrow-spectrum anti-staphylococcal therapy (cefazolin or nafcillin). Continuing broad coverage promotes resistance. Linezolid is for MRSA, not MSSA. Adding aminoglycoside isn't needed with susceptible organism."
      },
      {
        "question": "What is the recommended duration of antibiotic therapy for uncomplicated VAP?",
        "options": [
          "3 days",
          "7 days",
          "14 days",
          "21 days"
        ],
        "correct": 1,
        "explanation": "Seven days is recommended for uncomplicated VAP. Multiple trials show no benefit to longer courses. Shorter courses reduce antibiotic exposure, resistance selection, and Clostridioides difficile risk. Consider extending for Pseudomonas, Acinetobacter, or slow response."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2016 IDSA/ATS HAP/VAP Guidelines",
        "year": "2016",
        "summary": "Evidence-based guidelines on diagnosis, treatment, and prevention of HAP and VAP, emphasizing local antibiograms and de-escalation.",
        "concepts": [
          "hap",
          "vap"
        ]
      },
      {
        "type": "trial",
        "title": "Short vs Long Duration VAP Treatment",
        "year": "2003",
        "summary": "8 days non-inferior to 15 days for VAP except for non-fermenting gram-negatives. Established shorter course as standard.",
        "concepts": [
          "vap",
          "duration"
        ]
      },
      {
        "type": "trial",
        "title": "Procalcitonin-Guided Duration",
        "year": "2018",
        "summary": "Procalcitonin-guided antibiotic discontinuation reduced antibiotic exposure in respiratory infections without worse outcomes.",
        "concepts": [
          "vap",
          "procalcitonin"
        ]
      }
    ]
  },
  "pe-treatment": {
    "id": "pe-treatment",
    "name": "PE Treatment",
    "category": "pulmonary",
    "subcategory": "vte",
    "knowledge": [
      "Anticoagulation selection",
      "Thrombolysis indications",
      "Catheter-directed therapy",
      "Duration of treatment"
    ],
    "skills": [
      "Select appropriate anticoagulant",
      "Identify thrombolysis candidates",
      "Manage bleeding complications",
      "Determine treatment duration"
    ],
    "lesson": {
      "title": "Pulmonary Embolism Treatment: Anticoagulation and Beyond",
      "sections": [
        {
          "type": "intro",
          "content": "PE treatment has evolved from heparin-to-warfarin to DOAC monotherapy for most patients. The key decisions are: anticoagulant selection, need for advanced therapy (thrombolytics, catheter intervention), and duration of treatment. Risk stratification guides these decisions\u2014low-risk patients can often go home on DOACs, while high-risk patients need ICU care and possible intervention."
        },
        {
          "type": "concept",
          "title": "Anticoagulation Selection",
          "content": "**First-line: DOACs (for most patients)**\n\u2022 Rivaroxaban 15mg BID \u00d7 3 weeks, then 20mg daily\n\u2022 Apixaban 10mg BID \u00d7 7 days, then 5mg BID\n\u2022 Both can be started without lead-in parenteral anticoagulation\n\n**When to use LMWH \u2192 Warfarin:**\n\u2022 Active cancer (LMWH or edoxaban preferred)\n\u2022 Severe renal impairment (CrCl <30)\n\u2022 Antiphospholipid syndrome\n\u2022 Pregnancy (LMWH only)\n\n**When to use UFH:**\n\u2022 High-risk PE (may need thrombolytics)\n\u2022 Severe renal failure\n\u2022 High bleeding risk (reversible)"
        },
        {
          "type": "concept",
          "title": "Thrombolysis Indications",
          "content": "**Systemic thrombolysis (alteplase 100mg over 2h):**\n\n**Definite indication:**\n\u2022 Massive/high-risk PE (hemodynamically unstable)\n\u2022 SBP <90 for >15 min or requiring vasopressors\n\n**Consider (submassive/intermediate-high risk):**\n\u2022 RV dysfunction + elevated biomarkers + clinical deterioration\n\u2022 Rescue thrombolysis if decompensating despite anticoagulation\n\n**Contraindications:**\n\u2022 Absolute: Active bleeding, recent hemorrhagic stroke, intracranial neoplasm\n\u2022 Relative: Recent surgery, recent GI bleed, uncontrolled HTN"
        },
        {
          "type": "concept",
          "title": "Catheter-Directed Therapy",
          "content": "**Options:**\n\u2022 Catheter-directed thrombolysis (CDT): Lower dose tPA delivered locally\n\u2022 Ultrasound-assisted thrombolysis (EKOS)\n\u2022 Mechanical thrombectomy (suction, fragmentation)\n\n**When to consider:**\n\u2022 Submassive PE failing anticoagulation alone\n\u2022 High-risk PE with thrombolysis contraindication\n\u2022 Intermediate-risk PE with extensive clot burden\n\n**Advantages over systemic lysis:**\n\u2022 Lower tPA dose = less bleeding risk\n\u2022 Direct visualization and treatment\n\u2022 May be option when systemic lysis contraindicated"
        },
        {
          "type": "pearl",
          "title": "The Outpatient PE Question",
          "content": "Low-risk PE (PESI class I-II or sPESI 0) can potentially be treated as outpatient with close follow-up. Requirements: hemodynamically stable, no severe hypoxia, no high bleeding risk, reliable patient, able to obtain DOAC quickly, and follow-up within 24-48 hours. The Hestia criteria help identify appropriate candidates."
        },
        {
          "type": "alert",
          "title": "Duration of Anticoagulation",
          "content": "**Provoked PE (surgery, immobilization, estrogen):**\n\u2022 3 months if major transient risk factor resolved\n\u2022 Consider extended if minor risk factor\n\n**Unprovoked PE:**\n\u2022 Minimum 3 months, then reassess\n\u2022 Extended/indefinite if: low bleeding risk, recurrent VTE, persistent risk factors\n\u2022 Can use reduced-dose DOAC (rivaroxaban 10mg, apixaban 2.5mg BID) for extended therapy\n\n**Cancer-associated PE:**\n\u2022 Continue while cancer active or on treatment\n\u2022 Reassess if cancer in remission"
        }
      ],
      "article": {
        "title": "PE Treatment: Evidence-Based Anticoagulation",
        "readTime": "14 min",
        "content": "<h2>The DOAC Revolution</h2>\n<p>DOACs have transformed VTE treatment. The pivotal trials (EINSTEIN, AMPLIFY, Hokusai-VTE) showed non-inferiority to warfarin with less major bleeding. For most PE patients, DOACs are now first-line. The convenience of oral-only regimens with fixed dosing has made outpatient treatment feasible.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Rivaroxaban and apixaban can be started as single-drug therapy without parenteral lead-in. Edoxaban and dabigatran require 5+ days of LMWH/UFH before starting. This matters for discharge planning\u2014patients going home on rivaroxaban or apixaban can start immediately.\n</div>\n\n<h2>Cancer-Associated VTE</h2>\n<p>Cancer patients have higher VTE recurrence and bleeding rates. The SELECT-D and Hokusai-VTE Cancer trials showed DOACs (edoxaban, rivaroxaban) are non-inferior to LMWH for recurrence but may have more bleeding, especially GI bleeding with GI malignancies. Current guidance: LMWH or DOACs are acceptable; avoid DOACs with GI/GU tract cancers.</p>\n\n<h2>The Submassive PE Dilemma</h2>\n<p>Intermediate-risk (submassive) PE is where clinical judgment matters most. These patients are stable but have RV strain. The PEITHO trial showed thrombolysis reduces hemodynamic decompensation but increases bleeding (especially intracranial). Current approach: anticoagulate, monitor closely in ICU or step-down, rescue thrombolysis if deteriorating.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> The sPESI (simplified PESI) is a quick bedside tool: 1 point each for age >80, cancer, chronic cardiopulmonary disease, HR \u2265110, SBP <100, SpO2 <90%. Score of 0 = low risk (~1% 30-day mortality). These patients may be candidates for early discharge.\n</div>\n\n<h2>Extended Therapy Decisions</h2>\n<p>After initial treatment, the decision to continue anticoagulation depends on recurrence vs bleeding risk. The EINSTEIN-Choice and AMPLIFY-EXT trials showed reduced-dose DOACs (rivaroxaban 10mg, apixaban 2.5mg BID) reduce recurrence with bleeding similar to placebo. This makes extended therapy more attractive for unprovoked PE.</p>"
      },
      "podcast": {
        "title": "PE Treatment Decisions with Dr. Pulm",
        "duration": "11:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Pulm, a patient is diagnosed with PE. Walk us through your treatment approach."
          },
          {
            "speaker": "Dr. Pulm",
            "text": "First, risk stratification. High-risk with hypotension goes to the ICU and gets considered for thrombolytics. Intermediate-risk with RV strain gets admitted for close monitoring. Low-risk with sPESI of zero\u2014I think about whether they can go home."
          },
          {
            "speaker": "Host",
            "text": "What anticoagulant do you reach for?"
          },
          {
            "speaker": "Dr. Pulm",
            "text": "For most patients, a DOAC. I like apixaban or rivaroxaban because they don't need parenteral lead-in. Apixaban has slightly less bleeding in the trials. I use LMWH for pregnant patients, severe renal failure, or active GI cancer where DOAC bleeding risk is higher."
          },
          {
            "speaker": "Host",
            "text": "When do you consider thrombolytics?"
          },
          {
            "speaker": "Dr. Pulm",
            "text": "Definite indication is massive PE\u2014hypotension, shock, cardiac arrest. For submassive PE, I'm more conservative. I start anticoagulation, monitor in the ICU, and keep thrombolytics ready as rescue. PEITHO taught us that routine thrombolysis for submassive PE causes too much bleeding."
          },
          {
            "speaker": "Host",
            "text": "What about catheter-directed therapy?"
          },
          {
            "speaker": "Dr. Pulm",
            "text": "It's an emerging option, especially for patients who have contraindications to systemic thrombolysis. Lower dose tPA delivered locally seems to have less bleeding. I involve our interventional team early for submassive PE that's not responding to anticoagulation."
          },
          {
            "speaker": "Host",
            "text": "How do you decide on duration?"
          },
          {
            "speaker": "Dr. Pulm",
            "text": "Provoked PE from surgery or estrogen\u20143 months. Unprovoked PE\u2014that's a conversation. If bleeding risk is low and they're not going to be anxious about being on blood thinners forever, I recommend extended therapy with a lower-dose DOAC. The trials show continued protection with minimal bleeding."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 55-year-old otherwise healthy woman is diagnosed with PE 3 weeks after knee surgery. What is the recommended duration of anticoagulation?",
        "options": [
          "1 month",
          "3 months",
          "6 months",
          "Indefinite"
        ],
        "correct": 1,
        "explanation": "PE provoked by major transient risk factor (surgery) requires 3 months of anticoagulation. The risk factor has resolved, and recurrence risk after stopping is low. Indefinite therapy would expose her to bleeding risk without proportional benefit. Shorter than 3 months has higher recurrence."
      },
      {
        "question": "Which patient is the best candidate for outpatient PE treatment?",
        "options": [
          "sPESI 0, able to obtain medication, reliable follow-up",
          "sPESI 2, history of compliance issues",
          "sPESI 0, on warfarin for mechanical valve",
          "sPESI 0, SBP 85 mmHg"
        ],
        "correct": 0,
        "explanation": "Low-risk PE (sPESI 0) with reliable patient and access to medication/follow-up can be treated as outpatient. sPESI 2 isn't low-risk. Patient on warfarin for valve has complex anticoagulation needs. SBP 85 is hemodynamically significant despite sPESI score and requires admission."
      },
      {
        "question": "A patient with massive PE (SBP 75 mmHg on vasopressors) has no contraindications to thrombolysis. What is the recommended thrombolytic regimen?",
        "options": [
          "Alteplase 100mg over 2 hours",
          "Tenecteplase weight-based single bolus",
          "Alteplase 50mg bolus in cardiac arrest",
          "Low-dose catheter-directed tPA only"
        ],
        "correct": 0,
        "explanation": "For massive PE with hemodynamic instability, systemic thrombolysis with alteplase 100mg IV over 2 hours is the standard regimen. The 50mg bolus is used in cardiac arrest when the 2-hour infusion isn't feasible. Tenecteplase is not FDA-approved for PE (though studied). Catheter-directed is an option when systemic lysis is contraindicated."
      },
      {
        "question": "Which DOAC requires parenteral anticoagulation lead-in before starting for PE treatment?",
        "options": [
          "Rivaroxaban",
          "Apixaban",
          "Edoxaban",
          "Both rivaroxaban and apixaban"
        ],
        "correct": 2,
        "explanation": "Edoxaban (and dabigatran) require at least 5 days of parenteral anticoagulation (LMWH or UFH) before starting. Rivaroxaban and apixaban can be started as single-drug therapy with no parenteral lead-in\u2014they use higher initial dosing for the first week(s) instead."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "EINSTEIN-PE",
        "year": "2012",
        "summary": "Rivaroxaban non-inferior to warfarin for PE treatment with similar major bleeding. Established single-drug DOAC approach.",
        "concepts": [
          "pe",
          "doac"
        ]
      },
      {
        "type": "trial",
        "title": "PEITHO",
        "year": "2014",
        "summary": "Thrombolysis in intermediate-risk PE reduced hemodynamic decompensation but increased major bleeding and stroke. Changed approach to submassive PE.",
        "concepts": [
          "pe",
          "thrombolysis"
        ]
      },
      {
        "type": "trial",
        "title": "EINSTEIN-Choice",
        "year": "2017",
        "summary": "Reduced-dose rivaroxaban (10mg daily) for extended VTE prevention was superior to aspirin with similar bleeding to placebo.",
        "concepts": [
          "pe",
          "extended-therapy"
        ]
      }
    ]
  },
  "cap": {
    "id": "cap",
    "name": "Community-Acquired Pneumonia",
    "category": "infectious",
    "subcategory": "pneumonia",
    "knowledge": [
      "CURB-65 and PSI scoring",
      "Common pathogens by setting",
      "Empiric antibiotic selection",
      "Indications for ICU admission"
    ],
    "skills": [
      "Risk stratify pneumonia patients",
      "Select appropriate antibiotics",
      "Recognize severe pneumonia",
      "Manage treatment failure"
    ],
    "lesson": {
      "title": "Community-Acquired Pneumonia: Evidence-Based Management",
      "sections": [
        {
          "type": "intro",
          "content": "Community-acquired pneumonia (CAP) remains a leading cause of hospitalization and death. Management centers on severity assessment (who can go home?), appropriate empiric antibiotics (covering likely pathogens), and recognizing treatment failure. Guidelines have simplified antibiotic choices while emphasizing timely administration."
        },
        {
          "type": "concept",
          "title": "Severity Assessment",
          "content": "**CURB-65 Score:**\n\u2022 Confusion (new)\n\u2022 Urea >7 mmol/L (BUN >19)\n\u2022 Respiratory rate \u226530\n\u2022 Blood pressure (SBP <90 or DBP \u226460)\n\u2022 Age \u226565\n\n**Management by score:**\n\u2022 0-1: Outpatient treatment\n\u2022 2: Consider short hospitalization\n\u2022 3-5: Hospitalize (4-5: consider ICU)\n\n**PSI (Pneumonia Severity Index):**\nMore complex (20 variables), risk stratifies into classes I-V. Class I-II: outpatient. Class III: observation. Class IV-V: inpatient."
        },
        {
          "type": "concept",
          "title": "Common Pathogens",
          "content": "**Most common overall:** Streptococcus pneumoniae\n\n**Atypical organisms:**\n\u2022 Mycoplasma pneumoniae (younger patients)\n\u2022 Chlamydia pneumoniae\n\u2022 Legionella (outbreaks, contaminated water)\n\n**Other bacteria:**\n\u2022 Haemophilus influenzae\n\u2022 Moraxella catarrhalis\n\u2022 Staphylococcus aureus (post-influenza)\n\n**Viruses:** Influenza, RSV, SARS-CoV-2\n\n**In ~50% of cases, no pathogen is identified**"
        },
        {
          "type": "concept",
          "title": "Empiric Antibiotic Selection",
          "content": "**Outpatient, healthy:**\n\u2022 Amoxicillin 1g TID, OR\n\u2022 Doxycycline 100mg BID, OR\n\u2022 Azithromycin (if local resistance <25%)\n\n**Outpatient with comorbidities:**\n\u2022 Amoxicillin-clavulanate + macrolide, OR\n\u2022 Respiratory fluoroquinolone (levofloxacin, moxifloxacin)\n\n**Inpatient, non-ICU:**\n\u2022 Beta-lactam (ceftriaxone, ampicillin-sulbactam) + macrolide, OR\n\u2022 Respiratory fluoroquinolone alone\n\n**ICU:**\n\u2022 Beta-lactam + macrolide, OR\n\u2022 Beta-lactam + fluoroquinolone\n\u2022 Add vancomycin if MRSA risk"
        },
        {
          "type": "pearl",
          "title": "The Macrolide Question",
          "content": "Why add a macrolide? Mainly for atypical coverage and potential anti-inflammatory effects. Some studies show mortality benefit with combination therapy even when atypicals aren't identified. However, macrolide monotherapy is increasingly problematic due to pneumococcal resistance. When in doubt, combine or use a fluoroquinolone."
        },
        {
          "type": "alert",
          "title": "When to Suspect Pseudomonas",
          "content": "Standard CAP regimens don't cover Pseudomonas. Consider antipseudomonal coverage if:\n\n\u2022 Structural lung disease (bronchiectasis, severe COPD)\n\u2022 Frequent antibiotic exposure (>4 courses past year)\n\u2022 Recent hospitalization with IV antibiotics\n\u2022 Prior Pseudomonas isolation\n\n**Regimens:** Piperacillin-tazobactam, cefepime, or meropenem\n\nAlso consider PJP in immunocompromised patients, especially if hypoxemia out of proportion to infiltrates."
        }
      ],
      "article": {
        "title": "CAP: From Diagnosis to Discharge",
        "readTime": "13 min",
        "content": "<h2>The Diagnostic Dilemma</h2>\n<p>CAP diagnosis requires clinical signs of infection (fever, cough, dyspnea) plus radiographic evidence of infiltrate. But chest X-ray misses 15-20% of pneumonias seen on CT, and infiltrates can take days to appear. Clinical judgment matters\u2014if the story is compelling, don't let a negative X-ray stop treatment.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Blood cultures are recommended for severe CAP and ICU patients but are positive in only 5-15% of cases. However, when positive, they can dramatically alter management. Sputum cultures are helpful when a good sample is obtained (>25 PMNs, <10 epithelial cells per low-power field).\n</div>\n\n<h2>Procalcitonin in CAP</h2>\n<p>Procalcitonin can help differentiate bacterial from viral infections. It rises within hours of bacterial infection and falls rapidly with appropriate treatment. The 2019 ATS/IDSA guidelines suggest procalcitonin can guide antibiotic discontinuation but should not be used to withhold initial antibiotics in suspected bacterial CAP.</p>\n\n<h2>Duration of Therapy</h2>\n<p>Five days of antibiotics is sufficient for most CAP patients who achieve clinical stability (afebrile, hemodynamically stable, able to eat, mental status baseline). Shorter courses reduce antibiotic exposure without compromising outcomes. Longer courses (7-10 days) may be needed for slow responders or specific pathogens (Pseudomonas, S. aureus, Legionella).</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Most patients should improve within 48-72 hours. If no improvement, consider: wrong diagnosis (PE, malignancy, aspiration), wrong antibiotic (resistant organism, atypical pathogen), or complication (empyema, abscess). Repeat imaging and consider broadening coverage.\n</div>\n\n<h2>ICU Criteria</h2>\n<p>ATS/IDSA major criteria for ICU admission: respiratory failure requiring mechanical ventilation, or septic shock requiring vasopressors. Minor criteria include: RR \u226530, PaO2/FiO2 \u2264250, multilobar infiltrates, confusion, BUN \u226520, WBC <4000, platelets <100k, temperature <36\u00b0C, hypotension requiring fluids. Three or more minor criteria suggest ICU-level care.</p>"
      },
      "podcast": {
        "title": "CAP Pearls with Dr. Pulmonis",
        "duration": "10:45",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Pulmonis, what's your approach to CAP in the ED?"
          },
          {
            "speaker": "Dr. Pulmonis",
            "text": "First, confirm the diagnosis\u2014clinical plus radiographic. Then risk stratify using CURB-65 or PSI. This determines disposition: can they go home, or do they need admission? I check procalcitonin if I'm unsure about bacterial versus viral, but I don't let it delay antibiotics if I'm suspicious."
          },
          {
            "speaker": "Host",
            "text": "How do you choose antibiotics?"
          },
          {
            "speaker": "Dr. Pulmonis",
            "text": "For outpatients, it depends on comorbidities. Healthy adults can get amoxicillin or doxycycline alone. If they have chronic disease\u2014COPD, diabetes, heart failure\u2014I use combination therapy or a respiratory fluoroquinolone. For inpatients, I almost always combine a beta-lactam with a macrolide."
          },
          {
            "speaker": "Host",
            "text": "Why the combination?"
          },
          {
            "speaker": "Dr. Pulmonis",
            "text": "Atypical coverage is part of it, but there's also data suggesting macrolides have anti-inflammatory effects that improve outcomes. Even when we don't identify atypicals, combination therapy seems to help. The fluoroquinolone is an alternative, but I reserve it for penicillin allergy or when I want once-daily dosing."
          },
          {
            "speaker": "Host",
            "text": "When do you worry about resistant organisms?"
          },
          {
            "speaker": "Dr. Pulmonis",
            "text": "MRSA and Pseudomonas. For MRSA, I add vancomycin if they have prior MRSA, severe disease, necrotizing infiltrate, or post-influenza. For Pseudomonas, structural lung disease and recent antibiotics are the big risk factors. If in doubt about either, get respiratory cultures and broaden until you know what you're treating."
          },
          {
            "speaker": "Host",
            "text": "How long do you treat?"
          },
          {
            "speaker": "Dr. Pulmonis",
            "text": "Five days minimum, but I use clinical stability to decide when to stop. Afebrile, eating, breathing comfortably, back to baseline mental status? That's day 3 or 4? They can finish with oral antibiotics or even stop if they've had 5 days total. Exceptions are specific pathogens that need longer courses."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 72-year-old with COPD presents with cough and fever. RR is 26, BP 118/72, BUN is 22 mg/dL, and he is not confused. Chest X-ray shows right lower lobe infiltrate. What is his CURB-65 score and recommended disposition?",
        "options": [
          "Score 1 - outpatient treatment",
          "Score 2 - consider short hospitalization",
          "Score 3 - hospitalize",
          "Score 4 - ICU admission"
        ],
        "correct": 1,
        "explanation": "CURB-65: Age \u226565 (1) + BUN >19 (1) = 2 points. (No confusion, RR <30, BP normal.) Score 2 suggests consider short hospitalization or close outpatient follow-up. The COPD adds to his risk, supporting admission for observation. He doesn't meet criteria for ICU."
      },
      {
        "question": "Which antibiotic regimen is most appropriate for inpatient (non-ICU) CAP in a patient with penicillin allergy (anaphylaxis)?",
        "options": [
          "Ceftriaxone + azithromycin",
          "Respiratory fluoroquinolone monotherapy",
          "Vancomycin + azithromycin",
          "Doxycycline monotherapy"
        ],
        "correct": 1,
        "explanation": "With severe penicillin allergy (anaphylaxis), cephalosporins should be avoided due to potential cross-reactivity. A respiratory fluoroquinolone (levofloxacin 750mg or moxifloxacin 400mg) provides coverage for pneumococcus and atypicals as monotherapy. Doxycycline alone is inadequate for inpatient CAP."
      },
      {
        "question": "A patient with bronchiectasis and recent antibiotic use presents with severe CAP requiring ICU admission. Beyond standard coverage, what organism should be covered?",
        "options": [
          "Legionella pneumophila",
          "Pseudomonas aeruginosa",
          "Mycoplasma pneumoniae",
          "Streptococcus pneumoniae"
        ],
        "correct": 1,
        "explanation": "Bronchiectasis and recent antibiotic exposure are risk factors for Pseudomonas CAP. Standard CAP regimens don't cover Pseudomonas. Use piperacillin-tazobactam, cefepime, or meropenem. Legionella is covered by standard regimens (macrolide or fluoroquinolone). Pneumococcus and atypicals are covered by standard CAP therapy."
      },
      {
        "question": "A patient treated for CAP remains febrile after 72 hours of appropriate antibiotics. What is the most appropriate next step?",
        "options": [
          "Continue current antibiotics and observe",
          "Obtain CT chest and consider broadening coverage",
          "Switch to oral antibiotics for outpatient completion",
          "Discontinue antibiotics if cultures are negative"
        ],
        "correct": 1,
        "explanation": "Failure to improve by 48-72 hours warrants reassessment. CT chest may reveal complications (empyema, abscess) or alternative diagnoses (PE, malignancy). Consider broadening coverage for resistant organisms. Continuing the same therapy, switching to oral, or stopping antibiotics would be inappropriate for treatment failure."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2019 ATS/IDSA CAP Guidelines",
        "year": "2019",
        "summary": "Updated guidelines emphasizing risk stratification, empiric antibiotic selection based on site of care, and de-escalation strategies.",
        "concepts": [
          "cap",
          "antibiotics"
        ]
      },
      {
        "type": "trial",
        "title": "CAP-START",
        "year": "2015",
        "summary": "Beta-lactam monotherapy non-inferior to combination or fluoroquinolone for moderate-severity CAP. Suggests atypical coverage may be less critical than thought.",
        "concepts": [
          "cap",
          "antibiotics"
        ]
      },
      {
        "type": "trial",
        "title": "Short-Course Antibiotics for CAP",
        "year": "2021",
        "summary": "Multiple trials supporting 5 days of antibiotics for CAP with clinical stability, reducing antibiotic exposure without worse outcomes.",
        "concepts": [
          "cap",
          "duration"
        ]
      }
    ]
  },
  "ischemic-stroke": {
    "id": "ischemic-stroke",
    "name": "Ischemic Stroke",
    "category": "neurology",
    "subcategory": "stroke",
    "knowledge": [
      "tPA eligibility criteria",
      "Thrombectomy time windows",
      "NIHSS assessment",
      "Secondary prevention strategies"
    ],
    "skills": [
      "Rapidly assess stroke symptoms",
      "Determine reperfusion eligibility",
      "Manage blood pressure",
      "Initiate secondary prevention"
    ],
    "lesson": {
      "title": "Ischemic Stroke: Time Is Brain",
      "sections": [
        {
          "type": "intro",
          "content": "Acute ischemic stroke requires rapid evaluation and treatment. The core principle is 'time is brain'\u2014every minute of ischemia results in neuronal death. Treatment has evolved from IV thrombolysis alone to include mechanical thrombectomy for large vessel occlusion, dramatically expanding who can benefit and the time window for intervention."
        },
        {
          "type": "concept",
          "title": "Initial Assessment",
          "content": "**The stroke code:**\n\u2022 Last known well time (NOT symptom discovery time)\n\u2022 NIHSS score for severity\n\u2022 Rapid glucose check (hypoglycemia mimics stroke)\n\u2022 Non-contrast CT head: Rule out hemorrhage\n\n**NIHSS (National Institutes of Health Stroke Scale):**\n\u2022 0: No stroke symptoms\n\u2022 1-4: Minor stroke\n\u2022 5-15: Moderate stroke\n\u2022 16-20: Moderate-severe stroke\n\u2022 21-42: Severe stroke"
        },
        {
          "type": "concept",
          "title": "IV Thrombolysis (Alteplase/Tenecteplase)",
          "content": "**Time window:**\n\u2022 0-3 hours: Standard window\n\u2022 3-4.5 hours: Extended window with additional exclusions\n\n**Key exclusions:**\n\u2022 ICH or SAH on imaging\n\u2022 Severe uncontrolled HTN (>185/110)\n\u2022 Active bleeding or known bleeding diathesis\n\u2022 Recent major surgery (14 days)\n\u2022 Platelet count <100,000\n\u2022 INR >1.7 or therapeutic anticoagulation\n\u2022 Blood glucose <50 or >400\n\n**Dosing:** Alteplase 0.9 mg/kg (max 90mg), 10% bolus, remainder over 60 min\nTenecteplase (0.25 mg/kg) increasingly used\u2014single bolus, non-inferior"
        },
        {
          "type": "concept",
          "title": "Mechanical Thrombectomy",
          "content": "**Indications:**\n\u2022 Large vessel occlusion (ICA, M1, proximal M2, basilar)\n\u2022 NIHSS \u22656 (or disabling deficit)\n\u2022 Pre-stroke mRS 0-1 (functional independence)\n\u2022 ASPECTS \u22656 (limited core infarct)\n\n**Time windows:**\n\u2022 0-6 hours: Standard window\n\u2022 6-24 hours: If perfusion imaging shows salvageable tissue (DAWN/DEFUSE 3 criteria)\n\n**Key point:** Thrombectomy is IN ADDITION to IV tPA, not instead of. If eligible for both, give tPA while preparing for thrombectomy."
        },
        {
          "type": "pearl",
          "title": "Blood Pressure Management",
          "content": "**Before reperfusion:** Allow permissive hypertension up to 220/120. The collaterals need pressure. Only treat if >185/110 and tPA candidate\u2014use IV labetalol or nicardipine to get under threshold.\n\n**After tPA:** Keep BP <180/105 for 24 hours to reduce hemorrhagic transformation risk.\n\n**No reperfusion:** Allow permissive hypertension for 24-48 hours, then start lowering gradually."
        },
        {
          "type": "alert",
          "title": "Wake-Up and Unknown Onset Stroke",
          "content": "**MRI-guided tPA (WAKE-UP trial):**\n\u2022 DWI-FLAIR mismatch suggests <4.5 hours old\n\u2022 tPA beneficial if mismatch present\n\n**Late-window thrombectomy (DAWN/DEFUSE 3):**\n\u2022 Perfusion imaging: Core infarct vs penumbra (salvageable tissue)\n\u2022 Small core + large penumbra = good thrombectomy candidate\n\u2022 Can extend window to 24 hours for select patients\n\nThese trials changed practice\u2014don't assume patients who wake up with stroke can't be treated."
        }
      ],
      "article": {
        "title": "Acute Ischemic Stroke: The Revolution in Reperfusion",
        "readTime": "15 min",
        "content": "<h2>The Ischemic Penumbra</h2>\n<p>The penumbra is brain tissue that's ischemic but not yet infarcted\u2014it's electrically silent but structurally intact. This is the target of reperfusion therapy. Surrounding the core infarct (irreversibly damaged), the penumbra receives marginal blood flow through collaterals. Save the penumbra, save the patient.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Time-based windows are approximations. What really matters is tissue status. A patient with good collaterals may have salvageable tissue at 12 hours; another with poor collaterals may have completed infarct at 2 hours. Perfusion imaging identifies who benefits beyond standard windows.\n</div>\n\n<h2>The Thrombectomy Revolution</h2>\n<p>Before 2015, IV tPA was the only proven acute stroke treatment. Then came the 'big five' trials (MR CLEAN, ESCAPE, EXTEND-IA, SWIFT PRIME, REVASCAT) proving thrombectomy dramatically improves outcomes in large vessel occlusion. NNT is approximately 3-4\u2014one of the most powerful treatments in medicine.</p>\n<p>DAWN (2018) and DEFUSE 3 (2018) extended the window to 24 hours for selected patients with favorable imaging. This transformed stroke care from a 4.5-hour race to a nuanced evaluation of tissue viability.</p>\n\n<h2>Secondary Prevention</h2>\n<p>After the acute phase, secondary prevention reduces recurrent stroke risk:</p>\n<p><strong>Antiplatelet therapy:</strong> Aspirin for most. DAPT (aspirin + clopidogrel) for 21 days after minor stroke/TIA (POINT, CHANCE trials). Then single agent long-term.</p>\n<p><strong>Anticoagulation:</strong> For cardioembolic stroke (AF, mechanical valve). Usually start 4-14 days post-stroke depending on infarct size and hemorrhagic transformation risk.</p>\n<p><strong>Statins:</strong> High-intensity statin for all atherosclerotic strokes.</p>\n<p><strong>Blood pressure:</strong> Target <130/80 after acute phase (SPRINT suggested lower is better).</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Stroke etiology guides prevention. Large artery atherosclerosis: statins, antiplatelet, BP control. Cardioembolic: anticoagulation. Small vessel (lacunar): BP control paramount. Cryptogenic: consider PFO closure if high-risk features.\n</div>"
      },
      "podcast": {
        "title": "Acute Stroke with Dr. Neuro",
        "duration": "12:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Neuro, walk us through a stroke code."
          },
          {
            "speaker": "Dr. Neuro",
            "text": "It's all about time and organization. First, establish last known well\u2014not when symptoms were noticed, but when the patient was definitely normal. Fingerstick glucose to rule out hypoglycemia. Quick neuro exam with NIHSS. Then CT head\u2014we need to rule out hemorrhage before tPA."
          },
          {
            "speaker": "Host",
            "text": "When do you give tPA?"
          },
          {
            "speaker": "Dr. Neuro",
            "text": "Within 4.5 hours of last known well, if no contraindications. The door-to-needle goal is under 60 minutes, ideally under 45. We run through exclusions\u2014recent surgery, bleeding, uncontrolled hypertension\u2014but try not to find reasons to exclude. The benefit is real."
          },
          {
            "speaker": "Host",
            "text": "What about thrombectomy?"
          },
          {
            "speaker": "Dr. Neuro",
            "text": "For large vessel occlusion\u2014ICA, M1, sometimes M2 or basilar\u2014thrombectomy is transformative. We can now treat up to 24 hours if perfusion imaging shows salvageable tissue. The NNT is about 3. If I could do one procedure for my patients, this would be it."
          },
          {
            "speaker": "Host",
            "text": "What if someone wakes up with stroke symptoms?"
          },
          {
            "speaker": "Dr. Neuro",
            "text": "This used to mean no treatment, but not anymore. WAKE-UP showed MRI can identify recent strokes\u2014DWI positive but FLAIR negative suggests under 4.5 hours. And for large vessel occlusion, perfusion imaging can qualify patients for thrombectomy regardless of when they were last well."
          },
          {
            "speaker": "Host",
            "text": "Blood pressure management\u2014what's the approach?"
          },
          {
            "speaker": "Dr. Neuro",
            "text": "Before tPA, I only lower if above 185/110, just enough to qualify. After tPA, keep under 180/105 for 24 hours. If not getting reperfusion, I allow permissive hypertension\u2014the collaterals need pressure to perfuse the penumbra. After 48-72 hours, start lowering gradually."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient presents 2 hours after symptom onset with right hemiparesis and aphasia. NIHSS is 14. CT shows no hemorrhage. BP is 192/108. What is the next step?",
        "options": [
          "Lower BP to <140/90, then give tPA",
          "Lower BP to <185/110, then give tPA",
          "Give tPA immediately, BP acceptable",
          "Proceed to thrombectomy without tPA"
        ],
        "correct": 1,
        "explanation": "BP must be <185/110 to safely give tPA. Use IV labetalol or nicardipine to lower BP, then give tPA. Don't lower BP below what's needed\u2014the goal is just to qualify for thrombolysis. The patient should also be evaluated for thrombectomy (NIHSS 14 suggests moderate-severe stroke, possible LVO)."
      },
      {
        "question": "Which imaging finding would extend the thrombectomy window from 6 hours to 24 hours?",
        "options": [
          "Complete MCA territory infarct on CT",
          "Small core infarct with large penumbra on perfusion imaging",
          "Normal CT head",
          "Hemorrhagic transformation"
        ],
        "correct": 1,
        "explanation": "DAWN and DEFUSE 3 trials showed thrombectomy benefits patients up to 24 hours if perfusion imaging shows small core infarct with large penumbra (salvageable tissue). This 'target mismatch' identifies patients whose tissue clock is slower than the clock on the wall. Large completed infarct or hemorrhage would exclude thrombectomy."
      },
      {
        "question": "A patient with atrial fibrillation has a moderate-sized ischemic stroke. When should anticoagulation be started?",
        "options": [
          "Immediately",
          "After 24 hours",
          "4-14 days depending on infarct size",
          "Never\u2014use aspirin instead"
        ],
        "correct": 2,
        "explanation": "Cardioembolic stroke from AF requires anticoagulation for secondary prevention, but timing depends on infarct size and hemorrhagic transformation risk. Small infarcts: 4-7 days. Moderate: 7-14 days. Large or hemorrhagic transformation: may delay longer. The '1-3-6-12 rule' is a common guide (days based on TIA to large stroke)."
      },
      {
        "question": "According to POINT and CHANCE trials, what is the recommended antiplatelet strategy after minor ischemic stroke or TIA?",
        "options": [
          "Aspirin monotherapy indefinitely",
          "Clopidogrel monotherapy indefinitely",
          "Aspirin + clopidogrel for 21 days, then single agent",
          "Aspirin + ticagrelor for 90 days"
        ],
        "correct": 2,
        "explanation": "POINT and CHANCE trials showed DAPT (aspirin + clopidogrel) for 21-30 days after minor stroke/TIA reduces recurrent stroke more than aspirin alone, with acceptable bleeding risk. After this period, continue single antiplatelet agent long-term. This applies to non-cardioembolic stroke."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "2019 AHA/ASA Acute Ischemic Stroke Guidelines",
        "year": "2019",
        "summary": "Comprehensive guidelines on acute stroke management including tPA eligibility, thrombectomy indications, and extended time windows.",
        "concepts": [
          "stroke",
          "thrombolysis",
          "thrombectomy"
        ]
      },
      {
        "type": "trial",
        "title": "DAWN",
        "year": "2018",
        "summary": "Thrombectomy beneficial 6-24 hours post-stroke in patients with small core infarct and clinical-imaging mismatch.",
        "concepts": [
          "stroke",
          "thrombectomy"
        ]
      },
      {
        "type": "trial",
        "title": "POINT",
        "year": "2018",
        "summary": "DAPT (aspirin + clopidogrel) for 90 days reduced major ischemic events after minor stroke/TIA but increased bleeding. Led to 21-day DAPT recommendation.",
        "concepts": [
          "stroke",
          "antiplatelet"
        ]
      },
      {
        "type": "trial",
        "title": "WAKE-UP",
        "year": "2018",
        "summary": "tPA beneficial for unknown-onset stroke if MRI shows DWI-FLAIR mismatch (suggesting <4.5 hours old).",
        "concepts": [
          "stroke",
          "thrombolysis"
        ]
      }
    ]
  },
  "aki-workup": {
    "id": "aki-workup",
    "name": "AKI Workup",
    "category": "renal",
    "subcategory": "aki",
    "knowledge": [
      "KDIGO staging criteria",
      "Prerenal vs intrinsic vs postrenal",
      "Urinalysis interpretation",
      "FENa and FEUrea calculations"
    ],
    "skills": [
      "Systematically evaluate AKI",
      "Interpret urine studies",
      "Identify reversible causes",
      "Determine need for dialysis"
    ],
    "lesson": {
      "title": "Acute Kidney Injury: A Systematic Approach",
      "sections": [
        {
          "type": "intro",
          "content": "AKI is defined by acute deterioration in kidney function, identified by rising creatinine or decreased urine output. It complicates 10-15% of hospitalizations and is associated with increased mortality, length of stay, and progression to CKD. A systematic approach to diagnosis is essential."
        },
        {
          "type": "concept",
          "title": "KDIGO Staging Criteria",
          "content": "**AKI is defined as ANY of:**\n\u2022 Increase in SCr \u22650.3 mg/dL within 48 hours\n\u2022 Increase in SCr \u22651.5x baseline within 7 days\n\u2022 Urine output <0.5 mL/kg/h for 6 hours\n\n**Staging:**\n\u2022 Stage 1: SCr 1.5-1.9x baseline OR \u22650.3 increase OR UOP <0.5 mL/kg/h for 6-12h\n\u2022 Stage 2: SCr 2.0-2.9x baseline OR UOP <0.5 mL/kg/h for \u226512h\n\u2022 Stage 3: SCr \u22653x baseline OR \u22654.0 mg/dL OR initiation of RRT OR UOP <0.3 mL/kg/h for \u226524h"
        },
        {
          "type": "concept",
          "title": "The Three Categories",
          "content": "**PRERENAL (55-60% of cases):**\n\u2022 Decreased renal perfusion\n\u2022 Causes: Hypovolemia, heart failure, sepsis, hepatorenal syndrome, NSAIDs/ACEi/ARBs\n\u2022 Kidney is structurally intact\n\n**INTRINSIC (35-40%):**\n\u2022 Direct kidney parenchymal damage\n\u2022 ATN (ischemic or toxic), AIN, glomerulonephritis, vascular\n\u2022 Most common: ATN from prolonged prerenal state or nephrotoxins\n\n**POSTRENAL (5%):**\n\u2022 Urinary tract obstruction\n\u2022 BPH, kidney stones, tumors, blood clots, neurogenic bladder\n\u2022 Must affect both kidneys (or solitary kidney) to cause AKI"
        },
        {
          "type": "concept",
          "title": "Diagnostic Workup",
          "content": "**Essential studies:**\n\u2022 Urinalysis with microscopy (your 'renal biopsy without the biopsy')\n\u2022 Urine sodium, creatinine (for FENa calculation)\n\u2022 Renal ultrasound (rule out obstruction)\n\u2022 Review medication list for nephrotoxins\n\n**Urine sediment findings:**\n\u2022 Bland sediment \u2192 Prerenal or obstruction\n\u2022 Muddy brown granular casts \u2192 ATN\n\u2022 WBC casts \u2192 Pyelonephritis or AIN\n\u2022 RBC casts \u2192 Glomerulonephritis (GN)\n\u2022 Eosinophiluria \u2192 AIN (but poor sensitivity)"
        },
        {
          "type": "pearl",
          "title": "FENa Interpretation",
          "content": "FENa = (UNa \u00d7 PCr) / (PNa \u00d7 UCr) \u00d7 100\n\n**FENa <1%:** Suggests prerenal (kidneys avidly retaining sodium)\n**FENa >2%:** Suggests intrinsic (tubular damage, can't retain sodium)\n\n**IMPORTANT CAVEAT:** FENa is unreliable with diuretic use! Diuretics increase sodium excretion regardless of volume status. Use FEUrea instead (<35% suggests prerenal)."
        },
        {
          "type": "alert",
          "title": "Don't Forget the Basics",
          "content": "**Always check:**\n1. Bladder scan / Foley output \u2014 Rule out obstruction first!\n2. Volume status \u2014 JVP, orthostatics, skin turgor\n3. Medication reconciliation \u2014 Stop nephrotoxins (NSAIDs, aminoglycosides, contrast)\n4. Trend the creatinine \u2014 Is it rising, stable, or improving?\n\n**Urgent nephrology consult indications:**\n\u2022 Suspected GN (RBC casts, nephrotic-range proteinuria)\n\u2022 Severe AKI (Stage 3) not responding to initial measures\n\u2022 Need for dialysis (refractory hyperkalemia, acidosis, volume overload, uremia)"
        }
      ],
      "article": {
        "title": "AKI: Beyond the Numbers",
        "readTime": "13 min",
        "content": "<h2>The AKI Epidemic</h2>\n<p>AKI is not just a lab abnormality\u2014it's a powerful predictor of outcomes. Even small increases in creatinine (0.3 mg/dL) are associated with increased mortality. AKI survivors have higher rates of CKD, ESRD, cardiovascular events, and death.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> AKI and CKD are interconnected. AKI can cause CKD, and CKD increases the risk of AKI. The 'acute on chronic' pattern is common and particularly dangerous.\n</div>\n\n<h2>The Prerenal State</h2>\n<p>Prerenal azotemia represents the kidney's appropriate response to decreased perfusion. The kidney itself is healthy\u2014it's just not receiving adequate blood flow. Causes include true hypovolemia (hemorrhage, GI losses, poor intake), decreased effective circulating volume (heart failure, cirrhosis), and medications that affect renal hemodynamics (NSAIDs, ACE inhibitors, ARBs).</p>\n\n<p>The hallmark of prerenal AKI is reversibility. If you restore perfusion quickly, the creatinine should improve within 24-48 hours. If prerenal state persists, however, it evolves into ischemic ATN.</p>\n\n<h2>Acute Tubular Necrosis</h2>\n<p>ATN is the most common intrinsic cause of AKI. It occurs when tubular epithelial cells are damaged by ischemia or direct toxicity. The classic histologic finding is muddy brown granular casts\u2014sloughed tubular cells in the urine.</p>\n\n<p><strong>Ischemic ATN:</strong> Results from prolonged prerenal state. The medulla is particularly vulnerable due to its low oxygen tension and high metabolic demand.</p>\n<p><strong>Nephrotoxic ATN:</strong> Caused by aminoglycosides, contrast, cisplatin, myoglobin (rhabdomyolysis), hemoglobin (hemolysis), light chains (myeloma).</p>\n\n<div class=\"article-pearl\">\n<strong>Clinical Pearl:</strong> ATN follows a predictable course: injury phase (rising creatinine), maintenance phase (creatinine plateaus), and recovery phase (creatinine falls as tubules regenerate). Recovery typically takes 1-3 weeks but can be longer.\n</div>\n\n<h2>The Urine Sediment</h2>\n<p>The urine sediment is your window into the kidney. Learn to interpret it:</p>\n<p><strong>Hyaline casts:</strong> Normal finding, especially in concentrated urine</p>\n<p><strong>Granular casts:</strong> Non-specific; 'muddy brown' granular casts suggest ATN</p>\n<p><strong>WBC casts:</strong> Indicate inflammation in the kidney itself (AIN, pyelonephritis)</p>\n<p><strong>RBC casts:</strong> Pathognomonic for glomerulonephritis\u2014these cells were trapped in the tubule while coming from the glomerulus</p>\n<p><strong>Waxy/broad casts:</strong> Suggest CKD (formed in dilated tubules)</p>"
      },
      "podcast": {
        "title": "AKI Workup with Dr. Patel, Nephrologist",
        "duration": "10:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Patel, when you're consulted on AKI, what's your systematic approach?"
          },
          {
            "speaker": "Dr. Patel",
            "text": "I always start with the basics: Is this prerenal, intrinsic, or postrenal? I look at the history, volume status, medication list, and urine studies. Then I decide if anything urgent needs to happen."
          },
          {
            "speaker": "Host",
            "text": "How do you assess volume status?"
          },
          {
            "speaker": "Dr. Patel",
            "text": "It's an art. I look at JVP, mucous membranes, skin turgor, and orthostatic vitals. I review the ins and outs. I look at the BUN-to-creatinine ratio\u2014if it's greater than 20:1, that suggests prerenal. But nothing is perfect; you have to integrate all the data."
          },
          {
            "speaker": "Host",
            "text": "What about FENa? I've heard it's not always reliable."
          },
          {
            "speaker": "Dr. Patel",
            "text": "FENa is helpful when interpreted correctly. Less than 1% suggests prerenal, greater than 2% suggests intrinsic. But\u2014and this is critical\u2014it's useless in patients on diuretics. Diuretics force sodium excretion regardless of volume status. Use FEUrea instead; less than 35% suggests prerenal."
          },
          {
            "speaker": "Host",
            "text": "When do you get worried about intrinsic causes?"
          },
          {
            "speaker": "Dr. Patel",
            "text": "When the urine sediment is active. Muddy brown casts tell me ATN. RBC casts are glomerulonephritis until proven otherwise\u2014that's urgent. WBC casts make me think about AIN or pyelonephritis. A bland sediment with low FENa is reassuring for prerenal."
          },
          {
            "speaker": "Host",
            "text": "Final teaching point?"
          },
          {
            "speaker": "Dr. Patel",
            "text": "Don't forget to look at the patient's baseline creatinine. A creatinine of 2.0 might be AKI in someone who's usually 0.8, or it might be stable CKD in someone who's always 2.0. Context matters enormously."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A 68-year-old man on furosemide develops AKI. Urine sodium is 45 mEq/L and FENa is 3.2%. Which test would better distinguish prerenal from intrinsic AKI?",
        "options": [
          "Repeat FENa in 24 hours",
          "FEUrea",
          "Urine osmolality",
          "Serum BUN/creatinine ratio"
        ],
        "correct": 1,
        "explanation": "FENa is unreliable with diuretic use because diuretics increase sodium excretion regardless of volume status. FEUrea (<35% = prerenal) is not affected by diuretics and is the preferred test in this setting. Urine osmolality and BUN/Cr ratio can be helpful but are also affected by diuretics."
      },
      {
        "question": "Urine microscopy shows muddy brown granular casts. This finding is most consistent with:",
        "options": [
          "Prerenal azotemia",
          "Acute tubular necrosis",
          "Acute interstitial nephritis",
          "Glomerulonephritis"
        ],
        "correct": 1,
        "explanation": "Muddy brown granular casts are pathognomonic for ATN. They represent sloughed, necrotic tubular epithelial cells. Prerenal AKI has bland sediment (maybe hyaline casts). AIN shows WBC casts and eosinophils. GN shows RBC casts."
      },
      {
        "question": "A patient with AKI has RBC casts on urine microscopy. What is the most important next step?",
        "options": [
          "Renal ultrasound",
          "Urgent nephrology consultation",
          "IV fluid bolus",
          "Stop ACE inhibitor"
        ],
        "correct": 1,
        "explanation": "RBC casts indicate glomerulonephritis, which requires urgent evaluation. GN can progress rapidly (RPGN) and may need immunosuppression or plasma exchange. Nephrology should be consulted immediately. While ultrasound and medication review are reasonable, they shouldn't delay nephrology involvement."
      },
      {
        "question": "Which of the following is an indication for urgent dialysis in AKI?",
        "options": [
          "Creatinine >5 mg/dL",
          "BUN >100 mg/dL",
          "Refractory hyperkalemia with ECG changes",
          "Stage 3 AKI by KDIGO criteria"
        ],
        "correct": 2,
        "explanation": "Indications for urgent dialysis (mnemonic: AEIOU) include: Acidosis (severe, refractory), Electrolytes (refractory hyperkalemia), Ingestion (toxic alcohols, lithium), Overload (pulmonary edema refractory to diuretics), and Uremia (encephalopathy, pericarditis). Absolute numbers like creatinine or BUN don't determine need for dialysis\u2014clinical context does."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "KDIGO AKI Guidelines",
        "year": "2012",
        "summary": "Established standardized AKI staging criteria and management recommendations including fluid therapy, diuretics, and RRT timing.",
        "concepts": [
          "aki",
          "staging"
        ]
      },
      {
        "type": "trial",
        "title": "STARRT-AKI",
        "year": "2020",
        "summary": "Accelerated (early) RRT initiation did not reduce 90-day mortality compared to standard strategy in critically ill AKI patients.",
        "concepts": [
          "aki",
          "dialysis"
        ]
      },
      {
        "type": "trial",
        "title": "STOP-ACEi",
        "year": "2022",
        "summary": "Stopping vs continuing ACE inhibitors/ARBs in advanced CKD patients did not improve kidney function. Challenges the practice of routinely stopping these drugs in AKI.",
        "concepts": [
          "aki",
          "medications"
        ]
      }
    ]
  },
  "cellulitis": {
    "id": "cellulitis",
    "name": "Cellulitis",
    "category": "infectious",
    "subcategory": "skin-soft-tissue",
    "knowledge": [
      "Clinical diagnosis criteria",
      "Antibiotic selection",
      "Purulent vs non-purulent distinction",
      "Necrotizing fasciitis red flags"
    ],
    "skills": [
      "Diagnose cellulitis clinically",
      "Choose appropriate antibiotic coverage",
      "Identify high-risk features",
      "Recognize necrotizing infection"
    ],
    "lesson": {
      "title": "Cellulitis: Diagnosis and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Cellulitis is a bacterial infection of the skin and subcutaneous tissue presenting with erythema, warmth, edema, and pain. Diagnosis is clinical\u2014cultures are usually negative. The key management decisions are: purulent (MRSA coverage) vs non-purulent (strep coverage), outpatient vs inpatient, and ruling out necrotizing fasciitis."
        },
        {
          "type": "concept",
          "title": "Clinical Diagnosis",
          "content": "**Classic features:**\n\u2022 Erythema (spreading, poorly demarcated borders)\n\u2022 Warmth\n\u2022 Swelling/edema\n\u2022 Pain/tenderness\n\n**Supporting features:**\n\u2022 Fever, leukocytosis\n\u2022 Portal of entry (wound, toe web infection, ulcer)\n\u2022 Lymphangitis (red streaking)\n\u2022 Regional lymphadenopathy\n\n**Cultures:** Blood cultures positive in <5%. Wound cultures only if purulent drainage. Diagnosis is clinical!"
        },
        {
          "type": "concept",
          "title": "Purulent vs Non-Purulent",
          "content": "**Non-purulent cellulitis (no abscess, no drainage):**\n\u2022 Most common organism: Streptococcus (Group A, B, C, G)\n\u2022 Also: S. aureus (less common without purulence)\n\u2022 Treatment: Beta-lactam (cephalexin, cefazolin, penicillin)\n\n**Purulent cellulitis (abscess, furuncle, carbuncle):**\n\u2022 Most common organism: S. aureus, often MRSA\n\u2022 I&D is primary treatment for abscesses\n\u2022 Antibiotics: Cover MRSA (TMP-SMX, doxycycline, clindamycin)\n\n**Combined purulent + surrounding cellulitis:**\n\u2022 I&D + MRSA coverage + strep coverage (TMP-SMX doesn't cover strep well)"
        },
        {
          "type": "concept",
          "title": "Antibiotic Selection",
          "content": "**Outpatient non-purulent:**\n\u2022 Cephalexin 500mg QID \u00d7 5-7 days\n\u2022 Alternatives: Amoxicillin-clavulanate, dicloxacillin\n\n**Outpatient purulent (after I&D):**\n\u2022 TMP-SMX DS BID + cephalexin (for strep), OR\n\u2022 Doxycycline 100mg BID (covers MRSA and strep)\n\n**Inpatient non-purulent:**\n\u2022 Cefazolin 1-2g IV q8h\n\u2022 Severe: Add vancomycin until culture data\n\n**Inpatient purulent:**\n\u2022 Vancomycin IV (MRSA coverage)\n\u2022 Add beta-lactam if extensive cellulitis"
        },
        {
          "type": "pearl",
          "title": "The Pseudocellulitis Trap",
          "content": "Many conditions mimic cellulitis:\n\u2022 Venous stasis dermatitis (bilateral, chronic, brown discoloration)\n\u2022 Contact dermatitis (pruritic, eczematous)\n\u2022 DVT (usually not as red, more swelling)\n\u2022 Gout (periarticular)\n\u2022 Necrotizing fasciitis (disproportionate pain, rapid spread)\n\nBilateral 'cellulitis' is almost never infectious\u2014think stasis dermatitis. Mark the borders with a pen to track progression."
        },
        {
          "type": "alert",
          "title": "Necrotizing Fasciitis Red Flags",
          "content": "**Suspect necrotizing fasciitis if:**\n\u2022 Pain out of proportion to exam findings\n\u2022 Rapidly spreading despite antibiotics\n\u2022 Crepitus on palpation\n\u2022 Skin necrosis, bullae, ecchymosis\n\u2022 Systemic toxicity (high fever, hypotension, tachycardia)\n\u2022 Failure to respond to 24-48h of appropriate antibiotics\n\n**Action:**\n\u2022 Emergent surgical consultation\n\u2022 Broad-spectrum antibiotics (vanc + pip-tazo OR vanc + clinda + aminoglycoside)\n\u2022 Imaging should NOT delay surgery if high suspicion\n\u2022 Definitive diagnosis is in the OR"
        }
      ],
      "article": {
        "title": "Cellulitis: Evidence-Based Approach",
        "readTime": "12 min",
        "content": "<h2>The MRSA Question</h2>\n<p>MRSA coverage for all cellulitis became popular during the community-acquired MRSA epidemic. However, non-purulent cellulitis is predominantly streptococcal. Routine MRSA coverage for simple non-purulent cellulitis isn't necessary unless there's purulence, abscess, prior MRSA infection, or failure of beta-lactam therapy.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> The presence or absence of purulence is the key determinant of antibiotic choice. Purulent infection = think MRSA, add coverage. Non-purulent = think strep, beta-lactams suffice. This simple distinction guides empiric therapy.\n</div>\n\n<h2>Duration of Therapy</h2>\n<p>Five days is often sufficient for uncomplicated cellulitis. Extend to 7-14 days if slow response. Don't continue antibiotics waiting for erythema to resolve completely\u2014induration and discoloration can persist for weeks. Clinical improvement (less pain, decreasing erythema, afebrile) is the goal.</p>\n\n<h2>Outpatient vs Inpatient</h2>\n<p>Most cellulitis can be treated as outpatient. Consider admission for: systemic toxicity (fever, tachycardia), rapidly progressing infection, immunocompromised host, failed outpatient therapy, significant comorbidities, facial cellulitis (risk of cavernous sinus thrombosis), or inability to take oral medications.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Marking the border of erythema with a pen helps track progression. If the infection extends beyond the marks despite 24-48 hours of appropriate antibiotics, consider resistant organism, abscess formation, or necrotizing infection.\n</div>\n\n<h2>Recurrent Cellulitis</h2>\n<p>Some patients develop recurrent cellulitis in the same location, often the lower extremity with lymphedema. Risk factors include obesity, venous insufficiency, previous cellulitis, and tinea pedis. Treating toe web fungal infection reduces recurrence. For frequent recurrences (\u22653-4/year), consider suppressive antibiotics: penicillin V 250mg BID or penicillin G benzathine IM monthly.</p>"
      },
      "podcast": {
        "title": "Cellulitis Pearls with Dr. ID",
        "duration": "10:00",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. ID, how do you diagnose cellulitis?"
          },
          {
            "speaker": "Dr. ID",
            "text": "It's clinical\u2014erythema, warmth, swelling, tenderness. I look for a portal of entry: a wound, toe web infection, insect bite. Blood cultures are positive less than 5% of the time, so I don't routinely get them. I do look for abscess because that changes management."
          },
          {
            "speaker": "Host",
            "text": "How do you decide on antibiotics?"
          },
          {
            "speaker": "Dr. ID",
            "text": "Is there purulence? If yes, it's probably staph, often MRSA\u2014I cover with TMP-SMX or doxycycline after I&D. If no purulence, it's usually strep\u2014cephalexin or cefazolin work well. The simple question of 'is there pus?' guides my empiric therapy."
          },
          {
            "speaker": "Host",
            "text": "What about the patient with red, swollen legs who gets diagnosed with bilateral cellulitis?"
          },
          {
            "speaker": "Dr. ID",
            "text": "That's almost never bilateral cellulitis. Bilateral lower extremity redness is usually venous stasis dermatitis. True bacterial cellulitis is unilateral in the vast majority of cases. If both legs are red, I think about stasis, contact dermatitis, or systemic causes."
          },
          {
            "speaker": "Host",
            "text": "When do you worry about necrotizing fasciitis?"
          },
          {
            "speaker": "Dr. ID",
            "text": "Pain out of proportion to exam is the classic warning. If someone is writhing in pain but the skin looks only mildly red, that's concerning. Also rapid spread, skin changes like bullae or necrosis, crepitus, and systemic toxicity. I call surgery early\u2014they need to see these patients."
          },
          {
            "speaker": "Host",
            "text": "How long do you treat?"
          },
          {
            "speaker": "Dr. ID",
            "text": "Five days is usually enough for uncomplicated cellulitis. I tell patients the redness might take weeks to fully resolve\u2014I'm looking for improvement, not complete resolution. If they're not getting better by 48-72 hours, I reassess for resistant organism, abscess, or wrong diagnosis."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A patient has unilateral lower extremity erythema, warmth, and swelling without abscess or drainage. What is the most appropriate antibiotic?",
        "options": [
          "TMP-SMX alone",
          "Vancomycin IV",
          "Cephalexin",
          "Ciprofloxacin"
        ],
        "correct": 2,
        "explanation": "Non-purulent cellulitis is predominantly streptococcal. Cephalexin (or other beta-lactams) is first-line. TMP-SMX covers MRSA but has poor strep coverage. Vancomycin is unnecessarily broad for uncomplicated outpatient cellulitis. Ciprofloxacin doesn't adequately cover gram-positives."
      },
      {
        "question": "A patient with purulent cellulitis around a draining abscess is treated with incision and drainage. What antibiotic is most appropriate?",
        "options": [
          "Amoxicillin",
          "Cephalexin alone",
          "TMP-SMX plus cephalexin",
          "Ciprofloxacin"
        ],
        "correct": 2,
        "explanation": "Purulent infection suggests MRSA. TMP-SMX covers MRSA but has poor strep coverage. With surrounding cellulitis, add cephalexin for strep. Alternatively, doxycycline alone covers both. Amoxicillin and cephalexin alone don't cover MRSA. I&D is the primary treatment; antibiotics are adjunctive."
      },
      {
        "question": "Which finding is most concerning for necrotizing fasciitis?",
        "options": [
          "Temperature 100.5\u00b0F",
          "Pain out of proportion to physical exam findings",
          "Mild leukocytosis",
          "Regional lymphadenopathy"
        ],
        "correct": 1,
        "explanation": "Pain out of proportion to exam is the classic early sign of necrotizing fasciitis. The skin may appear only mildly affected while deep tissue destruction is occurring. Low-grade fever, mild leukocytosis, and lymphadenopathy are common in simple cellulitis and aren't specific red flags."
      },
      {
        "question": "A 60-year-old presents with bilateral lower extremity redness, swelling, and brown discoloration. The most likely diagnosis is:",
        "options": [
          "Bilateral cellulitis",
          "Deep vein thrombosis",
          "Venous stasis dermatitis",
          "Necrotizing fasciitis"
        ],
        "correct": 2,
        "explanation": "Bilateral 'cellulitis' is almost never true cellulitis. Bilateral lower extremity redness with chronic changes (brown discoloration = hemosiderin deposition) is classic for venous stasis dermatitis. True bacterial cellulitis is unilateral in the vast majority of cases. DVT is usually unilateral. Necrotizing fasciitis is extremely rare bilaterally."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "IDSA Skin and Soft Tissue Guidelines",
        "year": "2014",
        "summary": "Evidence-based guidelines on diagnosis and management of skin and soft tissue infections including cellulitis, abscess, and necrotizing infections.",
        "concepts": [
          "cellulitis",
          "antibiotics"
        ]
      },
      {
        "type": "trial",
        "title": "Cephalexin vs TMP-SMX for Cellulitis",
        "year": "2017",
        "summary": "Adding TMP-SMX to cephalexin did not improve outcomes in uncomplicated non-purulent cellulitis, supporting beta-lactam monotherapy.",
        "concepts": [
          "cellulitis",
          "mrsa"
        ]
      },
      {
        "type": "trial",
        "title": "5 vs 10 Day Cellulitis Treatment",
        "year": "2019",
        "summary": "Five days of antibiotics non-inferior to 10 days for uncomplicated cellulitis, supporting shorter treatment courses.",
        "concepts": [
          "cellulitis",
          "duration"
        ]
      }
    ]
  },
  "cardiogenic-shock": {
    "id": "cardiogenic-shock",
    "name": "Cardiogenic Shock",
    "category": "cardiovascular",
    "subcategory": "heart-failure",
    "knowledge": [
      "Hemodynamic definition",
      "Etiology identification",
      "Inotrope and vasopressor selection",
      "Mechanical circulatory support"
    ],
    "skills": [
      "Recognize cardiogenic shock",
      "Assess hemodynamics",
      "Initiate inotropic support",
      "Identify need for escalation"
    ],
    "lesson": {
      "title": "Cardiogenic Shock: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Cardiogenic shock is circulatory failure due to primary cardiac dysfunction, causing inadequate tissue perfusion. It complicates 5-10% of acute MI and carries mortality of 40-50%. Hemodynamics show low cardiac output with elevated filling pressures. Treatment involves inotropes, vasopressors, revascularization, and consideration of mechanical circulatory support (IABP, Impella, ECMO)."
        },
        {
          "type": "concept",
          "title": "Hemodynamic Definition",
          "content": "**Classic criteria:**\n\u2022 SBP <90 mmHg for \u226530 min OR vasopressors needed to maintain SBP \u226590\n\u2022 Cardiac index <2.2 L/min/m\u00b2 (or clinical signs of hypoperfusion)\n\u2022 Pulmonary capillary wedge pressure (PCWP) >15 mmHg\n\n**Clinical signs of hypoperfusion:**\n\u2022 Altered mental status\n\u2022 Cold, clammy extremities\n\u2022 Oliguria (<30 mL/hour)\n\u2022 Elevated lactate\n\u2022 Mottled skin"
        },
        {
          "type": "concept",
          "title": "Common Causes",
          "content": "**Acute MI (most common, ~80%):**\n\u2022 Large anterior MI\n\u2022 Mechanical complications: VSD, free wall rupture, acute MR\n\u2022 Right ventricular infarction\n\n**Non-ischemic causes:**\n\u2022 Acute decompensated heart failure\n\u2022 Myocarditis\n\u2022 Takotsubo cardiomyopathy\n\u2022 Acute valvular emergency (endocarditis, papillary muscle rupture)\n\u2022 End-stage cardiomyopathy\n\u2022 Arrhythmia-induced\n\n**Identify the cause\u2014treatment differs:**\n\u2022 MI \u2192 Revascularization\n\u2022 Mechanical complication \u2192 Surgery\n\u2022 Arrhythmia \u2192 Cardioversion/pacing"
        },
        {
          "type": "concept",
          "title": "Medical Management",
          "content": "**Vasopressors:**\n\u2022 Norepinephrine first-line (if hypotensive)\n\u2022 Maintains perfusion pressure without excessive tachycardia\n\n**Inotropes:**\n\u2022 Dobutamine (beta-1 agonist): Increases contractility, reduces afterload\n\u2022 May cause hypotension (vasodilation) and tachycardia\n\u2022 Milrinone: PDE inhibitor, similar effects but longer half-life\n\n**Combination:**\n\u2022 Norepinephrine + dobutamine common\n\u2022 Balance: Support BP while augmenting cardiac output\n\n**Avoid:**\n\u2022 Excessive volume (already high filling pressures)\n\u2022 Pure vasoconstrictors increase afterload"
        },
        {
          "type": "pearl",
          "title": "The Right Ventricle Matters",
          "content": "RV infarction (inferior MI with RV involvement) causes cardiogenic shock with a different hemodynamic picture: low cardiac output but LOW filling pressures (PCWP normal or low). These patients are preload-dependent\u2014fluids may help! Avoid nitrates and diuretics. The diagnosis: ST elevation in V1, right-sided leads (V4R), and JVD with clear lungs. Echo confirms RV dysfunction."
        },
        {
          "type": "alert",
          "title": "Mechanical Circulatory Support",
          "content": "**Intra-aortic balloon pump (IABP):**\n\u2022 Inflates in diastole (augments coronary perfusion)\n\u2022 Deflates in systole (reduces afterload)\n\u2022 Easiest to place, modest hemodynamic support\n\u2022 IABP-SHOCK II showed no mortality benefit but still used as bridge\n\n**Impella:**\n\u2022 Percutaneous axial flow pump (LV to aorta)\n\u2022 Greater hemodynamic support than IABP\n\u2022 Requires larger access, more complications\n\n**VA-ECMO:**\n\u2022 Full circulatory support\n\u2022 For refractory shock, cardiac arrest\n\u2022 Bridge to recovery, decision, or transplant\n\n**Key:** Early involvement of shock team, cardiology, cardiac surgery."
        }
      ],
      "article": {
        "title": "Cardiogenic Shock: A Systematic Approach",
        "readTime": "14 min",
        "content": "<h2>SCAI Shock Classification</h2>\n<p>The Society for Cardiovascular Angiography and Interventions (SCAI) shock classification stratifies patients: Stage A (at risk), B (beginning shock), C (classic shock), D (deteriorating), E (extremis). This helps standardize communication and escalation decisions. Stage C is the classic definition; D/E represent worsening despite initial therapy.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Cardiogenic shock is a spiral: Low output \u2192 Hypotension \u2192 Poor coronary perfusion \u2192 Worsening ischemia \u2192 Lower output. Early intervention (revascularization, MCS) aims to interrupt this cycle before multi-organ failure develops.\n</div>\n\n<h2>Invasive Hemodynamics</h2>\n<p>A pulmonary artery catheter (Swan-Ganz) can help differentiate shock types and guide therapy. Cardiogenic shock: High PCWP (>15-18), low CI (<2.2), high SVR. RV infarction: Low RA, low PCWP, low CI. Mixed shock: Features of both cardiogenic and distributive. The PAC is making a comeback in shock management for its ability to guide therapy.</p>\n\n<h2>The SHOCK Trial Legacy</h2>\n<p>The SHOCK trial (1999) established early revascularization as the standard of care for MI-related cardiogenic shock. Despite no difference in 30-day mortality, 6-month and long-term survival were significantly better with early revascularization. This remains the most important intervention\u2014get the patient to the cath lab.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Lactate clearance predicts survival. Initial lactate >4 mmol/L is associated with 50% mortality. Patients who clear lactate by 50% at 12 hours have much better outcomes. Serial lactate guides therapy intensity and may prompt escalation to MCS.\n</div>\n\n<h2>Team-Based Care</h2>\n<p>Cardiogenic shock requires a multidisciplinary 'shock team': cardiology, cardiac surgery, critical care. Early discussion of MCS options, escalation plans, and goals of care is essential. Some patients may not be candidates for advanced therapies\u2014identify these conversations early.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with anterior STEMI develops cardiogenic shock. What is the most important initial intervention?",
        "options": [
          "Start dobutamine infusion",
          "Place intra-aortic balloon pump",
          "Emergent revascularization (PCI)",
          "Optimize IV fluids"
        ],
        "correct": 2,
        "explanation": "The SHOCK trial established early revascularization as the most important intervention for MI-related cardiogenic shock. While inotropes and MCS provide hemodynamic support, restoring coronary flow addresses the underlying cause and improves survival."
      },
      {
        "question": "Which hemodynamic profile suggests RV infarction as the cause of cardiogenic shock?",
        "options": [
          "High PCWP, low CI, high SVR",
          "Low RA pressure, normal PCWP, low CI",
          "High PCWP, high CI, low SVR",
          "Normal pressures throughout"
        ],
        "correct": 1,
        "explanation": "RV infarction causes isolated right heart failure: Low or normal right atrial pressure, low PCWP (because blood can't get through the failed RV to fill the LV), and low cardiac index. These patients may respond to careful fluid loading\u2014unlike LV-predominant cardiogenic shock."
      },
      {
        "question": "A patient in cardiogenic shock on maximum dobutamine and norepinephrine continues to deteriorate. What is the next step?",
        "options": [
          "Add dopamine",
          "Increase IV fluids",
          "Mechanical circulatory support (MCS)",
          "Switch to phenylephrine"
        ],
        "correct": 2,
        "explanation": "When patients fail maximal medical therapy, mechanical circulatory support (IABP, Impella, ECMO) should be considered. MCS provides hemodynamic support beyond what medications can achieve and can serve as a bridge to recovery, decision, or definitive therapy."
      },
      {
        "question": "Which inotrope increases cardiac contractility but may cause hypotension due to vasodilation?",
        "options": [
          "Norepinephrine",
          "Dobutamine",
          "Phenylephrine",
          "Vasopressin"
        ],
        "correct": 1,
        "explanation": "Dobutamine is a beta-1 agonist that increases contractility (inotropy) but also has beta-2 effects causing vasodilation. This can lower blood pressure in hypotensive patients, which is why it's often combined with norepinephrine in cardiogenic shock."
      }
    ],
    "literature": [
      {
        "type": "trial",
        "title": "SHOCK Trial",
        "year": "1999",
        "summary": "Early revascularization improved 6-month and long-term survival in MI-related cardiogenic shock, establishing it as standard of care.",
        "concepts": [
          "cardiogenic-shock",
          "revascularization"
        ]
      },
      {
        "type": "trial",
        "title": "IABP-SHOCK II",
        "year": "2012",
        "summary": "IABP did not reduce 30-day mortality in MI-related cardiogenic shock compared to medical therapy alone.",
        "concepts": [
          "cardiogenic-shock",
          "mcs"
        ]
      },
      {
        "type": "guideline",
        "title": "SCAI Shock Classification",
        "year": "2019",
        "summary": "Standardized classification system (A-E) for cardiogenic shock severity to facilitate communication and research.",
        "concepts": [
          "cardiogenic-shock",
          "classification"
        ]
      }
    ]
  },
  "syncope": {
    "id": "syncope",
    "name": "Syncope",
    "category": "cardiovascular",
    "subcategory": "arrhythmia",
    "knowledge": [
      "High-risk vs low-risk features",
      "Vasovagal syncope diagnosis",
      "Cardiac syncope red flags",
      "Risk stratification tools"
    ],
    "skills": [
      "Take focused syncope history",
      "Identify high-risk patients",
      "Risk stratify for disposition",
      "Order appropriate workup"
    ],
    "lesson": {
      "title": "Syncope: Evaluation and Risk Stratification",
      "sections": [
        {
          "type": "intro",
          "content": "Syncope is transient loss of consciousness due to cerebral hypoperfusion with spontaneous complete recovery. It accounts for 3% of ED visits. Most syncope is benign (vasovagal), but cardiac syncope carries significant mortality risk. The key is distinguishing low-risk patients who can be discharged from high-risk patients requiring admission and further evaluation."
        },
        {
          "type": "concept",
          "title": "Classification",
          "content": "**Reflex (neurally mediated) - 60%:**\n\u2022 Vasovagal (most common)\n\u2022 Situational (cough, micturition, defecation)\n\u2022 Carotid sinus hypersensitivity\n\n**Orthostatic hypotension - 15%:**\n\u2022 Volume depletion\n\u2022 Autonomic dysfunction\n\u2022 Medication-induced\n\n**Cardiac - 15%:**\n\u2022 Arrhythmia (VT, bradycardia, SVT)\n\u2022 Structural (aortic stenosis, HCM, HOCM)\n\u2022 Pulmonary embolism\n\n**Unknown - 10%:**\n\u2022 Despite workup, cause not identified"
        },
        {
          "type": "concept",
          "title": "High-Risk Features",
          "content": "**History:**\n\u2022 Exertional syncope\n\u2022 Syncope while supine\n\u2022 No prodrome (sudden onset)\n\u2022 Family history of sudden death\n\u2022 Known heart disease\n\u2022 Palpitations before syncope\n\n**Physical exam:**\n\u2022 Abnormal cardiac exam (murmur, S3)\n\u2022 Hypotension\n\u2022 Bradycardia or irregular rhythm\n\n**ECG findings:**\n\u2022 Any arrhythmia or conduction disease\n\u2022 Prolonged QT, Brugada pattern\n\u2022 Signs of ischemia\n\u2022 Epsilon waves (ARVC)"
        },
        {
          "type": "concept",
          "title": "Risk Stratification",
          "content": "**San Francisco Syncope Rule (requires admission if any present):**\n\u2022 Congestive heart failure history\n\u2022 Hematocrit <30%\n\u2022 Abnormal ECG\n\u2022 Shortness of breath\n\u2022 Systolic BP <90 mmHg\n\n**Canadian Syncope Risk Score:**\n\u2022 Predisposition to vasovagal (-1)\n\u2022 Heart disease or abnormal ECG (+1 each)\n\u2022 Elevated troponin (+2)\n\u2022 SBP <90 or >180 (+2)\n\u2022 ED diagnosis of cardiac syncope (+2)\n\n**Low risk = likely vasovagal, normal ECG, no concerning features**"
        },
        {
          "type": "pearl",
          "title": "The Vasovagal Story",
          "content": "Classic vasovagal syncope has a characteristic history: triggering event (prolonged standing, heat, emotional stress), prodrome (lightheadedness, warmth, nausea, tunnel vision), brief LOC with rapid recovery, and no confusion afterward. Witnesses may report pallor, diaphoresis, and brief tonic-clonic movements (convulsive syncope\u2014NOT epilepsy). This history is highly reliable and often more valuable than testing."
        },
        {
          "type": "alert",
          "title": "Don't Miss Cardiac Syncope",
          "content": "**Cardiac syncope warning signs:**\n\u2022 Exertional syncope (aortic stenosis, HCM, arrhythmia)\n\u2022 Syncope while supine or sitting\n\u2022 No prodrome (sudden 'lights out')\n\u2022 Preceding palpitations\n\u2022 Family history of sudden death <50 years\n\u2022 Known structural heart disease\n\n**These patients need:**\n\u2022 Continuous monitoring\n\u2022 Echocardiography\n\u2022 Consider EP study or implantable loop recorder\n\u2022 Cardiology consultation\n\n**Exertional syncope in a young athlete = cardiac workup before clearing for sports**"
        }
      ],
      "article": {
        "title": "Syncope: A Practical Approach",
        "readTime": "12 min",
        "content": "<h2>History Is Everything</h2>\n<p>The history provides the diagnosis in 50-85% of syncope cases. Ask about: What were you doing? Any warning symptoms? What do witnesses describe? How did you feel immediately after? Duration of LOC? Tongue biting or incontinence? Medications? Family history of sudden death? A detailed history is more valuable than most tests.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> Syncope is sudden and recovery is complete. If there's prolonged confusion, postictal state, or incomplete recovery, consider seizure, stroke, or metabolic cause. True syncope from cerebral hypoperfusion resolves within seconds to a minute of becoming supine.\n</div>\n\n<h2>ECG: The Essential Test</h2>\n<p>Every syncope patient needs an ECG. Look for: arrhythmias, heart block, prolonged QT (>450ms), short PR with delta wave (WPW), Brugada pattern, epsilon waves (ARVC), signs of ischemia, or evidence of cardiomyopathy (LVH, Q waves). A normal ECG significantly reduces the probability of cardiac syncope.</p>\n\n<h2>Who Needs Admission?</h2>\n<p>Admit patients with: known or suspected heart disease, abnormal ECG, exertional or supine syncope, syncope causing injury, concerning family history, or high-risk features on validated scoring tools. Low-risk patients (typical vasovagal story, normal ECG, no heart disease) can be safely discharged with outpatient follow-up.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Convulsive syncope mimics seizure: brief tonic or myoclonic movements can occur with any syncope due to cerebral hypoxia. Key differences from epilepsy: very brief (<15 sec), no postictal confusion, pallor rather than cyanosis, and occurs after LOC (not before). Don't reflexively consult neurology for every syncope with movements.\n</div>\n\n<h2>Diagnostic Testing</h2>\n<p>Routine labs rarely help unless specific concern (anemia, electrolytes). CT head is overused\u2014only indicated with head trauma or focal neurologic findings. Carotid Doppler doesn't cause syncope. Echocardiography for suspected structural disease. Prolonged monitoring (Holter, event monitor, implantable loop recorder) for recurrent unexplained syncope. Tilt table testing has fallen out of favor due to poor specificity.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A 25-year-old has syncope while standing in line on a hot day after prodrome of nausea and lightheadedness. ECG is normal. What is the most likely diagnosis?",
        "options": [
          "Cardiac arrhythmia",
          "Seizure",
          "Vasovagal syncope",
          "Pulmonary embolism"
        ],
        "correct": 2,
        "explanation": "This is a classic vasovagal syncope presentation: environmental trigger (heat, prolonged standing), autonomic prodrome (nausea, lightheadedness), young patient, and normal ECG. The characteristic history is diagnostic and no further workup is needed."
      },
      {
        "question": "Which feature is most concerning for cardiac syncope?",
        "options": [
          "Syncope while standing in a hot room",
          "Syncope during exercise",
          "Brief nausea before syncope",
          "Syncope after seeing blood"
        ],
        "correct": 1,
        "explanation": "Exertional syncope is a red flag for cardiac disease (aortic stenosis, HCM, arrhythmia). The others describe typical vasovagal triggers (heat/standing, emotional stimulus) or prodrome (nausea). Exertional syncope requires cardiac workup before any athletic activity."
      },
      {
        "question": "A syncope patient has a family history of sudden death at age 35 and a long QT interval on ECG. What is the most appropriate next step?",
        "options": [
          "Discharge with neurology follow-up",
          "Tilt table testing",
          "Admission for cardiac monitoring and cardiology consultation",
          "CT head"
        ],
        "correct": 2,
        "explanation": "Long QT syndrome causes life-threatening arrhythmias and sudden death. Combined with family history of young sudden death, this is high-risk cardiac syncope. The patient needs admission, monitoring, and cardiology evaluation for possible ICD placement."
      },
      {
        "question": "Which test should be performed in ALL patients presenting with syncope?",
        "options": [
          "CT head",
          "Echocardiography",
          "Electrocardiogram",
          "Tilt table test"
        ],
        "correct": 2,
        "explanation": "ECG is the essential test for all syncope patients. It can identify arrhythmias, conduction abnormalities, channelopathies (long QT, Brugada), and signs of structural heart disease. A normal ECG significantly reduces the probability of cardiac syncope."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ACC/AHA Syncope Guidelines",
        "year": "2017",
        "summary": "Comprehensive guidelines on evaluation and management of syncope, emphasizing history, ECG, and risk stratification.",
        "concepts": [
          "syncope",
          "risk-stratification"
        ]
      },
      {
        "type": "trial",
        "title": "San Francisco Syncope Rule Validation",
        "year": "2004",
        "summary": "Clinical decision rule to identify syncope patients at risk for serious outcomes within 7 days.",
        "concepts": [
          "syncope",
          "risk-stratification"
        ]
      },
      {
        "type": "trial",
        "title": "Canadian Syncope Risk Score",
        "year": "2016",
        "summary": "Validated risk score predicting 30-day serious outcomes in ED syncope patients.",
        "concepts": [
          "syncope",
          "risk-stratification"
        ]
      }
    ]
  },
  "hyperthyroid": {
    "id": "hyperthyroid",
    "name": "Hyperthyroidism",
    "category": "endocrine",
    "subcategory": "thyroid",
    "knowledge": [
      "Graves' vs toxic nodule differentiation",
      "Antithyroid drug options",
      "Thyroid storm recognition",
      "Beta-blocker role"
    ],
    "skills": [
      "Diagnose hyperthyroidism",
      "Choose treatment modality",
      "Manage thyroid storm",
      "Monitor antithyroid therapy"
    ],
    "lesson": {
      "title": "Hyperthyroidism: Diagnosis and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Hyperthyroidism is excess thyroid hormone production causing hypermetabolic symptoms. Graves' disease (autoimmune) is most common, followed by toxic multinodular goiter and toxic adenoma. Treatment options include antithyroid drugs, radioactive iodine, and surgery. Thyroid storm is a rare but life-threatening complication."
        },
        {
          "type": "concept",
          "title": "Clinical Features",
          "content": "**Symptoms:**\n\u2022 Heat intolerance, sweating\n\u2022 Weight loss despite increased appetite\n\u2022 Palpitations, tremor\n\u2022 Anxiety, irritability, insomnia\n\u2022 Frequent bowel movements\n\u2022 Oligomenorrhea\n\n**Signs:**\n\u2022 Tachycardia, atrial fibrillation\n\u2022 Fine tremor, hyperreflexia\n\u2022 Lid lag, stare\n\u2022 Warm, moist skin\n\u2022 Goiter (diffuse in Graves', nodular in toxic nodule)\n\n**Graves'-specific:**\n\u2022 Orbitopathy (proptosis, periorbital edema)\n\u2022 Pretibial myxedema\n\u2022 Thyroid acropachy"
        },
        {
          "type": "concept",
          "title": "Diagnostic Workup",
          "content": "**Labs:**\n\u2022 TSH: Suppressed (<0.1)\n\u2022 Free T4: Elevated\n\u2022 T3: Elevated (sometimes only T3 is elevated = T3 toxicosis)\n\n**Determining etiology:**\n\u2022 TSH receptor antibodies (TRAb): Positive in Graves'\n\u2022 Radioactive iodine uptake (RAIU):\n  - HIGH, diffuse: Graves'\n  - HIGH, focal: Toxic adenoma\n  - HIGH, patchy: Toxic multinodular goiter\n  - LOW: Thyroiditis (destruction releasing hormone)"
        },
        {
          "type": "concept",
          "title": "Treatment Options",
          "content": "**Antithyroid drugs (methimazole preferred):**\n\u2022 Methimazole 10-30mg daily\n\u2022 PTU (propylthiouracil) reserved for first trimester pregnancy or thyroid storm\n\u2022 Risk: Agranulocytosis (rare but serious)\n\n**Radioactive iodine (RAI):**\n\u2022 Definitive treatment, causes hypothyroidism\n\u2022 Contraindicated in pregnancy\n\u2022 May worsen Graves' orbitopathy temporarily\n\n**Surgery (thyroidectomy):**\n\u2022 Large goiter with compressive symptoms\n\u2022 Suspicion of malignancy\n\u2022 Patient preference\n\n**Beta-blockers:**\n\u2022 Symptomatic control (propranolol, atenolol)\n\u2022 Use in all patients while awaiting definitive therapy"
        },
        {
          "type": "pearl",
          "title": "The Methimazole vs PTU Debate",
          "content": "Methimazole is first-line for most patients: once-daily dosing, less hepatotoxicity, more effective. PTU is reserved for: first trimester pregnancy (methimazole is teratogenic), thyroid storm (PTU also blocks T4\u2192T3 conversion), and methimazole allergy. Monitor for agranulocytosis\u2014warn patients to report fever, sore throat."
        },
        {
          "type": "alert",
          "title": "Thyroid Storm",
          "content": "**Life-threatening thyrotoxicosis:**\n\u2022 Fever >104\u00b0F (40\u00b0C)\n\u2022 Tachycardia (often >140), arrhythmias\n\u2022 Altered mental status, agitation, delirium\n\u2022 GI symptoms (N/V, diarrhea, jaundice)\n\u2022 Precipitants: Infection, surgery, trauma, iodine load\n\n**Treatment (multi-pronged):**\n1. PTU 500-1000mg load, then 250mg q4h (blocks synthesis + conversion)\n2. Beta-blocker: Propranolol 60-80mg PO q4h or esmolol IV\n3. Iodine (AFTER PTU by 1h): SSKI or Lugol's to block hormone release\n4. Hydrocortisone 100mg IV q8h (blocks T4\u2192T3, treats relative adrenal insufficiency)\n5. Supportive: Cooling, fluids, treat precipitant"
        }
      ],
      "article": {
        "title": "Hyperthyroidism: Choosing the Right Treatment",
        "readTime": "12 min",
        "content": "<h2>Graves' Disease Pathophysiology</h2>\n<p>Graves' disease is caused by thyroid-stimulating immunoglobulins (TSI)\u2014autoantibodies that bind and activate the TSH receptor. This causes autonomous thyroid hormone production regardless of TSH levels. The same antibodies cause orbitopathy by cross-reacting with orbital tissue.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> RAIU distinguishes hyperthyroidism caused by hormone overproduction (high uptake) from thyroiditis causing hormone release (low uptake). This changes management entirely\u2014thyroiditis is self-limited and doesn't require antithyroid drugs.\n</div>\n\n<h2>Treatment Selection</h2>\n<p><strong>Antithyroid drugs:</strong> Good for mild disease, patients wanting to avoid radiation, young patients hoping for remission (30-40% achieve remission after 12-18 months). Lifelong monitoring needed even after remission.</p>\n<p><strong>Radioactive iodine:</strong> Simple, effective, definitive. Results in hypothyroidism requiring lifelong levothyroxine (most patients prefer this to ongoing hyperthyroidism). Avoid in active Graves' orbitopathy\u2014can worsen it temporarily.</p>\n<p><strong>Surgery:</strong> Large goiters, suspicious nodules, coexisting hyperparathyroidism, patient preference. Risks include hypoparathyroidism and recurrent laryngeal nerve injury.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> Atrial fibrillation occurs in 10-25% of hyperthyroid patients. Rate control is difficult until thyroid levels normalize. Anticoagulation decisions should follow standard CHA2DS2-VASc criteria. Many patients convert to sinus rhythm once euthyroid.\n</div>\n\n<h2>Subclinical Hyperthyroidism</h2>\n<p>Low TSH with normal T4/T3 is subclinical hyperthyroidism. Treat if: TSH <0.1 (overt risk), age >65 (AF risk), cardiac disease, or osteoporosis. For TSH 0.1-0.4, observe with serial monitoring unless symptoms or risk factors present.</p>"
      }
    },
    "quizzes": [
      {
        "question": "A patient with hyperthyroidism has diffusely elevated radioactive iodine uptake. What is the most likely diagnosis?",
        "options": [
          "Toxic adenoma",
          "Graves' disease",
          "Subacute thyroiditis",
          "Factitious hyperthyroidism"
        ],
        "correct": 1,
        "explanation": "High, diffuse RAIU indicates Graves' disease\u2014the entire gland is overproducing hormone. Toxic adenoma has focal uptake. Subacute thyroiditis has LOW uptake (hormone is released from damaged thyroid, not overproduced). Factitious hyperthyroidism also has low uptake."
      },
      {
        "question": "Which antithyroid drug is preferred in the first trimester of pregnancy?",
        "options": [
          "Methimazole",
          "Propylthiouracil (PTU)",
          "Radioactive iodine",
          "Carbimazole"
        ],
        "correct": 1,
        "explanation": "PTU is preferred in the first trimester because methimazole is associated with teratogenic effects (aplasia cutis, choanal atresia). After the first trimester, switch to methimazole due to PTU's hepatotoxicity risk. Radioactive iodine is absolutely contraindicated in pregnancy."
      },
      {
        "question": "A patient with Graves' disease presents with fever of 104\u00b0F, HR 160, and confusion. What medication should be given FIRST?",
        "options": [
          "Radioactive iodine",
          "Propylthiouracil (PTU)",
          "Lugol's iodine",
          "Levothyroxine"
        ],
        "correct": 1,
        "explanation": "This is thyroid storm. PTU should be given FIRST because it blocks both hormone synthesis AND T4\u2192T3 conversion. Iodine (Lugol's) blocks hormone release but should be given AFTER PTU (by 1 hour) to avoid providing substrate for new hormone synthesis. Never give radioactive iodine or levothyroxine in thyroid storm."
      },
      {
        "question": "What is the main risk of antithyroid drugs that patients should be warned about?",
        "options": [
          "Weight gain",
          "Agranulocytosis",
          "Hypothyroidism",
          "Arrhythmia"
        ],
        "correct": 1,
        "explanation": "Agranulocytosis (severe neutropenia) is a rare but serious complication of antithyroid drugs (both methimazole and PTU). Patients should be warned to report fever, sore throat, or mouth ulcers immediately. This typically occurs in the first 3 months of therapy."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "ATA Hyperthyroidism Guidelines",
        "year": "2016",
        "summary": "Comprehensive guidelines on diagnosis and management of hyperthyroidism, including Graves' disease and toxic nodular disease.",
        "concepts": [
          "hyperthyroidism",
          "graves"
        ]
      },
      {
        "type": "guideline",
        "title": "Thyroid Storm Management",
        "year": "2016",
        "summary": "Guidelines on recognition and treatment of thyroid storm, emphasizing multi-drug approach and supportive care.",
        "concepts": [
          "thyroid-storm",
          "emergency"
        ]
      },
      {
        "type": "trial",
        "title": "ATD vs RAI for Graves'",
        "year": "2018",
        "summary": "Comparative effectiveness of antithyroid drugs vs radioactive iodine, informing treatment selection discussions.",
        "concepts": [
          "hyperthyroidism",
          "treatment"
        ]
      }
    ]
  },
  "hepatic-encephalopathy": {
    "id": "hepatic-encephalopathy",
    "name": "Hepatic Encephalopathy",
    "category": "gi",
    "subcategory": "liver",
    "knowledge": [
      "West Haven criteria",
      "Precipitant identification",
      "Lactulose titration",
      "Rifaximin role"
    ],
    "skills": [
      "Grade HE severity",
      "Identify and treat precipitants",
      "Titrate lactulose appropriately",
      "Manage refractory HE"
    ],
    "lesson": {
      "title": "Hepatic Encephalopathy: Recognition and Management",
      "sections": [
        {
          "type": "intro",
          "content": "Hepatic encephalopathy (HE) is a reversible neuropsychiatric syndrome occurring in patients with liver dysfunction. It results from accumulation of neurotoxins (primarily ammonia) that the liver fails to clear. Management focuses on identifying and treating precipitants, reducing ammonia production with lactulose, and preventing recurrence with rifaximin."
        },
        {
          "type": "concept",
          "title": "West Haven Criteria",
          "content": "**Grading HE severity:**\n\n**Covert HE (not clinically apparent):**\n\u2022 Minimal: Abnormal psychometric testing only\n\u2022 Grade 1: Subtle changes\u2014sleep disturbance, shortened attention span\n\n**Overt HE (clinically apparent):**\n\u2022 Grade 2: Lethargy, disorientation to time, personality change, asterixis\n\u2022 Grade 3: Somnolent but arousable, gross disorientation, bizarre behavior\n\u2022 Grade 4: Coma, unresponsive to painful stimuli"
        },
        {
          "type": "concept",
          "title": "Common Precipitants",
          "content": "**Always look for precipitants\u2014HE rarely happens spontaneously!**\n\n**Infection:** SBP (most common), UTI, pneumonia, cellulitis\n**GI bleeding:** Protein load from digested blood\n**Constipation:** Increased ammonia absorption\n**Dehydration/electrolyte abnormalities:** Over-diuresis, hypokalemia, hyponatremia\n**Medications:** Sedatives, opioids, benzodiazepines\n**Dietary:** Excessive protein intake (rare)\n**TIPS:** Post-TIPS HE is common\n**Noncompliance:** Stopping lactulose"
        },
        {
          "type": "concept",
          "title": "Lactulose Therapy",
          "content": "**Mechanism:**\n\u2022 Non-absorbable disaccharide metabolized by gut bacteria\n\u2022 Acidifies colon \u2192 converts NH3 to NH4+ (trapped in colon)\n\u2022 Cathartic effect removes ammonia-producing bacteria\n\n**Dosing:**\n\u2022 Acute: 30-45 mL PO or via NGT q1-2h until first bowel movement\n\u2022 Maintenance: Titrate to 2-3 soft stools per day\n\u2022 Rectal: 300 mL in 700 mL water via retention enema\n\n**Goal:** 2-3 soft, formed stools daily\u2014NOT diarrhea"
        },
        {
          "type": "pearl",
          "title": "The Ammonia Level Trap",
          "content": "Ammonia levels are often checked but poorly correlated with HE severity. A normal ammonia doesn't rule out HE; an elevated ammonia in a lucid patient doesn't confirm HE. Use clinical assessment (West Haven) to grade severity. Ammonia can be useful if very high (>150) suggesting severe HE, or for trend monitoring, but don't base treatment decisions on ammonia alone."
        },
        {
          "type": "alert",
          "title": "Rifaximin for Prevention",
          "content": "**Rifaximin (Xifaxan) 550mg BID:**\n\n**Indications:**\n\u2022 Secondary prevention after first overt HE episode\n\u2022 ADD to lactulose (not replace)\n\n**Evidence:**\n\u2022 Reduces HE recurrence by ~60% (relative)\n\u2022 Reduces HE-related hospitalizations\n\u2022 Well-tolerated, minimal systemic absorption\n\n**Cost:** Expensive\u2014ensure insurance coverage or patient assistance\n\n**NOT for:** Primary prevention in patients without prior HE (no evidence)"
        }
      ],
      "article": {
        "title": "Hepatic Encephalopathy: Pathophysiology and Treatment",
        "readTime": "13 min",
        "content": "<h2>The Ammonia Hypothesis</h2>\n<p>Ammonia is produced by gut bacteria metabolizing nitrogen from dietary protein and urea. In cirrhosis, the liver fails to convert ammonia to urea (urea cycle dysfunction) and portal-systemic shunting allows ammonia to bypass the liver. Elevated ammonia crosses the blood-brain barrier and causes astrocyte swelling, altered neurotransmission, and cerebral edema.</p>\n\n<div class=\"article-highlight\">\n<strong>Key Concept:</strong> HE in cirrhosis almost always has a precipitant. Treating the precipitant is as important as lactulose. Perform a thorough search: paracentesis to rule out SBP, cultures, medication review, assess for GI bleeding, check electrolytes and renal function.\n</div>\n\n<h2>The Role of Gut Bacteria</h2>\n<p>The gut microbiome is central to HE pathogenesis. Urease-producing bacteria break down urea to ammonia. This explains why lactulose (promotes non-urease bacteria), rifaximin (reduces bacterial load), and even fecal microbiota transplant (restores healthy flora) can all improve HE.</p>\n\n<h2>Lactulose Nuances</h2>\n<p>Lactulose is the foundation of HE treatment, but it's often used incorrectly. The goal is 2-3 soft stools daily\u2014excessive diarrhea causes dehydration, hypokalemia, and can worsen HE. Many patients stop lactulose after feeling better or because of bloating; education about continued use is essential.</p>\n\n<div class=\"article-pearl\">\n<strong>Practice Point:</strong> For patients who can't take oral lactulose (Grade 3-4 HE), give lactulose via NGT or rectally as retention enema. The rectal route is effective and underutilized. Mix 300 mL lactulose with 700 mL water, instill, and retain for 30-60 minutes.\n</div>\n\n<h2>TIPS and HE</h2>\n<p>Transjugular intrahepatic portosystemic shunt (TIPS) diverts portal blood around the liver, increasing ammonia delivery to systemic circulation. Post-TIPS HE occurs in 30-50% of patients. Risk factors include pre-TIPS HE, older age, and low serum albumin. Reducing TIPS diameter or rifaximin can help manage post-TIPS HE.</p>"
      },
      "podcast": {
        "title": "HE Management with Dr. Hepar",
        "duration": "10:30",
        "transcript": [
          {
            "speaker": "Host",
            "text": "Dr. Hepar, a cirrhotic patient comes in confused. How do you approach them?"
          },
          {
            "speaker": "Dr. Hepar",
            "text": "First, I confirm it's HE and not something else\u2014hypoglycemia, stroke, sepsis, intoxication. Then I grade severity using West Haven. Most importantly, I hunt for the precipitant. HE rarely just happens\u2014there's usually an infection, bleed, or electrolyte issue."
          },
          {
            "speaker": "Host",
            "text": "What's your precipitant workup?"
          },
          {
            "speaker": "Dr. Hepar",
            "text": "Tap them. I do a diagnostic paracentesis on almost every cirrhotic with HE to rule out SBP. Check the med list for sedatives or new drugs. Examine for bleeding\u2014check stool guaiac, hemoglobin. Labs for electrolytes, creatinine, infection markers. The precipitant is often the target of treatment."
          },
          {
            "speaker": "Host",
            "text": "How do you dose lactulose?"
          },
          {
            "speaker": "Dr. Hepar",
            "text": "For acute HE, I start aggressive\u201430-45 mL every 1-2 hours until they have a bowel movement. Then I titrate to 2-3 soft stools daily. The sweet spot is soft stools without diarrhea. Too much lactulose causes dehydration and electrolyte issues that actually worsen HE."
          },
          {
            "speaker": "Host",
            "text": "When do you add rifaximin?"
          },
          {
            "speaker": "Dr. Hepar",
            "text": "After the first overt HE episode. The data is clear\u2014adding rifaximin to lactulose reduces recurrence by more than half and cuts hospitalizations. It's expensive, but the cost of repeated HE admissions is higher. I add it to lactulose, not instead of."
          },
          {
            "speaker": "Host",
            "text": "What if they're not improving?"
          },
          {
            "speaker": "Dr. Hepar",
            "text": "Reassess for occult precipitant\u2014did we miss infection, ongoing bleeding, medication effect? Make sure lactulose is actually getting absorbed and causing stools. Consider rectal lactulose if they can't take oral. Refractory HE is often a sign of advanced liver disease\u2014these patients need transplant evaluation."
          }
        ]
      }
    },
    "quizzes": [
      {
        "question": "A cirrhotic patient is admitted with confusion. Paracentesis shows PMN count of 290 cells/mm\u00b3. What is the most likely precipitant?",
        "options": [
          "Dietary protein excess",
          "Spontaneous bacterial peritonitis",
          "Medication non-compliance",
          "Dehydration"
        ],
        "correct": 1,
        "explanation": "PMN count \u2265250 cells/mm\u00b3 in ascitic fluid indicates SBP. Infection is the most common precipitant of HE, and SBP should be ruled out with paracentesis in any cirrhotic with HE. Treatment of SBP (antibiotics + albumin) is essential alongside lactulose for HE."
      },
      {
        "question": "What is the target bowel movement frequency when titrating lactulose for hepatic encephalopathy?",
        "options": [
          "1 stool daily",
          "2-3 soft stools daily",
          "4-5 watery stools daily",
          "As tolerated"
        ],
        "correct": 1,
        "explanation": "The target is 2-3 soft, formed stools daily. Too few stools means inadequate ammonia clearance; excessive diarrhea causes dehydration and electrolyte abnormalities (hypokalemia, hyponatremia) that can paradoxically worsen HE. Titrate lactulose dose to achieve this goal."
      },
      {
        "question": "A patient with cirrhosis and prior overt HE episode is at discharge. What medication regimen reduces HE recurrence?",
        "options": [
          "Lactulose alone",
          "Rifaximin alone",
          "Lactulose plus rifaximin",
          "Neomycin daily"
        ],
        "correct": 2,
        "explanation": "Lactulose plus rifaximin reduces HE recurrence better than lactulose alone. The pivotal trial showed rifaximin added to lactulose reduced overt HE by ~60% and reduced HE-related hospitalizations. Rifaximin replaces older, more toxic antibiotics like neomycin."
      },
      {
        "question": "Which statement about ammonia levels in hepatic encephalopathy is correct?",
        "options": [
          "Normal ammonia rules out HE",
          "Ammonia level correlates well with HE grade",
          "Ammonia levels are useful for trend monitoring but not diagnostic alone",
          "Ammonia should be checked every 6 hours"
        ],
        "correct": 2,
        "explanation": "Ammonia levels correlate poorly with HE severity. A normal ammonia doesn't rule out HE; elevated ammonia in a lucid patient doesn't confirm HE. Clinical grading (West Haven) is more reliable. Ammonia can be useful for trends or if very high, but treatment decisions should be based on clinical assessment."
      }
    ],
    "literature": [
      {
        "type": "guideline",
        "title": "AASLD/EASL HE Practice Guidelines",
        "year": "2014",
        "summary": "Joint guidelines on diagnosis and management of hepatic encephalopathy, including West Haven criteria, lactulose use, and rifaximin for secondary prevention.",
        "concepts": [
          "he",
          "management"
        ]
      },
      {
        "type": "trial",
        "title": "Rifaximin for Recurrent HE",
        "year": "2010",
        "summary": "Rifaximin 550mg BID reduced risk of overt HE recurrence by 58% and HE-related hospitalizations by 50% compared to placebo.",
        "concepts": [
          "he",
          "rifaximin"
        ]
      },
      {
        "type": "trial",
        "title": "Lactulose vs Placebo in HE",
        "year": "1997",
        "summary": "Classic trial establishing lactulose efficacy in HE, with faster resolution of symptoms compared to placebo.",
        "concepts": [
          "he",
          "lactulose"
        ]
      }
    ]
  }
};
