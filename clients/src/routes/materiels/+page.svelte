<script>


import Item from "../../components/Listing/Item.svelte";
import InfoBlock from "../../components/Listing/InfoBlock.svelte";
import ButtonBlock from "../../components/Listing/ButtonBlock.svelte";
import {PlusSolid} from "flowbite-svelte-icons";
</script>

<div class="page">
    Contenu de la page Matériel
    <br />
    balise br
    <br />
    <br />

    <Item>
        <svelte:fragment slot="info-1">
            <InfoBlock>
                <svelte:fragment slot="title">Disponible:</svelte:fragment>
                <svelte:fragment slot="content">Maintenant</svelte:fragment>
            </InfoBlock>
        </svelte:fragment>

        <svelte:fragment slot="user-action">
            <ButtonBlock>
                <svelte:fragment slot="icon">
                    <PlusSolid />
                </svelte:fragment>
                <svelte:fragment slot="text">Réserver</svelte:fragment>
            </ButtonBlock>
        </svelte:fragment>
    </Item>

    <br />

    <Item>
        <svelte:fragment slot="info-1">
            <InfoBlock />
        </svelte:fragment>
        <svelte:fragment slot="user-action">
            <ButtonBlock />
        </svelte:fragment>
    </Item>

    <br />

    <Item>
        <svelte:fragment slot="info-1">
            <InfoBlock />
        </svelte:fragment>
        <svelte:fragment slot="user-action">
            <ButtonBlock />
        </svelte:fragment>
    </Item>

    <br />

    <Item>
        <svelte:fragment slot="info-1">
            <InfoBlock />
        </svelte:fragment>
        <svelte:fragment slot="user-action">
            <ButtonBlock />
        </svelte:fragment>
    </Item>

    <br />

    <Item>
        <svelte:fragment slot="info-1">
            <InfoBlock />
        </svelte:fragment>
        <svelte:fragment slot="user-action">
            <ButtonBlock />
        </svelte:fragment>
    </Item>
</div>


<style lang="scss">

</style>