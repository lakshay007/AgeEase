<script>
    import "../../../app.css";
    let API_URL = "http://localhost:3000/"
    import { onMount } from 'svelte';
import {page} from'$app/stores'
import Nav from '$lib/Components/nav.svelte'
let Posts = []
const com = $page.params.comid
//console.log(JSON.parse(data[0]))
onMount(async () => {
    const check = await fetch(API_URL + "Communities/" + com)
    let ans = await check.json();
    await console.log(ans)
     Posts = ans.Posts
    
	});
</script>
<main>
    <Nav />
    <div class='flex'>
        {#each Posts as post}
            <h1 class="text-3xl">Title</h1>
            <h1 class="text-2xl">{post.Title}</h1>
            <h1 class="text-3xl">Description</h1>
            <h2 class="">{post.Description}</h2>
            <h1 class="text-3xl">Comments</h1>
            {#each post.Comments as comment (comment._id)}
                <h3 class="">{comment.Comment}</h3>
            {/each}
        {/each}
    </div>
</main>

<style>
</style>
