//console.log("This is my Javascript learning experience for Module 6");
var homeIntro = document.getElementById("homeIntro");

var allIntros = document.getElementsByClassName("introParagraph");
//alert (allIntros[0].innerHTML);
var introParagraph = allIntros[0];

var hamburgerIcon = document.getElementById("hamburgerIcon");

var verticalNavBar = document.getElementById("verticalNavBar");

var firstNameSpan = document.createElement("span");
var lastNameSpan = document.createElement("span");
var space = document.createElement("span");

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

function showIntroParagraphandH1 (){
    homeIntro.removeAttribute("class");
    homeIntro.innerHTML = "hello";
    introParagraph.removeAttribute("class");
    homeIntro.setAttribute("class", "animate__animated animate__fadeIn");
    introParagraph.setAttribute("class", "animate__animated animate__fadeIn");

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
 introParagraph.setAttribute("class", "hide");
 // homeIntro.innerHTML="Desirée";


// Bring in name/animation element
var homeIntroTimer = setTimeout(showHomeIntro, 2000);
// clearTimeout (homeIntroTimer);
var homeOutroTimer = setTimeout(hideHomeIntro, 5000);

var OriginalIntroTimer = setTimeout(showIntroParagraphandH1, 7000);

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

