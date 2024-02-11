<script>
   import Nav from '$lib/Components/roundednav.svelte';
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
  <main class="grow rounded-3xl h-full flex flex-col justify-center bg-[#eeeeee]">
     <Nav class="rounded-t-3xl">
     </Nav>
   <div class="grow flex flex-col justify-center items-center w-full rounded-b-3xl gap-10">
      <div class="text-center w-full pl-[3vw] text-4xl">
         {#if notfound == 0}
         <p>Welcome {username}</p>
         {:else}
         <h1>uh oh, page not found!</h1>
         {/if}
      </div>
      <div class="flex flex-wrap flex-row justify-center gap-5 w-[60vw]">
         <div class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title">Appointments</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </div>
          </div>
          <div class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title">Appointments</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </div>
          </div>
          <div class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title">Appointments</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </div>
          </div>
          <div class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <h2 class="card-title">Appointments</h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </div>
          </div>
      </div>
 </div>
  
  </main>
<style>

</style>
  