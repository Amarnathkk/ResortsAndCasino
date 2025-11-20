import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Welcome to SFW! How can we assist you today?', isAgent: true },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { id: Date.now(), text: inputValue, isAgent: false }]);
    setInputValue('');

    // Simulate agent response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now(), text: 'Thank you for your message! An agent will respond shortly.', isAgent: true },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 neon-glow shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-96 z-50"
          >
            <Card className="bg-card/95 backdrop-blur-lg border-border overflow-hidden">
              {/* Header */}
              <div className="bg-primary p-4">
                <h3 className="text-lg font-bold text-primary-foreground">Live Support</h3>
                <p className="text-sm text-primary-foreground/80">We typically reply instantly</p>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isAgent ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isAgent
                          ? 'bg-muted text-foreground'
                          : 'bg-primary text-primary-foreground'
                      }`}
                    >
                      {message.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
