const localServer = 'http://127.0.0.1:8000';
const globalServer = 'https://web-store-server.herokuapp.com'

const baseUrl = globalServer;
export const urls = {
    products: `${baseUrl}/api/v1/products/`,
    navigationCategory: `${baseUrl}/api/v1/products/dropdown_categories/`,
    categorySizes: `${baseUrl}/api/v1/products/category_sizes/?`,
    article: `${baseUrl}/api/v1/products/article/?id=`,
    basket: `${baseUrl}/api/v1/basket/?id=`,
    // test add cart

    // img
    imagesUrl: `https://raw.githubusercontent.com/IKolyas/static/master/store/media/images/`
}
