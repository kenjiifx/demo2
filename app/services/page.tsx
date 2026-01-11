import Image from "next/image";
import Link from "next/link";

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
      color: "from-blue-500 to-blue-600",
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
      color: "from-emerald-500 to-emerald-600",
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
      color: "from-amber-500 to-amber-600",
    },
  ];

  const additionalServices = [
    {
      title: "Electrical Work",
      description: "Licensed electricians for all your electrical needs, from installations to repairs and upgrades.",
      icon: "⚡",
    },
    {
      title: "Bathroom Renovations",
      description: "Complete bathroom makeovers including plumbing, tiling, fixtures, and custom vanities.",
      icon: "🚿",
    },
    {
      title: "Flooring Installation",
      description: "Hardwood, tile, laminate, and carpet installation services for every room in your home.",
      icon: "🏠",
    },
    {
      title: "Roofing Services",
      description: "Roof repairs, replacements, and maintenance to protect your home from the elements.",
      icon: "🏡",
    },
    {
      title: "Deck & Patio Construction",
      description: "Custom deck and patio design and construction to expand your living space outdoors.",
      icon: "🌳",
    },
    {
      title: "General Repairs",
      description: "Handyman services for all your home maintenance and repair needs, big or small.",
      icon: "🔧",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Our services"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-2 glass-effect rounded-full text-sm font-semibold text-gray-900">
            Our Expertise
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight drop-shadow-2xl">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
            Quality craftsmanship for all your home improvement needs
          </p>
        </div>
      </section>

      {/* Main Services - Creative Alternating Layout */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-32 last:mb-0 ${
                index % 2 === 0
                  ? "grid lg:grid-cols-2 gap-16 items-center"
                  : "grid lg:grid-cols-2 gap-16 items-center"
              }`}
            >
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-2" : ""
                } relative group`}
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden premium-shadow-lg group-hover:premium-shadow-xl transition-all duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className={`absolute -bottom-6 ${
                  index % 2 === 1 ? "-left-6" : "-right-6"
                } w-32 h-32 bg-gradient-to-br ${service.color} rounded-2xl premium-shadow-lg hidden lg:block`}></div>
              </div>
              
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`inline-block mb-6 px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-semibold`}>
                  Service {index + 1}
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6 font-medium">
                  {service.shortDescription}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.detailedDescription}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start group/item">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform`}>
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 premium-shadow-lg hover:premium-shadow-xl group"
                >
                  Get a Quote
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services - Premium Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 text-sm font-semibold text-blue-600 uppercase tracking-widest">
              More Services
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of home improvement services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white p-8 rounded-2xl premium-shadow hover:premium-shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
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
            Contact us today for a free consultation and quote on any of our services.
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
