var random1 = Math.floor( Math.random()*6 +1);
var random2 = Math.floor( Math.random()*6 +1);
document.querySelector( ".dice .img1").src ="dice"+random1+".png"; 
document.querySelector( ".dice .img2").src ="dice"+random2+".png"; 
if(random1>random2){
    document.querySelector(".container h1").innerHTML=" Player 1 wins!"

}
else if(random1<random2){
    document.querySelector(".container h1").innerHTML= "Player 2 wins!"
}
else if(random1===random2){
    document.querySelector(".container h1").innerHTML= "Draw!!"
}
