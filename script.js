
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





