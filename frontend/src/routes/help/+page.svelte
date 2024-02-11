<script>
    
    import { onMount } from 'svelte';
    import OpenAI from 'openai';
import readline from "readline";
onMount(async () => {
    try{
const openai = new OpenAI({
     apiKey: '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',
     dangerouslyAllowBrowser: true// This is also the default, can be omitted
});

const chatCompletion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Hello!"}],
});
console.log(chatCompletion.choices[0].message);
}catch(er){
    console.log(er);
}
})


</script>
<main>

</main>
<style>

</style>