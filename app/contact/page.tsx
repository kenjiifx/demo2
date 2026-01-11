"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "(123) 456-7890",
      link: "tel:+1234567890",
      subtext: "Available 24/7 for emergencies",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "info@homecontractorpro.com",
      link: "mailto:info@homecontractorpro.com",
      subtext: "We respond within 24 hours",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Address",
      value: "123 Contractor Street",
      link: "#",
      subtext: "Building City, ST 12345",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency Only" },
  ];

  const benefits = [
    {
      icon: "💬",
      title: "Free Consultation",
      description: "No obligation consultation to discuss your project and answer all your questions.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: "📋",
      title: "Detailed Quote",
      description: "Transparent pricing with detailed breakdowns so you know exactly what you're paying for.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours, often much sooner.",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Premium Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>
        
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl blob"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
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
            Get in Touch
          </motion.div>
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-10 leading-[0.9] drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Contact us for your free consultation.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Contact Section - Creative Split Layout */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Contact Methods */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl premium-shadow-xl border border-gray-100">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-10">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  {contactMethods.map((method, idx) => (
                    <motion.a
                      key={idx}
                      href={method.link}
                      className="block group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-start">
                        <motion.div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white mr-5 flex-shrink-0`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {method.icon}
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                            {method.label}
                          </p>
                          <p className="text-2xl font-bold text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                            {method.value}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            {method.subtext}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <motion.div
                className="bg-white p-10 rounded-3xl premium-shadow-xl border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Business Hours
                </h3>
                <div className="space-y-5">
                  {businessHours.map((schedule, idx) => (
                    <motion.div
                      key={idx}
                      className="flex justify-between items-center pb-5 border-b border-gray-100 last:border-0 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-gray-700 font-semibold text-lg">{schedule.day}</span>
                      <span className="text-gray-900 font-bold text-lg">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-gray-50 to-white p-12 md:p-16 rounded-3xl premium-shadow-xl border border-gray-100">
                <div className="mb-10">
                  <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                    Send Us a Message
                  </div>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
                    Let's Start Your Project
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. All consultations are free and without obligation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wider"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white font-medium text-lg"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wider"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white font-medium text-lg"
                        placeholder="john@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wider"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white font-medium text-lg"
                      placeholder="(123) 456-7890"
                    />
                  </motion.div>

                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-bold mb-3 text-sm uppercase tracking-wider"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={8}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all resize-none bg-white font-medium text-lg"
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 premium-shadow-xl glow"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <AnimatedSection>
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                Why Contact Us
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
                Why Contact Us Today?
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Get started on your home improvement project with confidence
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="text-center p-12 bg-white rounded-3xl premium-shadow-xl hover:premium-shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.gradient} opacity-10 rounded-full blur-2xl`}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div
                    className="text-7xl mb-8 relative z-10"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-5 relative z-10">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                    {benefit.description}
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
            Don't wait - contact us today for your free consultation and quote.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link href="/services">
              <motion.button
                className="bg-white text-blue-600 px-12 py-6 rounded-2xl text-xl font-bold premium-shadow-xl glow"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Services
              </motion.button>
            </Link>
            <a href="tel:+1234567890">
              <motion.button
                className="bg-transparent border-3 border-white text-white px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 premium-shadow-xl"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Now: (123) 456-7890
              </motion.button>
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
