import Link from 'next/link'
import type { Supplier } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SupplierCard({ supplier }: { supplier: Supplier }) {
  const name = getMetafieldValue(supplier.metadata?.name) || supplier.title
  const location = getMetafieldValue(supplier.metadata?.location)
  const bio = getMetafieldValue(supplier.metadata?.bio)
  const photo = supplier.metadata?.photo

  return (
    <Link
      href={`/suppliers/${supplier.slug}`}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span className="text-6xl">👨‍🌾</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        {location && (
          <p className="text-sm text-primary-600 font-medium mb-3 flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </p>
        )}
        {bio && <p className="text-sm text-gray-600 line-clamp-3">{bio}</p>}
      </div>
    </Link>
  )
}