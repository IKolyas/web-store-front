const localServer = 'http://127.0.0.1:8000';
const globalServer = 'https://web-store-server.herokuapp.com'

const baseUrl = globalServer;
export const urls = {
    products: `${baseUrl}/api/products/`,
    navigationCategory: `${baseUrl}/api/products/dropdown_categories/`,
    categorySizes: `${baseUrl}/api/products/category_sizes/?`,
    article: `${baseUrl}/api/products/article/?id=`,
    basket: `${baseUrl}/api/basket/?id=`,
    // test add cart

    // img
    imagesUrl: `https://raw.githubusercontent.com/IKolyas/static/master/store/media/images/`,
    //user
    userAuth: `${baseUrl}/api-token-auth/`,
    userLogout: `${baseUrl}/auth/token/logout/`,
    // getUser: `${baseUrl}/auth/users/me/`,
    getUser: `${baseUrl}/users/profile/`,
    createUser: `${baseUrl}/auth/users/`
}
