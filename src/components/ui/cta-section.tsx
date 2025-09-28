import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/ui/auth-modals";

export function CtaSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Ready to Start
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Trading?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of successful traders and start your crypto journey today. 
            No hidden fees, no minimum deposits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AuthModal mode="signup">
              <Button 
                size="lg"
                className="bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow text-lg px-10 py-6 animate-glow"
              >
                Create Free Account
              </Button>
            </AuthModal>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 text-lg px-10 py-6"
            >
              Download App
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0%</div>
              <div className="text-sm text-muted-foreground">Commission</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">1M+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}