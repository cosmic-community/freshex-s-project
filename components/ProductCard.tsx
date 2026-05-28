import Link from 'next/link'
import type { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ProductCard({ product }: { product: Product }) {
  const name = getMetafieldValue(product.metadata?.name) || product.title
  const price = product.metadata?.price
  const unit = getMetafieldValue(product.metadata?.unit)
  const image = product.metadata?.image
  const inStock = product.metadata?.in_stock
  const category = product.metadata?.category

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
    >
      <div className="aspect-square bg-gray-100 overflow-hidden relative">
        {image ? (
          <img
            src={`${image.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image
          </div>
        )}
        {!inStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>

      <div className="p-5">
        {category && (
          <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}
        <h3 className="text-lg font-semibold text-gray-900 mt-1 mb-2 group-hover:text-primary-600 transition-colors line-clamp-1">
          {name}
        </h3>
        <div className="flex items-baseline gap-1">
          {price !== undefined && price !== null && (
            <span className="text-xl font-bold text-gray-900">
              ${typeof price === 'number' ? price.toFixed(2) : price}
            </span>
          )}
          {unit && <span className="text-sm text-gray-500">/ {unit}</span>}
        </div>
      </div>
    </Link>
  )
}