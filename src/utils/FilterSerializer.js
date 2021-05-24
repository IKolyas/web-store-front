export class FilterSerializer {
    getParams = ''

    getFilterParams(filters) {
        Object.keys(filters).forEach((key) => {

            if (filters[key]) {
                this.getParams += `&${key}=${filters[key]}`
            }
        }, filters)
        return this.getParams.slice(1)
    }
}
