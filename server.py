#!/usr/bin/env python3
"""
Simple HTTP server for Watershed - Case-Based Medical Learning
Run with: python3 server.py
Then open: http://localhost:8000
"""

import http.server
import socketserver

PORT = 8000

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add headers for JavaScript modules
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        if path.endswith('.jsx'):
            return 'application/javascript'
        return super().guess_type(path)

print(f"""
╔═══════════════════════════════════════════════════════════╗
║           Watershed - Case-Based Medical Learning         ║
╠═══════════════════════════════════════════════════════════╣
║  Server running at: http://localhost:{PORT}                 ║
║  Press Ctrl+C to stop                                     ║
╚═══════════════════════════════════════════════════════════╝
""")

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
