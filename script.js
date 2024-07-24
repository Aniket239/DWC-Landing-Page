
// ===================================== Add shadow in nav ================================
const nav = document.querySelector('nav');

// Function to add shadow when scrolled
function addShadowOnScroll() {
    // Get the current scroll position
    let scrollPosition = window.scrollY;

    // Check if the scroll position is greater than 0 (page is scrolled)
    if (scrollPosition > 0) {
        // Add the shadow class to the nav element
        nav.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    } else {
        // Remove the shadow class if scroll position is 0
        nav.style.boxShadow = "none";
    }
}
window.addEventListener('scroll', addShadowOnScroll);

// ================================================== scroll to section =========================================================


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70; // Adjust this value based on your fixed navbar height

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});

function openMenu(){
    var checkbox = document.getElementById('hamburger-checkbox');
    const mobileNav = document.querySelector('.mobile-nav')
    // Now, you can check if the checkbox is checked or not
    if (checkbox.checked) {
      console.log('The checkbox is checked');
      mobileNav.style.display = 'flex';
    } else {
      console.log('The checkbox is not checked');
      mobileNav.style.display = 'none';
    }    
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const mobileNav = document.querySelector('.mobile-nav')
    var checkbox = document.getElementById('hamburger-checkbox');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            mobileNav.style.display = 'none';
            checkbox.checked = false;
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70; // Adjust this value based on your fixed navbar height

            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});




// ================================================== nav items animation =========================================================


document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-links li');

    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('animate');
        }, 200 * index); // Adjust the delay as needed
    });
});

// ================================================== about the project animation =========================================================


const aboutProjectSection = document.querySelector('#about-the-project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(aboutProjectSection);

// ============================================== form ============================================
function enquiryForm() {
    const formContainer = document.getElementById('form-container');
    const body = document.getElementsByTagName('body')[0];
    formContainer.style.display = 'grid'; // Display the form container
    body.style.overflow = 'hidden';
}

// Add an event listener to the "Download Brochure" button
const downloadBrochureBtn = document.querySelector('.download-brochure');
downloadBrochureBtn.addEventListener('click', enquiryForm);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeForm);

function closeForm(){
    const formContainer = document.getElementById('form-container');
    const body = document.getElementsByTagName('body')[0];
    formContainer.style.display = 'none'; // Display the form container
    body.style.overflow = 'auto';
}


document.getElementById('nameInput').setCustomValidity('Please enter your full name');
document.getElementById('phoneInput').setCustomValidity('Please enter a valid 10-Digit mobile number');
document.getElementById('emailInput').setCustomValidity('');

function clearValidityMessage(element) {
    element.setCustomValidity('');
    console.log(element.value);
    if (element.value !== '') {
        element.classList.add('has-value');
    } else {
        element.classList.remove('has-value');
    }
}

function validatePhone(element){
    console.log(element.value);
    if (element.value !== '') {
        element.classList.add('has-value');
    } else {
        element.classList.remove('has-value');
    }
}



document.getElementById('phoneInput').addEventListener('input', function() {
    let phoneValue = this.value;
    let regex = /^\d{10}$/;
    
    if (!regex.test(phoneValue)) {
        this.setCustomValidity('Please enter a valid 10-digit mobile number');
    } else {
        this.setCustomValidity('');
    }
});


// ================================= Gallery ========================================
const tabs = document.getElementsByClassName('gallery-tab');
const tabContents = document.getElementsByClassName('gallery-tab-content');

function showTab(tabIndex) {
    for (let content of tabContents) {
        content.classList.remove('active');
        content.classList.add('hidden');
    }

    setTimeout(() => {
        tabContents[tabIndex - 1].classList.remove('hidden');
        tabContents[tabIndex - 1].classList.add('active');
    }, 300);
    
    // Manage tab focus
    for (let tab of tabs) {
        tab.classList.remove('focus');
    }
    tabs[tabIndex - 1].classList.add('focus');
}

// Initialize the first tab as active and focused
tabs[0].classList.add('focus');
showTab(1);

// Modal functionality
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

function openModal(imageElement) {
    modal.style.display = "flex";
    modalImage.src = imageElement.querySelector('img').src;
}

function closeModal() {
    modal.style.display = "none";
}

// Attach click event listeners to img-container elements
const imgContainers = document.getElementsByClassName('img-container');
for (let container of imgContainers) {
    container.addEventListener('click', function() {
        openModal(this);
    });
}


// ================================================ amenities ==============================

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto slide
setInterval(nextSlide, 5000); // Change slide every 3 seconds


// =========================================== Floor Plan =============================================

// ========== master plan =========================
let masterPlanCurrent = 0;

function masterfloorPlansShowSlide(index) {
    const masterSlides = document.querySelectorAll('.floor-plans-item');
    const mastertotalSlides = masterSlides.length;
    console.log(mastertotalSlides);
    if (index >= mastertotalSlides) {
        masterPlanCurrent = 0;
    } else if (index < 0) {
        masterPlanCurrent = mastertotalSlides - 1;
    } else {
        masterPlanCurrent = index;
    }
    const offset = -masterPlanCurrent * 100;
    document.querySelector('.master-floor-plans-container').style.transform = `translateX(${offset}%)`;
}

function masterFloorPlansprevSlide() {
    masterfloorPlansShowSlide(masterPlanCurrent + 1);
}

function masterFloorPlansprevSlide() {
    masterfloorPlansShowSlide(masterPlanCurrent - 1);
}
// ============== foor plan ========================
let current = 0;

function floorPlansShowSlide(index) {
    const slides = document.querySelectorAll('.floor-plans-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        current = 0;
    } else if (index < 0) {
        current = totalSlides - 1;
    } else {
        current = index;
    }
    const offset = -current * 100;
    document.querySelector('.floor-plans-container').style.transform = `translateX(${offset}%)`;
}

function floorPlansnextSlide() {
    floorPlansShowSlide(current + 1);
}

function floorPlansprevSlide() {
    floorPlansShowSlide(current - 1);
}

// Auto slide
setInterval(floorPlansnextSlide, 5000); // Change slide every 3 seconds

const floorPlansTabs = document.getElementsByClassName('floor-plans-tab');
const floorPlansTabContents = document.getElementsByClassName('floor-plans-tab-content');

function floorPlanShowTab(tabIndex) {
    for (let content of floorPlansTabContents) {
        content.classList.remove('active');
        content.classList.add('hidden');
    }

    setTimeout(() => {
        floorPlansTabContents[tabIndex - 1].classList.remove('hidden');
        floorPlansTabContents[tabIndex - 1].classList.add('active');
    }, 300);
    
    // Manage tab focus
    for (let tab of floorPlansTabs) {
        tab.classList.remove('focus');
    }
    floorPlansTabs[tabIndex - 1].classList.add('focus');
}

// Initialize the first tab as active and focused
floorPlansTabs[0].classList.add('focus');
floorPlanShowTab(1);


// Modal functionality
// const modal = document.getElementById('modal');
// const modalImage = document.getElementById('modal-image');

// function openModal(imageElement) {
//     modal.style.display = "flex";
//     modalImage.src = imageElement.querySelector('img').src;
// }

// function closeModal() {
//     modal.style.display = "none";
// }

// // Attach click event listeners to img-container elements
// const imgContainers = document.getElementsByClassName('img-container');
// for (let container of imgContainers) {
//     container.addEventListener('click', function() {
//         openModal(this);
//     });
// }






