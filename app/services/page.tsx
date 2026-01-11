"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";

export default function Services() {
  const services = [
    {
      title: "Plumbing Repairs",
      shortDescription: "Expert plumbing services for all your repair and maintenance needs.",
      detailedDescription:
        "Our comprehensive plumbing services cover everything from minor repairs to major installations. We handle leak detection and repair, drain cleaning, water heater installation and repair, pipe replacement, fixture installation, and emergency plumbing services. Our team uses the latest tools and techniques to diagnose and fix problems quickly and efficiently, minimizing disruption to your daily life.",
      features: [
        "24/7 Emergency Service",
        "Leak Detection & Repair",
        "Drain Cleaning & Unclogging",
        "Water Heater Services",
        "Pipe Installation & Replacement",
        "Fixture Installation",
        "Sewer Line Services",
        "Water Pressure Solutions",
      ],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "Kitchen Renovations",
      shortDescription: "Transform your kitchen into a beautiful and functional space.",
      detailedDescription:
        "A kitchen renovation is one of the best investments you can make in your home. Our team works with you from concept to completion, creating a space that perfectly matches your style and needs. We specialize in custom cabinetry, premium countertops, modern appliances, beautiful flooring, and efficient layouts. Whether you want a complete gut renovation or a cosmetic update, we'll bring your vision to life while maximizing functionality and value.",
      features: [
        "Custom Design Consultation",
        "Cabinet Installation & Refacing",
        "Countertop Installation",
        "Appliance Integration",
        "Flooring Installation",
        "Backsplash & Tile Work",
        "Lighting Design & Installation",
        "Complete Project Management",
      ],
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=1200&q=80",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Exterior Painting",
      shortDescription: "Protect and beautify your home's exterior with professional painting.",
      detailedDescription:
        "Your home's exterior is its first impression, and our professional painting services ensure it looks its best while being protected from the elements. We use premium paints and thorough preparation techniques including power washing, scraping, sanding, and priming. Our team handles everything from single-story homes to multi-story buildings, ensuring even coverage and a flawless finish. We also offer color consultation to help you choose the perfect palette for your home.",
      features: [
        "Power Washing & Preparation",
        "Scraping & Sanding",
        "Priming & Sealing",
        "Premium Paint Application",
        "Trim & Detail Work",
        "Color Consultation",
        "Multi-Story Capabilities",
        "5-Year Warranty on Workmanship",
      ],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&q=80",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  const additionalServices = [
    { title: "Electrical Work", description: "Licensed electricians for all your electrical needs.", icon: "⚡", gradient: "from-yellow-500 to-orange-500" },
    { title: "Bathroom Renovations", description: "Complete bathroom makeovers including plumbing, tiling, fixtures.", icon: "🚿", gradient: "from-cyan-500 to-blue-500" },
    { title: "Flooring Installation", description: "Hardwood, tile, laminate, and carpet installation services.", icon: "🏠", gradient: "from-amber-500 to-yellow-500" },
    { title: "Roofing Services", description: "Roof repairs, replacements, and maintenance services.", icon: "🏡", gradient: "from-gray-500 to-gray-700" },
    { title: "Deck & Patio Construction", description: "Custom deck and patio design and construction.", icon: "🌳", gradient: "from-green-500 to-emerald-500" },
    { title: "General Repairs", description: "Handyman services for all your home maintenance needs.", icon: "🔧", gradient: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Our services"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>
        
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl blob"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center max-w-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-8 px-6 py-3 glass-effect-dark rounded-full text-sm font-semibold text-white border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            Our Expertise
          </motion.div>
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-10 leading-[0.9] drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Quality craftsmanship for all your home improvement needs
          </motion.p>
        </motion.div>
      </section>

      {/* Main Services - Creative Alternating Layout */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto max-w-7xl px-4">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`mb-32 last:mb-0 ${
                index % 2 === 0
                  ? "grid lg:grid-cols-2 gap-20 items-center"
                  : "grid lg:grid-cols-2 gap-20 items-center"
              }`}>
                <motion.div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} relative group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-[550px] rounded-3xl overflow-hidden premium-shadow-xl">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <motion.div
                    className={`absolute -bottom-10 ${
                      index % 2 === 1 ? "-left-10" : "-right-10"
                    } w-40 h-40 bg-gradient-to-br ${service.gradient} rounded-3xl premium-shadow-xl hidden lg:block`}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />
                </motion.div>
                
                <motion.div
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    className={`inline-block mb-6 px-5 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full text-sm font-semibold`}
                    whileHover={{ scale: 1.05 }}
                  >
                    Service {index + 1}
                  </motion.div>
                  <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-2xl text-gray-600 leading-relaxed mb-6 font-medium">
                    {service.shortDescription}
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-10">
                    {service.detailedDescription}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-5 mb-10">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <motion.div
                          className={`w-7 h-7 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mr-4 mt-0.5 flex-shrink-0`}
                          whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </motion.div>
                        <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <Link href="/contact">
                    <motion.button
                      className="px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-bold text-lg premium-shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get a Quote
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Additional Services - Premium Grid */}
      <AnimatedSection>
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                More Services
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
                Additional Services
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of home improvement services
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {additionalServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="group relative bg-white p-10 rounded-3xl premium-shadow-lg hover:premium-shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl`}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div
                    className="text-6xl mb-6 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Premium CTA */}
      <motion.section
        className="relative py-40 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </motion.div>
        <div className="relative z-10 container mx-auto max-w-6xl text-center text-white">
          <motion.h2
            className="text-6xl md:text-8xl font-serif font-bold mb-10 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl mb-14 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact us today for a free consultation and quote on any of our services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/contact">
              <motion.button
                className="bg-white text-blue-600 px-14 py-7 rounded-2xl text-2xl font-bold premium-shadow-xl glow"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
