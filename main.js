var marcrophage = document.getElementById("macrophage");
var virus = document.getElementById("virus");
function up(){
    if (macrophage.classList != "animate") {
    macrophage.classList.add("animate");
    }
    setTimeout(function(){
        macrophage.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var macrophageTop = 
    parseInt(window.getComputedStyle(macrophage).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(virus).getPropertyValue("left"));
    if(blockleft<20 && blockleft>0 && characterTop>=130){
        virus.style.animation = "none";
        virus.style.display = "none";
        alert("You got infected")
    }
},10);
