<!-- Modal -->

<script>
    export let show = false;
</script>

<!-- Contenu du modal -->
<div class="modal fade" class:show={show} style="display: block;" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <slot></slot>
        </div>
    </div>
</div>