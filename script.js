
// ===================================== Add shadow in nav ================================
const nav = document.querySelector('nav');
function addShadowOnScroll() {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        nav.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
}
window.addEventListener('scroll', addShadowOnScroll);
// ================================================== scroll to section =========================================================


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70;
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});

function openMenu() {
    var checkbox = document.getElementById('hamburger-checkbox');
    const mobileNav = document.querySelector('.mobile-nav')
    if (checkbox.checked) {
        console.log('The checkbox is checked');
        mobileNav.style.display = 'flex';
    } else {
        console.log('The checkbox is not checked');
        mobileNav.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const mobileNav = document.querySelector('.mobile-nav')
    var checkbox = document.getElementById('hamburger-checkbox');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            mobileNav.style.display = 'none';
            checkbox.checked = false;
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70; 
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
});

// ================================================== nav items animation =========================================================

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-links li');

    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('animate');
        }, 200 * index);
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
    formContainer.style.display = 'grid'; 
    body.style.overflow = 'hidden';
}
const downloadBrochureBtn = document.querySelector('.download-brochure');
downloadBrochureBtn.addEventListener('click', enquiryForm);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', closeForm);
function closeForm() {
    const formContainer = document.getElementById('form-container');
    const body = document.getElementsByTagName('body')[0];
    formContainer.style.display = 'none'; 
    body.style.overflow = 'auto';
}

document.getElementById('nameInput').setCustomValidity('Please enter your full name');
document.getElementById('phoneInput').setCustomValidity('Please enter a valid 10-Digit mobile number');
document.getElementById('emailInput').setCustomValidity('');

function clearValidityMessage(element) {
    element.setCustomValidity('');
    const value = element.value.toString();
    console.log(value);
    
    // Check if the value as a string is not an empty string or invalid intermediate states
    if (value !== '' && value !== '-' && value !== '+' && value !== 'e' && value !== '-e' && value !== '+e') {
        element.classList.add('has-value');
        console.log("has value activated");
    } else {
        element.classList.remove('has-value');
        console.log("has value deactivated");
    }
}

document.getElementById('phoneInput').addEventListener('input', function () {
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

    for (let tab of tabs) {
        tab.classList.remove('focus');
    }
    tabs[tabIndex - 1].classList.add('focus');
}

tabs[0].classList.add('focus');
showTab(1);

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

function openModal(imageElement) {
    modal.style.display = "flex";
    modalImage.src = imageElement.querySelector('img').src;
}

function closeModal() {
    modal.style.display = "none";
}

const imgContainers = document.getElementsByClassName('img-container');
for (let container of imgContainers) {
    container.addEventListener('click', function () {
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

setInterval(nextSlide, 5000); 


// =========================================== Floor Plan =============================================

// ========== master plan =========================
let masterPlanCurrent = 0;

function masterfloorPlansShowSlide(masterPlanIndex) {
    const masterSlides = document.querySelectorAll('.master-floor-plans-item');
    const mastertotalSlides = masterSlides.length;
    if (masterPlanIndex >= mastertotalSlides) {
        masterPlanCurrent = 0;
    } else if (masterPlanIndex < 0) {
        masterPlanCurrent = mastertotalSlides - 1;
    } else {
        masterPlanCurrent = masterPlanIndex;
    }
    const masterPlanOffset = -masterPlanCurrent * 100;
    document.querySelector('.master-floor-plans-container').style.transform = `translateX(${masterPlanOffset}%)`;
}

function masterFloorPlansNextSlide() {
    masterfloorPlansShowSlide(masterPlanCurrent + 1);
}

function masterFloorPlansprevSlide() {
    masterfloorPlansShowSlide(masterPlanCurrent - 1);
}

setInterval(masterFloorPlansNextSlide, 5000);

// ============== floor plan ========================
let current = 0;

function floorPlansShowSlide(index) {
    const slides = document.querySelectorAll('.floor-plans-item');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        current = 0;
    } else if (index < 0) {
        current = index;
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

setInterval(floorPlansnextSlide, 5000);

// ============================= Floor plan tabs ====================================

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
    for (let tab of floorPlansTabs) {
        tab.classList.remove('focus');
    }
    floorPlansTabs[tabIndex - 1].classList.add('focus');
}

floorPlansTabs[0].classList.add('focus');
floorPlanShowTab(1);
