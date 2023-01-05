//console.log("This is my Javascript learning experience for Module 6");

var hamburgerIcon = document.getElementById("hamburgerIcon");

var verticalNavBar = document.getElementById("verticalNavBar");
    
hamburgerIcon.onclick = function(){
    // 
    if (verticalNavBar.className == "hide") {
        verticalNavBar.removeAttribute("class");
        verticalNavBar.setAttribute("class", "animate__animated animate__fadeInDown");
    } else { 
        verticalNavBar.setAttribute("class", "hide"); 
    }
};

