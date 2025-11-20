import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dices, Spade, Heart, Diamond, Club } from 'lucide-react';

const Gaming = () => {
  const games = [
    { icon: Spade, title: 'Slot Machines', description: '500+ premium slots', color: 'neon-pink' },
    { icon: Heart, title: 'Table Games', description: 'Blackjack, Roulette, Baccarat', color: 'neon-blue' },
    { icon: Diamond, title: 'Poker Room', description: 'Tournament & Cash Games', color: 'neon-gold' },
    { icon: Club, title: 'Live Dealers', description: '24/7 Live Gaming', color: 'neon-green' },
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">Gaming Paradise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience world-class gaming with over 2,000 slot machines and 100+ table games
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {games.map((game, index) => {
              const Icon = game.icon;
              return (
                <motion.div
                  key={game.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all h-full">
                    <CardHeader>
                      <Icon className={`w-12 h-12 text-${game.color} mb-4`} />
                      <CardTitle>{game.title}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-primary hover:bg-primary/90">Learn More</Button>
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
            className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-border"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Gaming Highlights</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-neon-pink mb-2">2,000+</div>
                <p className="text-muted-foreground">Slot Machines</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-neon-blue mb-2">100+</div>
                <p className="text-muted-foreground">Table Games</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-neon-gold mb-2">24/7</div>
                <p className="text-muted-foreground">Gaming Action</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gaming;
