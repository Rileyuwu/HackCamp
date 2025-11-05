'use client';

import { useState } from 'react';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    setResponse(''); // Clear previous response
    
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setResponse(`Error: ${data.error || 'Failed to get response'}`);
      } else {
        setResponse(data.response || data.message);
        setMessage(''); // Clear input after sending
      }
    } catch (error) {
      setResponse('Error: Could not send message. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        💬 GPT integration.
      </h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="w-full p-3 border rounded-lg mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed font-medium shadow-md transition-all"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-700 rounded-lg border border-blue-200 dark:border-gray-600">
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Response:</h3>
          <p className="whitespace-pre-wrap text-gray-700 dark:text-gray-300">{response}</p>
        </div>
      )}
    </div>
  );
}

