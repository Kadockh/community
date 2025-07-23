import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import ClubSection from "./sections/club-section";
import BenefitsSection from "./sections/benefits-section";
import EventsSection from "./sections/events-section";
import TestimonialSection from "./sections/testimonial-section";
import ContactSection from "./sections/contact-section";

const Main = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ClubSection />
      <BenefitsSection />
      <EventsSection />
      <TestimonialSection />
      <ContactSection />
    </main>
  );
};

export default Main;
