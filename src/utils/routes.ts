export const routes = {
  home: '/',
  contact: '/kontakt',

  products: '/produkty?kategoria=all',
  getProduct: (id: string) => `/produkty/${id}`,

  adminPanel: '/panel-admina'
}