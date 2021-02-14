export const methods = {
    get(url) {
        return fetch(url, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true',
            }
        }).then(data => data.json())
    },
}
