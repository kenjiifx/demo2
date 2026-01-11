import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0 hover:text-blue-600 transition-colors"
          >
            Home Contractor Pro
          </Link>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
