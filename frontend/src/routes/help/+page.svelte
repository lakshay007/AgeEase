<script>
    import Nav from '$lib/Components/roundednav.svelte'
    import '../../app.css'
    import { onMount } from 'svelte';
    import OpenAI from 'openai';
    let recognition
    let transcript;
    let vc;
    let handlehelp;
    let question = '';
    let speech;
    let res ;
    let loaded
    onMount(async () => {
        document.getElementById("p").style.display = "none";
        try {
            const openai = new OpenAI({
                apiKey: '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',
                dangerouslyAllowBrowser: true // This is also the default, can be omitted
            });
            
            handlehelp = async () => {
                loaded = false
               
                recognition.abort()
                speech = false;
                question = transcript;
                
                
                const chatCompletion = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: [{"role": "user", "content": question}],
                });
                res = chatCompletion.choices[0].message
                console.log(chatCompletion.choices[0].message);
                loaded = true
            }
        } catch (er) {
            console.log(er);
        }
        
        vc = () => {
         
            speech = true;
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
             recognition = new SpeechRecognition();
            recognition.interimResults = true;
            const words = document.querySelector('.words');
            const p = document.getElementById("p");
            
            words.appendChild(p);
            
            recognition.addEventListener('result', e => {
                transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');
                
                p.innerHTML = transcript;
                question = transcript
                console.log(transcript);
            });
            
            recognition.addEventListener('end', () => {
                if (speech) {
                    recognition.start();
                }
            });
            
            if (speech == true) {
                recognition.start();
            }
        }
    })
</script>

<main>
    <Nav class="rounded-3xl" />
    <div class="flex flex-col justify-center items-center gap-y-5">
        <div class="text-5xl">Companion Care</div>
        <input bind:value={question} type="text" placeholder="Type here" class="input input-bordered input-black w-[25vw]"/>
        <button on:click={handlehelp} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0">Ask</button>
        <button on:click={vc} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0">Voice</button>
    </div>
    <div class="words flex flex-col justify-center items-center gap-3" contenteditable>
        <p id="p"></p>

        <div class="m-5 flex flex-row gap-5 justify-center items-center">
            {#if loaded} 
            <div class="w-[35vw] h-[20vh] overflow-y-scroll bg-white rounded-xl">
            <p class="text-lg semibold m-5"> {res.content} </p>
            </div>
            {:else if loaded === false}
            <p class="text-lg">Loading</p>
            <span class="loading loading-spinner loading-lg"></span>
            {:else}
            {/if}
        </div>
    </div>
</main>

<style>
    /* Your styles here */
</style>
