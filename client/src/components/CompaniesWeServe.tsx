import { useState, useEffect, useRef } from "react";
import { Building2, ShoppingBag, Heart, GraduationCap, Landmark, Plane } from "lucide-react";

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
      {count}{suffix}
    </div>
  );
};

const CompaniesWeServe = () => {
  const industries = [
    {
      icon: Building2,
      name: "Enterprise & Technology",
      description: "Fortune 500 companies and tech startups"
    },
    {
      icon: ShoppingBag,
      name: "E-Commerce & Retail",
      description: "Online marketplaces and retail chains"
    },
    {
      icon: Heart,
      name: "Healthcare & Pharma",
      description: "Hospitals, clinics, and pharmaceutical companies"
    },
    {
      icon: GraduationCap,
      name: "Education & E-Learning",
      description: "Universities, schools, and online learning platforms"
    },
    {
      icon: Landmark,
      name: "Finance & Banking",
      description: "Banks, fintech, and financial institutions"
    },
    {
      icon: Plane,
      name: "Travel & Hospitality",
      description: "Hotels, airlines, and travel agencies"
    }
  ];

  const statistics = [
    { value: 5, suffix: "+", label: "Clients Served" },
    { value: 2, suffix: "+", label: "Industries" },
    { value: 95, suffix: "%", label: "Client Satisfaction" },
    { value: 10, suffix: "+", label: "Projects Completed" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Delivering tailored technology solutions across diverse sectors
          </p>
        </div>

        {/* Animated Statistics */}
        <div className="bg-gradient-card p-12 rounded-2xl shadow-lg border border-border mb-16 animate-scale-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground font-medium mt-3">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-xl shadow-md hover-lift border border-border animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <industry.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
              <p className="text-muted-foreground text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Trusted by businesses worldwide to deliver exceptional digital solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Startups", "SMBs", "Enterprises", "Non-Profits"].map((type, index) => (
              <div
                key={index}
                className="bg-gradient-card px-6 py-3 rounded-lg border border-border hover-lift"
              >
                <span className="font-semibold text-foreground">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesWeServe;
