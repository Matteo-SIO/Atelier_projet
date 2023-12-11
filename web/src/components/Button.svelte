<script lang="ts">
    export let callback : Function | null = () => {}
</script>

<button class="{$$props.class}" type="submit" on:click={callback}>
    <slot></slot>
</button>