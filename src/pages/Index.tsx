import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import OffersMarquee from '@/components/OffersMarquee';
import CasinoFeatures from '@/components/CasinoFeatures';
import RoomsSection from '@/components/RoomsSection';
import ResortMap from '@/components/ResortMap';
import LiveChat from '@/components/LiveChat';
import Footer from '@/components/Footer';
import EventsTimeline from '@/components/EventsTimeline';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <OffersMarquee />
      <CasinoFeatures />
      <EventsTimeline/>
      <RoomsSection />
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow">Find Us</h2>
        <ResortMap />
      </section>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Index;
