var clicked = false;

document.getElementById("menu-button").onclick = function () {
    if (!clicked) {
        document.getElementById("menu-button").style.transform = "translate(-50vw, 0) rotate(0)";
        document.getElementById("menu-button").style.backgroundImage = "url('Nautilus-webpage-2024/Assets/images/Iconos/cerrar.png')";
        clicked = true;
        console.log("clickearon el menu");
        console.log(clicked);
        document.body.style.overflowY = 'hidden';
    } else {
        document.getElementById("menu-button").style.transform = "translate(0, 0) rotate(0)";
        document.getElementById("menu-button").style.backgroundImage = "url('Nautilus-webpage-2024/Assets/images/Iconos/menu.png')";
        clicked = false;
        console.log("clickearon el menu pero con false");
        console.log(clicked);
        document.body.style.position = 'relative'
        document.body.style.overflowY = 'auto';
    }
};
