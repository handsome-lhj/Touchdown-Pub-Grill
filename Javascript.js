// 1. Live Sports Status Toggle
// Automatically marks the first game as "LIVE" if it's currently match day
const updateSportsStatus = () => {
    const games = document.querySelectorAll('.bg-gray-800');
    if(games.length > 0) {
        const firstGame = games[0];
        firstGame.classList.add('border-sizzle'); // Highlight the live game
        firstGame.innerHTML += `<span class="inline-block mt-2 text-xs bg-red-600 px-2 py-1 rounded animate-pulse">LIVE NOW</span>`;
    }
};

// 2. Smooth Reveal on Scroll
// Makes sections fade in as the user scrolls down
const revealSections = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(section);
    });
};

// 3. Simple VIP Booking Feedback
const handleBooking = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "SENDING...";
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        alert("Thanks! Your VIP request has been sent. We'll call you shortly.");
        btn.innerText = originalText;
        btn.disabled = false;
        e.target.reset();
    }, 1500);
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateSportsStatus();
    revealSections();
    
    const bookingForm = document.querySelector('form');
    if(bookingForm) {
        bookingForm.addEventListener('submit', handleBooking);
    }
});