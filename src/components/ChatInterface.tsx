import { useState, useRef } from "react";
import { Send, Plus, Mic } from "lucide-react";

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
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);

    if (initialMode) {
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

  const handleVoiceInput = async () => {
    try {
      if (!isRecording) {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        const audioChunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          // Here you would typically send this blob to a speech-to-text service
          // For now, we'll just show a placeholder message
          setInput("[Voice input processed]");
          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start();
        setIsRecording(true);
      } else {
        mediaRecorderRef.current?.stop();
        setIsRecording(false);
      }
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setMessages([
        ...messages,
        {
          role: "user",
          content: `📎 Uploaded: ${file.name} (${(file.size / 1024).toFixed(1)} KB)`,
        },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "📄 I've received your file. I'll analyze its contents and incorporate it into the workflow. What would you like me to do with it?",
          },
        ]);
      }, 1000);
    }
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
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            onClick={handleVoiceInput}
            className={`p-2 rounded-lg transition-colors ${isRecording ? "bg-red-500/20 text-red-400" : "bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-400 hover:text-indigo-300"} group`}
          >
            <Mic size={20} className="transition-colors" />
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 transition-colors group"
          >
            <Plus
              size={20}
              className="text-indigo-400 group-hover:text-indigo-300 transition-colors"
            />
          </button>
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
