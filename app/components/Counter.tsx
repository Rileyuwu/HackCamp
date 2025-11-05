'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4">Example Counter Component</h2>
      <p className="text-2xl mb-4">Count: {count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
        This component uses <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">'use client'</code> for interactivity
      </p>
    </div>
  );
}

