<script lang="ts">

    import {destroySession} from "$stores/user/utils.ts";
    import user from "$stores/user";
    import {goto} from "$app/navigation";
    import {getRoutes} from "$lib/Routes.ts";

    function logout () {
        destroySession(user);
        goto(getRoutes().AUTH.path)
    }

    $: firstName = $user.profile?.firstname;
    $: lastName = $user.profile?.lastname;

</script>

<div class="sidebar-profile">
    <div class="welcome-text">
        Bienvenue <b>{firstName} {lastName}</b>
    </div>
    <button class="logout-button" on:click={logout}>
        Se déconnecter
    </button>

</div>

<style lang="scss">
    @import "../../../static/common.scss";

    .sidebar-profile {
      //@apply h-32;
      @apply m-0 p-2;
      @apply glass-white-2;
      @apply space-y-2;

      .welcome-text {
        @apply text-center;
        @apply text-sm xl:text-base;
        @apply py-3;
        //@apply glass;
      }

      .logout-button {
        @apply bg-red-500/90;
        @apply text-white;
        @apply text-center;
        @apply font-bold;
        @apply w-full;
        @apply h-12;
        @apply rounded-md;
        //@apply glass-red-5;
      }


    }
</style>