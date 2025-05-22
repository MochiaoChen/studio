
import AppLayout from '@/components/layout/app-layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Globe, Building, LifeBuoy, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const professionalResources = [
  {
    name: 'Campus Counseling Services',
    description: 'Confidential counseling and mental health support for students. Many universities offer free or low-cost services.',
    contactType: 'University Service',
    icon: Building,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'campus sketch',
    links: [
      { label: 'Find Your Campus Service (Example)', href: '#', type: Globe },
    ],
  },
  {
    name: 'National Suicide Prevention Lifeline',
    description: 'Free and confidential support for people in distress, prevention and crisis resources for you or your loved ones.',
    contactType: 'Hotline',
    icon: Phone,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'hope sketch',
    links: [
      { label: 'Call 988', href: 'tel:988', type: Phone },
      { label: 'Visit Website', href: 'https://988lifeline.org/', type: Globe },
    ],
  },
  {
    name: 'Crisis Text Line',
    description: 'Connect with a crisis counselor for free, 24/7 support via text message.',
    contactType: 'Text Support',
    icon: LifeBuoy,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'support sketch',
    links: [
      { label: 'Text HOME to 741741', href: 'sms:741741?body=HOME', type: Phone },
      { label: 'Visit Website', href: 'https://www.crisistextline.org/', type: Globe },
    ],
  },
  {
    name: 'The Trevor Project',
    description: 'Provides crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer & questioning (LGBTQ) young people.',
    contactType: 'LGBTQ+ Support',
    icon: Users,
    image: 'https://placehold.co/600x400.png',
    aiHint: 'diversity sketch',
    links: [
      { label: 'Call 1-866-488-7386', href: 'tel:18664887386', type: Phone },
      { label: 'Visit Website', href: 'https://www.thetrevorproject.org/', type: Globe },
    ],
  },
];

export default function ConnectPage() {
  return (
    <AppLayout pageTitle="Connect for Support">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground text-center">
          If you are in immediate danger, please call 911 or your local emergency number.
          The resources below can provide support, guidance, and connection.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {professionalResources.map((resource) => (
            <Card key={resource.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <resource.icon className="w-8 h-8 text-primary" />
                  <CardTitle className="text-xl">{resource.name}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground">{resource.contactType}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="relative w-full h-48 rounded-md overflow-hidden my-2">
                  <Image src={resource.image} alt={resource.name} layout="fill" objectFit="cover" data-ai-hint={resource.aiHint} />
                </div>
                <p className="mt-2 text-sm text-foreground flex-grow">{resource.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 pt-4">
                {resource.links.map(link => (
                  <Button key={link.label} variant="outline" asChild size="sm">
                    <Link href={link.href} target={link.type === Globe ? "_blank" : undefined} rel={link.type === Globe ? "noopener noreferrer" : undefined}>
                      <link.type className="mr-2 h-4 w-4" />
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
