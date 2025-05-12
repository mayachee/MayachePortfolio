import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <PageTransition>
            <Home />
          </PageTransition>
        </Route>
        <Route>
          <PageTransition>
            <NotFound />
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  const { i18n } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait for i18n to initialize
    if (i18n.isInitialized) {
      setIsLoaded(true);
    } else {
      i18n.on("initialized", () => {
        setIsLoaded(true);
      });
    }
  }, [i18n]);

  if (!isLoaded) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
