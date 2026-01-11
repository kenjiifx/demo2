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
    // Handle form submission here
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Contact us for your free consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg sticky top-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-8 mb-8">
                  <div>
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-semibold">Phone</p>
                    </div>
                    <a
                      href="tel:+1234567890"
                      className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors block ml-16"
                    >
                      (123) 456-7890
                    </a>
                    <p className="text-gray-600 ml-16 mt-1">
                      Available 24/7 for emergencies
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-semibold">Email</p>
                    </div>
                    <a
                      href="mailto:info@homecontractorpro.com"
                      className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors break-all block ml-16"
                    >
                      info@homecontractorpro.com
                    </a>
                    <p className="text-gray-600 ml-16 mt-1">
                      We respond within 24 hours
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-600 font-semibold">Address</p>
                    </div>
                    <p className="text-gray-700 ml-16">
                      123 Contractor Street
                      <br />
                      Building City, ST 12345
                    </p>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold">Emergency Only</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible. All consultations are free and without obligation.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-semibold mb-2"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-semibold mb-2"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-semibold mb-2"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none transition-all"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg transform hover:scale-105 transition-transform"
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Contact Us Today?
            </h2>
            <p className="text-xl text-gray-600">
              Get started on your home improvement project with confidence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Free Consultation
              </h3>
              <p className="text-gray-700">
                No obligation consultation to discuss your project and answer all
                your questions.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Detailed Quote
              </h3>
              <p className="text-gray-700">
                Transparent pricing with detailed breakdowns so you know exactly
                what you're paying for.
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Response
              </h3>
              <p className="text-gray-700">
                We respond to all inquiries within 24 hours, often much sooner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - contact us today for your free consultation and quote.
          </p>
          <Link
            href="/services"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-2xl mr-4"
          >
            View Our Services
          </Link>
          <a
            href="tel:+1234567890"
            className="inline-block bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
      </section>
    </div>
  );
}
