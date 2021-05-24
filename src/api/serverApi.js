import fetch from "cross-fetch";

export const fetchMethods = {
    get(url, token = undefined, data = undefined) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': token ? `Token ${token}` : null
            },
        })
            .then(response => response.json())
    },
    post(url, data) {
        let token = data.token || null
        let content = data.content || null
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': token ? `Token ${token}` : null
            },
            body: JSON.stringify(content)
        })
            .then(response => response.json())
    },
    logout(url, token) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': token ? `Token ${token}` : null
            },
        })
    },
    getUser(url, token, data) {
        return fetch(`${url}?${data}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': token ? `Token ${token}` : null
            },
        })
            .then(response => response.json())

    }
}