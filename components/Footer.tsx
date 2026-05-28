import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥬</span>
              <span className="text-2xl font-bold text-white">FreshEx</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Connecting you with the finest local farmers and producers. Fresh, quality ingredients delivered straight from the source.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors">Categories</Link></li>
              <li><Link href="/suppliers" className="hover:text-white transition-colors">Suppliers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Farm to Table</span></li>
              <li><span className="text-gray-400">Quality Promise</span></li>
              <li><span className="text-gray-400">Local Sourcing</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FreshEx. Fresh produce, freshly delivered.</p>
        </div>
      </div>
    </footer>
  )
}