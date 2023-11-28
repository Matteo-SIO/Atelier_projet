
<!-- List.svelte -->
<script>
    import PageSelector from "./PageSelector.svelte";

    export let title = "Liste";
</script>

<div class="list-container {$$props.class}">
    <div class="header">
        <p>Liste des chaussures portées par le méchant loup</p>
        <!-- TODO -->
    </div>
    <div class="body">
        <slot></slot> <!-- TODO -->
        <br />A
        <br />A
        <br />A
        <br />A
    </div>
    <div class="footer">
        <PageSelector class="page-selector" current={1} total={32} />
    </div>
</div>

<style lang="scss">
  @import "../../../static/common.scss";

    .list-container {
        //box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

        .header {
            @apply bg-blue-200 text-blue-700;
            @apply rounded-t-[30px];
            @apply py-0.5 px-10;
            @apply flex flex-col items-center;

          p {
            @apply text-xl font-bold;
            @apply my-1.5;
          }
        }

        .body {
            padding: 20px;
            @apply bg-gray-100;
            //overflow-y: auto;
        }

        .footer {
         // @apply bg-gray-100 text-blue-700;
          @apply rounded-b-[30px];
          @apply bg-gray-100;
        }
    }

    :global(.page-selector) {
        //center tailwind
        @apply flex justify-between items-center text-blue-700;

        /*& :global(.ps-item), :global(.ps-button) {
          @apply text-blue-700;
          @apply text-base;
        }

        & :global(.ps-item-selected) {
          @apply bg-blue-100 rounded-full;
        }*/

    }



</style>