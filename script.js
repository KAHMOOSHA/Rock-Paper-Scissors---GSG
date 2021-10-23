var options1 = ["Rock" , "Paper" , "Scissors" ];
var options2 = ["Fire" , "Wood" , "Water" ];
var change = false;
var game = function(){
    var loadOptionButtons = function(options){ // create rock paper scissors buttons 
        for (let index = 0; index < options.length; index++) {
            var createButton = document.createElement('button'); //create button
            createButton.className = "myChoise"; // give class
            createButton.innerHTML = options[index]; // write HTML inside buttons ("rock", "paper", "scissors")
            createButton.id = options[index]; // give it either option1 or option2
            document.getElementById('RPS').appendChild(createButton); // actuall creation of the button
        }
    }
    var prepareEvents = function(options){ 
        if(options[0] == "Rock"){ 
            for (let index = 0; index < options.length; index++) {
                document.getElementById(options[index]).addEventListener('click' , function(){
                    switch(index){
                        case 0: document.getElementById('playerChoise').innerHTML = options[index]+"<br><br><i class='far fa-hand-rock'></i>";
                        break;
                        case 1: document.getElementById('playerChoise').innerHTML = options[index]+"<br><br><i class='far fa-hand-paper'></i>";
                        break;
                        case 2: document.getElementById('playerChoise').innerHTML = options[index]+"<br><br><i class='far fa-hand-scissors'></i>";
                        break;
                    }
                    var buttons = document.getElementsByClassName('myChoise');
                    for(var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                    var random = Math.floor(Math.random() * 3);
                    switch(random){
                        case 0: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='far fa-hand-rock'></i>";
                        break;
                        case 1: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='far fa-hand-paper'></i>";
                        break;
                        case 2: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='far fa-hand-scissors'></i>";
                        break;
                    }
                    compare();
                });
        }
        }else{
            for (let index = 0; index < options.length; index++) {
                document.getElementById(options[index]).addEventListener('click' , function(){
                    switch(index){
                        case 0: document.getElementById('playerChoise').innerHTML = options[index]+"<br><br><i class='far fa-hand-rock'></i>";
                        break;
                        case 1: document.getElementById('playerChoise').innerHTML = options[index]+"<br><br><i class='far fa-hand-paper'></i>";
                        break;
                        case 2: document.getElementById('playerChoise').innerHTML = options[index]+"<br><br><i class='far fa-hand-scissors'></i>";
                        break;
                    }
                    var buttons = document.getElementsByClassName('myChoise');
                    for(var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                    var random = Math.floor(Math.random() * 3);
                    switch(random){
                        case 0: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='far fa-hand-rock'></i>";
                        break;
                        case 1: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='far fa-hand-paper'></i>";
                        break;
                        case 2: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='far fa-hand-scissors'></i>";
                        break;
                    }
                    compare();
                });
        }
        }

        document.getElementById('play-again').addEventListener('click' , function(){
            var buttons = document.getElementsByClassName('myChoise');
                for(var i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = false;
                }
                document.getElementById('playerChoise').innerHTML = "  <p>PLAYER</p><br><br><i class='far fa-hand-rock inti-rock' ></i>";
                document.getElementById('Cchoise').innerHTML = "   <p>COMOUTER</p> <br><br><i class='far fa-hand-rock inti-rock' ></i>";
              
        });
    }

    var compare = function(){
        var player = document.getElementById('playerChoise').textContent; // what the player chose
        var computer = document.getElementById('Cchoise').textContent; // what the computer generated
        var win = document.getElementById('p-win').textContent; //
        var tie = document.getElementById('tie').textContent;
        var lose = document.getElementById('c-win').textContent;
        if(player == computer){
            return document.getElementById('tie').innerText = ++tie;
        }else if(player == "Rock" && computer == "Scissors"){
            return document.getElementById('p-win').innerText = ++win;
        }else if(player == "Paper" && computer == "Scissors"){
            return document.getElementById('c-win').innerText = ++lose;
        }else if(player == "Scissors" && computer == "Rock"){
            return document.getElementById('c-win').innerText = ++lose;
        }else if(player == "Scissors" && computer == "Paper"){
            return document.getElementById('p-win').innerText = ++win;
        }else if(player == "Paper" && computer == "Rock"){
            return document.getElementById('p-win').innerText = ++win;
        }else if(player == "Rock" && computer == "Paper"){
            return document.getElementById('c-win').innerText = ++lose;
        }
    }
    deletebuttons =  function (options) {
        for (let index = 0; index < options.length; index++) {
            document.getElementById(options[index]).remove();
        }
    }
    return{
        init: function(options){
            loadOptionButtons(options);
            prepareEvents(options);
        },
        initOnce: function(options){
            deletebuttons(options);
        }
    }
}

window.addEventListener('DOMContentLoaded' , function(){
    game().init(options1);
     document.getElementById('play').addEventListener('click' , function(){
        if(change){
            game().initOnce(options2);
            game().init(options1);
            change = false;
         }else{
            game().initOnce(options1);
            game().init(options2);
            change = true;
         }
     })
});