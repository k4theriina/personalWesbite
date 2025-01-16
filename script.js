
// hotbar page buttons
const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");
const expButton = document.querySelector("#experienceButton");
const projectsButton = document.querySelector("#projectsButton");
const iconContainer = document.querySelector('.icon-container');


const bgRectangle = document.querySelector(".bg_rectangle");
const Text = document.querySelector(".Title");
const sparkle = document.querySelector("#sparkle");
const miffyBear = document.querySelector("#miffy-bear");
const miffyBook = document.querySelector("#miffy-book");

// icon buttons (on top right)
const resButton = document.querySelector("#Resume_Icon");
const githubButton = document.querySelector("#Github");
const linkedinButton = document.querySelector("#LinkedIn");
iconContainer.style.animation = 'none';

// main buttons
const resButton2 = document.querySelector("#resButton2");
const projectsButton2 = document.querySelector("#projectButton2");

// media queries
const mediaQuery1 = window.matchMedia('(max-width: 600px)');

// icon buttons function
resButton.addEventListener("click", function() {
    window.open("Assets/KatherinaDayaon_Resume.pdf", "_blank");
});
githubButton.addEventListener("click", function() {
    window.open("https://github.com/k4theriina", "_blank");
});
linkedinButton.addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/katherina-dayaon", "_blank");
});

// main buttons function
resButton2.addEventListener("click", function() {
    window.open("Assets/KatherinaDayaon_Resume.pdf", "_blank");
});
projectsButton2.addEventListener("click", function() {
    exitPage("projects.html");
});

// hotbar page buttons function
homeButton.addEventListener("click", function() {
    window.location.href = "index.html";
});
aboutButton.addEventListener("click", function() {
    exitPage("about.html");
});
expButton.addEventListener("click", function() {
    exitPage("experience.html");
});
projectsButton.addEventListener("click", function() {
    exitPage("projects.html");
});

// animations for diff pages
function exitPage(targetUrl) {
    
    // change home button to grey
    homeButton.style.animation = 'toGrey 0.9s ease-out forwards';

    // change the page selected to blue
    if (targetUrl == "about.html") {
        aboutButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "experience.html") {
        expButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "projects.html") {
        projectsButton.style.animation = 'toBlue 0.9s ease-out forwards';
    }

    // Restart the animation
    bgRectangle.style.animation = 'none';
    bgRectangle.offsetHeight; /* trigger reflow */
    bgRectangle.style.animation = 'exit_bgrect .9s ease-out forwards';
    
    
    Text.style.animation = 'none';
    Text.offsetHeight; /* trigger reflow */
    Text.style.animation = 'fadeOut 0.15s ease-out forwards';
    
    resButton2.style.animation = 'none';
    resButton2.offsetHeight; /* trigger reflow */
    resButton2.style.animation = 'fadeOut 0.4s ease-out forwards';
    
    projectsButton2.style.animation = 'none';
    projectsButton2.offsetHeight; /* trigger reflow */
    projectsButton2.style.animation = 'fadeOut 0.4s ease-out forwards';
    
    sparkle.style.animation = 'none';
    sparkle.offsetHeight; /* trigger reflow */
    sparkle.style.animation = 'fadeOut 1s ease-out forwards';
    
    miffyBear.style.animation = 'none';
    miffyBear.offsetHeight; /* trigger reflow */
    miffyBear.style.animation = 'fadeOut 1s ease-out forwards';
    
    miffyBear.style.animation = 'none';
    miffyBear.offsetHeight; /* trigger reflow */
    miffyBear.style.animation = 'fadeOut 1s ease-out forwards';
    
    if (mediaQuery1.matches) {
        bgRectangle.style.animation = 'none';
        bgRectangle.offsetHeight; /* trigger reflow */
        bgRectangle.style.animation = 'exitBgMobile .9s ease-out forwards';

        Text.style.animation = 'none';
        Text.offsetHeight; /* trigger reflow */
        Text.style.animation = 'fadeOut 0.11s ease-out forwards';
        
        iconContainer.style.animation = 'none';
        iconContainer.offsetHeight; /* trigger reflow */
        iconContainer.style.animation = 'fadeOut 0.2s ease-out forwards';
        
        miffyBook.style.animation = 'none';

    }

    setTimeout(function() {
        window.location.href = targetUrl;
    }, 900);
};