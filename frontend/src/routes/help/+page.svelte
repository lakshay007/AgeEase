<script>
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
    <div class="flex flex-col gap-y-2.5">
        <input bind:value={question} type="text" placeholder="Type here" class="input input-bordered input-black w-[25vw]"/>
        <button on:click={handlehelp} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0">Ask</button>
        <button on:click={vc} class="btn btn-primary w-[25vw] bg-[#2f4159] text-white border-0">Voice</button>
    </div>
    <div class="words" contenteditable>
        <p id="p"></p>

        {#if loaded} 
        <p> {res.content} </p>
        {:else if loaded === false}
        <h1>loading</h1>
        {:else}
        {/if}

    </div>
</main>

<style>
    /* Your styles here */
</style>
