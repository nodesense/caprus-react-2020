import {getJson, postJson} from './core';

export const login = (username, password) => {
    // FIXME Hardcoded url
    return postJson(`http://localhost:7070/oauth/token`, 
                    {
                        data: {username, password}
                    })
                    .then (response => {
                        return response.data;
                    })
}

