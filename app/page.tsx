"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxImage from "@/components/ParallaxImage";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Premium Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParallaxImage
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Home renovation"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>
        
        {/* Animated Blob Decorations */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl blob"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl blob"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="relative z-10 container mx-auto px-4 text-center max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-8 px-6 py-3 glass-effect-dark rounded-full text-sm font-semibold text-white border border-white/20"
          >
            ✨ Trusted by 500+ Homeowners Worldwide
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-10 leading-[0.9] drop-shadow-2xl"
          >
            Reliable Home
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Contractor Services
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl mb-14 text-gray-200 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Expert repairs and renovations you can trust. Transforming houses into homes with precision, passion, and unparalleled craftsmanship.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 premium-shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Get a Free Quote
                <motion.svg
                  className="w-6 h-6 ml-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            
            <Link
              href="/services"
              className="px-12 py-6 glass-effect-dark text-white rounded-2xl text-xl font-bold hover:bg-white/20 transition-all duration-300 premium-shadow-lg border border-white/20 backdrop-blur-xl"
            >
              View Services
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Animated Stats Section */}
      <AnimatedSection>
        <section className="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[
                { number: "15+", label: "Years Experience", color: "from-blue-500 to-blue-600" },
                { number: "500+", label: "Happy Clients", color: "from-purple-500 to-purple-600" },
                { number: "1000+", label: "Projects Completed", color: "from-emerald-500 to-emerald-600" },
                { number: "100%", label: "Satisfaction Rate", color: "from-amber-500 to-amber-600" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`text-6xl md:text-7xl font-serif font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm md:text-base text-gray-600 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us - Creative Split Layout */}
      <AnimatedSection>
        <section className="section-padding bg-white relative">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                  Why Choose Us
                </div>
                <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                  Excellence in Every
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Detail
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  With over 15 years of experience, we've built a reputation for excellence in home improvement and renovation services. Our commitment to quality, attention to detail, and customer satisfaction sets us apart.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 font-bold text-lg hover:text-purple-600 group transition-colors"
                >
                  Learn More About Us
                  <motion.svg
                    className="w-6 h-6 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden premium-shadow-xl">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                    alt="Professional contractor team"
                    className="w-full h-full"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl premium-shadow-xl hidden lg:block"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </motion.div>
            </div>

            {/* Feature Cards - Animated Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏆",
                  title: "15+ Years Experience",
                  description: "Our team brings decades of combined experience in residential construction, renovation, and repair work.",
                  gradient: "from-blue-500 to-blue-600",
                },
                {
                  icon: "✅",
                  title: "Licensed & Insured",
                  description: "Fully licensed, bonded, and insured for your peace of mind. We meet all local and state requirements.",
                  gradient: "from-emerald-500 to-emerald-600",
                },
                {
                  icon: "⭐",
                  title: "100% Satisfaction",
                  description: "We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction.",
                  gradient: "from-amber-500 to-amber-600",
                },
              ].map((feature, idx) => (
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
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-full blur-2xl`}
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                  <motion.div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-4xl mb-6 relative z-10`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Preview - Creative Masonry */}
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
                Our Services
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
                Comprehensive Solutions
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we deliver exceptional results
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Plumbing Repairs",
                  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
                  description: "Expert plumbing services for all your repair and maintenance needs.",
                  link: "/services",
                },
                {
                  title: "Kitchen Renovations",
                  image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=600&q=80",
                  description: "Transform your kitchen into a beautiful and functional space.",
                  link: "/services",
                },
                {
                  title: "Exterior Painting",
                  image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
                  description: "Protect and beautify your home's exterior with professional painting.",
                  link: "/services",
                },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                >
                  <Link
                    href={service.link}
                    className="group relative block overflow-hidden rounded-3xl premium-shadow-xl hover:premium-shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-96">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                      <motion.h3
                        className="text-4xl font-serif font-bold mb-4"
                        whileHover={{ x: 10 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-gray-200 mb-6 text-lg">{service.description}</p>
                      <motion.span
                        className="inline-flex items-center text-blue-400 font-bold text-lg"
                        whileHover={{ x: 10 }}
                      >
                        Learn More
                        <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Timeline - Creative Design */}
      <AnimatedSection>
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="container mx-auto max-w-7xl px-4">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                Our Process
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
                How We Work
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-12 relative">
              {/* Animated Connecting Line */}
              <motion.div
                className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              
              {[
                { step: "01", title: "Consultation", description: "Free consultation to understand your vision and requirements." },
                { step: "02", title: "Planning", description: "Detailed planning and design to ensure every detail is perfect." },
                { step: "03", title: "Execution", description: "Professional installation with regular updates and communication." },
                { step: "04", title: "Completion", description: "Final walkthrough and warranty to ensure your satisfaction." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                >
                  <motion.div
                    className="relative z-10 w-36 h-36 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center premium-shadow-xl"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-5xl font-serif font-bold text-white">{item.step}</span>
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-white/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Premium Testimonials */}
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
                Testimonials
              </div>
              <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 mb-8">
                What Our Clients Say
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Outstanding work! The team was professional, punctual, and delivered exactly what they promised. Our kitchen renovation exceeded our expectations. The attention to detail was remarkable.",
                  author: "Sarah Johnson",
                  role: "Homeowner, Kitchen Renovation",
                  rating: 5,
                },
                {
                  quote: "I've used their services multiple times for various projects. Always reliable, fair pricing, and excellent results. Highly recommend!",
                  author: "Michael Chen",
                  role: "Property Manager",
                  rating: 5,
                },
                {
                  quote: "The best contractor I've ever worked with. They transformed our entire home. Professional, courteous, and incredibly skilled.",
                  author: "Jennifer Martinez",
                  role: "Homeowner, Full Home Renovation",
                  rating: 5,
                },
                {
                  quote: "Quick response time and excellent service. They fixed our plumbing emergency on a weekend and saved us from a major disaster.",
                  author: "David Thompson",
                  role: "Homeowner, Emergency Plumbing",
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-white to-gray-50 p-12 rounded-3xl premium-shadow-xl hover:premium-shadow-2xl transition-all duration-500 border border-gray-100"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex items-center mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400 text-3xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.1, type: "spring" }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-xl leading-relaxed mb-10 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-5 flex items-center justify-center text-white font-bold text-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {testimonial.author.charAt(0)}
                    </motion.div>
                    <div>
                      <p className="text-gray-900 font-bold text-xl">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
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
            Ready to Transform
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Your Home?
            </span>
          </motion.h2>
          <motion.p
            className="text-2xl md:text-3xl mb-14 text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get a free consultation and quote today. No obligation, just expert advice from professionals who care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-14 py-7 rounded-2xl text-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 premium-shadow-xl glow"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
