new kursr({
    type: 1,
    removeDefaultCursor: true,
    color: "#000000",

});

function home(){
    document.getElementById("home").style.color="black";
    document.getElementById("projects").style.color="";
    document.getElementById("about").style.color="";
}

function projects(){
    document.getElementById("home").style.color="";
    document.getElementById("projects").style.color="black";
    document.getElementById("about").style.color="";
}

function about(){
    document.getElementById("home").style.color="";
    document.getElementById("projects").style.color="";
    document.getElementById("about").style.color="black";
}