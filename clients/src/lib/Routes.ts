import {Role} from "$stores/user";

export type RouteMap = {
    [key: string]: RouteData;
    AUTH: RouteData;
    MATERIALS: RouteData;
    MATERIALS_CREATE: RouteData;
    USERS: RouteData;
    USERS_CREATE: RouteData;
}

export type RouteData = {
    path: string,
    role: Role
}

export function getRoutes () : RouteMap {
    return {
        AUTH: {
            path: '/auth',
            role: Role.GUEST
        },
        MATERIALS: {
            path: '/materiels',
            role: Role.EMPLOYEE
        },
        MATERIALS_CREATE: {
            path: '/materiels/creer',
            role: Role.EMPLOYEE
        },

        USERS: {
            path: '/utilisateurs',
            role: Role.MANAGER
        },
        USERS_CREATE: {
            path: '/utilisateurs/create',
            role: Role.ADMIN
        }
    }
}