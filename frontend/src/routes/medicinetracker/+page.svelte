<script>
    import "../../app.css";
    import { onMount } from 'svelte';
    import Nav from '$lib/Components/roundednav.svelte'
    let timeInput = "";

    const handleTimeChange = () => {
        timeInput = document.getElementById("medicineTime").value;
    };

    let selectflag;

    // Define addMedicine function outside onMount
    const addMedicine = () => {
        var nameInput = document.getElementById("medicineName");
        
        var medicineName = nameInput.value.trim();
        var medicineTime = timeInput;

        if (medicineName === "") {
            alert("Please enter a medicine name.");
            return;
        }

        var list = document.getElementById("medicineList");
        var listItem = document.createElement("li");
        listItem.classList.add("bg-white", "rounded-md", "shadow-md", "p-4", "mb-2", "flex", "items-center", "justify-between", "gap-2");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function() {
            listItem.classList.toggle("line-through");
        };
        var label = document.createElement("label");
        console.log(medicineTime)
        label.textContent = medicineName + " at " + medicineTime;
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        list.appendChild(listItem);

        nameInput.value = "";
        timeInput = ""; // Reset timeInput
    };


    const selectchange = () => {

    }

    // onMount callback
    onMount(() => {
        document.getElementById("medicineTime").addEventListener("change", handleTimeChange);
        document.getElementById("medicineTimeWrapper").addEventListener("click", function() {
            document.getElementById("medicineTime").focus();
        });
    });
</script>

<main class="h-full w-full flex flex-col bg-[#eeeeee] rounded-3xl">
    <Nav class="border-gray-300 border-4">
    </Nav>
    <div class="grow h-full rounded-b-3xl flex flex-row justify-around items-center">
        <div class="grow h-full w-1/2 rounded-b-3xl p-5 flex flex-col gap-3 justify-center items-center">
            <h1 class="text-3xl font-bold mb-4">Medicine Tracker</h1>
            <div class="mb-4 flex flex-col gap-2 w-[20vw]">
                <label for="medicineName" class="block font-semibold">Medicine Name</label>
                <input type="text" id="medicineName" class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
            </div>
            <div class="mb-4 flex flex-col gap-2 w-[20vw]">
                <label for="medicineTime" class="block font-semibold">Time</label>
                <div id="medicineTimeWrapper" class="w-full rounded-md p-2 border bg-white border-gray-300 focus:outline-none focus:border-blue-500">
                    <input bind:value={timeInput} type="time" id="medicineTime" class="w-full bg-transparent">
                </div>
            </div>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                  <span class="label-text">Pick Reminder</span>
                </div>
                <select bind:value={selectflag} class="select select-bordered">
                  <option disabled selected>Pick one</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                </select>
              </label>
            {#if selectflag === "Weekly"}
            <div class="flex flex-row gap-4 items-center">
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Mon</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Tue</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Wed</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Thu</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Fri</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Sat</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="label cursor-pointer flex flex-col justify-center items-center">
                      <span class="label-text">Sun</span> 
                      <input type="checkbox" checked="checked" class="checkbox" />
                    </label>
                </div>

            </div>
            {/if}
            <button on:click={addMedicine} class="btn btn-primary w-[20vw] bg-[#2f4159] text-white border-0 px-4 py-2 rounded-md">Add Medicine</button>
            <ul id="medicineList" class="mt-4">
            </ul>
        </div>
        <div class="grow h-full flex items-center justify-center w-1/2 bg-white">
            <img src="/health-solution.png" alt="" />
        </div>
    </div>
</main>

<style>
    /* Your styles here */
</style>
