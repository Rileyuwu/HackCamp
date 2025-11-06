import InstallationDropdown from "./components/InstallationDropdown";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            HackCamp
          </h1>
        </div>

        {/* Contributors */}
        <div className="mb-8 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">Project created by:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Riley', github: 'https://github.com/Rileyuwu' },
              { name: 'Zan', github: 'https://github.com/qtzan' },
              { name: 'Ryan', github: 'https://github.com/Ryan-LIU22' },
              { name: 'David', github: 'https://github.com/davidhchng' },
            ].map((contributor) => (
              <a
                key={contributor.name}
                href={contributor.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 font-medium hover:shadow-lg hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer"
              >
                {contributor.name}
              </a>
            ))}
          </div>
        </div>

        {/* Figma and GitHub Links */}
        <div className="mb-8 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.figma.com/files/team/919233196793520413/project/492622315/Hack-Camp?fuid=919233194131199692"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.48 2.005 4.48 4.49s-2.004 4.491-4.48 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.351 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm4.588 3.956h-4.588V8.981h4.588c2.476 0 4.48 2.005 4.48 4.49s-2.004 4.491-4.48 4.491zM12.735 13.51h3.117c1.665 0 3.019-1.351 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V13.51zm-4.603 3.015h4.588V8.981H8.132c-2.476 0-4.48 2.005-4.48 4.49s2.004 4.491 4.48 4.491zM8.132 7.51h3.117v7.019H8.132c-1.665 0-3.019-1.351-3.019-3.019s1.355-3.019 3.019-3.019z"/>
              </svg>
              <span className="font-semibold">Figma link</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href="https://github.com/Rileyuwu/HackCamp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.005.07 1.534 1.032 1.534 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">GitHub</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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
      </div>
    </main>
  );
}

