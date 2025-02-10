import { useState } from "react";
import { Send } from "lucide-react";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm your AI assistant. How can I help you with your workflow?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
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
                  ? "bg-blue-600 text-white"
                  : "bg-[#484848] text-gray-100"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-[#484848]">
        <div className="flex items-center gap-2 bg-[#2b2b2b] rounded-lg p-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-lg hover:bg-[#484848] transition-colors"
          >
            <Send size={20} className="text-blue-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
