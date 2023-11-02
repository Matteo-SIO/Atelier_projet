<script>

    // parameters to define the size of form box
    export let offset = 0;
    export let size = 2;



</script>


<!-- load dynamics fields -->
<div class="container">
    <div class="row">
        <div class="col-md-{size} col-md-offset-{offset}" style="margin-top: 25vh;">
            <slot></slot>
        </div>
    </div>
</div>

<style>
    .container {
        width: 100%;
        text-align: center;
    }
</style>