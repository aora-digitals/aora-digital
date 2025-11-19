import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      category: "AI & Machine Learning",
      description: "Enterprise-grade analytics platform using machine learning to provide real-time business insights and predictive analytics.",
      tech: ["Python", "TensorFlow", "React", "AWS"]
    },
    {
      title: "E-Commerce Marketplace",
      category: "Web Development",
      description: "Multi-vendor marketplace with advanced search, payment integration, and real-time inventory management.",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure banking application with biometric authentication, instant transfers, and comprehensive financial tracking.",
      tech: ["React Native", "Firebase", "Plaid API"]
    },
    {
      title: "Smart Chatbot Solution",
      category: "AI & Automation",
      description: "Intelligent customer service chatbot with natural language processing and multi-channel support.",
      tech: ["GPT-4", "Python", "DialogFlow", "React"]
    },
    {
      title: "Cloud Migration Platform",
      category: "Cloud & DevOps",
      description: "Automated cloud migration tool helping enterprises seamlessly transition to cloud infrastructure.",
      tech: ["AWS", "Kubernetes", "Docker", "Terraform"]
    },
    {
      title: "Healthcare Management System",
      category: "Web & Mobile",
      description: "Comprehensive healthcare platform for patient management, appointments, and telemedicine consultations.",
      tech: ["React", "Node.js", "PostgreSQL", "WebRTC"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing successful digital transformations and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-md overflow-hidden hover-lift border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary h-2"></div>
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
