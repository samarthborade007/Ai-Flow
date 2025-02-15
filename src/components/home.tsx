import { useState } from "react";
import GridBackground from "./GridBackground";
import ChatInterface from "./ChatInterface";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";
import { Github, Home as HomeIcon } from "lucide-react";

const SAVED_TEMPLATES = [
  {
    id: 1,
    title: "Sales Call Analysis",
    description:
      "Analyze Gong recordings, extract key points, and create follow-up tasks",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    id: 2,
    title: "Customer Support Automation",
    description:
      "Process support tickets, categorize issues, and generate response drafts",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 3,
    title: "Lead Enrichment",
    description:
      "Enrich lead data from multiple sources and update CRM records",
    gradient: "from-purple-500 to-pink-500",
  },
];

const RECENT_WORKFLOWS = [
  {
    id: 1,
    title: "Q4 Sales Review",
    description: "Analysis of Q4 sales calls with action items and CRM updates",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Product Demo Follow-up",
    description: "Demo recording analysis with personalized follow-up emails",
    date: "Yesterday",
  },
];

const INITIAL_TASKS = [
  {
    id: "OMN-1",
    title: "Create a modern landing page with voice assistant preview",
    description:
      "Design and implement a landing page (App.tsx) that introduces OMNI.ai with a preview of the voice assistant interface. Include a hero section showcasing the 3D avatar placeholder, key features, and a clear value proposition for tech professionals. Add a prominent call-to-action for signing up. Use dark theme with glassmorphic elements and floating UI components for a futuristic feel.",
    status: "todo" as const,
  },
  {
    id: "OMN-2",
    title: "Set up Firebase authentication with custom profile flow",
    description:
      "Implement secure user authentication using Firebase with a customized profile setup process",
    status: "todo" as const,
  },
  {
    id: "OMN-3",
    title: "Build the core voice interaction interface with WebRTC",
    description:
      "Develop the main voice interaction system using WebRTC for real-time communication",
    status: "todo" as const,
  },
  {
    id: "OMN-4",
    title: "Create the base 3D avatar system with basic animations",
    description:
      "Design and implement a 3D avatar system that responds to user interactions",
    status: "todo" as const,
  },
];

function Home() {
  const [workflowStarted, setWorkflowStarted] = useState(false);
  const [currentTaskId, setCurrentTaskId] = useState<string>();
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const handleWorkflowSelect = (id: number) => {
    setWorkflowStarted(true);
  };

  const handleStartTask = (taskId: string) => {
    setCurrentTaskId(taskId);
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: "in_progress" as const } : task,
      ),
    );
  };

  const currentTask = tasks.find((task) => task.id === currentTaskId);

  return (
    <div className="w-screen h-screen relative bg-slate-950 text-white overflow-hidden">
      {/* Header */}
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

        <div className="flex items-center gap-2">
          {workflowStarted && (
            <button
              onClick={() => setWorkflowStarted(false)}
              className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-slate-300 flex items-center gap-2"
            >
              <HomeIcon size={20} />
            </button>
          )}
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
        <div className="flex flex-col h-[calc(100vh-64px)] mt-16 max-w-5xl mx-auto px-4">
          <div className="flex-shrink-0 pt-16">
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 mb-6 tracking-tight font-display text-center">
              OMNI.ai
            </h1>
            <p className="text-lg text-slate-400 mb-12 text-center font-light">
              Your AI-powered workflow automation assistant
            </p>
            <div className="max-w-2xl mx-auto backdrop-blur-sm bg-slate-900/50 rounded-2xl ring-1 ring-white/10 p-1 shadow-2xl relative z-10 mb-12">
              <ChatInterface
                onGenerate={() => setWorkflowStarted(true)}
                initialMode={true}
              />
            </div>
          </div>

          <div className="flex-1 min-h-0 overflow-auto custom-scrollbar">
            {/* Saved Templates */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-white mb-4">
                Saved Templates
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {SAVED_TEMPLATES.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => handleWorkflowSelect(template.id)}
                    className="w-full group hover:scale-[1.02] transition-all duration-200"
                  >
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/10">
                      <div
                        className={`h-1.5 bg-gradient-to-r ${template.gradient}`}
                      />
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-white truncate">
                              {template.title}
                            </h3>
                            <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                              {template.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Workflows */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-white mb-4">
                Recent Workflows
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {RECENT_WORKFLOWS.map((workflow) => (
                  <button
                    key={workflow.id}
                    onClick={() => handleWorkflowSelect(workflow.id)}
                    className="w-full group hover:scale-[1.02] transition-all duration-200"
                  >
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/10">
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-white truncate">
                              {workflow.title}
                            </h3>
                            <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                              {workflow.description}
                            </p>
                          </div>
                        </div>
                        {workflow.date && (
                          <div className="mt-3 flex items-center gap-2">
                            <div className="text-xs text-slate-500">
                              {workflow.date}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[400px,1fr,400px] h-[calc(100vh-64px)] mt-16 gap-6 p-6">
          {/* Chat Interface - Left Side */}
          <div className="rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm p-4 ring-1 ring-white/10 relative z-10">
            <ChatInterface onGenerate={() => {}} initialMode={false} />
          </div>

          {/* Task List - Middle */}
          <div className="rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm ring-1 ring-white/10 relative z-10 p-4 overflow-auto custom-scrollbar">
            <TaskList
              tasks={tasks}
              onStartTask={handleStartTask}
              currentTaskId={currentTaskId}
            />
          </div>

          {/* Right Side - Task Details */}
          <div className="rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm ring-1 ring-white/10 relative z-10 overflow-hidden">
            {currentTask ? (
              <TaskDetails
                taskId={currentTask.id}
                title={currentTask.title}
                description={currentTask.description}
                onClose={() => setCurrentTaskId(undefined)}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500">
                Select a task to view details
              </div>
            )}
          </div>
        </div>
      )}

      <GridBackground />
    </div>
  );
}

export default Home;
