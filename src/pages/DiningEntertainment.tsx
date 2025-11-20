import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, Music, Theater, Coffee } from 'lucide-react';

const DiningEntertainment = () => {
  const venues = [
    {
      icon: UtensilsCrossed,
      title: 'Fine Dining',
      description: 'Michelin-starred cuisine & world-class chefs',
      options: ['Steakhouse', 'Italian Bistro', 'Sushi Bar', 'French Restaurant'],
    },
    {
      icon: Coffee,
      title: 'Casual Dining',
      description: '24-hour dining & quick bites',
      options: ['Casino Cafe', 'Sports Bar', 'Buffet', 'Pool Grill'],
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Top performers & headliner shows',
      options: ['Concert Hall', 'Comedy Club', 'Lounge Acts', 'DJ Nights'],
    },
    {
      icon: Theater,
      title: 'Nightlife',
      description: 'Premium nightclubs & exclusive lounges',
      options: ['Ultra Lounge', 'Nightclub', 'Pool Party', 'Piano Bar'],
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">
              Dining & Entertainment
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Indulge in world-class dining and electrifying entertainment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {venues.map((venue, index) => {
              const Icon = venue.icon;
              return (
                <motion.div
                  key={venue.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all h-full">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-neon-gold mb-4" />
                      <CardTitle className="text-2xl">{venue.title}</CardTitle>
                      <CardDescription className="text-lg">{venue.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {venue.options.map((option) => (
                          <li key={option} className="flex items-center text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                            {option}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Make Reservation
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

export default DiningEntertainment;
