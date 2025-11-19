import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does AORA Digital provide?",
    answer: "We offer comprehensive digital solutions including custom software development, web and mobile applications, cloud solutions, AI/ML integration, UI/UX design, and digital transformation consulting. Our services are tailored to meet the unique needs of each client.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months or more. We provide detailed timeline estimates during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular sprints and client feedback loops. The process includes discovery and planning, design and prototyping, development, testing and QA, deployment, and ongoing support. You'll have full visibility and input at every stage.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. We provide various maintenance packages tailored to your needs, ensuring your solution continues to perform optimally.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across multiple industries including e-commerce, healthcare, education, finance, logistics, and more. Our team has deep experience in understanding industry-specific challenges and regulatory requirements, allowing us to deliver solutions that truly meet your sector's needs.",
  },
  {
    question: "How do you ensure project security and data privacy?",
    answer: "Security is paramount in everything we do. We implement industry-standard security practices, conduct regular security audits, use encrypted communications, and ensure compliance with relevant regulations like GDPR and HIPAA where applicable. All our team members sign strict NDAs.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with modern, proven technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and more. We select the best technology stack for each project based on your specific requirements, scalability needs, and long-term goals.",
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "We believe in transparent, regular communication. You'll have a dedicated project manager as your single point of contact, regular status meetings, access to project management tools, and real-time updates. We're also available for ad-hoc calls whenever needed.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services and process
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border rounded-lg px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
