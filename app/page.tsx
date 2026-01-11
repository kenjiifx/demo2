import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Home renovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
            Reliable Home Contractor Services
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 drop-shadow-md">
            Expert repairs and renovations you can trust.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, we've built a reputation for
              excellence in home improvement and renovation services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                15+ Years Experience
              </h3>
              <p className="text-gray-700">
                Our team brings decades of combined experience in residential
                construction, renovation, and repair work.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Licensed & Insured
              </h3>
              <p className="text-gray-700">
                Fully licensed, bonded, and insured for your peace of mind. We
                meet all local and state requirements.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                100% Satisfaction
              </h3>
              <p className="text-gray-700">
                We stand behind our work with comprehensive warranties and a
                commitment to your complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Professional contractor team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Home Improvement Partner
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With years of experience in the home improvement industry, we
                pride ourselves on delivering exceptional craftsmanship and
                reliable service. From minor repairs to major renovations, our
                team of skilled professionals is committed to transforming your
                house into the home of your dreams.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We combine quality materials, expert workmanship, and outstanding
                customer service to ensure your complete satisfaction. Every
                project is approached with attention to detail, respect for your
                timeline, and a commitment to staying within budget.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive services cover everything from plumbing and
                electrical work to full kitchen and bathroom renovations. We
                work closely with you throughout the entire process, from initial
                consultation to final walkthrough, ensuring your vision becomes
                reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive home improvement solutions for every need
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
                  alt="Plumbing services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Plumbing Repairs
                </h3>
                <p className="text-gray-700 mb-4">
                  Expert plumbing services for all your repair and maintenance
                  needs.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e4?w=600&q=80"
                  alt="Kitchen renovation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Kitchen Renovations
                </h3>
                <p className="text-gray-700 mb-4">
                  Transform your kitchen into a beautiful and functional space.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80"
                  alt="Exterior painting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Exterior Painting
                </h3>
                <p className="text-gray-700 mb-4">
                  Protect and beautify your home's exterior with professional
                  painting.
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and designed with you in mind
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Consultation
              </h3>
              <p className="text-gray-700">
                We start with a free consultation to understand your vision and
                requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Planning
              </h3>
              <p className="text-gray-700">
                Detailed planning and design to ensure every detail is perfect.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Execution
              </h3>
              <p className="text-gray-700">
                Professional installation and construction with regular updates.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Completion
              </h3>
              <p className="text-gray-700">
                Final walkthrough and warranty to ensure your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Outstanding work! The team was professional, punctual, and
                delivered exactly what they promised. Our kitchen renovation
                exceeded our expectations. The attention to detail was
                remarkable, and they finished on time and within budget. I
                couldn't be happier with the results."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg">
                    Sarah Johnson
                  </p>
                  <p className="text-gray-600">Homeowner, Kitchen Renovation</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "I've used their services multiple times for various projects.
                Always reliable, fair pricing, and excellent results. Highly
                recommend! They've done everything from plumbing repairs to
                exterior painting, and every job has been completed to the
                highest standards."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg">
                    Michael Chen
                  </p>
                  <p className="text-gray-600">Property Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "The best contractor I've ever worked with. They transformed our
                entire home with their renovation services. Professional,
                courteous, and incredibly skilled. The project was completed
                ahead of schedule, and the quality is outstanding."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg">
                    Jennifer Martinez
                  </p>
                  <p className="text-gray-600">Homeowner, Full Home Renovation</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                "Quick response time and excellent service. They fixed our
                plumbing emergency on a weekend and saved us from a major
                disaster. Fair pricing and honest communication throughout. Will
                definitely call them again for future projects."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-900 font-semibold text-lg">
                    David Thompson
                  </p>
                  <p className="text-gray-600">Homeowner, Emergency Plumbing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and quote today. No obligation, just expert
            advice.
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
