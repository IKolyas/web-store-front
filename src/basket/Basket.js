import {methods} from '../api/crud.js'
import {urls} from '../api/urls.js'

export default class Basket {
    basketStore = [];
    basket = [];

    constructor() {
        this.basketStore = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
    }

    addProduct(itemId, quantity= 1) {
        let searchItem = this.basketStore.find((item) => item.id === itemId) || false;

        if (searchItem && quantity !== 1) {
            searchItem.quantity = quantity;

        } else if (searchItem && quantity === 1) {
            searchItem.quantity += quantity;

        } else if (!searchItem) {
            this.basketStore.push({'id': itemId, 'quantity': quantity});
        }
        if (this.basketStore !== undefined) {
            this._basketSyncing()
            this.getBasketProducts().then()
        }
    }

    removeProduct(itemId) {
        if (itemId) {
            let searchItem = this.basketStore.find((item) => item.id === itemId);
            if (searchItem) {
                let indexItem = this.basketStore.indexOf(searchItem)
                this.basketStore.splice(indexItem, 1)
            }
        }

        this.getBasketProducts().then()


    }

    updateProduct (itemId, quantity) {
        if (itemId && quantity) {
            let searchItem = this.basketStore.find((item) => item.id === itemId);
            searchItem.quantity = quantity
        }
        this._basketSyncing()
        this.getBasketProducts().then()
    }


    _basketSyncing() {
            localStorage.setItem("basket", JSON.stringify(this.basketStore))
    }

    _urlsIdes() {
        let ids = [];
        this.basketStore.forEach(item => ids.push(item.id));
        return `${urls.basket}${ids}&limit=100`;

    }

    async getBasketProducts () {
        if (this.basketStore && this.basketStore.length > 0) {
            this._basketSyncing()
            let url = this._urlsIdes()
            await methods.get(url)
                .then((req) => {
                    let basket = [...req.results]
                    basket.map((item) => {
                        const storeItem = this.basketStore.find(prod => item.id === prod.id) || [];
                        item['quantity'] = storeItem.quantity

                    })
                    this.basket = basket
                })
        } else {
            this._basketSyncing()
            this.basket = []
        }

    }

}
