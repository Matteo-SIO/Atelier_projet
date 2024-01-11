export type CreateTokenRequest = {
    email: string;
    password: string;
}

export type CreateTokenResponse = {
    token: string
}