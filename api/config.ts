import {Config} from "../@types/api/config";

export default {
    JWK_TOKEN: '8pGWZ7bCgCrwuWi',
    DB: {
        debug: true,
        host: '127.0.0.1',
        post: 3306,
        user: 'root',
        pass: '',
        dbName: 'atelier_projet'
    },
    SERVER: {
        debug: true,
        special_routes: true,
        port: 3000
    }
} as Config;