// 1. SELECTING ELEMENTS
// We use 'document' (the global object for the page) to find elements.
// This is similar to finding an object in a list or a node in a tree.
const body = document.body;
const cards = document.querySelectorAll('.section-card, .project-card');

const toggleBtn = document.createElement('button');
toggleBtn.className = "theme-toggle";
toggleBtn.innerHTML = `<img src="theme.png" class="mode-icon" alt="Toggle Theme">`;


body.prepend(toggleBtn);

toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
