import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Plumbing Repairs",
      description:
        "Expert plumbing services for all your repair and maintenance needs. From leaky faucets to complete pipe replacements, our licensed plumbers ensure your plumbing system works efficiently and reliably.",
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
    },
    {
      title: "Kitchen Renovations",
      description:
        "Transform your kitchen into a beautiful and functional space. We handle everything from design consultation to installation, including cabinets, countertops, flooring, and appliances.",
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
    },
    {
      title: "Exterior Painting",
      description:
        "Protect and beautify your home's exterior with our professional painting services. We use high-quality paints and proper preparation techniques to ensure a long-lasting, beautiful finish.",
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
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
            alt="Our services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl drop-shadow-md">
            Quality craftsmanship for all your home improvement needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-20 ${
                index % 2 === 0
                  ? "grid md:grid-cols-2 gap-12 items-center"
                  : "grid md:grid-cols-2 gap-12 items-center"
              }`}
            >
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2" : ""
                } relative h-96 rounded-2xl overflow-hidden shadow-2xl`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {service.detailedDescription}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2 text-xl">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              We offer a wide range of home improvement services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Electrical Work
              </h3>
              <p className="text-gray-700">
                Licensed electricians for all your electrical needs, from
                installations to repairs and upgrades.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bathroom Renovations
              </h3>
              <p className="text-gray-700">
                Complete bathroom makeovers including plumbing, tiling, fixtures,
                and custom vanities.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Flooring Installation
              </h3>
              <p className="text-gray-700">
                Hardwood, tile, laminate, and carpet installation services for
                every room in your home.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Roofing Services
              </h3>
              <p className="text-gray-700">
                Roof repairs, replacements, and maintenance to protect your home
                from the elements.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Deck & Patio Construction
              </h3>
              <p className="text-gray-700">
                Custom deck and patio design and construction to expand your
                living space outdoors.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                General Repairs
              </h3>
              <p className="text-gray-700">
                Handyman services for all your home maintenance and repair needs,
                big or small.
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
            Contact us today for a free consultation and quote on any of our
            services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors shadow-2xl"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
