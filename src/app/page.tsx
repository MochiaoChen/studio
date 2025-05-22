import AppLayout from '@/components/layout/app-layout';
import ChatInterface from '@/components/chat/chat-interface';

export default function HomePage() {
  return (
    <AppLayout pageTitle="Chat with MindBridge">
      <ChatInterface />
    </AppLayout>
  );
}
