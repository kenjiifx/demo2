import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 md:mb-0 hover:text-blue-600 transition-colors"
          >
            Home Contractor Pro
          </Link>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-semibold relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold premium-shadow-lg hover:premium-shadow-xl transform hover:scale-105"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
