<script>
</script>

<div class="sidebar-group">
    <button class="dropdown-btn">
        <p class="dropdown-text">Petit bouton</p>
        <svg id="dropdown-icon" class="transform" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15L12 9L6 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </button>
    <div class="group-contain">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
    </div>
</div>

<style lang="scss">

  .sidebar-group {
    @apply p-5;
    //@apply border border-solid border-gray-600;
  }

  // border each sidebar group
    .sidebar-group {
        @apply divide-y;
    }


  .dropdown-btn {
    // flex
    @apply flex justify-between items-center;

    // colors
    @apply text-sm leading-5 uppercase;
    @apply text-white;
    @apply text-left;
    @apply bg-gray-900;

    // padding/size
    @apply w-full;
    @apply py-5;
    @apply px-0;

    // remove default button style
    @apply border-none;
  }

  .dropdown-text {
    @apply m-0;
  }

  .dropdown-icon {
    //@apply bg-gray-900;
  }



</style>