import { useState } from "react";
import GridBackground from "./GridBackground";
import ChatInterface from "./ChatInterface";
import WorkflowVisualization from "./WorkflowVisualization";

function Home() {
  const [workflowStarted, setWorkflowStarted] = useState(false);

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
          <span className="text-lg font-medium">OMNI.ai</span>
        </div>
      </header>

      {!workflowStarted ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] mt-16 max-w-2xl mx-auto px-4">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-12">
            OMNI.ai
          </h1>
          <div className="w-full">
            <ChatInterface
              onGenerate={() => setWorkflowStarted(true)}
              initialMode={true}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[300px,1fr,400px] h-[calc(100vh-64px)] mt-16 gap-6 p-6">
          {/* Avatar Space */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
            {/* Avatar will be added here */}
          </div>

          {/* Chat Interface */}
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm p-4">
            <ChatInterface onGenerate={() => {}} initialMode={false} />
          </div>

          {/* Workflow Visualization */}
          <div className="rounded-xl">
            <WorkflowVisualization />
          </div>
        </div>
      )}

      <GridBackground />
    </div>
  );
}

export default Home;
