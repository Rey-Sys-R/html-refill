document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'tk6lh.html'; // Replace with your desired URL
});

document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'r6mlh.html'; // Replace with your desired URL
});

// Countdown timer
var timeLeft = 15;
var countdownElement = document.getElementById('countdown');

var countdownTimer = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        document.getElementById('backButton').click(); // Automatically trigger back button click
    } else {
        countdownElement.innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
}, 1000);
