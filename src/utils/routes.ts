export const routes = {
  home: '/',
  login: '/logowanie',
  contact: '/kontakt',

  products: '/produkty?kategoria=all',
  getProduct: (id: string) => `/produkty/${id}`,

  adminPanel: '/panel-admina'
}