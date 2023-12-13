<script>

import Listing from "../../components/Listing/Listing.svelte";
import TableView from "../../components/oldTable/TableView.svelte";
import DisplayField from "../../components/Listing/tabling/DisplayField.svelte";
import {createOwn, createOwnView, createStore} from "./listing.ts";

const listingOwnData = createOwn();
const fields_ownView = createOwnView();

</script>


<Listing class="own-list" data={listingOwnData}>
    <svelte:fragment slot="table">
        <TableView def={fields_ownView}>
            <svelte:fragment slot="item" let:row>
                <DisplayField field={fields_ownView.id} value={row.id} />
                <DisplayField field={fields_ownView.name} value={row.name} />
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
    @import "../../../static/common.scss";

    :global(.own-list) {
      @apply list-green;
    }

    :global(.available-list) {
      @apply list-blue;
    }



</style>