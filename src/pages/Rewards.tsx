import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Crown, Diamond, Star, Trophy } from 'lucide-react';

const Rewards = () => {
  const tiers = [
    {
      icon: Star,
      tier: 'Silver',
      color: 'text-gray-400',
      points: '0-4,999',
      benefits: ['5% Bonus on Slot Play', 'Birthday Gift', 'Member Discounts'],
    },
    {
      icon: Trophy,
      tier: 'Gold',
      color: 'text-neon-gold',
      points: '5,000-24,999',
      benefits: ['10% Bonus on Slot Play', 'Priority Reservations', 'Complimentary Parking'],
    },
    {
      icon: Diamond,
      tier: 'Platinum',
      color: 'text-neon-blue',
      points: '25,000-99,999',
      benefits: ['15% Bonus on Slot Play', 'VIP Lounge Access', 'Suite Upgrades'],
    },
    {
      icon: Crown,
      tier: 'Diamond Elite',
      color: 'text-neon-pink',
      points: '100,000+',
      benefits: ['20% Bonus on Slot Play', 'Personal Concierge', 'Luxury Gifts'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">Rewards Program</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Earn points with every play and unlock exclusive benefits at every tier
            </p>
            <Button className="mt-8 bg-primary hover:bg-primary/90 neon-glow text-lg px-8 py-6">
              Join Now - It's Free!
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all h-full">
                    <CardHeader>
                      <Icon className={`w-12 h-12 ${tier.color} mb-4`} />
                      <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                      <CardDescription>
                        <Badge variant="outline" className="mt-2">
                          {tier.points} points
                        </Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border text-center"
          >
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Earn 1 point for every $5 in slot play or $10 in table game play. Points never
              expire and can be redeemed for free play, dining, rooms, and more!
            </p>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rewards;
