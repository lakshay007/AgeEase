<script>
    import Nav from '$lib/Components/roundednav.svelte'
    import "../../app.css";
    let name = '';
  let doctor = 'Dr. Smith'; // Default value
  let date = '';
  let time = '';
  let confirmationMessage = '';

  function handleSubmit(event) {
    event.preventDefault();
    confirmationMessage = `Appointment booked for ${name} with ${doctor} on ${date} at ${time}.`;
    // You might want to handle further logic here, such as submitting data to a server
    // Resetting form fields
    name = '';
    date = '';
    time = '';
  }
</script>
<main class="h-full w-full flex flex-col rounded-3xl">
  <Nav class="rounded-3xl" />
  <div class="grow h-full rounded-b-3xl flex flex-row justify-around items-center">
      <div class="w-1/2 flex flex-col justify-center p-14">
        <h1 class="text-3xl font-bold mb-4 self-center text-center">Virtual Doctor Appointments Booking</h1>
        <form on:submit={handleSubmit} class="space-y-4 flex flex-col justify-center">
          <div>
            <label for="name" class="block font-semibold">Your Name:</label>
            <input type="text" id="name" bind:value={name} class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="doctor" class="block font-semibold">Doctor:</label>
            <select id="doctor" bind:value={doctor} class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Williams">Dr. Williams</option>
            </select>
          </div>
          <div>
            <label for="date" class="block font-semibold">Date:</label>
            <input type="date" id="date" bind:value={date} class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <div>
            <label for="time" class="block font-semibold">Time:</label>
            <input type="time" id="time" bind:value={time} class="w-full rounded-md p-2 border border-gray-300 focus:outline-none focus:border-blue-500">
          </div>
          <button type="submit" class="text-white px-4 py-2 rounded-md btn btn-primary w-[20vw] bg-[#2f4159] self-center border-0 ">Book Appointment</button>
        </form>
        {#if confirmationMessage != ''}
        <div class="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">{confirmationMessage}</div>
        {/if}
      </div>
      <div class="grow w-1/2 h-full rounded-r-xl flex justify-center items-center bg-white">
        <img src="/src/assets/health-sick.png" />
      </div>
    </div>
</main>
<style>
</style>