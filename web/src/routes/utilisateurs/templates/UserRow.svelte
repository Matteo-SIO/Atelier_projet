<script lang="ts">
import TableFieldText from "../../../components/Table/Field/TableFieldText.svelte";
import Button from "../../../components/Button.svelte";
import TableItem from "../../../components/Table/TableItem.svelte";
import TableField from "../../../components/Table/TableField.svelte";
import TableFieldDate from "../../../components/Table/Field/TableFieldDate.svelte";
import TableFieldBadge from "../../../components/Table/Field/TableFieldBadge.svelte";
import type {UserDB} from "$lib/Definitions.ts";

export let userData : UserDB;
export let onAdmin : (rowAPI : UserDB) => void;

</script>

<TableItem>
    <TableFieldText>{userData.pseudo}</TableFieldText>
    <TableFieldText>{userData.firstName} {userData.lastName}</TableFieldText>
    <TableFieldBadge classes="bg-info">{userData.role}</TableFieldBadge>
    <TableFieldDate>-</TableFieldDate>
    <TableField end>
        <Button class="button-action" callback={onAdmin.bind(null, userData)}>Admin</Button>
    </TableField>
</TableItem>

<style lang="scss">
  :global(.button-action) {
    // use tailwind, color gray-500
    @apply bg-gray-500 hover:bg-gray-400 rounded-md border-none;
    @apply px-2 py-1;
    @apply text-white;
  }
</style>