import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dices, Spade, Trophy, Users } from 'lucide-react';
import pokerTable from '@/assets/poker-table.jpg';
import slotMachines from '@/assets/slot-machines.jpg';
import pookerroom from "@/assets/pookerroom.jpg"
import vip from "@/assets/vip.jpg"

const features = [
  {
    icon: Dices,
    title: 'Slot Machines',
    description: 'Over 1,500 state-of-the-art slot machines with progressive jackpots',
    image: slotMachines,
    color: 'text-neon-pink',
  },
  {
    icon: Spade,
    title: 'Table Games',
    description: 'Blackjack, Roulette, Baccarat, and Craps with professional dealers',
    image: pokerTable,
    color: 'text-neon-blue',
  },
  {
    icon: Trophy,
    title: 'Poker Room',
    description: 'Tournament-grade poker tables and daily cash games',
    image: pookerroom,
    color: 'text-neon-gold',
  },
  {
    icon: Users,
    title: 'VIP Lounge',
    description: 'Exclusive high-limit gaming with premium service and amenities',
    image: vip,
    color: 'text-neon-green',
  },
];

const CasinoFeatures = () => {
  return (
    <section id="casino" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="neon-glow">CASINO</span> <span className="text-neon-gold">EXPERIENCE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Step into a world of excitement with our premium gaming options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-2 border-border hover:border-primary transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className={`absolute top-6 left-6 ${feature.color} group-hover:animate-pulse-glow`}>
                    <feature.icon className="w-12 h-12" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button 
                    variant="outline" 
                    className={`border-primary ${feature.color} hover:bg-primary hover:text-primary-foreground`}
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasinoFeatures;
