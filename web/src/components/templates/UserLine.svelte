<script lang="ts">
import TableFieldText from "../../components/Table/Field/TableFieldText.svelte";
import Button from "../../components/Button.svelte";
import TableItem from "../../components/Table/TableItem.svelte";
import TableField from "../../components/Table/TableField.svelte";
import TableFieldDate from "../../components/Table/Field/TableFieldDate.svelte";
import TableFieldBadge from "../../components/Table/Field/TableFieldBadge.svelte";
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