import { Check, ArrowDown } from "lucide-react";

interface WorkflowStep {
  icon: string;
  title: string;
  subtitle: string;
  status: "completed" | "pending" | "running";
  number: number;
}

const WorkflowVisualization = () => {
  const steps: WorkflowStep[] = [
    {
      icon: "⚡",
      title: "Gong.io",
      subtitle: "RUN WHEN: A new transcript is generated",
      status: "completed",
      number: 1,
    },
    {
      icon: "N",
      title: "Nanonets AI",
      subtitle: "Extract Requirements and Next Steps",
      status: "running",
      number: 2,
    },
    {
      icon: "📧",
      title: "Gmail",
      subtitle: "Compose draft email",
      status: "pending",
      number: 3,
    },
    {
      icon: "H",
      title: "Hubspot",
      subtitle: "Create deal",
      status: "pending",
      number: 4,
    },
  ];

  return (
    <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm">
      <h2 className="text-lg font-medium mb-6 text-slate-200">
        Generated Workflow
      </h2>
      <div className="relative space-y-6">
        {/* Vertical line connecting all steps */}
        <div className="absolute left-5 top-10 bottom-10 w-px bg-gradient-to-b from-emerald-500/50 via-indigo-500/50 to-slate-700/50" />

        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Connection line with animated gradient */}
            {index < steps.length - 1 && (
              <div
                className={`absolute left-5 top-12 w-px h-[calc(100%-24px)] ${
                  step.status === "completed"
                    ? "bg-emerald-500/50"
                    : step.status === "running"
                      ? "bg-indigo-500/50"
                      : "bg-slate-700/50"
                }`}
              />
            )}

            <div className="flex items-start gap-4 group relative z-10">
              <div
                className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-lg
                  ${
                    step.status === "completed"
                      ? "bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 ring-2 ring-emerald-500/50"
                      : step.status === "running"
                        ? "bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-indigo-400 ring-2 ring-indigo-500/50 animate-pulse"
                        : "bg-gradient-to-br from-slate-700/50 to-slate-800/50 text-slate-400"
                  }
                `}
              >
                {step.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {step.title}
                  </span>
                  {step.status === "completed" && (
                    <Check className="w-4 h-4 text-emerald-400" />
                  )}
                  {step.status === "running" && (
                    <div className="w-4 h-4 rounded-full border-2 border-t-transparent border-indigo-400 animate-spin" />
                  )}
                </div>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  {step.subtitle}
                </p>
                {/* Additional metadata */}
                <div className="mt-2 flex items-center gap-3 text-xs text-slate-500">
                  {step.status === "completed" && (
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Completed in 2.3s
                    </span>
                  )}
                  {step.status === "running" && (
                    <span className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      Processing...
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-700/50 flex items-center justify-center text-xs font-medium text-slate-400">
                {step.number}
              </div>
            </div>

            {/* Arrow indicator for next step */}
            {index < steps.length - 1 && (
              <div className="absolute -bottom-3 left-5 transform translate-x-2">
                <ArrowDown
                  className={`w-4 h-4 ${
                    step.status === "completed"
                      ? "text-emerald-500"
                      : step.status === "running"
                        ? "text-indigo-500"
                        : "text-slate-700"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="mt-8 w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-sm font-medium text-white shadow-lg shadow-emerald-500/20">
        Deploy Workflow
      </button>
    </div>
  );
};

export default WorkflowVisualization;
