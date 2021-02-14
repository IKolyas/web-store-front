// const baseUrl = 'http://127.0.0.1:8000';
const baseUrl = 'https://google.com/https://web-store-server.herokuapp.com';
export const urls = {
    catalogUrl: `${baseUrl}/api/v1/products/?`,
    dropdownCategoryUrl: `${baseUrl}/api/v1/products/dropdown_categories/`,
    categorySizes: `${baseUrl}/api/v1/products/category_sizes/?`,
    article: `${baseUrl}/api/v1/products/article/?id=`,
    basket: `${baseUrl}/api/v1/basket/?id=`
    // test add cart
}
