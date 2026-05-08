// 1. SELECTING ELEMENTS
// We use 'document' (the global object for the page) to find elements.
// This is similar to finding an object in a list or a node in a tree.
const body = document.body;
const cards = document.querySelectorAll('.section-card, .project-card');
const home_c3po = document.getElementById('c3po');
const c3po_home = document.getElementById('c3po-back');

const toggleBtn = document.createElement('button');
toggleBtn.className = "theme-toggle";
toggleBtn.innerHTML = `<img src="theme.png" class="mode-icon" alt="Toggle Theme">`;


body.prepend(toggleBtn);

toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Home -> C3PO
if(home_c3po){
home_c3po.addEventListener('click',function(){
    window.location.href = 'c3po.html';
})

}

// C3PO -> Home
if(c3po_home){
c3po_home.addEventListener('click',function(){
    window.location.href = 'index.html';
})
}
