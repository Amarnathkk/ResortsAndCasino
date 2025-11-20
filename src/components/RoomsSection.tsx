import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bed, Wifi, Coffee, Star, User } from 'lucide-react';
import luxurySuite from '@/assets/luxury-suite.jpg';

const rooms = [
  {
    title: 'Deluxe Room',
    price: '$199',
    features: ['King Bed', 'City View', 'Free WiFi', 'Mini Bar'],
    rating: 4.5,
  },
  {
    title: 'Executive Suite',
    price: '$349',
    features: ['Separate Living Area', 'Strip View', 'Premium Amenities', 'VIP Service'],
    rating: 4.8,
    featured: true,
  },
  {
    title: 'Penthouse',
    price: '$799',
    features: ['Private Terrace', 'Panoramic Views', 'Butler Service', 'Hot Tub'],
    rating: 5.0,
  },
];

const reviews = [
  {
    name: 'John Doe',
    message: 'Amazing experience! The Executive Suite exceeded all expectations.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    message: 'Luxury and comfort combined. The staff were incredible!',
    rating: 4.8,
  },
];

const RoomsSection = () => {
  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="neon-glow">LUXURY</span> <span className="text-neon-gold">ACCOMMODATIONS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Unwind in style with our premium rooms and suites
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`overflow-hidden group cursor-pointer border-2 transition-all duration-300 ${
                room.featured 
                  ? 'border-primary scale-105 shadow-2xl shadow-primary/20' 
                  : 'border-border hover:border-primary'
              }`}>
                {room.featured && (
                  <div className="bg-primary text-primary-foreground text-center py-2 font-semibold text-sm">
                    MOST POPULAR
                  </div>
                )}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={luxurySuite}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-neon-gold text-neon-gold" />
                    <span className="text-sm font-semibold">{room.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                      {room.title}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{room.price}</div>
                      <div className="text-xs text-muted-foreground">per night</div>
                    </div>
                  </div>

                  {/* Amenities Icons */}
                  <div className="flex items-center gap-4 mb-4">
                    <Bed className="w-5 h-5 text-primary" />
                    <Wifi className="w-5 h-5 text-primary" />
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>

                  <div className="space-y-2 mb-6">
                    {room.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${room.featured ? 'bg-primary hover:bg-primary/90 neon-glow' : 'bg-secondary hover:bg-secondary/80'}`}
                  >
                    Reserve Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Guest Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Guest Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 border border-border hover:border-primary transition">
                <div className="flex items-center gap-3 mb-4">
                  <User className="w-6 h-6 text-primary" />
                  <span className="font-semibold">{review.name}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{review.message}</p>
                <div className="flex items-center gap-1">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-neon-gold text-neon-gold" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground mb-4">Want to see all our rooms?</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow px-8 py-4">
            Explore All Rooms
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RoomsSection;
