import { getAllSuppliers } from '@/lib/cosmic'
import SupplierCard from '@/components/SupplierCard'

export const metadata = {
  title: 'Suppliers - FreshEx',
  description: 'Meet our trusted suppliers and farmers',
}

export default async function SuppliersPage() {
  const suppliers = await getAllSuppliers()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Suppliers</h1>
        <p className="text-lg text-gray-600">
          Meet the dedicated farmers and producers behind our fresh products
        </p>
      </div>

      {suppliers.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500">No suppliers available.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {suppliers.map((supplier) => (
            <SupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      )}
    </div>
  )
}