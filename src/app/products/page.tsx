import ProductFilter from "../../components/products/ProductFilter";
import ProductCard from "../../components/products/ProductCard";
import { productData } from "../../data/products";

export const metadata = {
  title: "Nasze wypieki | Torty AGI Cukiernia",
  description: "Przeglądaj nasz pyszny wybór tortów, ciast i słodkości.",
};

export default function ProductsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Nasze słodkie kreacje</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Przeglądaj nasz wybór ręcznie robionych wypieków tworzonych z miłością i najlepszych składników. Idealne na każdą okazję lub po prostu dla
            przyjemności.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="w-full lg:w-1/4">
            <ProductFilter />
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
