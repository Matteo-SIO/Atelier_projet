import {writable} from "svelte/store";

export enum Role {
    EMPLOYEE,
    MANAGER,
    ADMIN
}

export type Credentials = {
    token: string;
}

export type Profile = {
    role: Role;
    firstname: string;
    lastname: string;
}

export type User = {
    token: string|null;
    profile: Profile|null;
}

function createUserStore () {
    return writable<User>();
}

export default createUserStore();