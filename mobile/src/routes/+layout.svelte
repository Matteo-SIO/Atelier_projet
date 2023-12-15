<script lang="ts">
    import { setupIonicBase } from 'ionic-svelte';

    /* load and register all components - you can also import separately to code split */
    import 'ionic-svelte/components/all';

    /* run base configuration code from ionic/core */
    setupIonicBase();
</script>

<style lang="scss">
  @import "../../static/common.scss";
</style>

<ion-app>
    <slot />
</ion-app>