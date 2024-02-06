let BASE_URL = 'http://localhost:3000/api/';

// get environment variables
let envURL = process.env.API_URL;
if (envURL) {
    BASE_URL = envURL;
}

import {CapacitorHttp, type HttpOptions} from '@capacitor/core';

enum RequestType {
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    GET = 'GET',
}

export type RequestError = {
    code: number;
    message: string;
}

class RequestAPI <Req> {
    private declare readonly path: string;
    private declare readonly content: Req;
    private declare readonly type: RequestType;
    private declare token?: string | null;
    constructor (path : string, content: Req, type: RequestType) {
        this.path = path;
        this.content = content;
        this.type = type;
        this.token = null;
    }

    withToken (token?: string) {
        this.token = token;
        return this;
    }

    async send <Type> () : Promise<Type> {
        // access dynamically to the method of the CapacitorHttp plugin
        let methodFunc = CapacitorHttp[this.type.toLowerCase() as 'get' | 'post' | 'put' | 'patch' | 'delete'];
        const response = await methodFunc({
            url: BASE_URL + this.path,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.token}`,
            },
            ... (this.isQueryRequest() ? {params: this.content} : {data: this.content})
        } as HttpOptions);

        if (response.status >= 400) {
            throw {
                code: response.status,
                message: response.data.error ?? 'Unknown error',
            } as RequestError;
        }

        return response.data;
    }

    private isQueryRequest () {
        return this.type === RequestType.GET || this.type === RequestType.DELETE;
    }
}

export function POST <Req> (path: string, body: Req) {
    return new RequestAPI<Req>(path, body, RequestType.POST);
}

export function PUT <Req> (path: string, body: Req) {
    return new RequestAPI<Req>(path, body, RequestType.PUT);
}

export function PATCH <Req> (path: string, body: Req) {
    return new RequestAPI<Req>(path, body, RequestType.PATCH);
}

export function DELETE <Req> (path: string, params: Req) {
    return new RequestAPI<Req>(path, params, RequestType.DELETE);
}

export function GET <Req> (path: string, params: Req) {
    return new RequestAPI<Req>(path, params, RequestType.GET);
}