
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Compass, Link as LinkIconLucide } from 'lucide-react'; // Removed BookOpen, ShieldAlert, HelpCircle
import Image from 'next/image';
import Link from 'next/link';

export const careerExplorationStrategies = [
  {
    slug: 'identify-strengths-interests',
    title: 'Identify Your Strengths & Interests',
    description: 'Utilize self-assessment tools, reflect on your passions, and understand what motivates you to find fulfilling career options.',
    icon: Award,
    image: 'https://images.unsplash.com/photo-1580291282225-185cb07600ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxTdHJlbmd0aCUyMEludGVyZXN0fGVufDB8fHx8MTc0ODM4ODMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'skills sketch',
    chatPageTitle: 'Chat: Identify Strengths & Interests',
    initialChatMessage: "Welcome! Let's explore your strengths and interests. What activities do you enjoy or feel you're good at? Or, tell me a bit about what you're studying and what aspects you find most engaging.",
  },
  {
    slug: 'explore-diverse-career-paths',
    title: 'Explore Diverse Career Paths',
    description: 'Research various industries and job roles. Conduct informational interviews to gain insights from professionals in fields that interest you.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1476231790875-016a80c274f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxDYXJlZXIlMjBQYXRofGVufDB8fHx8MTc0ODE1OTczNHww&ixlib=rb-4.1.0&q=80&w=1080',
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

export default function CareerPage() {
  return (
    <AppLayout pageTitle="Career Exploration">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Career Exploration Strategies</h2>
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
      </div>
    </AppLayout>
  );
}
