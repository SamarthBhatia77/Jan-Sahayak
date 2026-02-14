'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Image as ImageIcon, X, Loader2, FileText } from 'lucide-react';

export default function PolicyAnalyzer() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 150) + 'px';
    }
  }, [input]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim() && !selectedImage) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
      image: imagePreview,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const currentImage = selectedImage;
    removeImage();
    setIsLoading(true);

    try {
      // This is where your backend API call will go
      const formData = new FormData();
      formData.append('message', userMessage.content);
      if (currentImage) {
        formData.append('image', currentImage);
      }

      // Replace this URL with your actual backend endpoint
      // const response = await fetch('/api/policy-analyzer', {
      //   method: 'POST',
      //   body: formData,
      // });
      // const data = await response.json();

      // Simulated response - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const assistantMessage = {
        role: 'assistant',
        content: 'This is a placeholder response. Your backend developer will integrate the actual Agentic AI response here.',
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, there was an error processing your request. Please try again.',
        isError: true,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const hasMessages = messages.length > 0;

  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Header */}
      <div className="bg-[#F5F1E8] border-b border-[#8B7355]/20 px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#8B7355] rounded-sm flex items-center justify-center text-2xl rotate-3 shadow-lg">
            <span className="rotate-[-3deg]">📜</span>
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#5C4A3A] tracking-wide">
              Jan-Sahayak
            </h1>
            <p className="text-xs text-[#8B7355] tracking-wider uppercase" style={{ fontFamily: 'Courier New, monospace' }}>
              Government Schemes • Simplified
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {hasMessages ? (
          // Chat mode - messages at top, input at bottom
          <>
            <div className="flex-1 overflow-y-auto px-8 py-8 max-w-4xl w-full mx-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex mb-6 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl ${
                      message.role === 'user'
                        ? 'bg-[#8B7355] text-[#F5F1E8]'
                        : message.isError
                        ? 'bg-red-50 border border-red-200 text-red-800'
                        : 'bg-white border border-[#D4C4B0]'
                    } rounded-lg px-6 py-5 shadow-sm`}
                  >
                    {message.image && (
                      <div className="mb-4 rounded-md overflow-hidden border border-[#D4C4B0]">
                        <img
                          src={message.image}
                          alt="Uploaded document"
                          className="max-w-full h-auto"
                        />
                      </div>
                    )}
                    <p className={`whitespace-pre-wrap leading-relaxed ${
                      message.role === 'user' ? 'text-[#F5F1E8]' : 'text-[#5C4A3A]'
                    }`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-3 ${
                      message.role === 'user' ? 'text-[#F5F1E8]/70' : 'text-[#8B7355]/70'
                    } tracking-wide`}>
                      {new Date(message.timestamp).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start mb-6">
                  <div className="bg-white border border-[#D4C4B0] rounded-lg px-6 py-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-5 h-5 text-[#8B7355] animate-spin" />
                      <span className="text-[#5C4A3A] tracking-wide">Analyzing your request...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input at bottom for chat mode */}
            <div className="bg-[#F5F1E8] border-t border-[#8B7355]/20 px-8 py-6">
              <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
                {imagePreview && (
                  <div className="mb-4 relative inline-block">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-32 rounded-md border-2 border-[#8B7355]/40 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute -top-2 -right-2 bg-[#8B7355] hover:bg-[#6B5645] text-white rounded-full p-1.5 shadow-md transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div className="flex items-end gap-3 bg-white rounded-lg border border-[#D4C4B0] p-4 focus-within:border-[#8B7355] transition-all shadow-sm">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-shrink-0 p-2.5 bg-[#EBE4D8] hover:bg-[#D4C4B0] rounded-md transition-colors"
                    title="Upload document"
                  >
                    <ImageIcon className="w-5 h-5 text-[#5C4A3A]" />
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />

                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about government schemes and policies..."
                    className="flex-1 bg-transparent text-[#5C4A3A] placeholder-[#8B7355]/50 resize-none outline-none py-2 max-h-36 font-normal"
                    rows="1"
                  />

                  <button
                    type="submit"
                    disabled={(!input.trim() && !selectedImage) || isLoading}
                    className="flex-shrink-0 p-2.5 bg-[#8B7355] hover:bg-[#6B5645] disabled:bg-[#D4C4B0] disabled:cursor-not-allowed rounded-md transition-all shadow-sm disabled:shadow-none"
                    title="Send message"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>

                <p className="text-xs text-[#8B7355]/70 mt-4 text-center tracking-wide">
                  Discover, understand, and apply for government schemes through AI assistance
                </p>
              </form>
            </div>
          </>
        ) : (
          // Empty state - centered input
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="w-full max-w-3xl">
              <form onSubmit={handleSubmit}>
                {imagePreview && (
                  <div className="mb-4 flex justify-center">
                    <div className="relative inline-block">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-32 rounded-md border-2 border-[#8B7355]/40 shadow-sm"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute -top-2 -right-2 bg-[#8B7355] hover:bg-[#6B5645] text-white rounded-full p-1.5 shadow-md transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex items-end gap-3 bg-white rounded-lg border border-[#D4C4B0] p-4 focus-within:border-[#8B7355] transition-all shadow-lg">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-shrink-0 p-2.5 bg-[#EBE4D8] hover:bg-[#D4C4B0] rounded-md transition-colors"
                    title="Upload document"
                  >
                    <ImageIcon className="w-5 h-5 text-[#5C4A3A]" />
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />

                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about government schemes and policies..."
                    className="flex-1 bg-transparent text-[#5C4A3A] placeholder-[#8B7355]/50 resize-none outline-none py-2 max-h-36 font-normal text-base"
                    rows="1"
                    autoFocus
                  />

                  <button
                    type="submit"
                    disabled={(!input.trim() && !selectedImage) || isLoading}
                    className="flex-shrink-0 p-2.5 bg-[#8B7355] hover:bg-[#6B5645] disabled:bg-[#D4C4B0] disabled:cursor-not-allowed rounded-md transition-all shadow-sm disabled:shadow-none"
                    title="Send message"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>

                <p className="text-xs text-[#8B7355]/70 mt-4 text-center tracking-wide">
                  Discover, understand, and apply for government schemes through AI assistance
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}