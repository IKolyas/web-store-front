const localServer = 'http://127.0.0.1:8000';
const globalServer = 'https://web-store-server.herokuapp.com'

const baseUrl = localServer;
export const urls = {
    catalogUrl: `${baseUrl}/api/v1/products/?`,
    dropdownCategoryUrl: `${baseUrl}/api/v1/products/dropdown_categories/`,
    categorySizes: `${baseUrl}/api/v1/products/category_sizes/?`,
    article: `${baseUrl}/api/v1/products/article/?id=`,
    basket: `${baseUrl}/api/v1/basket/?id=`
    // test add cart
}
