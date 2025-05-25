
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, ShieldAlert, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const academicSupportStrategies = [
  {
    title: 'Develop Effective Study Habits',
    description: 'Implement time management techniques, practice active learning, and create a consistent study schedule to enhance comprehension and retention.',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8U3R1ZHklMjB8ZW58MHx8fHwxNzQ4MTYwMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'study sketch',
  },
  {
    title: 'Manage Exam Anxiety',
    description: 'Learn relaxation techniques, employ effective preparation strategies, and cultivate a positive mindset to approach exams with confidence.',
    icon: ShieldAlert,
    image: 'https://images.unsplash.com/photo-1613312328068-c9b6b76c9e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxFeGFtJTIwYW54aWV0eXxlbnwwfHx8fDE3NDgxNjAyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'exam sketch',
  },
  {
    title: 'Seek Academic Support',
    description: 'Utilize university resources such as tutoring services, academic advisors, and writing centers to overcome academic challenges.',
    icon: HelpCircle,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'academic sketch',
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
              <Card key={strategy.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <CardHeader className="flex-row items-center gap-4 pb-2">
                  <strategy.icon className="w-8 h-8 text-accent" />
                  <CardTitle className="text-xl">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                   <div className="relative w-full h-40 rounded-md overflow-hidden my-2">
                    <Image src={strategy.image} alt={strategy.title} layout="fill" objectFit="cover" data-ai-hint={strategy.aiHint} />
                  </div>
                  <CardDescription className="mt-2 flex-grow">{strategy.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
