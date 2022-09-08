// VISUAL TEXT
$(function (){
    var typingBool = false; 
    var typingIdx=0; 

    var typingTxt = '안녕하세요. \n 웹 퍼블리셔 양지선입니다 :)';
    typingTxt=typingTxt.split(""); 

    if(typingBool==false){ 
        typingBool=true;     
        var tyInt = setInterval(typing,100);
    } 
        
    function typing(){ 
        if(typingIdx < typingTxt.length){ 
            $(".typing").append(typingTxt[typingIdx] === '\n' ? '<br>' : typingTxt[typingIdx]);
            typingIdx++; 
        } else{ 
            clearInterval(tyInt); 
            $(".typing").addClass('line');
            $('#visual').addClass('scroll-down');
        } 
    }  

});


// VISUAL BG
function init(){

    //estrelas  
    var style = ["style1", "style2", "style3", "style4"];
    var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];
  
    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    var estrela = "";
    var qtdeEstrelas = 130;
    var noite = document.querySelector(".constelacao");
    var widthWindow = window.innerWidth;
    var heightWindow = window.innerHeight;
  
    for (var i = 0; i < qtdeEstrelas; i++) {
      estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
      + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
      + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
    }
  
    noite.innerHTML = estrela;


    // setTimeout(function (){
    //     scrollTo(0,0);
    // }, 100)
  
}
  
window.onload = init;
window.onresize = init;



$(window).on('scroll', function(){
    var height = $(window).scrollTop();
    if(height > 200 && height < 2000){
        $('.about__profile').addClass('fixed');
    }else{
        $('.about__profile').removeClass('fixed');
    }
});

// NEED INTERVAL
var need = function() {
    $('.need__content ul li').removeClass('active');
    $('.need__content ul li:nth-child('+i+')').addClass('active');
    i = i+1;
    if(i > $('.need__content ul li').length) i =1;
}
var i=1;
tid0 = setInterval(need,3000);

