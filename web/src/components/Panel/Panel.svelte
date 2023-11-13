<script>
    export let display;

</script>


<div class="container mt-5">
    <div class="card">
        <div class="card-header bg-primary text-white">
            {display}
        </div>
        <ul class="list-group list-group-flush">
            <slot></slot>
        </ul>
    </div>
</div>