'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Collections data
const collections = [
  {
    id: 'bridal',
    title: 'Bridal Sets',
    description: 'Timeless elegance for your special day',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    link: '#contact',
  },
  {
    id: 'gold',
    title: 'Gold Jewellery',
    description: 'Pure gold crafted to perfection',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    link: '#contact',
  },
  {
    id: 'custom',
    title: 'Custom Orders',
    description: 'Your vision, our expertise',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80',
    link: '#contact',
  },
  {
    id: 'heritage',
    title: 'Heritage Designs',
    description: 'Traditional artistry, timeless beauty',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeB72jmn1jz6ARTtFQvmAgOopS3UPoXhLarQ&s',
    link: '#contact',
  },
];

// Reviews data
const reviews = [
  {
    id: 1,
    text: 'We have been coming to Hussain Lakhani for three generations. The trust this family has earned is unmatched. Their gold quality is exceptional and their craftsmanship is simply beautiful.',
    author: 'Ahmed Khan',
  },
  {
    id: 2,
    text: "For my daughter's wedding, I wanted something special. The team at Hussain Lakhani created a custom bridal set that exceeded all expectations. Pure professionalism and genuine care.",
    author: 'Fatima Begum',
  },
  {
    id: 3,
    text: 'Finally found a jeweller in Karachi who values transparency as much as quality. The entire family recommends Hussain Lakhani Jewellers. A true hidden gem in Sarafa Bazaar.',
    author: 'Rashid Ali',
  },
  {
    id: 4,
    text: 'The heritage collection is absolutely stunning. You can feel the history and craftsmanship in every piece. This is what luxury jewellery should feel like.',
    author: 'Saima Akhtar',
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  // Handle scroll - consider hero height so navbar changes after hero
  useEffect(() => {
    const hero = document.querySelector('.hero');

    const handleScroll = () => {
      if (!hero) {
        setIsScrolled(window.scrollY > 100);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      // When the hero's bottom is above the header (i.e. we've scrolled past most of the hero), mark scrolled
      const headerOffset = 80; // matches the offset used for smooth scroll
      setIsScrolled(heroBottom <= headerOffset);
    };

    // run once to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-sm ${
          isScrolled ? 'bg-white/95 shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div className="flex flex-col">
            <span
              className={`font-serif text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              Hussain Lakhani
            </span>
            <span
              className={`font-sans text-xs tracking-[3px] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gold' : 'text-gold-light'
              }`}
            >
              Jewellers
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('collections')}
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Our Legacy
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              Visit Us
            </button>
            <a
              href="https://wa.me/923212345678"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-2 border border-gold transition-all duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              } hover:bg-gold hover:border-gold hover:text-white`}
            >
              <i className="fab fa-whatsapp text-gold"></i>
              <span className="font-sans text-sm font-medium">Enquire</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              } ${isScrolled ? 'bg-black' : 'bg-white'}`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-black' : 'bg-white'}`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              } ${isScrolled ? 'bg-black' : 'bg-white'}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black"
            >
              <div className="flex flex-col items-center gap-6 py-8">
                <button
                  onClick={() => scrollToSection('collections')}
                  className="text-white font-sans text-lg"
                >
                  Collections
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white font-sans text-lg"
                >
                  Our Legacy
                </button>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="text-white font-sans text-lg"
                >
                  Reviews
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white font-sans text-lg"
                >
                  Visit Us
                </button>
                <a
                  href="https://wa.me/923212345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gold text-white font-sans"
                >
                  <i className="fab fa-whatsapp"></i>
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/40"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-5 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-8 py-3 border border-gold/50 bg-gold/10 mb-8"
          >
            <span className="font-sans text-xs font-medium tracking-[3px] text-gold uppercase">
              Established 1965
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            A Legacy of Pure Gold Since 1965
          </h1>

          <p className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
            Crafting trust, elegance, and timeless jewellery for generations in
            Karachi
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('collections')}
              className="btn-primary"
            >
              View Our Collections
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Visit Our Store
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Signals */}
      <section className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="trust-item">
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star text-sm"></i>
                ))}
              </div>
              <span className="font-sans text-sm text-white">
                5.0 Google Rating (100+ reviews)
              </span>
            </div>
            <div className="trust-item">
              <i className="fas fa-map-marker-alt text-gold text-lg"></i>
              <span className="font-sans text-sm text-white">
                Sarafa Bazaar, Mithadar, Karachi
              </span>
            </div>
            <div className="trust-item">
              <i className="fas fa-clock text-gold text-lg"></i>
              <span className="font-sans text-sm text-white">
                Serving Karachi since 1965
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="section-subtitle">Exquisite Craftsmanship</span>
            <h2 className="section-title">Our Collections</h2>
            <div className="section-divider mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="collection-card group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {collection.title}
                  </h3>
                  <p className="font-sans text-sm text-white/80 mb-4">
                    {collection.description}
                  </p>
                  <a
                    href={collection.link}
                    className="inline-flex items-center gap-2 text-gold text-xs font-medium tracking-[2px] uppercase transition-all duration-300 group-hover:gap-3"
                  >
                    Inquire Now
                    <i className="fas fa-arrow-right text-xs"></i>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=800&q=80"
                  alt="Gold Craftsmanship"
                  width={600}
                  height={750}
                  className="w-full rounded-sm shadow-xl"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold rounded-sm hidden md:block"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-subtitle">
                Three Generations of Excellence
              </span>
              <h2 className="section-title">A Family Legacy</h2>
              <div className="section-divider"></div>

              <div className="space-y-6 mb-10">
                <p className="font-sans text-base text-gray-700 leading-relaxed">
                  Founded in 1965 in the heart of Karachi&apos;s legendary Sarafa
                  Bazaar, Hussain Lakhani Jewellers began as a small workshop
                  where our founding master craftsman dedicated his life to the
                  art of pure gold jewellery.
                </p>
                <p className="font-sans text-base text-gray-700 leading-relaxed">
                  For over five decades, three generations of our family have
                  upheld an unwavering commitment to{' '}
                  <span className="font-semibold text-gold-dark">
                    honesty, purity, and exceptional craftsmanship
                  </span>
                  . We don&apos;t just sell jewellery – we create heirlooms that
                  families treasure for generations.
                </p>
                <p className="font-sans text-base text-gray-700 leading-relaxed">
                  Our reputation was built not on advertising, but on the trust
                  of thousands of families who have walked through our doors for
                  weddings, celebrations, and quiet moments of self-indulgence.
                </p>
                <p className="font-sans text-base text-gray-700 leading-relaxed">
                  When you choose Hussain Lakhani Jewellers, you&apos;re not just
                  making a purchase – you&apos;re becoming part of our family
                  story.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                    <i className="fas fa-certificate text-gold text-lg"></i>
                  </div>
                  <span className="font-sans font-medium text-gray-800">
                    100% Pure Gold Guaranteed
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                    <i className="fas fa-handshake text-gold text-lg"></i>
                  </div>
                  <span className="font-sans font-medium text-gray-800">
                    Transparent Pricing
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
                    <i className="fas fa-gem text-gold text-lg"></i>
                  </div>
                  <span className="font-sans font-medium text-gray-800">
                    Handcrafted Excellence
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-subtitle">What Our Families Say</span>
            <h2 className="section-title text-white">Trusted by Generations</h2>
            <div className="section-divider mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="fas fa-star text-gold text-lg"
                    ></i>
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl text-white/90 italic leading-relaxed mb-8">
                  "{reviews[currentReview].text}"
                </p>
                <div>
                  <strong className="font-sans text-white font-semibold block">
                    {reviews[currentReview].author}
                  </strong>
                  <span className="font-sans text-gold text-sm">Google Review</span>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-10">
              <button
                onClick={() =>
                  setCurrentReview(
                    (prev) => (prev - 1 + reviews.length) % reviews.length
                  )
                }
                className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="flex gap-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? 'bg-gold w-6'
                        : 'bg-transparent border border-gold'
                    }`}
                  ></button>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentReview((prev) => (prev + 1) % reviews.length)
                }
                className="w-12 h-12 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-sm shadow-lg"
            >
              <span className="section-subtitle">Visit Our Store</span>
              <h2 className="section-title">Experience the Legacy</h2>
              <div className="section-divider"></div>

              <div className="space-y-8 mb-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-gold text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-gray-800 mb-2">
                      Address
                    </h4>
                    <p className="font-sans text-gray-600">
                      Sarafa Bazaar, Mithadar
                      <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock text-gold text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-gray-800 mb-2">
                      Store Hours
                    </h4>
                    <p className="font-sans text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-phone-alt text-gold text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-gray-800 mb-2">
                      Contact
                    </h4>
                    <p className="font-sans text-gray-600">
                      +92 321 234 5678
                      <br />
                      info@hussainlakhanijewellers.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/923212345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <i className="fab fa-whatsapp text-xl"></i>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+923212345678"
                  className="btn-call w-full"
                >
                  <i className="fas fa-phone-alt"></i>
                  Call Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-sm overflow-hidden shadow-lg h-full min-h-[500px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5459389299997!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a2855a7d%3A0x2a456!2sSarafa%20Bazaar%2C%20Karachi!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
            <div>
              <div className="flex flex-col mb-6">
                <span className="font-serif text-2xl text-white font-bold">
                  Hussain Lakhani
                </span>
                <span className="font-sans text-xs tracking-[3px] text-gold uppercase mt-1">
                  Jewellers
                </span>
              </div>
              <p className="font-sans text-sm text-white/60">
                A legacy of pure gold since 1965
              </p>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-white mb-6 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('collections')}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    Collections
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    Our Legacy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('reviews')}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="font-sans text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans font-semibold text-white mb-6 tracking-wide">
                Connect With Us
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-11 h-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all duration-300"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="font-sans text-sm text-white/40">
              © 2024 Hussain Lakhani Jewellers. All rights reserved. | Crafted
              with legacy, trusted by generations.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
