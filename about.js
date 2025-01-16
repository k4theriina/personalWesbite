
// hotbar page buttons
const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");
const expButton = document.querySelector("#experienceButton");
const projectsButton = document.querySelector("#projectsButton");

const bgRectangle = document.querySelector(".bg_rectangle");
const Text = document.querySelector(".Title");
const miffyjob = document.querySelector("#miffyJob");
const miffyThink = document.querySelector("#miffyThink");
const wholeDisc = document.querySelector(".discCombine");
// const discBar = document.querySelector(".discBar");

const note1 = document.querySelector("#note1");
const note2 = document.querySelector("#note2");
const note3 = document.querySelector("#note3");
const iconContainer = document.querySelector(".icon-container");
const bgRect = document.querySelector(".bg_rectangle");

// icon buttons (on top right)
const resButton = document.querySelector("#Resume_Icon");
const githubButton = document.querySelector("#Github");
const linkedinButton = document.querySelector("#LinkedIn");

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
    window.location.href = "about.html";
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
    aboutButton.style.animation = 'toGrey 0.9s ease-out forwards';

    // change the page selected to blue
    if (targetUrl == "index.html") {
        homeButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "experience.html") {
        expButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "projects.html") {
        projectsButton.style.animation = 'toBlue 0.9s ease-out forwards';
    }

    setTimeout(function() {
        window.location.href = targetUrl;
    }, 900);

    // Restart the animation
    bgRectangle.style.animation = 'none';
    bgRectangle.offsetHeight; /* trigger reflow */
    bgRectangle.style.animation = 'rectExit .9s ease-out forwards';
    
    
    Text.style.animation = 'none';
    Text.offsetHeight; /* trigger reflow */
    Text.style.animation = 'fadeOut .1s ease-out forwards';
    
    miffyjob.style.animation = 'none';
    miffyjob.offsetHeight; /* trigger reflow */
    miffyjob.style.animation = 'fadeOut .5s ease-in forwards';

    miffyThink.style.animation = 'none';
    miffyThink.offsetHeight; /* trigger reflow */
    miffyThink.style.animation = 'fadeOut .5s ease-in forwards';

    sparkle.style.animation = 'none';
    sparkle.offsetHeight; /* trigger reflow */
    sparkle.style.animation = 'fadeOut .5s ease-out forwards';

    wholeDisc.style.animation = 'none';
    wholeDisc.offsetHeight; /* trigger reflow */
    wholeDisc.style.animation = 'RighttoLeft .5s ease-out forwards';

    note1.style.animation = 'none';
    note1.offsetHeight; /* trigger reflow */
    note1.style.animation = 'exitNote .5s ease-out forwards';

    note2.style.animation = 'none';
    note2.offsetHeight; /* trigger reflow */
    note2.style.animation = 'exitNote .5s ease-out forwards';

    note3.style.animation = 'none';
    note3.offsetHeight; /* trigger reflow */
    note3.style.animation = 'exitNote .5s ease-out forwards';

    if (mediaQuery1.matches) {
        // bgRect.style.backgroundColor = 'red';
        note1.style.visibility = 'hidden';
        note2.style.visibility = 'hidden';
        note3.style.visibility = 'hidden';
        
        note1.style.animation = 'none';
        note2.style.animation = 'none';
        note3.style.animation = 'none';
        
        
        wholeDisc.style.animation = 'none';
        wholeDisc.offsetHeight; /* trigger reflow */
        wholeDisc.style.visibility = 'visible';
        wholeDisc.style.animation = 'goLeftDisc 0.3s ease-out forwards';
        
        bgRectangle.style.animation = 'none';
        bgRectangle.offsetHeight; /* trigger reflow */
        bgRectangle.style.visibility = 'visible';
        bgRectangle.style.animation = 'rightToLeftmob 0.8s ease-out forwards';

        iconContainer.style.animation = 'none';
        iconContainer.offsetHeight; /* trigger reflow */
        iconContainer.style.visibility = 'visible';
        iconContainer.style.animation = 'fadeOut 0.3s ease-out forwards';
    }

    // discBar.style.animation = 'none';
    // discBar.offsetHeight; /* trigger reflow */
    // discBar.style.animation = 'RighttoLeft .5s ease-out forwards';

    
}