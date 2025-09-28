import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: "📈",
    title: "Real-Time Analytics",
    description: "Advanced charting tools with live market data and technical indicators for professional trading decisions.",
    color: "primary"
  },
  {
    icon: "🛡️",
    title: "Secure Trading",
    description: "Bank-level security with multi-layer encryption and cold storage for maximum protection of your assets.",
    color: "secondary"
  },
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Ultra-low latency execution with our optimized trading engine. Execute trades in milliseconds.",
    color: "accent"
  },
  {
    icon: "🌍",
    title: "Global Community",
    description: "Join thousands of traders worldwide. Share strategies, insights, and learn from the best.",
    color: "success"
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <Badge className="mb-4 bg-card/50 text-primary border-primary/20">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Advanced Trading
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to trade cryptocurrencies like a professional trader
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}