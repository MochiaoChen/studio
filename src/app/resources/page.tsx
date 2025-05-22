import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Brain, Wind, Smile, Users, Activity } from 'lucide-react';
import Image from 'next/image';

const copingStrategies = [
  {
    title: 'Mindful Breathing',
    description: 'Practice deep, mindful breaths to calm your nervous system and reduce stress.',
    icon: Wind,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'meditation nature',
  },
  {
    title: 'Positive Self-Talk',
    description: 'Challenge negative thoughts and replace them with positive affirmations.',
    icon: Smile,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'positive thinking',
  },
  {
    title: 'Connect with Others',
    description: 'Reach out to friends, family, or support groups when you need to talk.',
    icon: Users,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'friends support',
  },
];

const wellnessExercises = [
  {
    title: 'Journaling for Clarity',
    description: 'Write down your thoughts and feelings to gain perspective and process emotions.',
    icon: Brain,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'writing journal',
  },
  {
    title: 'Physical Activity',
    description: 'Engage in regular exercise to boost mood and reduce anxiety. Even a short walk helps!',
    icon: Activity,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'running park',
  },
  {
    title: 'Gratitude Practice',
    description: 'Take time each day to acknowledge things you are grateful for to foster positivity.',
    icon: Zap,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'gratitude sunset',
  },
];

export default function ResourcesPage() {
  return (
    <AppLayout pageTitle="Resource Hub">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Coping Strategies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {copingStrategies.map((strategy) => (
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
          <h2 className="text-2xl font-semibold text-foreground mb-4">Wellness Exercises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wellnessExercises.map((exercise) => (
              <Card key={exercise.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <CardHeader className="flex-row items-center gap-4 pb-2">
                  <exercise.icon className="w-8 h-8 text-accent" />
                  <CardTitle className="text-xl">{exercise.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                   <div className="relative w-full h-40 rounded-md overflow-hidden my-2">
                    <Image src={exercise.image} alt={exercise.title} layout="fill" objectFit="cover" data-ai-hint={exercise.aiHint} />
                  </div>
                  <CardDescription className="mt-2 flex-grow">{exercise.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
