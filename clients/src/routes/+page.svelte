<script lang="ts">
    import {goto} from "$app/navigation";
    import {getRoutes} from "$lib/Routes.ts";

    const routes = getRoutes();

    goto(routes.USERS.path);
    // TODO: replace by MATERIALS
</script>