import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Home renovation"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-gray-900">
            ✨ Trusted by 500+ Homeowners
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-display font-serif font-bold mb-8 leading-tight drop-shadow-2xl animate-fade-in-up">
            Reliable Home
            <br />
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Contractor Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
            Expert repairs and renovations you can trust. Transforming houses into homes with precision, passion, and unparalleled craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 premium-shadow-lg overflow-hidden"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="/services"
              className="px-10 py-5 glass-effect text-gray-900 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all duration-300 premium-shadow"
            >
              View Services
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Happy Clients" },
              { number: "1000+", label: "Projects Completed" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Creative Layout */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="inline-block mb-6 text-sm font-semibold text-blue-600 uppercase tracking-widest">
                Why Choose Us
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                Excellence in Every
                <span className="block gradient-text">Detail</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over 15 years of experience, we've built a reputation for excellence in home improvement and renovation services. Our commitment to quality, attention to detail, and customer satisfaction sets us apart.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group"
              >
                Learn More About Us
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden premium-shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Professional contractor team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600 rounded-2xl premium-shadow-lg hidden lg:block"></div>
            </div>
          </div>

          {/* Feature Cards - Asymmetric Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "15+ Years Experience",
                description: "Our team brings decades of combined experience in residential construction, renovation, and repair work.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: "✅",
                title: "Licensed & Insured",
                description: "Fully licensed, bonded, and insured for your peace of mind. We meet all local and state requirements.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: "⭐",
                title: "100% Satisfaction",
                description: "We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction.",
                color: "from-amber-500 to-amber-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview - Creative Masonry Style */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Our Services
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional results
            </p>
          </div>
          
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
              <Link
                key={idx}
                href={service.link}
                className="group relative overflow-hidden rounded-3xl premium-shadow-lg hover:premium-shadow-xl transition-all duration-500"
              >
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-serif font-bold mb-3 group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Creative Timeline */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <div className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Our Process
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              How We Work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
            
            {[
              { step: "01", title: "Consultation", description: "Free consultation to understand your vision and requirements." },
              { step: "02", title: "Planning", description: "Detailed planning and design to ensure every detail is perfect." },
              { step: "03", title: "Execution", description: "Professional installation with regular updates and communication." },
              { step: "04", title: "Completion", description: "Final walkthrough and warranty to ensure your satisfaction." },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="relative z-10 w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center premium-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-serif font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Testimonials
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          
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
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-3xl premium-shadow-lg hover:premium-shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-lg">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
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
            Ready to Transform
            <br />
            Your Home?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-2xl mx-auto">
            Get a free consultation and quote today. No obligation, just expert advice from professionals who care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-12 py-6 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 premium-shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
