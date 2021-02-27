import {fetchMethods} from '../api/serverApi.js'
import {urls} from '../api/urls.js'

export default class Basket {
    basketStore = [];
    basket = [];

    constructor() {
        this.basketStore = localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
    }

    change(id, qut) {
       let searchItem = this.basketStore.find((item) => id === item.id ) || false;

       if (!searchItem) {
           this._pushToBasket(id)
           this.getBasketProducts().then()
           return true
       }

       if (qut === 1) {
           searchItem.quantity += qut;
       } else if (qut > 1) {
           searchItem.quantity = qut;
       } else if (searchItem.quantity >= 2 && qut === -1) {
           searchItem.quantity += qut;
       } else {
           this._removeFromBasket(searchItem)
       }
        this.getBasketProducts().then()
    }

    _pushToBasket(id) {
        this.basketStore.push({'id': id, 'quantity': 1});
    }

    _removeFromBasket(item) {
        let indexItem = this.basketStore.indexOf(item)
        this.basketStore.splice(indexItem, 1)
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
            await fetchMethods.get(url)
                .then((req) => {
                    let basket = [...req.results]
                    basket.map((item) => {
                        const storeItem = this.basketStore.find(prod => item.id === prod.id) || [];
                        item['quantity'] = storeItem.quantity
                        this.basket = basket
                    })
                })
        } else {
            this._basketSyncing()
            this.basket = []
        }
    }
}
