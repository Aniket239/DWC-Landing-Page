// ================================================ side nav ================================================

var sideNavCall = document.querySelector('.side-nav-call');
var phoneNumber = document.getElementById('side-nav-phone-number');

sideNavCall.addEventListener('mouseover', function () {
    phoneNumber.classList.add('revealed');
});

sideNavCall.addEventListener('mouseout', function () {
    phoneNumber.classList.remove('revealed');
});

document.addEventListener('DOMContentLoaded', function () {
    const sideNavbar = document.querySelector('.side-nav');

    window.addEventListener('scroll', function () {
        var scrollAmount = window.scrollY;
        if (scrollAmount > 300) {
            sideNavbar.classList.add('show');
            sideNavbar.classList.remove('side-nav-hide');
        } else {
            sideNavbar.classList.remove('show');
            sideNavbar.classList.add('side-nav-hide');
        }
    });
});


//============================================== bottom-nav================================

// document.addEventListener('DOMContentLoaded', function () {
//     const bottom = document.querySelector('.bottom-nav');

//     window.addEventListener('scroll', function () {
//         var scrollAmount = window.scrollY;
//         if (scrollAmount > 300) {
//             bottom.classList.add('show');
//             bottom.classList.remove('bottom-nav-hide');
//         } else {
//             bottom.classList.remove('show');
//             bottom.classList.add('bottom-nav-hide');
//         }
//     });
// });


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
    const mobileNav = document.querySelector('.mobile-nav');
    if (checkbox.checked) {
        mobileNav.style.display = 'flex';
        mobileNav.style.animationName = 'fadeIn';
    } else {
        mobileNav.style.animationName = 'fadeOut';
        setTimeout(() => {
            mobileNav.style.display = 'none';
        }, 500);  // Delay hiding the menu to allow the animation to complete
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('#nav-links a');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const mobileNav = document.querySelector('.mobile-nav');
    var checkbox = document.getElementById('hamburger-checkbox');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            mobileNav.style.display = 'none';
            checkbox.checked = false;
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70;
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
        });
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            mobileNav.style.display = 'none';
            checkbox.checked = false;
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            const offset = 70;
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
        });
    });

    function setActiveSection(sectionId) {
        mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === sectionId) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', function () {
        let fromTop = window.scrollY + 80;
        mobileNavLinks.forEach(link => {
            let section = document.getElementById(link.getAttribute('href').substring(1));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
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
document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('form-container');
    const body = document.getElementsByTagName('body')[0];
    const form = document.querySelector('.enquiry-form');

    function enquiryForm(value) {
        // Ensure the element exists before setting its value
        const utmFormNameInput = document.getElementById('utm_form_name');
        if (utmFormNameInput) {
            utmFormNameInput.value = value;
            console.log(`utm form name: ${utmFormNameInput.value}`);
        }

        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'enquiry_type';
        hiddenInput.id = 'enquiryType';
        hiddenInput.value = value;
        form.appendChild(hiddenInput);

        formContainer.style.display = 'grid';
        formContainer.classList.add('fade-in');
        formContainer.classList.remove('fade-out');
        body.style.overflow = 'hidden';
        formContainer.dataset.closed = 'false';
    }

    const closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', closeForm);

    function closeForm() {
        formContainer.classList.remove('fade-in');
        formContainer.classList.add('fade-out');

        formContainer.addEventListener('animationend', function handleAnimationEnd() {
            formContainer.style.display = 'none';
            formContainer.classList.remove('fade-out');
            formContainer.removeEventListener('animationend', handleAnimationEnd);
        });

        body.style.overflow = 'auto';
        formContainer.dataset.closed = 'true';
    }

    document.getElementById('nameInput').setCustomValidity('Please enter your full name');
    document.getElementById('phoneInput').setCustomValidity('Please enter a valid 10-Digit mobile number');
    document.getElementById('emailInput').setCustomValidity('');

    function clearValidityMessage(element) {
        element.setCustomValidity('');
        const value = element.value.toString();
        if (value !== '' && value !== '-' && value !== '+' && value !== 'e' && value !== '-e' && value !== '+e') {
            element.classList.add('has-value');
        } else {
            element.classList.remove('has-value');
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

    window.addEventListener('scroll', function () {
        var scrollAmount = window.scrollY;
        if (scrollAmount > 900 && formContainer.dataset.closed !== 'true') {
            formContainer.style.display = 'grid';
            formContainer.classList.add('fade-in');
            body.style.overflow = 'hidden';
        } else if (formContainer.dataset.closed !== 'true') {
            formContainer.style.display = 'none';
            formContainer.classList.remove('fade-in');
            body.style.overflow = 'auto';
        }
    });

    window.enquiryForm = enquiryForm; // Expose the function to the global scope
});

function formSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    window.location.assign(`form_submit.php?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}`);
}
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
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    const amenitiesListItems = document.querySelectorAll('.amenities-list li');

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;

    amenitiesListItems.forEach((item, idx) => {
        if (idx === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function nextSlide() {
    resetInterval();
    showSlide(currentSlide + 1);
}

function prevSlide() {
    resetInterval();
    showSlide(currentSlide - 1);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const amenitiesListItems = document.querySelectorAll('.amenities-list li');
    if (amenitiesListItems.length > 0) {
        amenitiesListItems[0].classList.add('active');
    }
    amenitiesListItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            resetInterval();
            showSlide(index);
        });
    });
    showSlide(currentSlide); // Initial call to display the first slide
    slideInterval = setInterval(nextSlide, 3000);
});

// =========================================== Floor Plan =============================================

// ========== master plan =========================

var screenWidth = screen.width;
console.log(`screen size: ${screenWidth}`);
let masterPlanCurrent = 0;
let masterPlanInterval;

if (screenWidth > 768) {
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
        resetMasterPlanInterval();
        masterfloorPlansShowSlide(masterPlanCurrent + 1);
    }

    function masterFloorPlansprevSlide() {
        resetMasterPlanInterval();
        masterfloorPlansShowSlide(masterPlanCurrent - 1);
    }

    function resetMasterPlanInterval() {
        clearInterval(masterPlanInterval);
        masterPlanInterval = setInterval(masterFloorPlansNextSlide, 3000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        masterPlanInterval = setInterval(masterFloorPlansNextSlide, 3000);
    });

}

// ============== floor plan ========================
let current = 0;
let floorPlanInterval;

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
    resetFloorPlanInterval();
    floorPlansShowSlide(current + 1);
}

function floorPlansprevSlide() {
    resetFloorPlanInterval();
    floorPlansShowSlide(current - 1);
}

function resetFloorPlanInterval() {
    clearInterval(floorPlanInterval);
    floorPlanInterval = setInterval(floorPlansnextSlide, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    floorPlanInterval = setInterval(floorPlansnextSlide, 3000);
});

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

// ==================================== Location Map ===========================================
var mapLoaded = false;
var loadingMap = false;

document.getElementById('view-map-btn').addEventListener('click', function () {
    var skeletonLoader = document.getElementById('skeleton-loader');

    if (screenWidth > 768) {
        document.getElementById('map-image-desktop').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('map-image-desktop').style.display = 'none';
            document.getElementById('google-map').style.display = 'block';
            document.getElementById('google-map').classList.remove('hidden');
            document.getElementById('view-map-btn').style.display = 'none';
            document.getElementById('go-back-btn').style.display = 'block';
        }, 500);
    } else {
        document.getElementById('map-image-mobile').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('map-image-mobile').style.display = 'none';
            document.getElementById('google-map').style.display = 'block';
            document.getElementById('google-map').classList.remove('hidden');
            document.getElementById('view-map-btn').style.display = 'none';
            document.getElementById('go-back-btn').style.display = 'block';
        }, 500);
    }
    if (!mapLoaded && !loadingMap) {
        skeletonLoader.style.display = 'block';
        loadingMap = true;
    }
    
    document.getElementById('google-map').addEventListener('load', function () {
        skeletonLoader.style.display = 'none';
        mapLoaded = true;
        loadingMap = false;
    });
});

document.getElementById('go-back-btn').addEventListener('click', function () {
    var skeletonLoader = document.getElementById('skeleton-loader');
    
    if (screenWidth > 768) {
        document.getElementById('google-map').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('google-map').style.display = 'none';
            document.getElementById('map-image-desktop').style.display = 'block';
            document.getElementById('map-image-desktop').classList.remove('hidden');
            document.getElementById('view-map-btn').style.display = 'block';
            document.getElementById('go-back-btn').style.display = 'none';
        }, 500);
    } else {
        document.getElementById('google-map').classList.add('hidden');
        setTimeout(() => {
            document.getElementById('google-map').style.display = 'none';
            document.getElementById('map-image-mobile').style.display = 'block';
            document.getElementById('map-image-mobile').classList.remove('hidden');
            document.getElementById('view-map-btn').style.display = 'block';
            document.getElementById('go-back-btn').style.display = 'none';
        }, 500);
    }

    if (loadingMap) {
        skeletonLoader.style.display = 'none';
        loadingMap = false;
    }
});




let currentLocation = 0;
let locationInterval;

function showLocation(index) {
    const locations = document.querySelectorAll('.map-item');
    const totalLocations = locations.length;
    const locationListItems = document.querySelectorAll('.location-list li');

    if (index >= totalLocations) {
        currentLocation = 0;
    } else if (index < 0) {
        currentLocation = totalLocations - 1;
    } else {
        currentLocation = index;
    }

    const offset = -currentLocation * 100;
    document.querySelector('.map-container').style.transform = `translateX(${offset}%)`;

    locationListItems.forEach((item, idx) => {
        if (idx === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function nextLocation() {
    resetLocationInterval();
    showLocation(currentLocation + 1);
}

function prevLocation() {
    resetLocationInterval();
    showLocation(currentLocation - 1);
}

function resetLocationInterval() {
    clearInterval(locationInterval);
    locationInterval = setInterval(nextLocation, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const locationListItems = document.querySelectorAll('.location-list li');
    if (locationListItems.length > 0) {
        locationListItems[0].classList.add('active');
    }
    locationListItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            resetLocationInterval();
            showLocation(index);
        });
    });
    showLocation(currentLocation); // Initial call to display the first slide
    locationInterval = setInterval(nextLocation, 3000);
});


// ============================ project video ===============================

document.getElementById('video-thumbnail').addEventListener('click', function () {
    var iframe = document.getElementById('video-iframe');
    var src = iframe.src;
    iframe.src = src + (src.includes('?') ? '&' : '?') + 'autoplay=1';

    document.getElementById('video-thumbnail').style.display = 'none';
    document.getElementById('video-wrapper').style.display = 'block';
});

