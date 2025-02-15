import { useState } from "react";
import GridBackground from "./GridBackground";
import ChatInterface from "./ChatInterface";
import WorkflowVisualization from "./WorkflowVisualization";
import WorkflowCard from "./WorkflowCard";
import TaskList from "./TaskList";
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
      "Design and implement a sleek landing page that showcases the voice assistant capabilities",
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

  return (
    <div className="w-screen h-screen relative bg-slate-950 text-white overflow-hidden">
      {/* Header remains the same */}
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
                  <WorkflowCard
                    key={template.id}
                    title={template.title}
                    description={template.description}
                    gradient={template.gradient}
                    onClick={() => handleWorkflowSelect(template.id)}
                  />
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
                  <WorkflowCard
                    key={workflow.id}
                    title={workflow.title}
                    description={workflow.description}
                    date={workflow.date}
                    onClick={() => handleWorkflowSelect(workflow.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Updated workflow page layout
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

          {/* Right Side - Avatar Space & Deploy Button */}
          <div className="flex flex-col gap-4">
            {/* Avatar Space */}
            <div className="h-[300px] rounded-xl border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm ring-1 ring-white/10 relative z-10">
              {/* Avatar will be integrated here */}
            </div>

            {/* Deploy Button */}
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-sm font-medium text-white shadow-lg shadow-emerald-500/20">
              Deploy Workflow
            </button>
          </div>
        </div>
      )}

      <GridBackground />
    </div>
  );
}

export default Home;
