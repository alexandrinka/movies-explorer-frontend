import { MOVIES_URL } from './constants';

class MoviesApi {
    constructor({ address, token }) {
        this._address = address;
        this._headers = {
            "Content-Type": "application/json"
        };
    }

    _handleResponse = (res) => {
        return res.ok
            ? res.json()
            : Promise.reject(`Ошибка ${res.status}`);
    };

    getMovies() {
        return fetch(`${this._address}`, {
            method: "GET",
            headers: this._headers,
        }).then(this._handleResponse);
    }
}

export const moviesApi = new MoviesApi({
    address: MOVIES_URL
});