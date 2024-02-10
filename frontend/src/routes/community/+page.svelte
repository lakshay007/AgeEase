<script>
    import Nav from '$lib/Components/nav.svelte'
      import { onMount } from 'svelte';
      let username;
      let notfound = 0;
      onMount(async () => {
   username = localStorage.getItem("username");
   if(username == null){
      notfound = 1;
  
   }
      });
    
</script>
<main>
    {#if notfound == 0}
 <Nav>
 </Nav>
 <h1>your communities</h1>
 <a href = "http://localhost:5173/community/Hinduism">hinduism</a>
 <a href = "http://localhost:5173/community/Cricket" >cricket</a>
 <a href = "http://localhost:5173/community/Medicines" >medicines</a>
  {:else}
  <h1>uh oh, page not found!</h1>
  {/if}
</main>
<style>
</style>