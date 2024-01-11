export type UserMeResponse = {
    email: string;
    firstname: string;
    lastname: string;
    id: number;
    role: string;
}

export type GetUsersRequest = {
    offset?: number;
    limit?: number;
}

export type UserRowResponse = {
    id: number;
    email: string;
    role: string;
    firstname: string;
    lastname: string;
}

export type GetUsersResponse = UserRowResponse[]
export type GetOneUserResponse = UserRowResponse

export type UpdateUserRequest = {
    id: number;
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
}

export type UpdateUserResponse = {
    success: boolean;
}

export type DeleteUserResponse = {
    success: boolean;
}

export type CreateUserRequest = {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    role: string;
}