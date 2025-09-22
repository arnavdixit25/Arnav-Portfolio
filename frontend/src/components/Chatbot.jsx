import React, { useState } from "react";
import axios from "axios";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋, feel free to send me a message!" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/message`, {
        name: "Visitor",
        email: "visitor@portfolio.com",
        message: input,
      });

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "✅ Thanks! I'll get back to you soon." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "❌ Oops! Message failed. Try again later." },
      ]);
    }
    setInput("");
  };

  return (
    <div>
      {/* Floating button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 bg-blue-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl"
      >
        💬
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 bg-white rounded-lg shadow-lg border">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg font-semibold">
            Chat with Me
          </div>
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[70%] ${
                  m.sender === "user"
                    ? "ml-auto bg-blue-100 text-right"
                    : "bg-gray-100"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded p-2"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
