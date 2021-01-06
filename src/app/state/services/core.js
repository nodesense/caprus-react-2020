import axios from 'axios';


export const jsonApi = (url, options = {}) => {
    return axios(url, options);
}

export const getJson = (url, options = {}) => {
    return jsonApi(url, {
        method: 'GET',
        ...options
    })
}


export const postJson = (url, options = {}) => {
    return jsonApi({
        url,
        method: 'POST',
        ...options
    })
}
