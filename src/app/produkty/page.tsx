import { getPageConfig } from "../../data/get-page-data";
import ProductsClientWrapper from "../../components/products/ProductsClientWrapper";

export default async function Page() {
  const { products, allProducts, categories } = await getPageConfig();

  const initialProducts = allProducts.filter((product) => products.includes(product.id));

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="heading-1 mb-4">Nasze słodkie kreacje</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Przeglądaj nasz wybór ręcznie robionych wypieków tworzonych z miłością i najlepszych składników. Idealne na każdą okazję lub po prostu dla
            przyjemności.
          </p>
        </div>

        <ProductsClientWrapper initialProducts={initialProducts} categories={categories} />
      </div>
    </div>
  );
}
