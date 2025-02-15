const WorkflowVisualization = () => {
  return (
    <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 backdrop-blur-sm h-full flex flex-col justify-between">
      <h2 className="text-lg font-medium mb-6 text-slate-200">
        Generated Workflow
      </h2>

      {/* Deploy Button */}
      <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 text-sm font-medium text-white shadow-lg shadow-emerald-500/20">
        Deploy Workflow
      </button>
    </div>
  );
};

export default WorkflowVisualization;
