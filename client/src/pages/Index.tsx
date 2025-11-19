import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Services from "@/components/Services";
import CompaniesWeServe from "@/components/CompaniesWeServe";
import IndustryCaseStudies from "@/components/IndustryCaseStudies";
import Team from "@/components/Team";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen" id="home">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <About />
      <Services />
      <CompaniesWeServe />
      <IndustryCaseStudies />
      <Team />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
