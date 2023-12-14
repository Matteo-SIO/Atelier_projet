<script>

import Listing from "../../components/Listing/Listing.svelte";
import TableView from "../../components/Listing/tabling/TableView.svelte";
import ReadField from "../../components/Listing/tabling/ReadField.svelte";
import {createOwn, createOwnView, createStore} from "./listing.ts";

const listingOwnData = createOwn();
const fields_ownView = createOwnView();

</script>


<Listing class="own-list" data={listingOwnData}>
    <svelte:fragment slot="table">
        <TableView def={fields_ownView}>
            <svelte:fragment slot="item" let:row>
                <ReadField field={fields_ownView.id} value={row.id} />
                <ReadField field={fields_ownView.name} value={row.name} />
            </svelte:fragment>
        </TableView>
    </svelte:fragment>

    <!--
    <svelte:fragment slot="oldModals">
    </svelte:fragment> -->
</Listing>


<!--
<Listing class="available-list" />
-->


<style lang="scss">


    :global(.own-list) {
      @apply list-green;
    }

    :global(.available-list) {
      @apply list-blue;
    }



</style>