import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const IndustryCaseStudies = () => {
  const caseStudies = [
    {
      industry: "E-Commerce",
      client: "Fashion Retail Platform",
      challenge: "Outdated website with poor mobile experience leading to high cart abandonment rates",
      solution: "Developed a modern, mobile-first e-commerce platform with personalized recommendations",
      results: [
        { icon: TrendingUp, metric: "145%", description: "Increase in mobile conversions" },
        { icon: Users, metric: "60%", description: "Reduction in cart abandonment" },
        { icon: Zap, metric: "3.2s", description: "Average page load time" }
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      industry: "Healthcare",
      client: "Medical Practice Management",
      challenge: "Manual appointment scheduling and patient record management causing inefficiencies",
      solution: "Built an integrated patient management system with automated scheduling and secure records",
      results: [
        { icon: TrendingUp, metric: "75%", description: "Faster appointment booking" },
        { icon: Users, metric: "500+", description: "Patients managed daily" },
        { icon: Zap, metric: "90%", description: "Reduction in admin time" }
      ],
      technologies: ["Next.js", "PostgreSQL", "HIPAA Compliance", "SMS API"],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      industry: "Education",
      client: "Online Learning Academy",
      challenge: "Limited engagement and poor tracking of student progress across multiple courses",
      solution: "Created an interactive learning platform with real-time analytics and gamification",
      results: [
        { icon: TrendingUp, metric: "200%", description: "Increase in course completion" },
        { icon: Users, metric: "10K+", description: "Active students" },
        { icon: Zap, metric: "85%", description: "Student satisfaction rate" }
      ],
      technologies: ["React", "Firebase", "Video Streaming", "AI Analytics"],
      gradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Industry Case Studies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real clients across different industries
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className={`p-8 md:p-12 bg-gradient-to-br ${study.gradient} border-border hover:shadow-xl transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Challenge & Solution */}
                <div>
                  <Badge className="mb-4">{study.industry}</Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{study.client}</h3>
                  
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Challenge
                    </h4>
                    <p className="text-foreground/80 mb-6">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                      Solution
                    </h4>
                    <p className="text-foreground/80">
                      {study.solution}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right Column - Results */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-6">
                    Key Results
                  </h4>
                  
                  <div className="space-y-6">
                    {study.results.map((result, resultIndex) => (
                      <div 
                        key={resultIndex} 
                        className="flex items-start gap-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <result.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary mb-1">
                            {result.metric}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="mt-8 w-full md:w-auto" variant="default">
                    View Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCaseStudies;
