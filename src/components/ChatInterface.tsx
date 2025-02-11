import { useState } from "react";
import { Send } from "lucide-react";

interface ChatInterfaceProps {
  onGenerate: () => void;
  initialMode: boolean;
}

const ChatInterface = ({ onGenerate, initialMode }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: initialMode
        ? "👋 Hi! I'm OMNI, your AI workflow assistant. Tell me what you'd like to automate and I'll create a seamless workflow for you."
        : "✨ I'm building your workflow. Feel free to ask me anything about the process or request modifications.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: "user", content: input }]);

    // If in initial mode, trigger workflow generation
    if (initialMode) {
      // Add loading message
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "🔮 Analyzing your request and generating an optimized workflow...",
          },
        ]);
        onGenerate();
      }, 1000);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl shadow-lg backdrop-blur-sm font-mono text-[15px]
                ${
                  message.role === "user"
                    ? "bg-gradient-to-br from-indigo-600/90 to-purple-600/90 text-white ring-1 ring-white/10"
                    : "bg-slate-800/90 text-slate-100 ring-1 ring-white/10"
                }
              `}
            >
              <p className="leading-relaxed tracking-wide">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-700/50">
        <div className="flex items-center gap-2 bg-slate-800/50 rounded-xl p-2 ring-1 ring-white/10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={
              initialMode ? "Describe your workflow..." : "Type your message..."
            }
            className="flex-1 bg-transparent outline-none text-white placeholder-slate-400 px-2 py-1 font-mono text-[15px]"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors group"
          >
            <Send
              size={20}
              className="text-indigo-400 group-hover:text-indigo-300 transition-colors"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
