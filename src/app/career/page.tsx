
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Compass, Link as LinkIconLucide, BookOpen, ShieldAlert, HelpCircle } from 'lucide-react'; // Renamed Link to LinkIconLucide to avoid conflict
import Image from 'next/image';
import Link from 'next/link'; // Imported Next.js Link

export const careerExplorationStrategies = [
  {
    slug: 'identify-strengths-interests',
    title: 'Identify Your Strengths & Interests',
    description: 'Utilize self-assessment tools, reflect on your passions, and understand what motivates you to find fulfilling career options.',
    icon: Award,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'skills sketch',
    chatPageTitle: 'Chat: Identify Strengths & Interests',
    initialChatMessage: "Welcome! Let's explore your strengths and interests. What activities do you enjoy or feel you're good at? Or, tell me a bit about what you're studying and what aspects you find most engaging.",
  },
  {
    slug: 'explore-diverse-career-paths',
    title: 'Explore Diverse Career Paths',
    description: 'Research various industries and job roles. Conduct informational interviews to gain insights from professionals in fields that interest you.',
    icon: Compass,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'career sketch',
    chatPageTitle: 'Chat: Explore Career Paths',
    initialChatMessage: "Hi there! Ready to explore some career paths? Do you have any industries or roles in mind, or are you looking for general ideas on how to start your research?",
  },
  {
    slug: 'build-your-professional-network',
    title: 'Build Your Professional Network',
    description: 'Connect with peers, alumni, and professionals. Leverage platforms like LinkedIn and attend university career events.',
    icon: LinkIconLucide,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'networking sketch',
    chatPageTitle: 'Chat: Build Your Network',
    initialChatMessage: "Hello! Let's talk about building your professional network. What are your current thoughts, experiences, or challenges with networking? We can discuss strategies for making connections.",
  },
];

const academicStressStrategies = [
  {
    title: 'Develop Effective Study Habits',
    description: 'Implement time management techniques, practice active learning, and create a consistent study schedule to enhance comprehension and retention.',
    icon: BookOpen,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'study sketch',
  },
  {
    title: 'Manage Exam Anxiety',
    description: 'Learn relaxation techniques, employ effective preparation strategies, and cultivate a positive mindset to approach exams with confidence.',
    icon: ShieldAlert,
    image: 'https://placehold.co/600x400.png',
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

export default function CareerPage() {
  return (
    <AppLayout pageTitle="Career & Academic Support">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Career Exploration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerExplorationStrategies.map((strategy) => (
              <Link key={strategy.slug} href={`/career/chat/${strategy.slug}`} className="block h-full">
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

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Academic Stress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicStressStrategies.map((strategy) => (
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
