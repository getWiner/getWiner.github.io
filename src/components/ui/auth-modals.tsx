import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface AuthModalProps {
  children: React.ReactNode;
  mode: "login" | "signup";
}

export function AuthModal({ children, mode }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: mode === "login" ? "Login Demo" : "Sign Up Demo",
        description: "This is a demo. Connect Supabase for real authentication.",
      });
      setIsLoading(false);
    }, 1000);
  };

  const isSignup = mode === "signup";

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-card border-border/50 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {isSignup ? "Create Account" : "Welcome Back"}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/50 border-border/50"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-background/50 border-border/50"
              />
            </div>
            
            {isSignup && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="bg-background/50 border-border/50"
                />
              </div>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : (isSignup ? "Create Account" : "Sign In")}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="border-border/50">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="border-border/50">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
              Twitter
            </Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            {isSignup ? "Already have an account? " : "Don't have an account? "}
            <span className="text-primary cursor-pointer hover:underline">
              {isSignup ? "Sign in" : "Sign up"}
            </span>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

interface GetStartedModalProps {
  children: React.ReactNode;
}

export function GetStartedModal({ children }: GetStartedModalProps) {
  const { toast } = useToast();

  const handleFeatureClick = (feature: string) => {
    toast({
      title: `${feature} Demo`,
      description: "This is a demo feature. Connect Supabase for full functionality.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-card border-border/50 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Get Started with CryptoTrade
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid gap-4">
            <Button 
              onClick={() => handleFeatureClick("Portfolio Tracker")}
              className="w-full justify-start h-auto p-4 bg-gradient-subtle border-border/50"
              variant="outline"
            >
              <div className="text-left">
                <div className="font-semibold">Portfolio Tracker</div>
                <div className="text-sm text-muted-foreground">Track your crypto investments</div>
              </div>
            </Button>
            
            <Button 
              onClick={() => handleFeatureClick("Live Trading")}
              className="w-full justify-start h-auto p-4 bg-gradient-subtle border-border/50"
              variant="outline"
            >
              <div className="text-left">
                <div className="font-semibold">Live Trading</div>
                <div className="text-sm text-muted-foreground">Start trading with real-time data</div>
              </div>
            </Button>
            
            <Button 
              onClick={() => handleFeatureClick("Market Analysis")}
              className="w-full justify-start h-auto p-4 bg-gradient-subtle border-border/50"
              variant="outline"
            >
              <div className="text-left">
                <div className="font-semibold">Market Analysis</div>
                <div className="text-sm text-muted-foreground">Advanced charts and indicators</div>
              </div>
            </Button>
            
            <Button 
              onClick={() => handleFeatureClick("Learning Hub")}
              className="w-full justify-start h-auto p-4 bg-gradient-subtle border-border/50"
              variant="outline"
            >
              <div className="text-left">
                <div className="font-semibold">Learning Hub</div>
                <div className="text-sm text-muted-foreground">Educational resources for traders</div>
              </div>
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to unlock all features?
            </p>
            <AuthModal mode="signup">
              <Button className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow">
                Create Free Account
              </Button>
            </AuthModal>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}