import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI Medical Assistant. How can I help you with your healthcare needs today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("appointment") || input.includes("book")) {
      return "I can help you book an AI-optimized appointment! Please visit our Patient Portal or call (555) 123-4567. Our AI will match you with the perfect specialist based on your symptoms and medical history.";
    } else if (input.includes("emergency") || input.includes("urgent")) {
      return "For medical emergencies, please call 911 immediately or visit our Emergency Department. For urgent but non-emergency care, our AI triage system is available 24/7 at (555) 999-8888.";
    } else if (input.includes("hours") || input.includes("open")) {
      return "Our AI-Enhanced Medical Hub is open 24/7 for emergencies. Regular clinic hours are Monday-Friday 8AM-6PM, Saturday 9AM-4PM. Our AI Pharmacy assistant is available Monday-Friday 8AM-8PM, weekends 10AM-6PM.";
    } else if (input.includes("insurance") || input.includes("payment")) {
      return "We accept most major insurance plans including Medicare and Medicaid. Our AI billing system can verify your coverage instantly through our Patient Portal or contact our billing department at (555) 123-4568.";
    } else if (
      input.includes("symptom") ||
      input.includes("pain") ||
      input.includes("fever")
    ) {
      return "I understand you're experiencing symptoms. Our AI can provide preliminary assessment, but please consult with a healthcare professional for proper diagnosis. Would you like me to schedule an AI-assisted consultation?";
    } else if (input.includes("medication") || input.includes("prescription")) {
      return "For prescription refills, you can use our AI-powered Patient Portal or contact our smart pharmacy at (555) 123-4569. Our AI will check for interactions and optimize your medication schedule.";
    } else {
      return "Thank you for your question! Our AI system can help with appointments, symptom assessment, medication management, and hospital information. For specific medical concerns, I can connect you with our healthcare professionals. How else can I assist you?";
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 400, damping: 10 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 cta-glow"
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MessageCircle className="w-6 h-6" />
            )}
          </motion.div>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-24 right-6 w-80 h-96 glassmorphism rounded-2xl shadow-2xl border border-white/20 z-40 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">AI Medical Assistant</h3>
                <p className="text-xs opacity-90">
                  AI Online • Always Learning
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-black/20">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.sender === "user"
                          ? "bg-blue-600"
                          : "bg-purple-600"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-3 py-2 ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white"
                          : "bg-white/10 text-white border border-white/20"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/20 bg-black/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask your AI assistant..."
                  className="flex-1 px-3 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white/10 text-white placeholder-gray-300 backdrop-blur-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
