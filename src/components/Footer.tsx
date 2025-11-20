import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    'Quick Links': ['About Us', 'Casino', 'Rooms', 'Dining', 'Events'],
    'Support': ['Contact', 'FAQ', 'Terms', 'Privacy', 'Responsible Gaming'],
    'Location': [
      'SFW Resort & Casino',
      '3900 Las Vegas Blvd',
      'Las Vegas, NV 89119',
      'Tel: (702) 555-0100',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              <span className="neon-glow">SFW</span> <span className="text-neon-gold">Games</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Where luxury meets fortune in the heart of Las Vegas
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive exclusive offers and updates
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SFW Resort & Casino. All rights reserved.</p>
          <p className="mt-2">
            Must be 21 or older to gamble. Please play responsibly. If you or someone you know has a gambling problem, call 1-800-522-4700.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
