let BASE_URL = 'http://localhost:3000/api/';
const FALLBACK_URL = 'http://192.168.1.115:3000/api/';

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
        const urlBuilder = new URL(BASE_URL + this.path);
        if (this.isQueryRequest()) {
            for (const key in this.content) {
                if (this.content[key] !== undefined) {
                    const value = this.content[key] as unknown as string;
                    urlBuilder.searchParams.append(key, value);
                }
            }
        }

        const url = urlBuilder.toString();
        const options = {
            method: this.type,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${this.token}`,
            },
            body: this.isQueryRequest() ? undefined : JSON.stringify(this.content),
        };

        const response = await fetch(url, options);
        const json = await response.json();

        if (response.status >= 400) {
            throw {
                code: response.status,
                message: json.error ?? 'Unknown error',
            } as RequestError;
        }

        return json;
    }

    private isQueryRequest () {
        return this.type === RequestType.GET || this.type === RequestType.DELETE;
    }
}

export async function checkBaseUrl () {
    try {
        await fetch(BASE_URL, {
            method: 'GET'
        })
    } catch (e) {
        console.error('Failed to connect to API, fallback to', FALLBACK_URL);
        BASE_URL = FALLBACK_URL;
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