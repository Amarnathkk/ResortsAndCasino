import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '25+', label: 'Years of Excellence' },
    { icon: Users, value: '5M+', label: 'Annual Guests' },
    { icon: Globe, value: '150+', label: 'Countries Served' },
    { icon: TrendingUp, value: '#1', label: 'Rated Casino Resort' },
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">About SFW</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The premier destination for luxury gaming and entertainment since 1998
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border text-center p-6 hover:border-primary transition-all">
                    <Icon className="w-10 h-10 text-neon-pink mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-card/30 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-3xl text-center mb-4">Our Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  SFW Resort & Casino opened its doors in 1998 with a vision to create the
                  ultimate entertainment destination. Since then, we've become synonymous with
                  luxury, excitement, and world-class hospitality.
                </p>
                <p>
                  Our 50-acre property features over 2,000 state-of-the-art slot machines, 100+
                  table games, 1,500 luxurious rooms and suites, 15 dining venues, and
                  world-renowned entertainment.
                </p>
                <p>
                  We're committed to providing an unforgettable experience through exceptional
                  service, cutting-edge gaming technology, and unparalleled amenities that set the
                  standard for excellence in the industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
