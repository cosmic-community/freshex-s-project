import Link from 'next/link'
import { getAllProducts, getAllCategories, getAllSuppliers } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import SupplierCard from '@/components/SupplierCard'

export default async function HomePage() {
  const [products, categories, suppliers] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
    getAllSuppliers(),
  ])

  const featuredProducts = products.slice(0, 6)
  const featuredSuppliers = suppliers.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://imgix.cosmicjs.com/5bb8ccf0-5a4f-11f1-93fc-1339ba0f6cad-autopilot-photo-1540420773420-3366772f4999-1779943231276.jpeg?w=2400&h=1200&fit=crop&auto=format,compress"
            alt="Fresh produce background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Fresh from Farm to Your Table
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-50">
              Discover the finest local produce, sourced directly from trusted farmers and suppliers. Quality you can taste, freshness you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Shop Products
              </Link>
              <Link
                href="/suppliers"
                className="bg-primary-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-950 transition-colors border border-primary-700"
              >
                Meet Our Farmers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      {categories.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Shop by Category
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our wide selection of fresh products organized by category
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Featured Products
                </h2>
                <p className="text-gray-600">Fresh picks from our marketplace</p>
              </div>
              <Link
                href="/products"
                className="text-primary-600 hover:text-primary-700 font-semibold hidden md:block"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Suppliers */}
      {featuredSuppliers.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Suppliers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real farmers, real stories. Get to know the people behind your food.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredSuppliers.map((supplier) => (
                <SupplierCard key={supplier.id} supplier={supplier} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}