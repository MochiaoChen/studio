export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  emotionalState?: string;
  timestamp: Date;
}
