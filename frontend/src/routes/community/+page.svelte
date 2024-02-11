<script>
    import Nav from '$lib/Components/roundednav.svelte'
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
<main class="h-full w-full flex flex-col">
 <Nav class="rounded-3xl">
 </Nav>
 <div class="grow flex flex-col justify-center items-center bg-[#eeeeee] gap-10">
    <p class="text-5xl">Your Communities</p>
    <div class="flex flex-row flex-wrap justify-center items-center gap-3">
      <a href = "http://localhost:5173/community/Hinduism" class="card w-48 bg-base-100 shadow-xl">
         <div class="card-body flex flex-col items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M379.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-16 16c-6.2 6.2-6.2 16.4 0 22.6l16 16c6.2 6.2 16.4 6.2 22.6 0l16-16c6.2-6.2 6.2-16.4 0-22.6l-16-16zM281 66.7c-2.2-1.5-4.9-2.5-7.7-2.7c-.6 0-1.3-.1-1.9 0c-3.9 .2-7.4 1.7-10.1 4.2c-.9 .8-1.6 1.7-2.3 2.6c-1.7 2.4-2.7 5.3-2.9 8.5c0 .7 0 1.4 0 2.1c.2 2.2 .9 4.3 1.9 6.2l.3 .6c.3 .6 .8 1.4 1.4 2.4c1.2 2 2.9 4.8 5.1 8.2c4.4 6.7 11.1 15.5 20 24.4C302.4 141.1 330.3 160 368 160c31.2 0 56.6-10.4 73.9-20.2c8.7-5 15.6-9.9 20.4-13.8c2.4-1.9 4.3-3.6 5.7-4.9c.7-.6 1.3-1.2 1.7-1.6l.6-.5 .1-.1 .1-.1 0 0 0 0c5.9-5.8 9.5-13.9 9.5-22.8c0-17.7-14.3-32-32-32c-8.7 0-16.7 3.5-22.4 9.2c-.1 .1-.2 .2-.5 .4c-.5 .5-1.5 1.3-2.8 2.4c-2.7 2.2-6.8 5.2-12.1 8.2C399.4 90.4 384.8 96 368 96c-20.8 0-42.4-7-59.5-14.6c-8.4-3.7-15.4-7.5-20.3-10.3c-2.4-1.4-4.3-2.5-5.6-3.3c-.6-.4-1.1-.7-1.4-.9l-.3-.2zM115.2 169.6c8-6 17.9-9.6 28.8-9.6c26.5 0 48 21.5 48 48s-21.5 48-48 48H109.8c-7.6 0-13.8 6.2-13.8 13.8c0 1.5 .2 2.9 .7 4.4l8 24c4.4 13.1 16.6 21.9 30.4 21.9H144h16c35.3 0 64 28.7 64 64s-28.7 64-64 64c-50.8 0-82.7-21.5-102.2-42.8c-9.9-10.8-16.6-21.6-20.9-29.7c-2.1-4-3.6-7.3-4.5-9.6c-.5-1.1-.8-2-1-2.5l-.2-.5c-.3-.9-.7-1.8-1.1-2.6c-1.2-2.2-2.8-4-4.7-5.4c-1.9-1.4-4.1-2.3-6.5-2.8c-1.4-.3-2.9-.3-4.4-.2c-2.5 .2-4.8 1-6.8 2.3c-1.1 .7-2.2 1.5-3.1 2.5c-2.4 2.5-4.1 5.8-4.5 9.5c-.1 .6-.1 1.1-.1 1.7c0 0 0 0 0 0c0 .8 .1 1.7 .2 2.5l0 .1c0 .3 .1 .8 .2 1.3c.2 1.1 .4 2.7 .8 4.6c.8 3.9 2 9.4 3.9 15.9c3.8 13 10.3 30.4 21.3 48C48.7 476.2 89.4 512 160 512c70.7 0 128-57.3 128-128c0-23.3-6.2-45.2-17.1-64h22.6c25.5 0 49.9-10.1 67.9-28.1l26.5-26.5c6-6 14.1-9.4 22.6-9.4H416c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32c-25.7 0-41.4-12.5-51.2-25.6c-5-6.7-8.4-13.4-10.5-18.6c-1.1-2.5-1.8-4.6-2.2-6c-.2-.7-.4-1.2-.5-1.5l-.1-.2c-.3-1.3-.8-2.6-1.5-3.8c-1.1-2-2.6-3.8-4.4-5.1c-2.7-2-6-3.2-9.6-3.2l-.2 0c-8 .1-14.6 6.1-15.6 13.9l0 0c0 .3-.1 .6-.2 1.1c-.1 .9-.3 2.1-.4 3.6c-.3 3-.6 7.3-.6 12.4c0 10.1 1.1 23.9 5.8 38.1c4.8 14.3 13.4 29.3 28.6 40.7C368.7 473.3 389.3 480 416 480c53 0 96-43 96-96V288c0-53-43-96-96-96h-5.5c-25.5 0-49.9 10.1-67.9 28.1l-26.5 26.5c-6 6-14.1 9.4-22.6 9.4H245.2c6.9-14.5 10.8-30.8 10.8-48c0-61.9-50.1-112-112-112c-25.2 0-48.5 8.3-67.2 22.4c-14.1 10.6-17 30.7-6.4 44.8s30.7 17 44.8 6.4z"/></svg>
           <h2 class="card-title">Hinduism</h2>
         </div>
      </a>
      <a href = "http://localhost:5173/community/Cricket" class="card w-48 bg-base-100 shadow-xl">
         <div class="card-body flex flex-col items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cricket" width="130" height="130" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M11.105 18.79l-1.006 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617" /> <path d="M10.5 7.5l6 6" /> <circle cx="14" cy="18" r="3" /> </svg> 
           <h2 class="card-title">Cricket</h2>
         </div>
      </a>
      <a href = "http://localhost:5173/community/Medicines" class="card w-48 bg-base-100 shadow-xl">
         <div class="card-body flex flex-col items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M112 96c-26.5 0-48 21.5-48 48V256h96V144c0-26.5-21.5-48-48-48zM0 144C0 82.1 50.1 32 112 32s112 50.1 112 112V368c0 61.9-50.1 112-112 112S0 429.9 0 368V144zM554.9 399.4c-7.1 12.3-23.7 13.1-33.8 3.1L333.5 214.9c-10-10-9.3-26.7 3.1-33.8C360 167.7 387.1 160 416 160c88.4 0 160 71.6 160 160c0 28.9-7.7 56-21.1 79.4zm-59.5 59.5C472 472.3 444.9 480 416 480c-88.4 0-160-71.6-160-160c0-28.9 7.7-56 21.1-79.4c7.1-12.3 23.7-13.1 33.8-3.1L498.5 425.1c10 10 9.3 26.7-3.1 33.8z"/></svg>
           <h2 class="card-title">Medicines</h2>
         </div>
      </a>
    </div>
 </div>
</main>
<style>
</style>