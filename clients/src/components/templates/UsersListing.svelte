<script lang="ts">
    import Item from "$components/Listing/Item.svelte";
    import InfoBlock from "$components/Listing/InfoBlock.svelte";
    import {GET} from "$lib/ClientAPI.js";
    import {
        type GetUsersRequest,
        type GetUsersResponse,
        type UserRowResponse
    } from "../../../../@types/requests/users.js";
    import user from "$stores/user";

    const iter = [1,2,3,4,5,6,7,8,9,10];

    let data: UserRowResponse[] = [];

    let currentPage = 0;
    let pageSize = 10;

    function parseDate (date: number): string {
        let d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    }

    async function doRequest () {
        try {
            let req = GET<GetUsersRequest>("users", {
                offset: pageSize * currentPage,
                limit: pageSize,
            }).withToken($user.token)
            let res: GetUsersResponse = await req.send();
            data = [...data, ...res];
            if (res.length === pageSize) {
                currentPage++;
                await doRequest();
            }
        } catch (e) {
            console.error(e);
        }
    }

    doRequest();

</script>

{#each data as user (user.id)}
    <Item title="{user.firstname} {user.lastname}">
        <svelte:fragment slot="block-1">
            <InfoBlock>
                <svelte:fragment slot="title">Email:</svelte:fragment>
                <svelte:fragment slot="content">
                    <code>{user.email}</code>
                </svelte:fragment>
            </InfoBlock>
        </svelte:fragment>

        <svelte:fragment slot="block-2">
            <InfoBlock>
                <svelte:fragment slot="title">Role:</svelte:fragment>
                <svelte:fragment slot="content">
                    <code>{user.role}</code>
                </svelte:fragment>
            </InfoBlock>
        </svelte:fragment>

        <svelte:fragment slot="block-3">
            <InfoBlock>
                <svelte:fragment slot="title">Date d'inscription:</svelte:fragment>
                <svelte:fragment slot="content">
                    <code>{parseDate(user.createdAt)}</code>
                </svelte:fragment>
            </InfoBlock>
        </svelte:fragment>
    </Item>
{/each}