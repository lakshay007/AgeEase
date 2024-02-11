<script>
    let darkMode = false;
  
    const toggleTheme = () => {
      darkMode = !darkMode;
      document.documentElement.classList.toggle('dark');
      // You may want to use localStorage to persist the theme preference
      // localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    };
  </script>
  
  <button
    class="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    on:click={toggleTheme}
  >
    {darkMode ? "Light Mode" : "Dark Mode"}
  </button>