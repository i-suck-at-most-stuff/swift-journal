document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    
    // Check for dark mode preference in localStorage
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Toggle Light Mode';
    }
    
    toggleButton.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
        toggleButton.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun"></i> Toggle Light Mode' 
            : '<i class="fas fa-moon"></i> Toggle Dark Mode';
    });
});
