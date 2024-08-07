var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for(var i=0; i<numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        var buttonTextContent = this.textContent;
        makeSound(buttonTextContent);
        buttonAnimtion(buttonTextContent);

    });

}


document.addEventListener("keypress",function(event){

    makeSound(event.key);
    buttonAnimtion(event.key);

});


function makeSound(key){

    switch (key) {

        case "w":

            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            
            break;

        case "a":

            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            
            break;

        case "s":

            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            
            break;

        case "d":

            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            
            break;

        case "j":

            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            
            break;

        case "k":

            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            
            break;

        case "l":

            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            
            break;
    
    
        default:
        
    }

}

function buttonAnimtion(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");  

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);    

}

$(".dark-mode").click(function(){
    if ($("body").hasClass("dark")) {
        // Switch to light mode
        $("body").removeClass("dark").css("background-image", "url('./images/bg2.png')");
        $("h1").css("color", "black");
        $(".drum").css("color", "#DA0463");
        $(".drum").css("text-shadow", "8px 0 black");
    } else {
        // Switch to dark mode
        $("body").addClass("dark").css("background-image", "url('./images/bginverted.png')");
        $("h1").css("color", "white");
        $(".drum").css("color", "white");
        $(".drum").css("text-shadow", "8px 0 #DA0463");
    }
});

