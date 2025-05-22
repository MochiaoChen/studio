
'use client';

import type { FormEvent } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, User, Sparkles as BotIcon } from 'lucide-react';
import { emotionalAssessment } from '@/ai/flows/emotional-assessment';
import { providePersonalizedGuidance } from '@/ai/flows/personalized-guidance';
import type { ChatMessage } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

export default function ChatInterface() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: 'ai',
        text: "Hello! I'm MindBloom, your AI companion for mental wellness. How are you feeling today?",
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: ChatMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: userInput,
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const conversationHistory = [...messages, newUserMessage]
        .map((msg) => `${msg.sender}: ${msg.text}`)
        .join('\n');
      
      const assessment = await emotionalAssessment({ conversation: conversationHistory });
      const { emotionalState } = assessment;

      const guidance = await providePersonalizedGuidance({
        userInput: newUserMessage.text,
        emotionalState: emotionalState || 'neutral', // Provide a default if undefined
      });

      const aiResponse: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'ai',
        text: guidance.guidance,
        emotionalState: emotionalState,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);
    } catch (error) {
      console.error('AI interaction error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Sorry, I encountered an issue. Please try again.',
      });
      const errorResponse: ChatMessage = {
        id: crypto.randomUUID(),
        sender: 'ai',
        text: "I'm having a little trouble connecting right now. Please try sending your message again in a moment.",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)] bg-card rounded-lg shadow-xl overflow-hidden">
      <ScrollArea className="flex-1 p-4 md:p-6" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'ai' && (
                <Avatar className="h-8 w-8 bg-primary/20 text-primary">
                  <AvatarFallback><BotIcon size={18} /></AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[70%] rounded-xl px-4 py-3 shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-muted text-muted-foreground rounded-bl-none'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                {msg.sender === 'ai' && msg.emotionalState && (
                  <p className="text-xs opacity-70 mt-1">Feeling: {msg.emotionalState}</p>
                )}
                 <p className="text-xs opacity-50 mt-1 text-right">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {msg.sender === 'user' && (
                 <Avatar className="h-8 w-8 bg-accent/20 text-accent">
                  <AvatarFallback><User size={18} /></AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-3 justify-start">
              <Avatar className="h-8 w-8 bg-primary/20 text-primary">
                <AvatarFallback><BotIcon size={18} /></AvatarFallback>
              </Avatar>
              <div className="max-w-[70%] rounded-xl px-4 py-3 shadow-md bg-muted text-muted-foreground rounded-bl-none">
                <Skeleton className="h-4 w-8 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="border-t bg-background p-3 md:p-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <Input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full focus-visible:ring-primary/50"
            disabled={isLoading}
            aria-label="Chat message input"
          />
          <Button type="submit" size="icon" className="rounded-full bg-primary hover:bg-primary/90" disabled={isLoading || !userInput.trim()} aria-label="Send message">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
