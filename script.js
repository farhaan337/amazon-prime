document.addEventListener('DOMContentLoaded', () => {

    // Toggle Profile Menu
    const profileLink = document.getElementById('profile-link');
    const profileMenu = document.getElementById('profile-menu');
    profileLink.addEventListener('click', () => {
        profileMenu.classList.toggle('active');
    });

    // Handle search interactions (Simple alert for now)
    const searchLink = document.getElementById('search-link');
    searchLink.addEventListener('click', () => {
        const searchQuery = prompt("Search for a movie or TV show:");
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
            // Add actual search functionality here (filtering or redirecting)
        }
    });

    // Handle navigation between "Home" and "Browse"
    const homeLink = document.getElementById('home-link');
    const browseLink = document.getElementById('browse-link');

    homeLink.addEventListener('click', () => {
        document.getElementById('trending-row').style.display = 'block';
        document.getElementById('top-picks-row').style.display = 'block';
    });

    browseLink.addEventListener('click', () => {
        document.getElementById('trending-row').style.display = 'none';
        document.getElementById('top-picks-row').style.display = 'none';
        alert("You are now browsing movies. Add filtering functionality here.");
        // Add additional browsing features like categories here
    });

    // Start Free Trial Button - simple interaction for now
    const startTrialButton = document.getElementById('start-trial-btn');
    startTrialButton.addEventListener('click', () => {
        alert("You have started your free trial! Enjoy your streaming experience.");
        // Link to registration or payment process can be added
    });
});
