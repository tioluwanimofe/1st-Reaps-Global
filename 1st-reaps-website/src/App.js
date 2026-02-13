import "@/App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import {
  Leaf,
  Globe,
  Ship,
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  CheckCircle,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Company Info
const COMPANY = {
  name: "Ist Reaps Global Company Nig Ltd",
  shortName: "Ist Reaps",
  phone: "+2348166022054",
  email: "1streapsglobalcom@gmail.com",
  tagline: "Your Trusted Partner in Premium Agro-Exports",
};

// Product Data
const PRODUCTS = [
  {
    id: 1,
    name: "Dried Ginger",
    description: "Premium sun-dried, split ginger root with rich aroma and potent flavor.",
    image: "https://images.unsplash.com/photo-1673208126879-18094b40d9cf?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    id: 2,
    name: "Hibiscus Flowers",
    description: "Deep red, dried hibiscus flowers perfect for beverages and natural remedies.",
    image: "https://images.unsplash.com/photo-1620729855140-b779f2d9fd45?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    id: 3,
    name: "Cashew Nuts",
    description: "High-quality raw cashew nuts, carefully selected and processed.",
    image: "https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    id: 4,
    name: "Soya Beans",
    description: "Organic soya beans rich in protein, ideal for various food applications.",
    image: "https://images.unsplash.com/photo-1601993488142-d3050a16478d?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
  {
    id: 5,
    name: "Sesame Seeds",
    description: "Premium quality sesame seeds, perfect for oil extraction and culinary uses.",
    image: "https://images.unsplash.com/photo-1628317321557-68729bee6644?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
  },
];

// Services Data
const SERVICES = [
  {
    icon: Package,
    title: "Quality Sourcing",
    description: "We source directly from trusted local farmers ensuring premium quality products.",
  },
  {
    icon: Ship,
    title: "Global Shipping",
    description: "Reliable worldwide shipping with proper documentation and handling.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "Rigorous quality checks at every stage from farm to shipment.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personalized customer service for all your export inquiries.",
  },
];

// Stats Data
const STATS = [
  { value: "100%", label: "Quality Guaranteed" },
  { value: "5+", label: "Export Products" },
  { value: "Global", label: "Market Reach" },
  { value: "24/7", label: "Customer Support" },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2" data-testid="navbar-logo">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              {COMPANY.shortName}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-6"
              data-testid="navbar-contact-btn"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90 rounded-full mt-2"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Get In Touch
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26, 77, 46, 0.85), rgba(26, 77, 46, 0.7)), url('https://images.unsplash.com/photo-1732543425672-cbb37a92250c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-accent text-sm font-semibold tracking-widest uppercase mb-6"
          >
            Premium Agro-Exports from Nigeria
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bridging Nigerian Agriculture with the{" "}
            <span className="text-accent">World</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl"
          >
            Premium quality agricultural exports including dried ginger, hibiscus flowers,
            cashew nuts, soya beans, and sesame seeds. Registered and certified for global trade.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-lg"
              data-testid="hero-explore-btn"
            >
              <a href="#products">
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 py-6 text-lg font-medium transition-all"
              data-testid="hero-contact-btn"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1627829380497-49c37b769ea6?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Nigerian farmer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Accent Card */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
              <Globe className="h-8 w-8 mb-2" />
              <p className="font-bold text-lg">Global</p>
              <p className="text-sm">Export Reach</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              About Our Company
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your Trusted Partner in Quality Agro-Exports
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
              <strong className="text-foreground">{COMPANY.name}</strong> is a fully registered
              and certified Nigerian company specializing in the export of premium agricultural
              products. We bridge the gap between Nigerian farmers and global markets.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              With all necessary documentation for international exports, we ensure seamless
              transactions and quality products that meet global standards. Our commitment to
              ethical sourcing and sustainable practices sets us apart.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-full">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Registered & Certified</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-full">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Export Documentation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Products Section
const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 bg-primary/5" data-testid="products-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-accent text-sm font-semibold tracking-widest uppercase"
          >
            Our Products
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Premium Agricultural Exports
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            We export the finest Nigerian agricultural products to markets worldwide,
            maintaining the highest standards of quality and freshness.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 border border-border/50"
              data-testid={`product-card-${product.id}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-foreground mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {product.name}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Premium
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeInUp}
              className="text-accent text-sm font-semibold tracking-widest uppercase"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              End-to-End Export Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
              From sourcing to shipping, we handle every aspect of the export process with
              professionalism and care, ensuring your products arrive in perfect condition.
            </motion.p>

            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-white border border-border/50 hover:border-accent/50 transition-colors shadow-sm"
                  data-testid={`service-card-${index}`}
                >
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595263026408-d502567353ee?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Global shipping"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl">
              <TrendingUp className="h-8 w-8 mb-2" />
              <p className="font-bold text-lg">Growing</p>
              <p className="text-sm text-white/80">Global Presence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  return (
    <section className="py-20 bg-primary" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <p
                className="text-4xl md:text-5xl font-bold text-accent mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary/5" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-accent text-sm font-semibold tracking-widest uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Contact us for inquiries about our products, pricing, or partnership opportunities.
            We're here to help with all your agro-export needs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg" data-testid="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-foreground font-medium mb-2">Your Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="rounded-xl border-border"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="rounded-xl border-border"
                    data-testid="contact-email-input"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-foreground font-medium mb-2">Phone Number</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 8900"
                  className="rounded-xl border-border"
                  data-testid="contact-phone-input"
                />
              </div>
              <div className="mb-6">
                <label className="block text-foreground font-medium mb-2">Your Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  required
                  className="rounded-xl border-border resize-none"
                  data-testid="contact-message-input"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-full py-6 text-lg font-medium transition-all hover:scale-[1.02]"
                data-testid="contact-submit-btn"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3
                  className="text-2xl font-bold text-foreground mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Information
                </h3>
                <p className="text-muted-foreground text-lg">
                  Reach out to us through any of the following channels. We typically respond
                  within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                  data-testid="contact-phone-link"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground">{COMPANY.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow group"
                  data-testid="contact-email-link"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{COMPANY.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-foreground">Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-16" data-testid="footer-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-accent" />
              <span
                className="font-bold text-xl text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {COMPANY.shortName}
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              {COMPANY.name} - Your trusted partner for premium Nigerian agro-exports.
              Registered and certified for global trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Products", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Our Products</h4>
            <ul className="space-y-3">
              {PRODUCTS.map((product) => (
                <li key={product.id} className="text-white/80">
                  {product.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={`tel:${COMPANY.phone}`} className="text-white/60 hover:text-accent transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href={`mailto:${COMPANY.email}`} className="text-white/60 hover:text-accent transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App" data-testid="app-container">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
