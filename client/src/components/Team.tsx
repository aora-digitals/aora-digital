import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Aditya Ghuge",
      role: "CEO & Founder",
      expertise: ["Strategic Planning", "Business Development", "Digital Transformation"],
      bio: "1+ years leading digital innovation initiatives across Fortune 5 companies",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@aoradigitals.com"
      }
    },
    {
      name: "Anurag Bhavthankar",
      role: "CTO & Web Team Head",
      expertise: ["Cloud Architecture", "AI/ML", "System Design"],
      bio: "Former tech lead at major tech companies, specialized in scalable solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      social: {
        linkedin: "#",
        github: "#",
        email: "michael@aoradigitals.com"
      }
    },
    {
      name: "Rahul Ambhore",
      role: "Head of Design",
      expertise: ["UI/UX Design", "Brand Strategy", "User Research"],
      bio: "Award-winning designer creating beautiful and functional digital experiences",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@aoradigitals.com"
      }
    },
    {
      name: "Om Rakhade",
      role: "Lead Android Developer & HOR",
      expertise: ["Full-Stack Development", "DevOps", "Performance Optimization"],
      bio: "Passionate about clean code and building robust, high-performance applications",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      social: {
        linkedin: "#",
        github: "#",
        email: "david@aoradigitals.com"
      }
    }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return Linkedin;
      case 'twitter':
        return Twitter;
      case 'github':
        return Github;
      case 'email':
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <section className="py-20 bg-background" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to delivering exceptional digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 animate-fade-in max-w-md mx-auto"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const Icon = getSocialIcon(platform);
                    return (
                      <a
                        key={platform}
                        href={url}
                        className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary-hover transition-colors"
                        aria-label={platform}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
