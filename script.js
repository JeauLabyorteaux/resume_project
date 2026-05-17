const body = document.body;
const cards = document.querySelectorAll('.section-card, .project-card');
const home_c3po = document.getElementById('c3po');

// Light / Dark Mode Toggle Button
const theme_toggle_button = document.createElement('button');
theme_toggle_button.className = "theme-toggle";
theme_toggle_button.innerHTML = `<img src="theme.png" class="mode-icon" alt="Toggle Theme">`;
body.prepend(theme_toggle_button);

// C3PO->Home Button
const c3po_home = document.createElement('button');
c3po_home.className = "theme-toggle";
c3po_home.innerHTML = `<img src="back.png" class="back-icon" alt="Toggle Theme">`;



// Light / Dark Mode Event Listener
theme_toggle_button.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});



// Home -> C3PO Event Listener
if(home_c3po){
    home_c3po.addEventListener('click',function(){
        window.location.href = 'c3po.html';
})

}

// C3PO -> Home Event Listener
if(c3po_home){
    body.prepend(c3po_home);
    c3po_home.addEventListener('click',function(){
        window.location.href = 'index.html';
})
}

