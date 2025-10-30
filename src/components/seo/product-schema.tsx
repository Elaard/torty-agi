import { Product } from '@/data/get-page-data';

interface ProductSchemaProps {
  product: Product;
  categoryName: string;
}

export function ProductSchema({ product, categoryName }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || `${product.name} - ${categoryName}. Ręcznie robiony wypiek z najlepszych składników.`,
    image: product.mainImage || product.images?.[0] || '/images/og-image.jpg',
    brand: {
      '@type': 'Brand',
      name: 'Torty AGI',
    },
    offers: {
      '@type': 'Offer',
      url: `https://torty-agi.pl/oferta/${product.id}`,
      priceCurrency: 'PLN',
      price: product.price || 0,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Torty AGI',
      },
    },
    category: categoryName,
    ...(product.ingredients && {
      recipeIngredient: product.ingredients,
    }),
    ...(product.allergens && {
      suitableForDiet: product.allergens.map((allergen) => ({
        '@type': 'RestrictedDiet',
        name: `Contains ${allergen}`,
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
