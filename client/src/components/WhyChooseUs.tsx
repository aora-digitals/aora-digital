import { Lightbulb, Shield, Rocket, HeadphonesIcon } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions using the latest technologies and AI advancements to keep you ahead of the curve."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent processes, honest communication, and ethical practices in every project we undertake."
    },
    {
      icon: Rocket,
      title: "Scalability",
      description: "Built to grow with your business, our solutions are designed for long-term success and expansion."
    },
    {
      icon: HeadphonesIcon,
      title: "Support",
      description: "24/7 dedicated support ensuring your digital infrastructure runs smoothly without interruptions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AORA</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-md hover-lift animate-slide-up border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <reason.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
