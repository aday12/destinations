let userInput = document.getElementById("user_input_form");

userInput.addEventListener("submit", (e) => {
    e.preventDefault;

    const IMG_PLACEHOLDER = "https://plus.unsplash.com/premium_photo-1673264933116-983ff2cfa989?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXQlMjByYWluaWVyJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D"; 
    const desc = document.getElementById("description");
    const location = document.getElementById("location_name");
    const destName = document.getElementById("destination_name");
    const photoUrl = photo_url.value || IMG_PLACEHOLDER;

})