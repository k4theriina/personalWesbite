
// hotbar page buttons
const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");
const expButton = document.querySelector("#experienceButton");
const projectsButton = document.querySelector("#projectsButton");

// icon buttons (on top right)
const resButton = document.querySelector("#Resume_Icon");
const githubButton = document.querySelector("#Github");
const linkedinButton = document.querySelector("#LinkedIn");

const bgRectangle = document.querySelector("#bg_rectangle");
const Texth1 = document.querySelector("#bg_rectangle h1");
const Textp = document.querySelector("#bg_rectangle p");
const miffyBall = document.querySelector("#miffy-ball");
const miffyBook = document.querySelector("#miffy-book");
const container = document.querySelector(".exp-showcase-container");
const line = document.querySelector("#line");
const miffyJob = document.querySelector("#miffy-job");
const miffyStand = document.querySelector("#miffy-stand");
const sparkle = document.querySelector("#sparkle");
const iconContainer = document.querySelector(".icon-container");

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

// hotbar page buttons function
homeButton.addEventListener("click", function() {
    exitPage("index.html");
});
aboutButton.addEventListener("click", function() {
    exitPage("about.html");
});
expButton.addEventListener("click", function() {
    window.location.href = "experience.html";
});
projectsButton.addEventListener("click", function() {
    exitPage("projects.html");
});

// animations for diff pages
function exitPage(targetUrl) {

    setTimeout(function() {
        window.location.href = targetUrl;
    }, 950);

    // change home button to grey
    expButton.style.animation = 'toGrey 0.9s ease-out forwards';

    // change the page selected to blue
    if (targetUrl == "index.html") {
        homeButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "about.html") {
        aboutButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "projects.html") {
        projectsButton.style.animation = 'toBlue 0.9s ease-out forwards';
    }

    // Restart the animation
    bgRectangle.style.animation = 'none';
    bgRectangle.offsetHeight; /* trigger reflow */
    bgRectangle.style.animation = 'rectExit .9s ease-out forwards';
    
    Texth1.style.animation = 'none';
    Texth1.offsetHeight; /* trigger reflow */
    Texth1.style.visibility = 'visible';
    Texth1.style.animation = 'goUp .4s ease-out forwards';

    Textp.style.animation = 'none';
    Textp.offsetHeight; /* trigger reflow */
    Textp.style.visibility = 'visible';
    Textp.style.animation = 'goUp .4s ease-out forwards';
    
    miffyBall.style.animation = 'none';
    miffyBall.offsetHeight; /* trigger reflow */
    miffyBall.style.visibility = 'visible';
    miffyBall.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    miffyBook.style.animation = 'none';
    miffyBook.offsetHeight; /* trigger reflow */
    miffyBook.style.visibility = 'visible';
    miffyBook.style.animation = 'fadeOut 0.5s ease-out forwards';
    
    container.style.animation = 'none';
    container.style.visibility = 'visible';
    container.style.animation = 'fadeOut .5s ease-out 0s forwards';
    
    line.style.animation = 'none';
    line.offsetHeight; /* trigger reflow */
    line.style.visibility = 'visible';
    line.style.animation = 'fadeOut 1s ease-out forwards';

    miffyJob.style.animation = 'none';
    miffyJob.offsetHeight; /* trigger reflow */
    miffyJob.style.visibility = 'visible';
    miffyJob.style.animation = 'fadeOut 1s ease-out forwards';

    miffyStand.style.animation = 'none';
    miffyStand.offsetHeight; /* trigger reflow */
    miffyStand.style.visibility = 'visible';
    miffyStand.style.animation = 'fadeOut 1s ease-out forwards';
    
    sparkle.style.animation = 'none';
    sparkle.offsetHeight; /* trigger reflow */
    sparkle.style.visibility = 'visible';
    sparkle.style.animation = 'fadeOut .3s ease-out forwards';

    if (mediaQuery1.matches) {
        iconContainer.style.animation = 'none';
        iconContainer.offsetHeight; /* trigger reflow */
        iconContainer.style.visibility = 'visible';
        iconContainer.style.animation = 'fadeOut 0.3s ease-out forwards';
    }
};