export type CreateTokenRequest = {
    email: string;
    password: string;
}

export type CreateTokenResponse = {
    token: string
}

export type UserMeResponse = {
    email: string;
    firstname: string;
    lastname: string;
    id: number;
    role: string;
}