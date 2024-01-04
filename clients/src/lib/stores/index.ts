import {writable} from "svelte/store";

export enum Role {
    EMPLOYEE,
    MANAGER,
    ADMIN
}

export type User = {
    token: string;
    role: Role;
}

function createUserStore () {
    return writable<User>();
}

export default createUserStore();