//console.log("This is my Javascript learning experience for Module 6");
var homeIntro = document.getElementById("homeIntro");
var footerDiv = document.getElementById("footer");

// Grabbing div that contains all the paragraphs. Div had an id called introParagraphDiv in HTML
var allIntrosDiv = document.getElementById("introParagraphDiv");

var hamburgerIcon = document.getElementById("hamburgerIcon");

var verticalNavBar = document.getElementById("verticalNavBar");

var firstNameSpan = document.createElement("span");
var lastNameSpan = document.createElement("span");
var space = document.createElement("span");

var homeIntroSeconds = 2;
var homeOutroSeconds = 4;
var introParagraphH1AndFooterSeconds = 6;
var millisecondsPerSecond = 1000;

firstNameSpan.innerHTML = "Desirée";
lastNameSpan.innerHTML = "Girotto";
space.innerHTML = " ";

homeIntro.appendChild(firstNameSpan);
homeIntro.appendChild(space);
homeIntro.appendChild(lastNameSpan);

firstNameSpan.setAttribute("class", "animate__animated animate__fadeInDown");
lastNameSpan.setAttribute("class", "animate__animated animate__fadeInRight");


function showHomeIntro (){
    homeIntro.removeAttribute("class");
}

function showIntroParagraphH1AndFooter (){
    homeIntro.removeAttribute("class");
    homeIntro.innerHTML = "hello";
    
    allIntrosDiv.removeAttribute("class");
    
    homeIntro.setAttribute("class", "animate__animated animate__fadeIn");
    allIntrosDiv.setAttribute("class", "animate__animated animate__fadeIn");
    
    footerDiv.removeAttribute("class");
    footerDiv.setAttribute("class", "animate__animated animate__fadeIn");
}

function hideHomeIntro (){
   // alert ("Yes");
    firstNameSpan.setAttribute("class", "animate__animated animate__fadeOut");
    lastNameSpan.setAttribute("class", "animate__animated animate__fadeOut");
    // firstNameSpan.setAttribute("class", "hide");
    // lastNameSpan.setAttribute("class", "hide");

}

// Hides home intro until animation runs
homeIntro.setAttribute("class", "hide");
allIntrosDiv.setAttribute("class", "hide");
footerDiv.setAttribute( "class", "hide" );
 // homeIntro.innerHTML="Desirée";


// Bring in name/animation element
var homeIntroTimer = setTimeout(showHomeIntro, homeIntroSeconds * millisecondsPerSecond);
// clearTimeout (homeIntroTimer);
var homeOutroTimer = setTimeout(hideHomeIntro, homeOutroSeconds * millisecondsPerSecond);

var OriginalIntroTimer = setTimeout(showIntroParagraphH1AndFooter, introParagraphH1AndFooterSeconds * millisecondsPerSecond);

// homeIntro.setAttribute("class", "animate__animated animate__fadeInDown");

//  clearTimeout(homeIntroTimer);

// This makes the vertical navigation bar hidden until the hamburger icon is clicked and goes back to
// hidden when clicked again
hamburgerIcon.onclick = function(){
    // 
    if (verticalNavBar.className == "hide") {
        verticalNavBar.removeAttribute("class");
        verticalNavBar.setAttribute("class", "animate__animated animate__fadeInDown");
    } else { 
        verticalNavBar.setAttribute("class", "hide"); 
    }
};











