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
         <a href="/medicinetracker" class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32zM256 208c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H320v48c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V320H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z"/></svg>
              <h2 class="card-title text-xl text-center">Medicine Tracker</h2>
            </div>
          </a>
          <a href="/community" class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"/></svg>
              <h2 class="card-title">Community</h2>
            </div>
          </a>
          <a href="/help" class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
              <h2 class="card-title">Companion</h2>
            </div>
          </a>
          <a href="/doctorappnt" class="card w-48 bg-base-100 shadow-xl">
            <div class="card-body flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>
              </svg>
              <h2 class="card-title">Appointments</h2>
            </div>
          </a>
      </div>
 </div>
  
  </main>
<style>

</style>
  