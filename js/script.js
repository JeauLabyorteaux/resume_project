const body = document.body;
const cards = document.querySelectorAll('.section-card, .project-card');
const home_c3po = document.getElementById('c3po_project');
const home_ss = document.getElementById('score_send');
const home_movie = document.getElementById('movie_project');


// Light / Dark Mode Toggle Button
const theme_toggle_button = document.createElement('button');
theme_toggle_button.className = "theme-toggle";
theme_toggle_button.innerHTML = `<img src="/assets/images/theme.png" class="mode-icon" alt="Toggle Theme">`;
body.prepend(theme_toggle_button);

// C3PO->Home Button
const c3po_home = document.createElement('button');
c3po_home.className = "theme-toggle";
c3po_home.innerHTML = `<img src="/assets/images/back.png" class="back-icon" alt="Toggle Theme">`;

// Score_Sender->Home Button
const ss_home = document.createElement('button');
ss_home.className = "theme-toggle";
ss_home.innerHTML = `<img src="/assets/images/back.png" class="back-icon" alt="Toggle Theme">`;

// Light / Dark Mode Event Listener
theme_toggle_button.addEventListener('click', function() {
    localStorage.setItem('theme', document.documentElement.classList.toggle('dark-mode') ? 'dark':'light');
});



// Home -> C3PO Event Listener
if(home_c3po){
    home_c3po.addEventListener('click',function(){
        window.location.href = 'c3po.html';
})

}

// Home -> Score Sender Event Listener
if(home_ss){
    home_ss.addEventListener('click',function(){
        window.location.href = 'score_sender.html';
})
 
}

// Home -> Movie Event Listener
if(home_movie){
    home_movie.addEventListener('click',function(){
        window.location.href = 'movie_search.html';
})

}

// C3PO -> Home Event Listener
if(document.title === "C3PO"){
    body.prepend(c3po_home);
    c3po_home.addEventListener('click',function(){
        window.location.href = 'index.html';
})
}

// Score Sender -> Home Event Listener
if(document.title === "Score Automation Project"){
    body.prepend(ss_home);
    ss_home.addEventListener('click',function(){
        window.location.href = 'index.html';
})
}

