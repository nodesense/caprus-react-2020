import config from '../../config';

import {getJson, postJson} from './core';

export const getProductsES6 = () => {
    return getJson(`${config.API_END_POINT}/api/products`)
           .then (response => response.data)
}

// ES7 await and async
// cleaner code
export const getProducts = async (options = {}) => {
    try  {
        const response = await getJson(`${config.API_END_POINT}/delayed/api/products`, options);
        return response.data;
    }
    catch(ex) {

    }
}