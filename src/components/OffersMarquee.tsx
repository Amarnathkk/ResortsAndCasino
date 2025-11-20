import { motion } from 'framer-motion';
import { Gift, Percent, Star, Ticket, Coffee, Wine } from 'lucide-react';
import { Card } from '@/components/ui/card';

const offers = [
  { icon: Gift, title: '$100 Free Play', subtitle: 'New Members', color: 'text-neon-pink' },
  { icon: Percent, title: '50% Off Buffet', subtitle: 'Weekdays', color: 'text-neon-blue' },
  { icon: Star, title: 'Double Points', subtitle: 'VIP Night', color: 'text-neon-gold' },
  { icon: Ticket, title: 'Free Room Upgrade', subtitle: 'Book 3+ Nights', color: 'text-neon-green' },
  { icon: Gift, title: 'Welcome Bonus', subtitle: '$500 Match', color: 'text-neon-pink' },
  { icon: Percent, title: 'Happy Hour', subtitle: '4-7 PM Daily', color: 'text-neon-blue' },
  { icon: Coffee, title: 'Free Coffee', subtitle: 'Morning Guests', color: 'text-neon-yellow' },
  { icon: Wine, title: 'Complimentary Wine', subtitle: 'Dinner Booking', color: 'text-neon-purple' },
  { icon: Star, title: 'VIP Lounge Access', subtitle: 'High Rollers', color: 'text-neon-gold' },
  { icon: Ticket, title: 'Concert Tickets', subtitle: 'Weekend Special', color: 'text-neon-red' },
];

const OffersMarquee = () => {
  const duplicatedOffers = [...offers, ...offers];

  return (
    <section id="offers" className="py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="neon-glow">HOT</span> <span className="text-neon-gold">OFFERS</span>
          </h2>
          <p className="text-muted-foreground text-lg">Don't miss out on these exclusive deals</p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="flex">
          <motion.div
            animate={{ x: [0, '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'linear' } }}
            className="flex gap-6 pr-6"
          >
            {duplicatedOffers.map((offer, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-72 p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="space-y-4">
                  <div className={`${offer.color} group-hover:animate-pulse-glow`}>
                    <offer.icon className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground">{offer.subtitle}</p>
                  </div>
                  <div className="pt-2">
                    <span className={`text-sm font-semibold ${offer.color}`}>Claim Offer →</span>
                  </div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Extra Info Section */}
      <div className="mt-16 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-3xl md:text-4xl font-bold neon-glow">
            Join Our Exclusive Club
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl">
            Sign up now and enjoy personalized offers, VIP perks, and more exciting rewards!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-neon-pink text-background font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-neon-pink transition-all duration-300"
          >
            Sign Up Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersMarquee;
