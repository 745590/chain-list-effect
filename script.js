document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.circle');
    const progressBar = document.querySelector('.progress-bar .indicator');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentStep = 1;

    updateProgressBar();

    nextButton.addEventListener('click', function() {
        currentStep++;
        if (currentStep > circles.length) {
            currentStep = circles.length;
        }
        updateProgressBar();
    });

    prevButton.addEventListener('click', function() {
        currentStep--;
        if (currentStep < 1) {
            currentStep = 1;
        }
        updateProgressBar();
    });

    function updateProgressBar() {
        circles.forEach((circle, index) => {
            if (index < currentStep) {
                circle.style.borderColor = '#4070f4';
                circle.style.color = '#4070f4';
            } else {
                circle.style.borderColor = '#e0e0e0';
                circle.style.color = '#999';
            }
        });
        const progressWidth = ((currentStep - 1) / (circles.length - 1)) * 100;
        progressBar.style.width = progressWidth + '%';

        if (currentStep === 1) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (currentStep === circles.length) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }
});
