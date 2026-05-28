// app/categories/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const icon = getMetafieldValue(category.metadata?.icon)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/categories" className="text-primary-600 hover:text-primary-700 mb-6 inline-block">
        ← All Categories
      </Link>

      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12 mb-12">
        <div className="flex items-center gap-4 mb-4">
          {icon && <span className="text-5xl">{icon}</span>}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{name}</h1>
        </div>
        {description && <p className="text-lg text-gray-700 max-w-3xl">{description}</p>}
        <p className="mt-4 text-sm text-gray-600">
          {products.length} {products.length === 1 ? 'product' : 'products'} in this category
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No products in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}