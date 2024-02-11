<script>
    import { onMount, onDestroy } from 'svelte';
  
    let isVisible = false;
  
    onMount(() => {
      console.log("worked");
      isVisible = true;
      const timer = setTimeout(() => {
        isVisible = false;
      }, 5000);
      return () => clearTimeout(timer);
    });
  
    $: visibleClass = isVisible ? 'translate-y-4' : '-translate-y-full';
  </script>
  
  <div class="fixed top-0 left-[20vw] w-[60vw] transition-transform duration-500 {visibleClass}">
    <div role="alert" class="alert alert-success">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>
        <slot />
      </span>
    </div>
  </div>
  