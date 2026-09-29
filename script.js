// Get the form using getElementById()
const userForm = document.getElementById("userForm");

// Get the output container using getElementById()
const infoOutput = document.getElementById("infoOutput");

// Get all form groups using getElementsByClassName()
const formGroups = document.getElementsByClassName("form-group");

// Get all input elements using getElementsByTagName()
const allInputs = document.getElementsByTagName("input");

// Use querySelector() to select the Show My Info button
const showButton = document.querySelector("#showInfo");

// Use querySelectorAll() to select all radio buttons
const colorOptions = document.querySelectorAll(
    'input[name="favoriteColor"]'
);

// Display the user's information
userForm.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get values from the input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const birthday = document.getElementById("birthday").value;
    const address = document.getElementById("address").value;
    const course = document.getElementById("course").value;
    const school = document.getElementById("school").value;
    const hobby = document.getElementById("hobby").value;
    const website = document.getElementById("website").value;

    // Get selected favorite color
    let favoriteColor = "";

    colorOptions.forEach(function(color) {
        if (color.checked) {
            favoriteColor = color.value;
        }
    });

    // Get selected country using querySelector()
    const country = document.querySelector("#country").value;

    // Display the information dynamically
    infoOutput.innerHTML =
        '<div class="info-row">' +
            '<span class="info-label">First Name:</span>' +
            '<span class="info-value">' + firstName + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Last Name:</span>' +
            '<span class="info-value">' + lastName + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Email Address:</span>' +
            '<span class="info-value">' + email + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Age:</span>' +
            '<span class="info-value">' + age + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Phone Number:</span>' +
            '<span class="info-value">' + phone + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Birthday:</span>' +
            '<span class="info-value">' + birthday + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Address:</span>' +
            '<span class="info-value">' + address + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Course / Program:</span>' +
            '<span class="info-value">' + course + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">School:</span>' +
            '<span class="info-value">' + school + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Favorite Hobby:</span>' +
            '<span class="info-value">' + hobby + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Personal Website:</span>' +
            '<span class="info-value">' + website + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Favorite Color:</span>' +
            '<span class="info-value">' + favoriteColor + '</span>' +
        '</div>' +

        '<div class="info-row">' +
            '<span class="info-label">Country:</span>' +
            '<span class="info-value">' + country + '</span>' +
        '</div>';

    // Dynamically change the output section style
    infoOutput.style.backgroundColor = "#eef2ff";
    infoOutput.style.borderLeftColor = "#10b981";

});

