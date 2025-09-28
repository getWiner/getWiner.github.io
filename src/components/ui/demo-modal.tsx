import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Volume2 } from "lucide-react";
import { useState } from "react";

interface DemoModalProps {
  children: React.ReactNode;
}

export function DemoModal({ children }: DemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-gradient-card border-border/50 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            CryptoTrade Platform Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Video placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden border border-border/50">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary" />
                  ) : (
                    <Play className="w-8 h-8 text-primary" />
                  )}
                </div>
                <p className="text-muted-foreground">Interactive Demo Video</p>
              </div>
            </div>
            
            {/* Video controls */}
            <div className="absolute bottom-4 left-4 right-4 bg-background/50 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-primary"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              
              <div className="flex-1 mx-4 h-2 bg-muted rounded-full">
                <div className="h-full w-1/3 bg-gradient-primary rounded-full"></div>
              </div>
              
              <Button size="sm" variant="ghost" className="text-primary">
                <Volume2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Demo features */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-2">Real-time Data</Badge>
              <p className="text-sm text-muted-foreground">
                Experience live cryptocurrency prices and market movements
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-2">Advanced Charts</Badge>
              <p className="text-sm text-muted-foreground">
                Professional trading tools with technical indicators
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-2">Portfolio Management</Badge>
              <p className="text-sm text-muted-foreground">
                Track your investments and trading performance
              </p>
            </div>
            <div className="space-y-2">
              <Badge variant="secondary" className="mb-2">Mobile Ready</Badge>
              <p className="text-sm text-muted-foreground">
                Trade anywhere with our responsive design
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to start trading?
            </p>
            <div className="flex gap-3 justify-center">
              <Button className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow">
                Start Trading Now
              </Button>
              <Button variant="outline" className="border-border/50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}