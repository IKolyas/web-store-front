export const fetchMethods = {
    get(url) {
        return fetch(url).then(data => data.json())
    },
}
