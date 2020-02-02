export class FetchApi {
    constructor(shopName) {
        this.url = `http://localhost:3000/db/${shopName}`;
    }
    get(path) {
        const url = path ? `${this.url}` : this.url;
        return fetch(url);
    }
    post(path, body) {
        const url = path ? `${this.url}` : this.url;
        return fetch(url, {
            method: 'POST',
            headers: this._headers(),
            body
        });
    }
    delete(path) {
        const url = path ? `${this.url}` : this.url;
        return fetch(url, {
            method: 'DELETE'
        });
    }
    put(path, body) {
        const url = path ? `${this.url}` : this.url;
        return fetch(url, {
            method: 'PUT',
            headers: this._headers(),
            body
        });
    }
    _headers() {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
    }
}