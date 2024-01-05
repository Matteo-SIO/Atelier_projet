<script lang="ts">


    import Item from "../../components/Listing/Item.svelte";
    import InfoBlock from "../../components/Listing/InfoBlock.svelte";
</script>

<div class="page">
    Contenu de la page utilisateurs
    <br />
    <br />

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

</div>


<style lang="scss">
    @import "../../../static/common.scss";
    .page {
      // Glassmorphism effect

      @apply glass glass-border;
    }
</style>