<script lang="ts">
    export let callback = () => {}
</script>

<button class="{$$props.class}" type="submit" on:click={callback}>
    <slot></slot>
</button>