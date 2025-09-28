import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Daily Volume", value: "$2.4B+", color: "primary" },
  { label: "Active Traders", value: "150K+", color: "secondary" },
  { label: "Cryptocurrencies", value: "500+", color: "accent" },
  { label: "Countries", value: "100+", color: "success" }
];

export function TradingSection() {
  return (
    <section id="trading" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-card/50 text-accent border-accent/20">
            Trading Platform
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional Trading
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Access advanced trading features with institutional-grade infrastructure and tools
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-card backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl lg:text-4xl font-bold mb-2 ${
                stat.color === 'primary' ? 'text-primary' :
                stat.color === 'secondary' ? 'text-secondary' :
                stat.color === 'accent' ? 'text-accent' :
                'text-success'
              }`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold mb-6">
              Advanced Order Types
            </h3>
            <div className="space-y-4">
              {[
                "Market & Limit Orders",
                "Stop Loss & Take Profit",
                "OCO (One-Cancels-Other)",
                "Trailing Stop Orders"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6">
              Risk Management
            </h3>
            <div className="space-y-4">
              {[
                "Portfolio Analytics",
                "Real-time P&L Tracking",
                "Risk Assessment Tools",
                "Automated Alerts"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-glow" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow text-lg px-8 py-6"
          >
            Explore Trading Tools
          </Button>
        </div>
      </div>
    </section>
  );
}