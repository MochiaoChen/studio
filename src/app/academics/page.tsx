
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ShieldAlert, HelpCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const academicSupportStrategies = [
  {
    slug: 'develop-effective-study-habits',
    title: 'Develop Effective Study Habits',
    description: 'Implement time management techniques, practice active learning, and create a consistent study schedule to enhance comprehension and retention.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8U3R1ZHklMjB8ZW58MHx8fHwxNzQ4MTYwMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'study sketch',
    chatPageTitle: 'Chat: Effective Study Habits',
    initialChatMessage: "Welcome! Let's discuss effective study habits. What are your current study routines, or what challenges are you facing with your studies?",
  },
  {
    slug: 'manage-exam-anxiety',
    title: 'Manage Exam Anxiety',
    description: 'Learn relaxation techniques, employ effective preparation strategies, and cultivate a positive mindset to approach exams with confidence.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxFeGFtJTIwYW54aWV0eXxlbnwwfHx8fDE3NDgxNjAyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'exam sketch',
    chatPageTitle: 'Chat: Manage Exam Anxiety',
    initialChatMessage: "Hello! Exams can be stressful. Let's talk about managing exam anxiety. What are your biggest concerns when it comes to exams?",
  },
  {
    slug: 'seek-academic-support',
    title: 'Seek Academic Support',
    description: 'Utilize university resources such as tutoring services, academic advisors, and writing centers to overcome academic challenges.',
    icon: HelpCircle,
    image: 'https://images.unsplash.com/photo-1531496681078-27dc2277e898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8YWNlZGVtaWMlMjBkaXNjdXNzaW9ufGVufDB8fHx8MTc0ODE2MDMwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'academic support',
    chatPageTitle: 'Chat: Seeking Academic Support',
    initialChatMessage: "Hi there! Seeking academic support is a great step. What kind of support are you looking for, or what academic challenges are you currently facing?",
  },
];

export default function AcademicsPage() {
  return (
    <AppLayout pageTitle="Academic Support">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Academic Stress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicSupportStrategies.map((strategy) => (
              <Link key={strategy.slug} href={`/academics/chat/${strategy.slug}`} className="block h-full">
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-pointer">
                  <CardHeader className="flex-row items-center gap-4 pb-2">
                    <strategy.icon className="w-8 h-8 text-primary" />
                    <CardTitle className="text-xl">{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="relative w-full h-40 rounded-md overflow-hidden my-2">
                      <Image src={strategy.image} alt={strategy.title} layout="fill" objectFit="cover" data-ai-hint={strategy.aiHint} />
                    </div>
                    <CardDescription className="mt-2 flex-grow">{strategy.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
