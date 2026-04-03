import Apply from "../Components/Apply";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infiniteMovingCard";
import { collegeLogo } from "../Data/collegeLogo";
import { CheckCircle2, Users, Award, Clock, Sparkles, GraduationCap } from "lucide-react";

const Page = () => {
  const benefits = [
    { icon: CheckCircle2, title: "Expert Guidance", desc: "Get personalized counseling from education experts" },
    { icon: Users, title: "10,000+ Students", desc: "Join thousands of successful applicants" },
    { icon: Award, title: "50+ Universities", desc: "Access to top institutions across India" },
    { icon: Clock, title: "Quick Process", desc: "Get started in just 5 minutes" },
  ];

  const steps = [
    { num: "01", title: "Fill Application", desc: "Complete your basic information" },
    { num: "02", title: "Expert Review", desc: "Our counselors review your profile" },
    { num: "03", title: "Get Matched", desc: "Receive university recommendations" },
    { num: "04", title: "Enroll", desc: "Complete admission process" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-secondary/10 pt-24 pb-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Apply to Your
              <span className="block text-primary mt-2">Dream University</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out our simple application form and let our expert counselors guide you to the perfect university match.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary mb-2 mx-auto" />
                  <p className="font-semibold text-sm">{benefit.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* University Partners Carousel */}
      <section className="py-12 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-foreground mb-2">Trusted by Leading Universities</p>
            <h2 className="text-2xl font-bold">Our University Partners</h2>
          </div>
          <div className="relative max-w-5xl mx-auto">
            <InfiniteMovingCards
              items={collegeLogo}
              image={true}
              pauseOnHover={true}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple Application Process</h2>
            <p className="text-muted-foreground">Get started in 4 easy steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-b from-primary/5 to-transparent border border-border/50 rounded-xl p-6 h-full hover:border-primary/30 transition-all hover:shadow-lg">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.num}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-primary rounded-full" />
          <div className="absolute bottom-20 right-20 w-80 h-80 border-2 border-accent rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              
              {/* Left Side - Info */}
              <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-24">
                <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Why Apply Through UniCompare?</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Free expert counseling from education specialists</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Access to exclusive scholarship opportunities</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">Personalized university recommendations</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">End-to-end admission support</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">No hidden fees or charges</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">Need help? Contact our team</p>
                    <div className="space-y-2 text-sm">
                      <p className="font-medium">📞 +91 9569822903</p>
                      <p className="font-medium">✉️ email@unicompare.co.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3">
                <Apply />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-muted/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">🔒 Your data is secure and will never be shared with third parties</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
              <span>✓ 100% Free Service</span>
              <span>✓ Expert Guidance</span>
              <span>✓ Trusted by 10,000+ Students</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Page;