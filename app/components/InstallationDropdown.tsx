'use client';

import { useState } from 'react';

export default function InstallationDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
      >
        <span className="font-semibold text-lg">📦 Installation Instructions</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-lg border shadow-md">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">1. Prerequisites</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Install Node.js 18+ if you haven't already:</p>
              <a 
                href="https://nodejs.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Download Node.js →
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">2. Install Dependencies</h4>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">
                <code className="text-sm">npm install</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">3. Set Up Environment Variables</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">Create a <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.env.local</code> file in the root directory:</p>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">
                <code className="text-sm">OPENAI_API_KEY=your-api-key-here</code>
              </pre>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Get your API key from{' '}
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  OpenAI Platform
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">4. Run Development Server</h4>
              <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded-lg overflow-x-auto">
                <code className="text-sm">npm run dev</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">5. Open in Browser</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Navigate to <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">http://localhost:3000</code>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

