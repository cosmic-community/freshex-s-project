import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const icon = getMetafieldValue(category.metadata?.icon)
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300 text-center"
    >
      {icon && (
        <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
        {name}
      </h3>
      {description && (
        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{description}</p>
      )}
    </Link>
  )
}