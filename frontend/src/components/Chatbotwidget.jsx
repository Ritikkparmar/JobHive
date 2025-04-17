'use client';
import { useState } from 'react';
import { X, Bot } from 'lucide-react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import resizable styles

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <Bot className="text-white w-6 h-6" />
      </button>

      {/* Chatbot Modal (Resizable and Scrollable) */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50">
          <ResizableBox
            width={460}
            height={580}
            minConstraints={[320, 400]}
            maxConstraints={[700, 800]}
            resizeHandles={['se']}
            className="rounded-xl shadow-2xl border bg-white flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
              <p className="text-sm font-semibold text-gray-700">Chat with us 💬</p>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>

            {/* Scrollable iframe container */}
            <div className="flex-1 overflow-auto">
              <iframe
                src="https://chat.vercel.ai/"
                className="w-full h-full border-none"
                title="Vercel AI Chatbot"
              ></iframe>
            </div>
          </ResizableBox>
        </div>
      )}
    </>
  );
}
