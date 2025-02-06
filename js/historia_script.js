document.getElementById("2012-button").style.color = "yellow";
document.getElementById("2012-button").style.fontSize = "3.5vh";
lastId = 2012;

function scrollToSection(id) { 
    document.getElementById(lastId + "-button").style.color = "rgba(255, 255, 0, 0.658)";
    document.getElementById(lastId + "-button").style.fontSize = "2.5vh";
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    document.getElementById("pointer").style.top = 16.5 + (id - 2012) * 5.48 + "vh";
    document.getElementById(id + "-button").style.color = "yellow";
    document.getElementById(id + "-button").style.fontSize = "3.5vh";
    lastId = id;
    console.log(document.getElementById("pointer").style.top);
}