import { X } from "lucide-react";

interface TaskDetailsProps {
  taskId: string;
  title: string;
  description: string;
  onClose: () => void;
}

const TaskDetails = ({
  taskId,
  title,
  description,
  onClose,
}: TaskDetailsProps) => {
  return (
    <div className="h-full flex flex-col bg-slate-950">
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-400 font-mono text-sm">
            {taskId}
          </div>
          <span className="text-sm text-slate-500">
            Last updated a minute ago
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors text-slate-400 hover:text-slate-300"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 space-y-6 overflow-auto">
        {/* Title Section */}
        <div>
          <h2 className="text-sm font-medium text-slate-500 mb-2">Title</h2>
          <div className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm ring-1 ring-slate-800/50">
            <p className="text-slate-200">{title}</p>
          </div>
        </div>

        {/* Description Section */}
        <div>
          <h2 className="text-sm font-medium text-slate-500 mb-2">
            Description
          </h2>
          <div className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm ring-1 ring-slate-800/50">
            <p className="text-slate-200 whitespace-pre-wrap">{description}</p>
          </div>
        </div>

        {/* Activity Section */}
        <div>
          <h2 className="text-sm font-medium text-slate-500 mb-2">Activity</h2>
          <div className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm ring-1 ring-slate-800/50">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-4 h-4 rounded-full border-2 border-slate-700 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              </div>
              No history yet. Agent will document progress and key decisions
              here.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800/50 flex items-center gap-3">
        <button className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors text-sm font-medium">
          Delete task
        </button>
        <div className="flex-1" />
        <button className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors text-sm font-medium">
          Start task
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
