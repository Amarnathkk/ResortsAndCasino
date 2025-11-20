import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Drawer } from 'antd';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Gaming', href: '/gaming' },
    { label: 'Promotions', href: '/promotions' },
    { label: 'Dining & Entertainment', href: '/dining-entertainment' },
    { label: 'Resort', href: '/resort' },
    { label: 'About', href: '/about' },
    { label: 'Rewards', href: '/rewards' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border py-3 sm:py-0"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wider cursor-pointer"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="neon-glow">SFW</span> <span className="text-neon-gold">Games</span>
          </motion.div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `font-medium transition-colors ${
                  isActive ? 'text-neon-pink' : 'text-foreground hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Play Now
          </Button>
          <Button className="bg-primary hover:bg-primary/90 neon-glow">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="md:hidden text-foreground"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width="80%"
        styles={{
          body: { 
            backgroundColor: 'hsl(var(--background))', 
            padding: '2rem' 
          },
          header: { 
            backgroundColor: 'hsl(var(--background))',
            borderBottom: '1px solid hsl(var(--border))'
          }
        }}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setDrawerOpen(false)}
              className={({ isActive }) =>
                `text-lg transition-colors ${isActive ? 'text-neon-pink' : 'text-foreground hover:text-primary'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="flex flex-col gap-3 mt-6">
            <Button variant="outline" className="w-full border-primary text-primary">
              Play Now
            </Button>
            <Button className="w-full bg-primary hover:bg-primary/90">
              Book Now
            </Button>
          </div>
        </div>
      </Drawer>
    </motion.nav>
  );
};

export default Navigation;
