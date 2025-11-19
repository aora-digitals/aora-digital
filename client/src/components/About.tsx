import { Target, Eye, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About AORA Digitals</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A next-generation technology company delivering innovative digital products, 
            software development, and AI-powered solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24 bg-gradient-card p-12 rounded-2xl shadow-lg animate-scale-in">
          <div className="animate-slide-up hover-lift rounded-2xl p-5">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower businesses worldwide with transformative technology solutions that drive 
                  growth, efficiency, and innovation. We focus on turning visionary ideas into 
                  impactful, scalable, and secure digital experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-slide-up hover-lift rounded-2xl p-5">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the global leader in digital transformation, recognized for delivering 
                  cutting-edge solutions that shape the future of technology. We envision a world 
                  where every business can harness the power of AI and digital innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-gradient-card p-12 rounded-2xl shadow-lg animate-scale-in mb-20">
          <div className="text-center mb-10">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">Our Core Values</h3>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 ">
            {[
              { title: "Innovation", desc: "Pioneering new solutions" },
              { title: "Integrity", desc: "Honest and transparent" },
              { title: "Scalability", desc: "Built for growth" },
              { title: "Support", desc: "Always here for you" }
            ].map((value, index) => (
              <div key={index} className="text-center bg-gray-100/50 p-12 rounded-2xl animate-scale-in hover-lift">
                <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Leadership</h3>
          <div className="inline-block bg-card p-8 rounded-xl shadow-md hover-lift">
            <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-3xl font-bold hover-lift">
              AG
            </div>
            <h4 className="text-xl font-semibold mb-1">Aditya Ghuge</h4>
            <p className="text-muted-foreground mb-2">Founder & CEO</p>
            <p className="text-sm text-muted-foreground max-w-md">
              Visionary leader driving digital transformation and innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
