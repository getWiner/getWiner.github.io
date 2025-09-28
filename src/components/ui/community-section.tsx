import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import cryptoCommunity from "@/assets/crypto-community.jpg";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Professional Trader",
    content: "The best crypto trading platform I've used. The community insights are invaluable.",
    avatar: "👩‍💼"
  },
  {
    name: "Marcus Rodriguez",
    role: "DeFi Enthusiast", 
    content: "Amazing tools and real-time data. Helped me increase my portfolio by 300%.",
    avatar: "👨‍💻"
  },
  {
    name: "Emma Thompson",
    role: "Crypto Analyst",
    content: "The analytics and charting tools are professional-grade. Highly recommend!",
    avatar: "👩‍🔬"
  }
];

export function CommunitySection() {
  return (
    <section id="community" className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-slide-up">
            <Badge className="mb-4 bg-card/50 text-secondary border-secondary/20">
              Join Our Community
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Trade with
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent"> Confidence</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with thousands of traders worldwide. Share strategies, learn from experts, 
              and grow your portfolio together in our vibrant community.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "24/7 Community Support",
                "Expert Trading Signals",
                "Educational Resources",
                "Live Trading Sessions"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-glow" style={{ animationDelay: `${index * 0.2}s` }} />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent text-white border-0 hover:shadow-glow text-lg px-8 py-6"
            >
              Join Community
            </Button>
          </div>
          
          {/* Right content - Community image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src={cryptoCommunity}
              alt="Diverse crypto trading community collaborating on blockchain technology"
              className="w-full h-auto rounded-2xl shadow-card border border-border/50"
            />
            
            {/* Floating testimonial cards */}
            <div className="absolute -top-6 -left-6 bg-gradient-card backdrop-blur-sm p-4 rounded-xl border border-border/30 max-w-xs animate-float">
              <div className="text-sm text-muted-foreground mb-2">"Best trading platform ever!"</div>
              <div className="flex items-center space-x-2">
                <span className="text-lg">⭐⭐⭐⭐⭐</span>
                <span className="text-xs text-muted-foreground">- Alex K.</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">What Our Traders Say</h3>
            <p className="text-muted-foreground">Real feedback from our community members</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-card backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div className="flex space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">⭐</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}