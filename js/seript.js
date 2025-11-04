


document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }
})

    // 2. Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    const hireMeBtn = document.getElementById("hire-me-btn");
    
    const smoothScrollToTarget = (targetId) => {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Subtract 80px for fixed navbar height
            const offsetTop = targetElement.offsetTop - 80; 
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };
    
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            smoothScrollToTarget(targetId);
        });
    });

    if (hireMeBtn) {
        hireMeBtn.addEventListener("click", function () {
            smoothScrollToTarget("#contact");
        });
    }

    // 3. Form Handling
    // const form = document.querySelector("form");
    // if (form) {
    //     form.addEventListener("submit", function (e) {
    //         e.preventDefault();
    //         const formData = new FormData(form);
    //         const data = Object.fromEntries(formData);
    //         console.log("Form submitted with data:", data);
    //         alert("Thank you for your message! I will get back to you soon.");
    //         form.reset();
    //     });
    // }

    // 4. Nav Border on Scroll


// --- New Code for Tabbed Skills Section ---
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 1. Get the target content ID from the data-tab attribute
        const targetTab = this.getAttribute('data-tab');

        // 2. Deactivate all tab links and hide all content
        tabLinks.forEach(item => {
            // Remove active styles from link
            item.classList.remove('active-tab', 'text-primary', 'border-primary');
            item.classList.add('text-gray-600', 'border-transparent');
        });
        
        tabContents.forEach(content => {
            // Hide all content divs
            content.classList.add('hidden');
        });

        // 3. Activate the clicked tab link
        this.classList.remove('text-gray-600', 'border-transparent');
        this.classList.add('active-tab', 'text-primary', 'border-primary');

        // 4. Show the corresponding content panel
        const activeContent = document.getElementById(targetTab);
        if (activeContent) {
            activeContent.classList.remove('hidden');
        }
    });
});
// ------------------------------------------


//carousel
document.addEventListener("DOMContentLoaded", function() {
    // Select the outer wrapper (where overflow-x-auto is)
    const carouselWrapper = document.querySelector('.overflow-x-auto.w-full');
    // Select the inner carousel track (where animate-carousel is)
    const projectCarousel = document.getElementById('project-carousel');

    if (carouselWrapper && projectCarousel) {
        // Function to pause the animation by adding the 'paused' class
        const pauseScroll = () => {
            projectCarousel.classList.add('paused');
        };

        // Function to resume the animation by removing the 'paused' class
        const resumeScroll = () => {
            projectCarousel.classList.remove('paused');
        };

        // 1. Pause when the mouse enters the carousel area
        carouselWrapper.addEventListener('mouseenter', pauseScroll);

        // 2. Resume when the mouse leaves the carousel area
        carouselWrapper.addEventListener('mouseleave', resumeScroll);

        // 3. Pause when a user clicks/taps (indicating they might drag to scroll)
        carouselWrapper.addEventListener('mousedown', pauseScroll);
        carouselWrapper.addEventListener('touchstart', pauseScroll);
        
        // 4. Resume after a short delay when the user releases the click/tap
        // The delay ensures the animation doesn't jump back immediately.
        carouselWrapper.addEventListener('mouseup', () => setTimeout(resumeScroll, 500));
        carouselWrapper.addEventListener('touchend', () => setTimeout(resumeScroll, 500));
    }
});