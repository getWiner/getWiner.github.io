import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuthModal, GetStartedModal } from "@/components/ui/auth-modals";

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav className={cn("flex items-center justify-between p-6", className)}>
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">C</span>
        </div>
        <span className="text-xl font-bold text-foreground">CryptoTrade</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
        <a href="#trading" className="text-muted-foreground hover:text-primary transition-colors">Trading</a>
        <a href="#community" className="text-muted-foreground hover:text-primary transition-colors">Community</a>
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
      </div>

      <div className="flex items-center space-x-4">
        <AuthModal mode="login">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            Login
          </Button>
        </AuthModal>
        <GetStartedModal>
          <Button variant="hero" className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow">
            Get Started
          </Button>
        </GetStartedModal>
      </div>
    </nav>
  );
}