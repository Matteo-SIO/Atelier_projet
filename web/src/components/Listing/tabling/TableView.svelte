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

    let head : string[] = [];
    for (const field of Object.values(def)) {
        head = [...head, field.getLabel()];
    }

</script>

<table class="listing-table">
    <thead>
        <tr>
            {#each head as name}
                <td>{name}</td>
            {/each}
        </tr>
    </thead>


    {#each datas as data}
        <tr>
            <slot name="item" row={data} />
        </tr>
    {/each}
</table>

<style lang="scss">
    .listing-table > :global(tr > td) {
      @apply pr-8;
    }

    .listing-table > :global(tr > td) {
      @apply py-1 my-0;

      @apply border-solid border-y-4 border-red-100;
    }

    /*
         padding: 0.5rem;
        border-bottom: 1px solid #ddd;
     */
</style>