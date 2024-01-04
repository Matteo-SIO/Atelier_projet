const BASE_URL = 'http://localhost:3000/api/';

enum RequestType {
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
    GET = 'GET',
}

class RequestAPI {
    private declare readonly path: string;
    private declare readonly content: {[key: string]: any};
    private declare readonly type: RequestType;
    private declare token?: string | null;
    constructor (path : string, content: object, type: RequestType) {
        this.path = path;
        this.content = content;
        this.type = type;
        this.token = null;
    }

    withToken (token: string) {
        this.token = token;
        return this;
    }

    async send <Type> () : Promise<Type> {
        const urlBuilder = new URL(BASE_URL + this.path);
        if (this.isQueryRequest()) {
            for (const key in this.content) {
                if (this.content[key] !== undefined) {
                    const value = JSON.stringify(this.content[key]);
                    urlBuilder.searchParams.append(key, value);
                }
            }
        }

        const url = BASE_URL + this.path;
        const options = {
            method: this.type,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.token}`,
            },
            body: this.isQueryRequest() ? undefined : JSON.stringify(this.content),
        };
        const response = await fetch(url, options);
        return await response.json();
    }

    private isQueryRequest () {
        return this.type === RequestType.GET || this.type === RequestType.DELETE;
    }
}

export function POST (path: string, body: object) {
    return new RequestAPI(path, body, RequestType.POST);
}

export function PUT (path: string, body: object) {
    return new RequestAPI(path, body, RequestType.PUT);
}

export function PATCH (path: string, body: object) {
    return new RequestAPI(path, body, RequestType.PATCH);
}

export function DELETE (path: string, params: object) {
    return new RequestAPI(path, params, RequestType.DELETE);
}

export function GET (path: string, params: object) {
    return new RequestAPI(path, params, RequestType.GET);
}