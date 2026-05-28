import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-3xl">🥬</span>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              FreshEx
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/products" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Categories
            </Link>
            <Link href="/suppliers" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Suppliers
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-4">
            <Link href="/products" className="text-sm text-gray-700 hover:text-primary-600 font-medium">
              Shop
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}