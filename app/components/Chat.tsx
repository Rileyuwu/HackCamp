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
    setResponse('');
    
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
        setMessage('');
      }
    } catch (error) {
      setResponse('Error: Could not send message.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg bg-white dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="mb-3">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask me anything..."
          className="w-full p-3 border rounded mb-2 resize-none"
          rows={3}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {response && (
        <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded">
          <p className="text-sm whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}

