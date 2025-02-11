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
        ? "Hi! I'm OMNI, your AI assistant. What workflow would you like me to create?"
        : "I'm creating your workflow. What else can I help you with?",
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
            content: "Generating your workflow...",
          },
        ]);
        onGenerate();
      }, 1000);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  : "bg-slate-700/50 text-slate-200"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-700/50">
        <div className="flex items-center gap-2 bg-slate-700/30 rounded-lg p-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={
              initialMode ? "Describe your workflow..." : "Type your message..."
            }
            className="flex-1 bg-transparent outline-none text-white placeholder-slate-400"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg hover:bg-slate-600/50 transition-colors"
          >
            <Send size={20} className="text-indigo-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
