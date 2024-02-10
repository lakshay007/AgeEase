<script>
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
<Nav>
</Nav>
{#each Posts as posts}
<h1>{posts.Title}</h1>
<h2>{posts.Description}</h2>
{/each}
</main>
<style>
</style>
