const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const links = document.querySelector(".links");

// Add click event listener for openBtn
openBtn.addEventListener("click", () => {
    // Show the close button
    closeBtn.style.display = 'block';
    openBtn.style.display = 'none';
    


    // Toggle the visibility of the links
    if (links.style.display === 'none' || links.style.display === '') {
        links.style.display = 'flex'; // Show links

    } else {
        links.style.display = 'none'; // Hide links
    }
});

// Add click event listener for closeBtn (optional, if you want it to close the menu)
closeBtn.addEventListener("click", () => {
    links.style.display = 'none'; // Hide links
    closeBtn.style.display = 'none'; // Hide close button
    openBtn.style.display = 'block';
});
