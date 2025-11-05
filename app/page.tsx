import Link from "next/link";
import Counter from "./components/Counter";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to HackCamp 🚀
        </h1>
        
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
          Your Next.js app is ready! Check out the example API route below.
        </p>

        <div className="mb-8">
          <Counter />
        </div>

        <div className="mb-8">
          <Chat />
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Example API</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              See the example API route at /api/hello
            </p>
            <Link 
              href="/api/hello" 
              className="text-blue-600 hover:underline"
            >
              Visit API Route →
            </Link>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Get Started</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Start editing app/page.tsx to build your app
            </p>
            <Link 
              href="https://nextjs.org/docs" 
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              Read Docs →
            </Link>
          </div>
        </div>

        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Quick Tips:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>API routes go in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app/api/</code></li>
            <li>Pages are created automatically from files in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app/</code></li>
            <li>Use <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">use client</code> for client-side interactivity</li>
            <li>Components go in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">app/components/</code></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

