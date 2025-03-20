'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Alert className="max-w-4xl mx-auto backdrop-blur-xl bg-black/80 border border-white/10 shadow-lg flex items-center justify-between">
        <AlertDescription className="text-sm text-muted-foreground">
          By using our website, you agree to our use of cookies. We use cookies
          to enhance your browsing experience and analyze our traffic.
        </AlertDescription>
        <div className="flex items-center gap-2 ml-4">
          <Button
            onClick={acceptCookies}
            size="sm"
            className="bg-primary/20 hover:bg-primary/30 text-primary border border-primary/20"
          >
            Accept
          </Button>
          <Button
            onClick={acceptCookies}
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground p-0 h-8 w-8"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </Alert>
    </div>
  );
}
