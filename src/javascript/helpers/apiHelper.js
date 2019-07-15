const API_URL = 'https://api.myjson.com/bins/1hiqin';

function callApi(method) {
    const url = API_URL;
    const options = {
        method
    };

    return fetch(url, options)
        .then(response =>
            response.ok ? response.json() : Promise.reject(Error('Failed to load'))
        )
        .catch(error => {
            throw error;
        });
}

export { callApi }