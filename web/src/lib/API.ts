import Config from "../../../config.js";

export interface APIRequest {
    query?: object;
    body?: object;
    token?: string;
}

function req (path : string, type : string, data : APIRequest) {
    // do fetch, return promise
    return new Promise((resolve, reject) => {
        let urlBuilder = new URLSearchParams();
        if (data.query) {
            let queryObject = data.query as any;
            for (let key in queryObject) {
                urlBuilder.append(key, queryObject[key]);
            }
        }

        let url = Config.SVELTE.api_url + path + '?' + urlBuilder.toString();

        let headers = {
            'Content-Type': 'application/json',
            ...(data.token ? {Authorization: data.token} : {})
        } as any;

        let options = {
            method: type,
            headers: headers,
            ...(data.body ? {body: JSON.stringify(data.body)} : {}),

            // no-cors
            mode: 'cors'

        } as any;

        if (Config.SVELTE.debug) {
            console.log('[DEBUG] API Request', url, options);
        }

        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    let json = response.json();
                    if (Config.SVELTE.debug) {
                        json.then((json : any) => {
                            console.log('[DEBUG] API Response', json);
                        });
                    }

                    json.then(resolve).catch(reject);
                } else {
                    reject(response);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}

export async function GET (path : string, data : APIRequest) {
    return new Promise((resolve, reject) => {
        req(path, 'GET', data).then(resolve).catch(reject);
    });
}

export async function POST (path : string, data : APIRequest) {
    return new Promise((resolve, reject) => {
        req(path, 'POST', data).then(resolve).catch(reject);
    });
}

export async function PUT (path : string, data : APIRequest) {
    return new Promise((resolve, reject) => {
        req(path, 'PUT', data).then(resolve).catch(reject);
    });
}

export async function DELETE (path : string, data : APIRequest) {
    return new Promise((resolve, reject) => {
        req(path, 'DELETE', data).then(resolve).catch(reject);
    });
}

export async function PATCH (path : string, data : APIRequest) {
    return new Promise((resolve, reject) => {
        req(path, 'PATCH', data).then(resolve).catch(reject);
    });
}