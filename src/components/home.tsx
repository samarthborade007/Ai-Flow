import GridBackground from "./GridBackground";
import ChatInterface from "./ChatInterface";

function Home() {
  return (
    <div className="w-screen h-screen relative bg-[#1a1a1a] text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#262626] border-b border-[#383838] flex items-center px-4 z-50 backdrop-blur-sm bg-opacity-80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="My workflow"
            className="bg-transparent text-lg font-medium outline-none"
          />
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-500/20">
            Share
          </button>
          <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg shadow-green-500/20">
            Save
          </button>
        </div>
      </header>

      <div className="fixed top-16 left-0 bottom-0 w-80 bg-[#262626] border-r border-[#383838] flex flex-col backdrop-blur-sm bg-opacity-80">
        <div className="flex items-center gap-2 p-4 border-b border-[#383838]">
          <button className="flex-1 px-4 py-2 rounded-lg bg-[#383838] hover:bg-[#404040] transition-colors text-sm font-medium">
            Chat
          </button>
          <button className="flex-1 px-4 py-2 rounded-lg hover:bg-[#383838] transition-colors text-sm font-medium text-gray-400">
            Tools
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <ChatInterface />
        </div>
      </div>

      <main className="fixed top-16 left-64 right-0 bottom-0 overflow-auto">
        <GridBackground />
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-32 h-32 border-2 border-dashed border-[#484848] rounded-lg flex items-center justify-center mb-4 mx-auto cursor-pointer hover:border-blue-500 transition-colors">
              <svg
                className="w-8 h-8 text-[#484848]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <p className="text-[#888] text-lg">Add first step...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
