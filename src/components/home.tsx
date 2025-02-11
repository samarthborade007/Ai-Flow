import { useState } from "react";
import GridBackground from "./GridBackground";
import ChatInterface from "./ChatInterface";
import WorkflowVisualization from "./WorkflowVisualization";
import { Github } from "lucide-react";

function Home() {
  const [workflowStarted, setWorkflowStarted] = useState(false);

  return (
    <div className="w-screen h-screen relative bg-slate-950 text-white overflow-hidden">
      <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800/50 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/10">
            <svg
              className="w-4 h-4 text-white"
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
          <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-display">
            OMNI.ai
          </span>
        </div>

        <div className="flex items-center">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-slate-300"
          >
            <Github size={20} />
          </a>
        </div>
      </header>

      {!workflowStarted ? (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] mt-16 max-w-2xl mx-auto px-4">
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 tracking-tight font-display relative z-10">
            OMNI.ai
          </h1>
          <p className="text-lg text-slate-400 mb-12 text-center font-light">
            Your AI-powered workflow automation assistant
          </p>
          <div className="w-full backdrop-blur-sm bg-slate-900/50 rounded-2xl ring-1 ring-white/10 p-1 shadow-2xl relative z-10">
            <ChatInterface
              onGenerate={() => setWorkflowStarted(true)}
              initialMode={true}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[300px,1fr,400px] h-[calc(100vh-64px)] mt-16 gap-6 p-6">
          {/* Avatar Space */}
          <div className="rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm ring-1 ring-white/10 relative z-10">
            {/* Avatar will be added here */}
          </div>

          {/* Chat Interface */}
          <div className="rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm p-4 ring-1 ring-white/10 relative z-10">
            <ChatInterface onGenerate={() => {}} initialMode={false} />
          </div>

          {/* Workflow Visualization */}
          <div className="rounded-xl relative z-10">
            <WorkflowVisualization />
          </div>
        </div>
      )}

      <GridBackground />
    </div>
  );
}

export default Home;
