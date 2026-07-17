const body = document.body;

// Light / Dark Mode Toggle Button
const theme_toggle_button = document.createElement('button');
theme_toggle_button.className = "theme-toggle";
theme_toggle_button.innerHTML = `<img src="assets/images/theme.png" class="mode-icon" alt="Toggle Theme">`;
body.prepend(theme_toggle_button);

// Light / Dark Mode Event Listener
theme_toggle_button.addEventListener('click', function() {
    localStorage.setItem('theme', document.documentElement.classList.toggle('dark-mode') ? 'dark':'light');
});

// Single, robust handler for any "Back to Home" button
const backButton = document.getElementById('back-to-home') || document.getElementById('resume-back');
if (backButton) {
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}

// Home Page Project Cards Redirection (only runs if the elements exist on the landing page)
const home_c3po = document.getElementById('c3po_project');
const home_ss = document.getElementById('score_send');
const home_movie = document.getElementById('movie_project');

if (home_c3po) {
    home_c3po.addEventListener('click', function() {
        window.location.href = 'c3po.html';
    });
}

if (home_ss) {
    home_ss.addEventListener('click', function() {
        window.location.href = 'score_sender.html'; // Ensure this matches your file name
    });
}

if (home_movie) {
    home_movie.addEventListener('click', function() {
        window.location.href = 'movie_search.html';
    });
}