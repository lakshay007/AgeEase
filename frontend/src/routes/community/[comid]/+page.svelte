<script>
   let Title
    let Description
    let data
    import "../../../app.css";
    let API_URL = "http://localhost:3000/"
    import { onMount } from 'svelte';
import {page} from'$app/stores'
import Nav from '$lib/Components/roundednav.svelte'
let Posts = []
const com = $page.params.comid
//console.log(JSON.parse(data[0]))
const handlePost = async()=>{
        data = {
            "Title":Title,
            "Description":Description,
            "User":localStorage.getItem("username")
        }
        console.log(data);
        const response = await fetch(API_URL+"Communities/"+com,{
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});
window.location.reload()
    }
onMount(async () => {
    const check = await fetch(API_URL + "Communities/" + com)
    let ans = await check.json();
    await console.log(ans)
     Posts = ans.Posts
    
	});
</script>
<main class="h-full w-full flex flex-col">
    <Nav />
  
    <div class='flex flex-col h-full items-center bg-[#eeeeee] p-3 px-5 gap-4 overflow-y-scroll rounded-b-3xl'>
    <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
        <p class="text-2xl">Create Post</p>
        <input bind:value={Title} type="text" placeholder="Title" class="input input-bordered input-black w-full"/>
        <input bind:value={Description} type="text" placeholder="Description" class="input input-bordered input-black w-full"/>
        <button on:click={handlePost} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0 self-end">Post</button>
        </div>
      </div>
        {#each Posts as post}
            <div class="card w-full bg-base-100 shadow-xl ">
                <div class="card-body">
                  <h2 class="card-title">{post.Title}</h2>
                  <p>{post.Description}</p>
                  <div class="flex flex-row items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="36" height="36"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
                      <div class="flex flex-col">
                        {#each post.Comments as comment (comment._id)}
                            <p class="w-full"> {comment.User} : {comment.Comment}</p>
                        {/each}
                      </div>
                  </div>
                </div>
              </div>
        {/each}
    </div>
</main>

<style>
</style>
