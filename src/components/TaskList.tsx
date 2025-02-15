import { Play } from "lucide-react";

interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "done";
}

interface TaskListProps {
  tasks: Task[];
  onStartTask: (taskId: string) => void;
  currentTaskId?: string;
}

const TaskList = ({ tasks, onStartTask, currentTaskId }: TaskListProps) => {
  return (
    <div className="space-y-6">
      {/* Task Header - Matches the screenshot */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 font-mono text-sm">
            OMN-1
          </div>
          <h2 className="text-lg font-medium text-slate-200">
            Create a modern landing page with voice assistant preview
          </h2>
        </div>
        <span className="text-xs text-slate-500">
          Last updated a minute ago
        </span>
      </div>

      {/* Tasks */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => onStartTask(task.id)}
            disabled={task.status === "done"}
            className={`w-full text-left transition-all duration-200 ${
              task.id === currentTaskId
                ? "scale-[1.02] ring-2 ring-indigo-500/50"
                : "hover:scale-[1.01] ring-1 ring-slate-800/50"
            }`}
          >
            <div
              className={`p-4 rounded-xl ${
                task.id === currentTaskId
                  ? "bg-indigo-500/10 backdrop-blur-sm"
                  : "bg-slate-800/50 hover:bg-slate-800/70 backdrop-blur-sm"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex-shrink-0 px-2 py-1 rounded-md bg-slate-900/50 text-xs font-mono text-slate-400">
                      {task.id}
                    </div>
                    <h3 className="text-sm font-medium text-slate-200 truncate">
                      {task.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 line-clamp-2">
                    {task.description}
                  </p>
                </div>
                <div
                  className={`flex-shrink-0 p-2 rounded-lg transition-colors ${
                    task.id === currentTaskId
                      ? "bg-indigo-500 text-white"
                      : "bg-slate-900/50 text-slate-400"
                  }`}
                >
                  <Play size={16} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Activity Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium text-slate-200 mb-4">Activity</h3>
        <div className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm ring-1 ring-slate-800/50">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <div className="w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
            No history yet. Agent will document progress and key decisions here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
