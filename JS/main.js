jQuery(document).ready(function() {
    var navOffset = $("nav").offset().top;
    
    $(window).scroll(function(){
            var scrollPos = $(window).scrollTop();
            
            if (scrollPos >= navOffset) {
                $("nav").addClass("fixed");
            } else {
                $("nav").removeClass("fixed");
            }
            
    });
    
    
});

/*SLAJDE*/

var current = document.getElementById('current');
var slike = document.getElementsByClassName('thumb');
var strelica = document.getElementById('strelica');
var i=1;

strelica.addEventListener('click',display);

function display(){
    var sl = slike[i].getAttribute('src');
    current.setAttribute('src',sl);
    i++;
if(i == slike.length){
    i=0;
}
}

var time = setInterval(display,10000);

/*SLAJDER KRAJ*/

/*Ovo je proba za divslajder*/

var kontejner = document.getElementById("kontejner")
var kontejner1 = document.getElementById("kontejner1");
var j = 0;

kontejner.addEventListener(click,displayj);


function displayj (){
    kontejner.innerHTML=kontejner1}

/*--Kraj-- divslajder*/