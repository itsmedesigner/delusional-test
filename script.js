// JavaScript to control rotation based on scrolling
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    let isScrolling;

    // Function to add the rotation class
    function startRotating() {
        stars.forEach(star => {
            star.classList.add('rotate');
        });
    }

    // Event listener for scrolling
    window.addEventListener('scroll', function () {
        startRotating();

        // Clear the timeout if it's still counting down
        window.clearTimeout(isScrolling);

        // Set a timeout to stop the rotation after scrolling stops (200ms delay)
        isScrolling = setTimeout(function () {
            stopRotating();
        }, 200);
    });
});

// JavaScript to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('testForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect answers from the form
        const formData = new FormData(form);
        let totalScore = 0;

        // Iterate through formData to calculate the score
        for (const [key, value] of formData.entries()) {
            totalScore += parseInt(value);
        }

        // Save score in session storage
        sessionStorage.setItem('testScore', totalScore);

        // Redirect to results page
        window.location.href = 'result.html';
    });
});


