<script lang="ts">
import TableFieldText from "../oldTable/Field/TableFieldText.svelte";
import Button from "../../components/Button.svelte";
import TableItem from "../oldTable/TableItem.svelte";
import TableField from "../oldTable/TableField.svelte";
import TableFieldDate from "../oldTable/Field/TableFieldDate.svelte";
import TableFieldBadge from "../oldTable/Field/TableFieldBadge.svelte";
import type {UserRow} from "$lib/Definitions.ts";

export let userData : UserRow;
export let onAdmin : (rowAPI : UserRow) => void;

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