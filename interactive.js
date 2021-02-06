function showMenu(x) {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("visible");
    x.classList.toggle("menu-animation");
}

// Create a function to enlarge profile picture?
function showPicture(x) {
    var picture = document.getElementById(x);
    picture.classList.remove("no-render");
    picture.classList.add("visible");
    var close = document.getElementById("close");
    close.classList.toggle("no-render");
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