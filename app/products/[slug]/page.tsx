// app/products/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, getMetafieldValue } from '@/lib/cosmic'

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const name = getMetafieldValue(product.metadata?.name) || product.title
  const description = getMetafieldValue(product.metadata?.description)
  const price = product.metadata?.price
  const unit = getMetafieldValue(product.metadata?.unit)
  const origin = getMetafieldValue(product.metadata?.origin)
  const inStock = product.metadata?.in_stock
  const image = product.metadata?.image
  const category = product.metadata?.category
  const supplier = product.metadata?.supplier

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/products" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-square">
          {image ? (
            <img
              src={`${image.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No image available
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-primary-200"
            >
              {getMetafieldValue(category.metadata?.name) || category.title}
            </Link>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{name}</h1>

          <div className="flex items-baseline gap-2 mb-6">
            {price !== undefined && price !== null && (
              <span className="text-4xl font-bold text-primary-600">
                ${typeof price === 'number' ? price.toFixed(2) : price}
              </span>
            )}
            {unit && <span className="text-gray-500">/ {unit}</span>}
          </div>

          <div className="mb-6">
            {inStock ? (
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                In Stock
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Out of Stock
              </span>
            )}
          </div>

          {description && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          )}

          {origin && (
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Origin
              </h3>
              <p className="text-gray-900">{origin}</p>
            </div>
          )}

          {supplier && (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Supplied By
              </h3>
              <Link href={`/suppliers/${supplier.slug}`} className="flex items-center gap-4 group">
                {supplier.metadata?.photo && (
                  <img
                    src={`${supplier.metadata.photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={getMetafieldValue(supplier.metadata?.name) || supplier.title}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {getMetafieldValue(supplier.metadata?.name) || supplier.title}
                  </p>
                  {supplier.metadata?.location && (
                    <p className="text-sm text-gray-500">
                      {getMetafieldValue(supplier.metadata.location)}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}