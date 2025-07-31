// --- Jailthon Remodeling LLC - script.js ---

document.addEventListener("DOMContentLoaded", function() {

    // 1. Sticky Header & Mobile Navigation
    const header = document.querySelector('.main-header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Sticky header on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });


    // 2. Testimonial Slider
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(currentSlide);
        if(nextBtn) nextBtn.addEventListener('click', nextSlide);
        if(prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Optional: Auto-play slider
        // setInterval(nextSlide, 7000); 
    }


    // 3. Portfolio Filter
    const filterContainer = document.querySelector('.portfolio-filters');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (filterContainer) {
        filterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                // Deactivate existing active button
                filterContainer.querySelector('.active').classList.remove('active');
                // Activate new button
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (item.classList.contains(filterValue) || filterValue === 'all') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    }

});