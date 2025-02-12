import { ArrowRight } from "lucide-react";

interface WorkflowCardProps {
  title: string;
  description: string;
  date?: string;
  onClick: () => void;
  gradient?: string;
}

const WorkflowCard = ({
  title,
  description,
  date,
  onClick,
  gradient = "from-indigo-500 to-purple-500",
}: WorkflowCardProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full group hover:scale-[1.02] transition-all duration-200"
    >
      <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden ring-1 ring-white/10">
        <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-white truncate">{title}</h3>
              <p className="text-sm text-slate-400 mt-1 line-clamp-2">
                {description}
              </p>
            </div>
            <div className="flex-shrink-0 p-1 rounded-lg group-hover:bg-slate-800/50 transition-colors">
              <ArrowRight
                size={16}
                className="text-slate-400 group-hover:text-slate-300"
              />
            </div>
          </div>
          {date && (
            <div className="mt-3 flex items-center gap-2">
              <div className="text-xs text-slate-500">{date}</div>
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default WorkflowCard;
