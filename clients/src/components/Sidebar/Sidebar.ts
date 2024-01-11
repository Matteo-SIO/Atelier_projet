import {getRoutes, type RouteData} from "$lib/Routes.ts";

import * as Icons from "flowbite-svelte-icons";
import type {SidebarContentType, SidebarLinkType} from "$types/sidebar";

const routes = getRoutes();

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
        }
    ]
}

function usersGroup () : SidebarLinkType[] {
    return [
        {
            icon: Icons.ListSolid,
            display: 'Liste des utilisateurs',
            route: routes.USERS
        }
    ]
}