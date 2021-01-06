import config from '../../config';
import {getJson, postJson} from './core';


export const login = (username, password) => {
    // FIXME Hardcoded url
    return postJson(`${config.API_END_POINT}/oauth/token`, 
                    {
                        data: {username, password}
                    })
                    .then (response => {
                        return response.data;
                    })
}

