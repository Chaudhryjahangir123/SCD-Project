let currentIndex = 0; // Track the current slide
const itemsToShow = 2.5; // Adjust this value to show 3 or 4 items as needed
const container = document.querySelector('.container2');
const totalMovies = document.querySelectorAll('.movie2-box').length;

function moveSlide(direction) {
    currentIndex += direction;
    
    // Loop back to the start or end if out of bounds
    if (currentIndex < 0) {
        currentIndex = Math.ceil(totalMovies / itemsToShow) - 1;
    } else if (currentIndex >= Math.ceil(totalMovies / itemsToShow)) {
        currentIndex = 0;
    }

    // Calculate the offset to slide
    const offset = currentIndex * (548 * itemsToShow + 20); 
    container.style.transform = `translateX(-${offset}px)`;
}
