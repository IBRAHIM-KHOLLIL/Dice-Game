function rollDice(){
    
var number1 = Math.floor(Math.random()*6)+1;

var randomImage1 = "dice"+ number1 +".png";

var imageSource1 = "image/"+ randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSource1);


var number2 = Math.floor(Math.random()*6)+1;

var randomImage2 = "dice"+ number2 +".png";

var imageSource2 = "image/"+ randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",imageSource2);

if(number1>number2){
    document.getElementById("play1").style.display = "block";
    document.getElementById("play2").style.display = "none";
    document.getElementById("dra").style.display = "none";
}
else if(number2>number1){
    document.getElementById("play2").style.display = "block";
    document.getElementById("play1").style.display = "none";
    document.getElementById("dra").style.display = "none";
}
else{
    document.getElementById("dra").style.display = "block";
    document.getElementById("play1").style.display = "none";
    document.getElementById("play2").style.display = "none";
}

}














