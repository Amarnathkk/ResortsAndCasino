import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Gift, Calendar, Star, Sparkles } from 'lucide-react';

const Promotions = () => {
  const promotions = [
    {
      icon: Gift,
      title: 'Welcome Bonus',
      description: '$500 Free Play for New Members',
      badge: 'New',
      color: 'neon-pink',
    },
    {
      icon: Star,
      title: 'Weekend Special',
      description: 'Double Points Every Weekend',
      badge: 'Popular',
      color: 'neon-blue',
    },
    {
      icon: Calendar,
      title: 'Monthly Tournament',
      description: '$100,000 Grand Prize Pool',
      badge: 'Featured',
      color: 'neon-gold',
    },
    {
      icon: Sparkles,
      title: 'VIP Exclusive',
      description: 'Complimentary Suite Upgrades',
      badge: 'VIP',
      color: 'neon-green',
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">Exclusive Promotions</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlock incredible rewards and bonuses designed for winners
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {promotions.map((promo, index) => {
              const Icon = promo.icon;
              return (
                <motion.div
                  key={promo.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Icon className={`w-12 h-12 text-${promo.color}`} />
                        <Badge className={`bg-${promo.color}/20 text-${promo.color}`}>
                          {promo.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{promo.title}</CardTitle>
                      <CardDescription className="text-lg">{promo.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-primary hover:bg-primary/90 neon-glow">
                        Claim Offer
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;
