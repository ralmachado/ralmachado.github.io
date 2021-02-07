function toggleMenu(x) {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("visible");
    x.classList.toggle("menu-animation");
    sidebar.classList.contains("visible") ? console.log("Opened sidebar") : console.log("Closed menu");
}

function showPicture(x) {
    var picture = document.getElementById(x);
    picture.classList.remove("no-render");
    picture.classList.add("visible");
    var close = document.getElementById("close");
    close.classList.toggle("no-render");
    console.log("Render " + x.id);
}

function hide(x) {
    if (typeof(x) == "string") {
        var element = document.getElementById(x);
        element.classList.remove("visible");
        element.classList.add("no-render");
        console.log("Hid " + x);
    } else {
        x.classList.remove("visible");
        x.classList.add("no-render");
        console.log("Hid "+ x.id)
    }
}

function themeChange() {
    var darkIcon = document.getElementById("dark-theme");
    var lightIcon = document.getElementById("light-theme");
    var sidebar = document.getElementById("sidebar");
    var menu = document.getElementsByClassName("menu");
    
    darkIcon.classList.toggle("no-render");
    lightIcon.classList.toggle("no-render");
    sidebar.classList.toggle("dark-mode");
    for (let bar of menu) 
        bar.classList.toggle("dark-2");
    
}