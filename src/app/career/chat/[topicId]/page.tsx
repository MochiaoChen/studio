
'use client';

import { useParams } from 'next/navigation';
import AppLayout from '@/components/layout/app-layout';
import ChatInterface from '@/components/chat/chat-interface';
import { careerExplorationStrategies } from '@/app/career/page'; // Import the strategies
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function CareerTopicChatPage() {
  const params = useParams();
  const topicId = params.topicId as string;

  const strategy = careerExplorationStrategies.find(s => s.slug === topicId);

  if (!strategy) {
    return (
      <AppLayout pageTitle="Topic Not Found">
        <div className="flex items-center justify-center h-full">
            <Alert variant="destructive" className="w-full max-w-md">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error: Topic Not Found</AlertTitle>
              <AlertDescription>
                The career exploration topic you're looking for doesn't exist or could not be loaded. Please navigate back to the Career & Academic Support page.
              </AlertDescription>
            </Alert>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout pageTitle={strategy.chatPageTitle}>
      <ChatInterface initialAiMessageOverride={strategy.initialChatMessage} />
    </AppLayout>
  );
}
