<script>
    import "../../app.css";
    import { onMount } from 'svelte';
    
    let timeInput = "";

    const handleTimeChange = () => {
        timeInput = document.getElementById("medicineTime").value;
    };

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
        listItem.classList.add("bg-white", "rounded-md", "shadow-md", "p-4", "mb-2", "flex", "items-center", "justify-between");
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

    // onMount callback
    onMount(() => {
        document.getElementById("medicineTime").addEventListener("change", handleTimeChange);
        document.getElementById("medicineTimeWrapper").addEventListener("click", function() {
            document.getElementById("medicineTime").focus();
        });
    });
</script>

<main>
    <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Medicine Tracker</h1>
        <div class="mb-4">
            <label for="medicineName" class="block font-semibold">Medicine Name:</label>
            <input type="text" id="medicineName" class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
        </div>
        <div class="mb-4">
            <label for="medicineTime" class="block font-semibold">Time:</label>
            <div id="medicineTimeWrapper" class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
                <input bind:value={timeInput} type="time" id="medicineTime" class="w-full bg-transparent">
            </div>
        </div>
        <button on:click={addMedicine} class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Medicine</button>
        <ul id="medicineList" class="mt-4">
        </ul>
    </div>
</main>

<style>
    /* Your styles here */
</style>
