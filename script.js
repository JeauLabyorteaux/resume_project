// 1. SELECTING ELEMENTS
// We use 'document' (the global object for the page) to find elements.
// This is similar to finding an object in a list or a node in a tree.
const body = document.body;

// 2. CREATING A NEW ELEMENT
// Let's create a button dynamically rather than hard-coding it in HTML.
const toggleBtn = document.createElement('button');
toggleBtn.textContent = "Toggle Dark Mode";
toggleBtn.style.display = "block";
toggleBtn.style.margin = "20px auto"; // Centers the button

// 3. INJECTING INTO THE DOM
// We attach our new button to the top of the body.
body.prepend(toggleBtn);

// 4. EVENT LISTENERS
// In JS, we use 'callbacks'. We tell the button: "When clicked, run this function."
toggleBtn.addEventListener('click', function() {
    // We check the current background color.
    // If it's empty or white, make it dark. Otherwise, reset it.
    if (body.style.backgroundColor === "rgb(51, 51, 51)") {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    } else {
        body.style.backgroundColor = "#333"; // Dark Gray
        body.style.color = "white";         // Light Text
    }
});
