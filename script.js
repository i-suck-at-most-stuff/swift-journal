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
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const typeFilter = document.getElementById('type-filter');

    // Function to filter posts based on search query and type
    function filterPosts() {
        const query = searchBar.value.toLowerCase();
        const type = typeFilter.value;
        const posts = document.querySelectorAll('.post');

        posts.forEach(post => {
            const title = post.querySelector('h2').innerText.toLowerCase();
            const postType = post.classList.contains('journal') ? 'journal'
            : post.classList.contains('decript') ? 'decript'
                            : post.classList.contains('code') ? 'code'
                            : post.classList.contains('media') ? 'media'
                            : post.classList.contains('project') ? 'project'
                            : '';

            // Check if post matches search query and type filter
            const matchesQuery = title.includes(query);
            const matchesType = (type === 'all') || (postType === type);

            if (matchesQuery && matchesType) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    }

    // Event listeners for search bar and type filter
    searchBar.addEventListener('input', filterPosts);
    typeFilter.addEventListener('change', filterPosts);

    // Initial filter (in case there are default values in the search bar or type filter)
    filterPosts();
});
