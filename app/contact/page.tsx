"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
      color: "from-blue-500 to-blue-600",
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
      color: "from-emerald-500 to-emerald-600",
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
      color: "from-amber-500 to-amber-600",
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
    },
    {
      icon: "📋",
      title: "Detailed Quote",
      description: "Transparent pricing with detailed breakdowns so you know exactly what you're paying for.",
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours, often much sooner.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-gray-900">
            Get in Touch
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            Contact us for your free consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Section - Creative Split Layout */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Methods */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl premium-shadow-lg border border-gray-100">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactMethods.map((method, idx) => (
                    <a
                      key={idx}
                      href={method.link}
                      className="block group"
                    >
                      <div className="flex items-start">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wider">
                            {method.label}
                          </p>
                          <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {method.value}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {method.subtext}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white p-8 rounded-3xl premium-shadow-lg border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                      <span className="text-gray-700 font-medium">{schedule.day}</span>
                      <span className="text-gray-900 font-bold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 md:p-12 rounded-3xl premium-shadow-lg border border-gray-100">
                <div className="mb-8">
                  <div className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                    Send Us a Message
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    Let's Start Your Project
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible. All consultations are free and without obligation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider"
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
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white font-medium"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider"
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
                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider"
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
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all bg-white font-medium"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wider"
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
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all resize-none bg-white font-medium"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 premium-shadow-lg hover:premium-shadow-xl transform hover:scale-[1.02]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Why Contact Us
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Why Contact Us Today?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started on your home improvement project with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="text-center p-10 bg-white rounded-3xl premium-shadow-lg hover:premium-shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-6xl mb-6 hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-5xl text-center text-white">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Don't wait - contact us today for your free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 premium-shadow-lg"
            >
              View Our Services
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-block bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 premium-shadow-lg"
            >
              Call Now: (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
