<script lang="ts">
    import Item from "$components/Listing/Item.svelte";
    import {
        type GetUsersRequest, type GetUsersResponse,
        type UserRowResponse
    } from "../../../../@types/requests/users.js";
    import user from "$stores/user";
    import Listing from "$components/Listing/Listing.svelte";
    import {GET} from "$lib/ClientAPI.ts";
    import type {Block} from "$types/listing";
    import {TrashBinSolid} from "flowbite-svelte-icons";

    export let data: UserRowResponse[] = [];
    const pageSize = 10;

    async function fetcher (page: number) {
        let req = GET<GetUsersRequest>("users", {
            offset: pageSize * page,
            limit: pageSize,
        }).withToken($user.token)
        let res: GetUsersResponse = await req.send();
        return res;
    }

    function parseDate (date: number) {
        let d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }

    function generateBlocks (row: any) : Block[] {
        return [
            {
                type: 'info',
                title: 'Email',
                text: row.email
            },
            {
                type: 'info',
                title: 'Role',
                text: row.role
            },
            {
                type: 'info',
                title: 'Date d\'inscription',
                text: parseDate(row.createdAt)
            }
        ]
    }
</script>


<Listing {fetcher} {pageSize} bind:data>
    <svelte:fragment slot="item" let:row>
        <Item title="{row.firstname} {row.lastname}" blocks={generateBlocks(row)} />
    </svelte:fragment>
</Listing>