
import AppLayout from '@/components/layout/app-layout';
import ThemeToggle from '@/components/settings/theme-toggle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <AppLayout pageTitle="Settings">
      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ThemeToggle />
          </CardContent>
        </Card>
        {/* Future settings sections can be added here */}
      </div>
    </AppLayout>
  );
}
