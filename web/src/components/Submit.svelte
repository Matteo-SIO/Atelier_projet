<script>
    export let name = '';
    export let callback = () => {}
</script>

<div class="button">
    <button class="btn btn-lg btn-primary btn-block" type="submit" on:click={callback}>{name}</button>
</div>