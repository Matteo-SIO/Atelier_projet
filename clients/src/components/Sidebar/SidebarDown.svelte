<script lang="ts">

</script>

<div class="sidebar-profile">
    <div class="welcome-text">
        Bienvenue Jean Patrick
    </div>
    <button class="logout-button">
        Se déconnecter
    </button>

</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .sidebar-profile {
      //@apply h-32;
      @apply m-0 p-2;
      @apply glass;
      @apply space-y-2;

      .welcome-text {
        @apply text-center;
        @apply text-base;
        @apply py-3;
        @apply glass;
      }

      .logout-button {
        @apply bg-red-500;
        @apply text-white;
        @apply text-center;
        @apply w-full;
        @apply h-12;
        @apply rounded-md;
      }


    }
</style>