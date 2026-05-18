const body = document.body;
const input = document.getElementById("myInput");
const search_button = document.getElementById('search');

const streamingUL = document.querySelector('.streaming-list');
const buyUL = document.querySelector('.buy-list');
const rentUL = document.querySelector('.rent-list');

function displayProvidersToUser(title, apiResponse) {
    // Clear out any old search results from previous clicks
    if (streamingUL) streamingUL.innerHTML = '';
    if (buyUL) buyUL.innerHTML = '';
    if (rentUL) rentUL.innerHTML = '';

    // Populate the Streaming column
    if (apiResponse.flatrate && apiResponse.flatrate.length > 0) {
        apiResponse.flatrate.forEach(name => {
            streamingUL.innerHTML += `<li>${name}</li>`;
        });
    } else {
        streamingUL.innerHTML = '<li>Not available to stream</li>';
    }

    // Populate the Buy column
    if (apiResponse.buy && apiResponse.buy.length > 0) {
        apiResponse.buy.forEach(name => {
            buyUL.innerHTML += `<li>${name}</li>`;
        });
    } else {
        buyUL.innerHTML = '<li>Not available to buy</li>';
    }

    // Populate the Rent column
    if (apiResponse.rent && apiResponse.rent.length > 0) {
        apiResponse.rent.forEach(name => {
            rentUL.innerHTML += `<li>${name}</li>`;
        });
    } else {
        rentUL.innerHTML = '<li>Not available to rent</li>';
    }
}

async function getMovieProviders(movieTitle) {
    // Replace with your actual live Invoke URL
    const apiUrl = "https://g88y47xrja.execute-api.us-west-2.amazonaws.com/moviedb"; 

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ movie_title: movieTitle })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Server responded with status ${response.status}`);
        }

        const data = await response.json();
        console.log("Success! Movie Data:", data);
        
        // FIX: Hand the successful live data over to your display function!
        displayProvidersToUser(movieTitle, data);

    } catch (error) {
        console.error("Failed to fetch movie providers:", error.message);
        alert(`Error: ${error.message}`);
    }
}

// Call API if button pressed
search_button.addEventListener('click', function() {
    getMovieProviders(input.value);
});