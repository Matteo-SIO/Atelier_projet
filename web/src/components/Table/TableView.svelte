<script lang="ts">

    export let def : object;

    const datas = [
        {
            name: 'title 1',
            description: 'description 1'
        },
        {
            name: 'title 2',
            description: 'description 2'
        }
    ]

</script>

<table>
    <th>
        {#each Object.keys(def) as fieldName}
            <td>{fieldName}</td>
        {/each}
    </th>


    {#each datas as data}
        <tr>
            <slot name="item" row={data} />
        </tr>
    {/each}
</table>