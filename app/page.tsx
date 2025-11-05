import Chat from "./components/Chat";
import InstallationDropdown from "./components/InstallationDropdown";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HackCamp 🚀
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Next.js project with ChatGPT integration
          </p>
        </div>

        {/* Contributors */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">Project created by:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Riley', 'Zan', 'Ryan', 'David'].map((name) => (
              <span
                key={name}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Installation Dropdown */}
        <div className="mb-12">
          <InstallationDropdown />
        </div>

        {/* Chat Component */}
        <div className="mb-12">
          <Chat />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Chat</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Integrated ChatGPT for intelligent conversations
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Next.js 14</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with the latest Next.js App Router
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Beautiful, responsive UI with Tailwind
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

