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
      let handlesignout = async()=>{
        localStorage.removeItem("username");
        window.location.href = 'http://localhost:5173/'

    }
  </script>
  <main class="grow rounded-3xl h-full flex flex-col justify-center">
     <Nav class="rounded-t-3xl">
     </Nav>
   <div class="grow flex flex-col justify-center items-center w-full bg-[#eeeeee] rounded-b-3xl gap-10">
      <div class="text-left w-full pl-[3vw] text-4xl">
         {#if notfound == 0}
         <p>Welcome {username}</p>
         {:else}
         <h1>uh oh, page not found!</h1>
         {/if}
      </div>
      <div class="flex flex-wrap flex-row justify-start gap-5 mx-10 w-[50vw]">
         <div class="card w-[20vw] bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Appointments</h2>
            </div>
          </div>
          <div class="card w-[20vw] bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Medication</h2>
            </div>
          </div>
          <div class="card w-[20vw] bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Community</h2>
            </div>
          </div>
          <div class="card w-[20vw] bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Companion</h2>
            </div>
          </div>
      </div>
 </div>
  
  </main>
<style>

</style>
  