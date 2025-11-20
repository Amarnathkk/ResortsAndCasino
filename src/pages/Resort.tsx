import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import RoomsSection from '@/components/RoomsSection';
import { Card } from '@/components/ui/card';
import { Waves, Dumbbell, Sparkles, Palmtree } from 'lucide-react';

const Resort = () => {
  const amenities = [
    { icon: Waves, title: 'Pool & Spa', description: 'Rooftop infinity pool & luxury spa' },
    { icon: Dumbbell, title: 'Fitness Center', description: '24/7 state-of-the-art gym' },
    { icon: Sparkles, title: 'Concierge', description: 'Premium guest services' },
    { icon: Palmtree, title: 'Gardens', description: 'Tropical landscaped grounds' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">Luxury Resort</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience unparalleled comfort and sophistication in our world-class accommodations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={amenity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border p-6 text-center hover:border-primary transition-all">
                    <Icon className="w-10 h-10 text-neon-gold mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        <RoomsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resort;
