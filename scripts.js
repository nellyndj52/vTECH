// Dark mode toggle functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Get the modal elements
var modal = document.getElementById("productModal");
var modalImage = document.getElementById("modalImage");
var modalTitle = document.getElementById("modalTitle");
var modalDescription = document.getElementById("modalDescription");
var modalPrice = document.getElementById("modalPrice");
var closeSpan = document.querySelector(".close");

// Function to open the modal with product details
function openModal(productCard) {
    var imageSrc = productCard.querySelector(".product-image").src;
    var title = productCard.getAttribute("data-title");
    var description = productCard.getAttribute("data-description");
    var price = productCard.getAttribute("data-price");

    // Set the modal content
    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalPrice.textContent = price;

    // Display the modal
    modal.style.display = "block";
}

// Close the modal when the <span> (x) is clicked
closeSpan.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
