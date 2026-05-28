// app/suppliers/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSupplierBySlug, getProductsBySupplier, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export default async function SupplierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supplier = await getSupplierBySlug(slug)

  if (!supplier) {
    notFound()
  }

  const products = await getProductsBySupplier(supplier.id)
  const name = getMetafieldValue(supplier.metadata?.name) || supplier.title
  const bio = getMetafieldValue(supplier.metadata?.bio)
  const location = getMetafieldValue(supplier.metadata?.location)
  const photo = supplier.metadata?.photo

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/suppliers" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
        ← All Suppliers
      </Link>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {photo && (
            <div className="md:col-span-1 aspect-square md:aspect-auto bg-gray-100">
              <img
                src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className={`p-8 md:p-12 ${photo ? 'md:col-span-2' : 'md:col-span-3'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{name}</h1>
            {location && (
              <p className="text-lg text-primary-600 font-medium mb-6 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {location}
              </p>
            )}
            {bio && <p className="text-gray-600 leading-relaxed whitespace-pre-line">{bio}</p>}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Products from {name}
        </h2>
        {products.length === 0 ? (
          <p className="text-gray-500">No products available from this supplier.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}