import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import tradingDashboard from "@/assets/trading-dashboard.jpg";
import { AuthModal } from "@/components/ui/auth-modals";
import { DemoModal } from "@/components/ui/demo-modal";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="text-center lg:text-left animate-slide-up">
          <Badge className="mb-6 bg-card/50 text-primary border-primary/20 backdrop-blur-sm">
            Free Trading Platform
          </Badge>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Live and
            </span>
            <br />
            <span className="text-foreground">
              On-Demand
            </span>
            <br />
            <span className="text-accent">
              Trading
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            Experience the future of cryptocurrency trading with our advanced platform. 
            Real-time data, professional tools, and a thriving community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <AuthModal mode="signup">
              <Button 
                size="lg" 
                variant="hero"
                className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow text-lg px-8 py-6"
              >
                Start Trading Now
              </Button>
            </AuthModal>
            <DemoModal>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </DemoModal>
          </div>
        </div>
        
        {/* Right content - Trading interface mockup */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <img 
              src={tradingDashboard}
              alt="Advanced trading interface with real-time charts and data"
              className="w-full h-auto rounded-2xl shadow-card border border-border/50"
            />
            
            {/* Floating UI elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-card backdrop-blur-sm p-4 rounded-xl border border-border/30 animate-float">
              <div className="text-success text-sm font-medium">+12.5%</div>
              <div className="text-xs text-muted-foreground">BTC/USD</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-card backdrop-blur-sm p-4 rounded-xl border border-border/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-accent text-sm font-medium">24/7</div>
              <div className="text-xs text-muted-foreground">Live Trading</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}