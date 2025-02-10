import GridBackground from "./GridBackground";
import ChatInterface from "./ChatInterface";
import WorkflowVisualization from "./WorkflowVisualization";

function Home() {
  return (
    <div className="w-screen h-screen relative bg-[#0f172a] text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#1e293b]/75 border-b border-slate-700/50 flex items-center px-4 z-50 backdrop-blur-sm bg-opacity-80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
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
          <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/20">
            Share
          </button>
          <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-green-500/20">
            Save
          </button>
        </div>
      </header>

      <div className="grid grid-cols-[1fr,400px] h-[calc(100vh-64px)] mt-16">
        <div className="p-6 overflow-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Added app - Gong.io
            </div>
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Added app - Gmail
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-sm">
                Running workflow on "Sam S" call...
              </span>
            </div>
            <div className="pl-10 text-sm text-gray-400">
              Create a new deal in hubspot if not already present
            </div>
            <div className="pl-10 text-sm text-gray-400">
              Please authenticate below apps to continue.
            </div>
            <div className="flex items-center gap-2 text-green-500 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Added app - Hubspot
            </div>
            <div className="mt-auto">
              <input
                type="text"
                placeholder="Personalize your workflow"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="border-l border-slate-700/50 p-6 overflow-auto">
          <WorkflowVisualization />
        </div>
      </div>

      <GridBackground />
    </div>
  );
}

export default Home;
