<script>
    import Item from "$components/Listing/Item.svelte";
    import InfoBlock from "$components/Listing/InfoBlock.svelte";

    const iter = [1,2,3,4,5,6,7,8,9,10];
</script>

{#each iter as i (i)}
    <Item title="bidule@gmail.com">
        <svelte:fragment slot="block-1">
            <InfoBlock>
                <svelte:fragment slot="title">Role:</svelte:fragment>
                <svelte:fragment slot="content">Manager</svelte:fragment>
            </InfoBlock>
        </svelte:fragment>

        <svelte:fragment slot="block-3">
            <InfoBlock>
                <svelte:fragment slot="title">Registered since:</svelte:fragment>
                <svelte:fragment slot="content">
                    <code>02/01/2024</code>
                </svelte:fragment>
            </InfoBlock>
        </svelte:fragment>
    </Item>
{/each}