
// hotbar page buttons
const homeButton = document.querySelector("#homeButton");
const aboutButton = document.querySelector("#aboutButton");
const expButton = document.querySelector("#experienceButton");
const projectsButton = document.querySelector("#projectsButton");

const bgRect = document.querySelector(".bg_rectangle");
const h1 = document.querySelector(".bg_rectangle h1");
const p = document.querySelector(".bg_rectangle p");
const miffyWork = document.querySelector("#miffy-work");
const miffyBook = document.querySelector("#miffy-book");
const sparkle = document.querySelector("#sparkle");
const laptopPic = document.querySelector("#laptop-pic");

const mediaQuery1 = window.matchMedia('(max-width: 600px)');
const iconContainer = document.querySelector(".icon-container");
const projects = document.querySelector(".projects");

// icon buttons (on top right)
const resButton = document.querySelector("#Resume_Icon");
const githubButton = document.querySelector("#Github");
const linkedinButton = document.querySelector("#LinkedIn");

// external links buttons
const p1Github = document.querySelector("#GithubLink1");
const p1Portfolio = document.querySelector("#portfolio");

const p2Github = document.querySelector("#GithubLink2");

const openWebsite = document.querySelector("#externalLink");
const p3Github = document.querySelector("#GithubLink3");

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
    exitPage("experience.html");
});
projectsButton.addEventListener("click", function() {
    window.location.href = "projects.html";
});

// external links functions
p1Github.addEventListener("click", function() {
    window.open("https://github.com/morallyearlgrey/StemDay2024", "_blank");
});
p1Portfolio.addEventListener("click", function() {
    window.open("Assets/RockPaperAISensors_Portfolio.pdf", "_blank");
});

p2Github.addEventListener("click", function() {
    window.open("https://github.com/katerinagarkova/Knight-Hacks-2024", "_blank");
});

openWebsite.addEventListener("click", function() {
    window.open("https://k4theriina.github.io/todolist_website/", "_blank");
});
p3Github.addEventListener("click", function() {
    window.open("https://github.com/k4theriina/todolist_website", "_blank");
});

// animations for diff pages
function exitPage(targetUrl) {

    setTimeout(function() {
        window.location.href = targetUrl;
    }, 900);

    // change home button to grey
    projectsButton.style.animation = 'toGrey 0.9s ease-out forwards';

    // change the page selected to blue
    if (targetUrl == "index.html") {
        homeButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "about.html") {
        aboutButton.style.animation = 'toBlue 0.9s ease-out forwards';
    } else if (targetUrl == "experience.html") {
        expButton.style.animation = 'toBlue 0.9s ease-out forwards';
    }

    bgRect.style.animation = 'none';
    bgRect.offsetHeight; /* trigger reflow */
    bgRect.style.animation = 'rectExit .9s ease-out forwards';

    h1.style.animation = 'none';
    h1.offsetHeight; /* trigger reflow */
    h1.style.visibility = 'visible';
    h1.style.animation = 'fadeOut .2s ease-out forwards';
    
    p.style.animation = 'none';
    p.offsetHeight; /* trigger reflow */
    p.style.visibility = 'visible';
    p.style.animation = 'fadeOut .2s ease-out forwards';

    miffyWork.style.animation = 'none';
    miffyWork.offsetHeight; /* trigger reflow */
    miffyWork.style.visibility = 'visible';
    miffyWork.style.animation = 'fadeOut .3s ease-out forwards';
    
    miffyBook.style.animation = 'none';
    miffyBook.offsetHeight; /* trigger reflow */
    miffyBook.style.visibility = 'visible';
    miffyBook.style.animation = 'fadeOut .3s ease-out forwards';
    
    sparkle.style.animation = 'none';
    sparkle.offsetHeight; /* trigger reflow */
    sparkle.style.visibility = 'visible';
    sparkle.style.animation = 'fadeOut .3s ease-out forwards';
    
    laptopPic.style.animation = 'none';
    laptopPic.offsetHeight; /* trigger reflow */
    laptopPic.style.visibility = 'visible';
    laptopPic.style.animation = 'picExit .9s ease-out forwards';

    if (mediaQuery1.matches) {
        iconContainer.style.animation = 'none';
        iconContainer.offsetHeight; /* trigger reflow */
        iconContainer.style.visibility = 'visible';
        iconContainer.style.animation = 'fadeOut 0.4s ease-out forwards';
        
        projects.style.animation = 'none';
        projects.offsetHeight; /* trigger reflow */
        projects.style.visibility = 'visible';
        projects.style.animation = 'dexpand 0.4s ease-out 0.1s forwards';

    }

};