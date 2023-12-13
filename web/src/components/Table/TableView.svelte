<script lang="ts">

    export let def : object;

    const datas = [
        {
            id: 10,
            name: 'name_1'
        },
        {
            id: 20,
            name: 'name_2'
        }
    ]

</script>

<table>
    <th>
        {#each Object.values(def) as fieldName}
            <td>{fieldName.getLabel()}</td>
        {/each}
    </th>


    {#each datas as data}
        <tr>
            <slot name="item" row={data} />
        </tr>
    {/each}
</table>