export const methods = {
    get(url) {
        return fetch(url, {
            headers: {
                // значение этого заголовка обычно ставится автоматически,
                // в зависимости от тела запроса
                "Content-Type": "text/plain;charset=UTF-8",
                "Access-Control-Allow-Origin": "*"

            },

        }).then(data => data.json())
    },
}
