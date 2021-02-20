import {methods} from '../api/crud.js'
import {urls} from '../api/urls.js'

export default class Basket {
    basketStore = [];
    basket = [];

    constructor() {
        this.basketStore = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
    }

    change(id, qut) {
        let searchItem = this.basketStore.find((item) => id === item.id ) || false;
        if (searchItem) {
            if (qut === 1) {
                searchItem.quantity += qut;
            } else if (qut > 1 ) {
                searchItem.quantity = qut;
            } else if (qut === -1 && searchItem.quantity >= 2) {
                searchItem.quantity += qut;
            } else {
                this._removeProduct(searchItem)
            }
        } else {
            this.basketStore.push({'id': id, 'quantity': qut});
        }
        if (this.basketStore !== undefined) {
            this._basketSyncing()
            this.getBasketProducts().then()
        }
    }

    _removeProduct(item) {
        let indexItem = this.basketStore.indexOf(item)
        this.basketStore.splice(indexItem, 1)
        this.getBasketProducts().then()
    }

    _basketSyncing() {
        localStorage.setItem("basket", JSON.stringify(this.basketStore))
    }

    _urlsIdes() {
        let ids = [];
        if (this.basketStore) {
            this.basketStore.forEach(item => ids.push(item.id));
            return `${urls.basket}${ids}&limit=100`;
        } else {
            return `${urls.basket}`;
        }



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
