
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BotMessageSquare, Sparkles, Users, Brain, Briefcase, Settings, BookOpen } from 'lucide-react'; // Added BookOpen
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

export default function AppLayout({ children, pageTitle }: AppLayoutProps) {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Chat', icon: BotMessageSquare },
    { href: '/career', label: 'Career', icon: Briefcase },
    { href: '/academics', label: 'Academics', icon: BookOpen },
    { href: '/resources', label: 'Resources', icon: Sparkles },
    { href: '/connect', label: 'Connect', icon: Users },
    { href: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r" collapsible="icon">
          <SidebarHeader className="p-4 flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-lg bg-primary/10 text-primary hover:bg-primary/20" asChild>
              <Link href="/">
                <Brain className="h-6 w-6" />
              </Link>
            </Button>
            <h1 className={cn(
              "text-xl font-semibold text-primary transition-opacity duration-300 ease-in-out",
              "group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:w-0 group-data-[state=expanded]:opacity-100"
              )}>
              MindBridge
            </h1>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                    className="justify-start"
                    tooltip={{children: item.label, className: "bg-card text-card-foreground border-border shadow-md"}}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span className={cn(
                        "transition-opacity duration-300 ease-in-out",
                         "group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:w-0 group-data-[state=expanded]:opacity-100"
                        )}>
                        {item.label}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset className="flex flex-col flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b bg-background/80 px-4 py-2 shadow-sm backdrop-blur-sm sm:px-6 md:justify-start">
            <SidebarTrigger className="md:hidden flex items-center" aria-label="Toggle sidebar">
               <Brain className="h-6 w-6 text-primary" />
            </SidebarTrigger>
            <h1 className="text-xl font-semibold text-foreground">{pageTitle}</h1>
          </header>
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-background">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
