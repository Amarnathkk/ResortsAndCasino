import { motion } from 'framer-motion';
import { Calendar, Star, Trophy, Music } from 'lucide-react';

const events = [
  {
    date: 'Nov 25, 2025',
    title: 'Poker Tournament',
    description: 'Join our high-stakes poker tournament with huge cash prizes.',
    icon: Trophy,
    color: 'text-neon-gold',
  },
  {
    date: 'Dec 01, 2025',
    title: 'VIP Night',
    description: 'Exclusive VIP lounge experience with live music and cocktails.',
    icon: Star,
    color: 'text-neon-green',
  },
  {
    date: 'Dec 10, 2025',
    title: 'Live DJ & Dance',
    description: 'Dance all night with top DJs from around the world.',
    icon: Music,
    color: 'text-neon-pink',
  },
  {
    date: 'Dec 20, 2025',
    title: 'Holiday Buffet Special',
    description: 'Celebrate the holidays with our 50% off premium buffet.',
    icon: Calendar,
    color: 'text-neon-blue',
  },
];

const EventsTimeline = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="neon-glow">UPCOMING</span> <span className="text-neon-gold">EVENTS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't miss these exclusive casino events and special promotions
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-yellow-600 h-full" />
          
          {/* Mobile Timeline Line - Left aligned */}
          <div className="md:hidden absolute left-6 w-1 bg-gradient-to-b from-primary to-yellow-600 h-full" />

          <div className="space-y-8 md:space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50, x: 0 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pr-8' : 'md:mr-auto md:pl-8'}`}
              >
                <div className="flex items-start space-x-4 pl-12 md:pl-0 md:space-x-6">
                  <div className={`absolute left-0 md:static flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-card border-2 border-border ${event.color} text-white`}>
                    <event.icon className="w-6 h-6" />
                  </div>
                  <div className="bg-card p-5 md:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                    <p className="text-sm md:text-base text-muted-foreground">{event.description}</p>
                  </div>
                </div>
                {/* Dot on timeline */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-neon-gold top-6 md:top-8" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
