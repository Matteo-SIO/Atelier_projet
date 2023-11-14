<!-- Modal -->

<script>
    export let classes = '';
    export let show = false;
</script>

<!-- Contenu du modal -->
{#if show}
    <div class="modal {show} {$$props.class}" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>
    </div>
{/if}