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
    <div className="space-y-2">
      {/* Section Headers */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-indigo-500" />
          <h2 className="text-sm font-medium text-slate-200">IN PROGRESS</h2>
        </div>
        <button className="text-xs text-slate-400 hover:text-slate-300">
          +
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg border ${task.status === "in_progress" ? "border-indigo-500/50 bg-indigo-500/10" : "border-slate-800 bg-slate-900/50"} backdrop-blur-sm`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="flex-shrink-0 px-2 py-1 rounded bg-slate-800 text-xs font-mono text-slate-400">
                    {task.id}
                  </div>
                  <h3 className="text-sm font-medium text-slate-200 truncate">
                    {task.title}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-slate-400 line-clamp-2">
                  {task.description}
                </p>
              </div>
              <button
                onClick={() => onStartTask(task.id)}
                disabled={task.status === "done"}
                className={`flex-shrink-0 p-2 rounded-lg transition-colors ${task.id === currentTaskId ? "bg-indigo-500 text-white" : "bg-slate-800 text-slate-400 hover:text-slate-300 hover:bg-slate-700"}`}
              >
                <Play size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* To Do Section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-slate-500" />
          <h2 className="text-sm font-medium text-slate-200">TO DO</h2>
        </div>
        {/* Todo tasks would go here */}
      </div>

      {/* Done Section */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <h2 className="text-sm font-medium text-slate-200">DONE</h2>
        </div>
        {/* Completed tasks would go here */}
      </div>
    </div>
  );
};

export default TaskList;
