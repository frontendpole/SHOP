import {
    FetchApi
} from "./fetchApi";

export class Api {
    constructor() {
        this.fetchApi = new FetchApi('sklep_test');
    }
    createItem(id, count, name, price) {
        return this.fetchApi.post(id, {
            count,
            name,
            price
        }).then(response => response.json());
    }
    deleteItem(id) {
        return this.fetchApi.delete(id).then(response => response.json());
    }
    getItem() {

    }
    modifyItem(id, data) {
        return this.fetchApi.put(id, data).then(response => response.json());
    }
    getAll() {
        return this.fetchApi.get().then(response => response.json());
    }
}