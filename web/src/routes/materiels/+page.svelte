<script>

import Listing from "../../components/Listing/Listing.svelte";
import TableView from "../../components/Table/TableView.svelte";
import DisplayField from "../../components/Listing/ViewField.svelte";
import {createOwn, createStore} from "./listing.ts";

const {listingOwnData, listingOwnField} = createOwn();
const {listingStoreData, listingStoreField} = createStore();

</script>


<Listing class="own-list" path="/" data={listingOwnData}>
    <svelte:fragment slot="table">
        <TableView def={listingOwnField}>
            <svelte:fragment slot="item" let:row>
                <DisplayField field={listingOwnField.name} value={row.name} />
                <DisplayField field={listingOwnField.description} value={row.description} />
            </svelte:fragment>
        </TableView>
    </svelte:fragment>
    <svelte:fragment slot="modals">
        <!-- modals here ? -->
    </svelte:fragment>
</Listing>


<!--
<Listing class="available-list" />
-->


<style lang="scss">
    @import "../../../static/common.scss";

    :global(.own-list) {
      @apply list-green;
    }

    :global(.available-list) {
      @apply list-blue;
    }



</style>