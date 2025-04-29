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
        className="fixed bottom-6 right-6 z-[1000] bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <Bot className="text-white w-6 h-6" />
      </button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-20">
          <div className="absolute top-16 right-8 z-[1000] h-[calc(100vh-120px)]">
            <ResizableBox
              width={400}
              height={500}
              minConstraints={[320, 400]}
              maxConstraints={[500, 600]}
              resizeHandles={['se']}
              className="rounded-xl shadow-2xl bg-white flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 bg-white border-b sticky top-0 z-10">
                <p className="text-base font-semibold text-gray-800">Chat with us 💬</p>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </button>
              </div>

              {/* Scrollable iframe container */}
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="https://chat.vercel.ai/"
                  className="w-full h-full border-none bg-white"
                  title="Vercel AI Chatbot"
                />
              </div>
            </ResizableBox>
          </div>
        </div>
      )}
    </>
  );
}
