import {getRoutes, type RouteData} from "$lib/Routes.ts";
import {SvelteComponentTyped} from "svelte";

import * as Icons from "flowbite-svelte-icons";

const routes = getRoutes();

export type SidebarLinkType = {
    icon: typeof SvelteComponentTyped<any,any,any>;
    display: string;
    route: RouteData;
}

export type SidebarGroupType = {
    icon: typeof SvelteComponentTyped<any,any,any>;
    display: string,
    content: SidebarLinkType[]
}

export type SidebarContentType = {
    groups: SidebarGroupType[];
    links: SidebarLinkType[];
}

export function getSidebarContent () : SidebarContentType {
    return {
        groups: [
            {
                icon: Icons.KeyboardSolid,
                display: 'Materiels',
                content: materialsGroup()
            }, {
                icon: Icons.UserSolid,
                display: 'Utilisateurs',
                content: usersGroup()
            }
        ],
        links: [

        ]
    }
}


function materialsGroup () : SidebarLinkType[] {
    return [
        {
            icon: Icons.ListSolid,
            display: 'Liste des matériels',
            route: routes.MATERIALS
        },
        {
            icon: Icons.PlusSolid,
            display: 'Créer un matériel',
            route: routes.MATERIALS_CREATE
        }
    ]
}

function usersGroup () : SidebarLinkType[] {
    return [
        {
            icon: Icons.ListSolid,
            display: 'Liste des utilisateurs',
            route: routes.USERS
        },
        {
            icon: Icons.PlusSolid,
            display: 'Créer un utilisateur',
            route: routes.USERS_CREATE
        }
    ]
}