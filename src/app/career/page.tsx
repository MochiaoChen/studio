
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Compass, Link as LinkIcon, BookOpen, ShieldAlert, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const careerExplorationStrategies = [
  {
    title: 'Identify Your Strengths & Interests',
    description: 'Utilize self-assessment tools, reflect on your passions, and understand what motivates you to find fulfilling career options.',
    icon: Award,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'skills assessment',
  },
  {
    title: 'Explore Diverse Career Paths',
    description: 'Research various industries and job roles. Conduct informational interviews to gain insights from professionals in fields that interest you.',
    icon: Compass,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'career path',
  },
  {
    title: 'Build Your Professional Network',
    description: 'Connect with peers, alumni, and professionals. Leverage platforms like LinkedIn and attend university career events.',
    icon: LinkIcon,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'professional networking',
  },
];

const academicStressStrategies = [
  {
    title: 'Develop Effective Study Habits',
    description: 'Implement time management techniques, practice active learning, and create a consistent study schedule to enhance comprehension and retention.',
    icon: BookOpen,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'study habits',
  },
  {
    title: 'Manage Exam Anxiety',
    description: 'Learn relaxation techniques, employ effective preparation strategies, and cultivate a positive mindset to approach exams with confidence.',
    icon: ShieldAlert,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'exam preparation',
  },
  {
    title: 'Seek Academic Support',
    description: 'Utilize university resources such as tutoring services, academic advisors, and writing centers to overcome academic challenges.',
    icon: HelpCircle,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'academic support',
  },
];

export default function CareerPage() {
  return (
    <AppLayout pageTitle="Career & Academic Support">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Career Exploration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerExplorationStrategies.map((strategy) => (
              <Card key={strategy.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Academic Stress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicStressStrategies.map((strategy) => (
              <Card key={strategy.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
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
