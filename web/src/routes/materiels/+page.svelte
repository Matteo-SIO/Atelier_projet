<script>



import Listing from "../../components/Listing/Listing.svelte";
import TableView from "../../components/Table/TableView.svelte";
import {ListingField} from "../../components/Listing/ListingField";
import DisplayField from "../../components/Listing/ViewField.svelte";

const fields = {
    name: new ListingField("name", "Name", "text"),
    description: new ListingField("description", "Description", "text"),
}

</script>


<Listing class="own-list" path="/">
    <TableView def={fields}>
        <svelte:fragment slot="item" let:row>
            <DisplayField field={fields.name} value={row.name} />
            <DisplayField field={fields.description} value={row.description} />
        </svelte:fragment>
    </TableView>
</Listing>


<Listing class="available-list" />


<style lang="scss">
    @import "../../../static/common.scss";

    :global(.own-list) {
      @apply list-green;
    }

    :global(.available-list) {
      @apply list-blue;
    }



</style>