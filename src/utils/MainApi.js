import { BASE_URL, TOKEN_KEY } from './constants';

class MainApi {
    constructor({ address }) {
        this._address = address;
        this._token = localStorage.getItem(TOKEN_KEY);
    }

    _handleResponse = (res) => {
        return res.ok
            ? res.json()
            : res.json().then((err) => Promise.reject({ err, res }));
    };

    getMovies() {
        return fetch(`${this._address}/movies`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${this._token}`,
                "Content-Type": "application/json",
            }
        }).then(this._handleResponse);
    }

    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${this._token}`,
                "Content-Type": "application/json",
            }
        }).then(this._handleResponse);
    }

    updateInfoUser(name, email) {
        return fetch(`${this._address}/users/me`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${this._token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
            }),
        }).then(this._handleResponse);
    }

    createMovie({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, id }) {
        return fetch(`${this._address}/movies`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${this._token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "country": country,
                "director": director,
                "duration": duration,
                "year": year,
                "description": description,
                "image": `https://api.nomoreparties.co${image.url}`,
                "trailerLink": trailerLink,
                "nameRU": nameRU,
                "nameEN": nameEN,
                "thumbnail": `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
                "movieId": id
            }),
        }).then(this._handleResponse);
    }

    deleteMovie(movieId) {
        return fetch(`${this._address}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this._token}`,
                "Content-Type": "application/json",
            },
        }).then(this._handleResponse);
    }
}

export const api = new MainApi({
    address: BASE_URL
});