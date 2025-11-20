import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Dices } from 'lucide-react';

const carouselItems = [
  {
    headline: "WHERE LUXURY",
    subheadline: "MEETS FORTUNE",
    description: "Experience world-class gaming, luxury accommodations, and premium dining in the heart of the Strip",
    stats: [
      { label: 'Gaming Tables', value: '200+' },
      { label: 'Slot Machines', value: '1,500+' },
      { label: 'Luxury Suites', value: '500+' },
    ],
  },
  {
    headline: "JOIN THE ELITE",
    subheadline: "AND WIN BIG",
    description: "Sign up today and unlock exclusive VIP rewards, special events, and unmatched casino experiences",
    stats: [
      { label: 'VIP Members', value: '5,000+' },
      { label: 'Jackpots Won', value: '$2M+' },
      { label: 'Daily Visitors', value: '10,000+' },
    ],
  },
  {
    headline: "THE HEART OF THE STRIP",
    subheadline: "AWAITING YOU",
    description: "Indulge in premium dining, entertainment, and gaming action that never stops",
    stats: [
      { label: 'Restaurants', value: '50+' },
      { label: 'Bars & Lounges', value: '20+' },
      { label: 'Shows & Events', value: '15+' },
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Automatically cycle carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const item = carouselItems[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/casinovideo2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content Carousel */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium neon-border"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Welcome to Las Vegas Premier Gaming Destination</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="neon-glow">{item.headline}</span>
                <br />
                <span className="text-neon-gold">{item.subheadline}</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                {item.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow text-lg px-8 py-6 animate-pulse-glow"
                >
                  <Dices className="w-5 h-5 mr-2" />
                  Start Playing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6"
                >
                  Book Your Stay
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
                {item.stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
