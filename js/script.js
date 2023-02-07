// Typing animation

var typed = new Typed(".typing", {
    strings: ["Junior", "Front-End", "Developer", "Designer"],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Junior", "Front-End", "Developer", "Designer"],
    typeSpeed: 120,
    backSpeed: 70,
    loop: true
});


// Moving Button
function whenSheSayYes(){
    alert('I knew! I wait to your message in my LinkedIn :D');
}

function mueveElBoton(){
    width = window.innerWidth;
    height = window.innerHeight;

    newWidth = (Math.random() * width);
            newHeight = (Math.random() * height.margin)

    document.getElementById('btnNo').style.position = "absolute";
    document.getElementById('btnNo').style.left = newWidth + "px";
    document.getElementById('btnNo').style.top = newHeight + "px";
    

}