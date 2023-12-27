<script>

</script>

<div class="sidebar-group">
    <div class="sidebar-group-header">
        <button>
            CECI EST UN HEADER
        </button>
    </div>
    <div class="sidebar-group-body">
        <div class="sidebar-item">
            <button>Afficher la liste</button>
        </div>
        <div class="sidebar-item">
            <button>Créer un élément</button>
        </div>
        <div class="sidebar-item">
            <button>link 3</button>
        </div>
    </div>
</div>

<style lang="scss">
    .sidebar-group {
      @apply m-4;
    }

    .sidebar-group {
      @apply bg-gray-900;
    }

    .sidebar-group-header {
      & button {
        @apply w-full;
        @apply text-left;
        @apply p-2;

        // remove default button style
        @apply border-none;
        @apply bg-gray-900;

        // text
        @apply text-gray-200;
        @apply font-bold;
        @apply uppercase;
        @apply text-sm;
      }
    }

    .sidebar-group-body {
      & .sidebar-item {
        @apply m-1;

        & button {
          @apply border-none;
          @apply w-5/6;
          @apply text-center;

          @apply p-2;

          @apply text-white;
          @apply uppercase;
          @apply text-sm;

          // bg with small difference
          @apply bg-gray-800;
        }

      }

    }

</style>