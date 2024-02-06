import {getRoutes} from "$lib/Routes.ts";

import KeyboardSolid from "flowbite-svelte-icons/KeyboardSolid.svelte";
import UserSolid from "flowbite-svelte-icons/UserSolid.svelte";
import ListSolid from "flowbite-svelte-icons/ListSolid.svelte";

import type {SidebarContentType, SidebarLinkType} from "$types/sidebar";

const routes = getRoutes();

export function getSidebarContent () : SidebarContentType {
    return {
        groups: [
            {
                icon: KeyboardSolid,
                display: 'Materiels',
                content: materialsGroup()
            }, {
                icon: UserSolid,
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
            icon: ListSolid,
            display: 'Liste des matériels',
            route: routes.MATERIALS
        }
    ]
}

function usersGroup () : SidebarLinkType[] {
    return [
        {
            icon: ListSolid,
            display: 'Liste des utilisateurs',
            route: routes.USERS
        }
    ]
}