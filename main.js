let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scrolling down → Hide header
        header.style.top = "-170px"; 
    } else {
        // Scrolling up → Show header
        header.style.top = "0";
    }
    
    lastScroll = currentScroll;
});