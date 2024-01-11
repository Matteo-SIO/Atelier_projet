export type DbConfig = {
    debug: boolean;
    host: string;
    post: number;
    user: string;
    pass: string;
    dbName: string;
}

export type ServerConfig = {
    debug: boolean;
    special_routes: boolean;
    port: number;
}

export type Config = {
    JWK_TOKEN: string;
    DB: DbConfig;
    SERVER: ServerConfig;
}