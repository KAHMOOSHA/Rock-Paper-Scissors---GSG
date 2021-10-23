var options1 = ["Rock" , "Paper" , "Scissors" ];
var options2 = ["Water" , "Fire" , "Wood"];
var change = false;
// var player = document.getElementById('PchoiseId').textContent; // what the player chose
//         let computer = document.getElementById('Cchoise').textContent; // what the computer generated
//         var win = document.getElementById('p-win').textContent; //
//         var tie = document.getElementById('tie').textContent;
//         var lose = document.getElementById('c-win').textContent;
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
                        case 0: document.getElementById('PchoiseId').innerHTML = options[index]+"<i class='far fa-hand-rock'></i>";
                        break;
                        case 1: document.getElementById('PchoiseId').innerHTML = options[index]+"<i class='far fa-hand-paper'></i>";
                        break;
                        case 2: document.getElementById('PchoiseId').innerHTML = options[index]+"<i class='far fa-hand-scissors'></i>";
                        break;
                    }
                    var buttons = document.getElementsByClassName('myChoise');
                    for(var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                    var random = Math.floor(Math.random() * 3);
                    switch(random){
                        case 0: document.getElementById('Cchoise').innerHTML = options[random]+"<i class='far fa-hand-rock'></i>";
                        break;
                        case 1: document.getElementById('Cchoise').innerHTML = options[random]+"<i class='far fa-hand-paper'></i>";
                        break;
                        case 2: document.getElementById('Cchoise').innerHTML = options[random]+"<i class='far fa-hand-scissors'></i>";
                        break;
                    }
                    compare(options);
                });
        }
        }else{
            for (let index = 0; index < options.length; index++) {
                document.getElementById(options[index]).addEventListener('click' , function(){
                    switch(index){
                        case 0: document.getElementById('PchoiseId').innerHTML = options[index]+"<br><br><i class='fas fa-tint'>";
                        break;
                        case 1: document.getElementById('PchoiseId').innerHTML = options[index]+"<br><br><i class='fab fa-free-code-camp'>";
                        break;
                        case 2: document.getElementById('PchoiseId').innerHTML = options[index]+"<br><br><i class='fas fa-tree'>";
                        break;
                    }
                    var buttons = document.getElementsByClassName('myChoise');
                    for(var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
                    }
                    var random = Math.floor(Math.random() * 3);
                    switch(random){
                        case 0: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='fas fa-tint'>";
                        break;
                        case 1: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='fab fa-free-code-camp'>";
                        break;
                        case 2: document.getElementById('Cchoise').innerHTML = options[random]+"<br><br><i class='fas fa-tree'>";
                        break;
                    }
                    compare(options);
                });
        }
        }

        document.getElementById('play-again').addEventListener('click' , function(){
            var buttons = document.getElementsByClassName('myChoise');
                for(var i = 0; i < buttons.length; i++) {
                    buttons[i].disabled = false;
                }
                document.getElementById('PchoiseId').innerHTML = "  <p>PLAYER</p><br><br><i class='far fa-hand-rock inti-rock' ></i>";
                document.getElementById('Cchoise').innerHTML = "   <p>COMOUTER</p> <br><br><i class='far fa-hand-rock inti-rock' ></i>";
                document.getElementById('winner').innerText = "..."
        });
    }

    var compare = function(options){
        if(options[0] == "Rock"){
            var player = document.getElementById('PchoiseId').textContent; // what the player chose
        var computer = document.getElementById('Cchoise').textContent; // what the computer generated
        var win = document.getElementById('p-win').textContent; //
        var tie = document.getElementById('tie').textContent;
        var lose = document.getElementById('c-win').textContent;
            console.log("4333")
        if(player == computer){
            document.getElementById('winner').textContent = "Tie!";
            return document.getElementById('tie').innerText = ++tie;
        }else if(player == "Rock" && computer == "Scissors"){
            document.getElementById('winner').textContent = "Player Wins!";
            return document.getElementById('p-win').innerText = ++win;
        }else if(player == "Paper" && computer == "Scissors"){
            document.getElementById('winner').textContent = "Computer Wins!";
            return document.getElementById('c-win').innerText = ++lose;
        }else if(player == "Scissors" && computer == "Rock"){
            document.getElementById('winner').textContent = "Computer Wins!";
            return document.getElementById('c-win').innerText = ++lose;
        }else if(player == "Scissors" && computer == "Paper"){
            document.getElementById('winner').textContent = "Player Wins!";
            return document.getElementById('p-win').innerText = ++win;
        }else if(player == "Paper" && computer == "Rock"){
            document.getElementById('winner').textContent = "Player Wins!";
            return document.getElementById('p-win').innerText = ++win;
        }else if(player == "Rock" && computer == "Paper"){
            document.getElementById('winner').textContent = "Computer Wins!";
            return document.getElementById('c-win').innerText = ++lose;

}
    console.log(options[0])
}else{
 var player = document.getElementById('PchoiseId').textContent; // what the player chose
     var computer = document.getElementById('Cchoise').textContent; // what the computer generated
      var win = document.getElementById('p-win').textContent; //
      var tie = document.getElementById('tie').textContent;
      var lose = document.getElementById('c-win').textContent;
    console.log(computer)
 if(player == computer){
    document.getElementById('winner').textContent = "Tie!";
    return document.getElementById('tie').innerText = ++tie;
}else if(player == "Water" && computer == "Wood"){
    document.getElementById('winner').textContent = "Computer Wins!";
    return document.getElementById('p-win').innerText = ++win;
}else if(player == "Fire" && computer == "Wood"){
    document.getElementById('winner').textContent = "Player Wins!";
    return document.getElementById('c-win').innerText = ++win;
}else if(player == "Wood" && computer == "Water"){
    document.getElementById('winner').textContent = "Computer Wins!";
    return document.getElementById('c-win').innerText = ++lose;
}else if(player == "Wood" && computer == "Fire"){
    document.getElementById('winner').textContent = "Computer Wins!";
    return document.getElementById('p-win').innerText = ++lose;
}else if(player == "Fire" && computer == "Water"){
    document.getElementById('winner').textContent = "Computer Wins!";
    return document.getElementById('p-win').innerText = ++lose;
}else if(player == "Water" && computer == "Fire"){
    document.getElementById('winner').textContent = "Player Wins!";
    return document.getElementById('c-win').innerText = ++win;
}
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
        var win = document.getElementById('p-win').textContent = 0;
        var tie = document.getElementById('tie').textContent = 0 ;
        var lose = document.getElementById('c-win').textContent = 0;
      


        if(change){
            game().initOnce(options2);
            game().init(options1);
            change = false;
            document.getElementById('PchoiseId').innerHTML = "  <p>PLAYER</p><br><br><i class='far fa-hand-rock init' ></i>";
            document.getElementById('Cchoise').innerHTML = "   <p>COMOUTER</p> <br><br><i class='far fa-hand-rock init' ></i>";
         }else{
            game().initOnce(options1);
            game().init(options2);
            change = true;
            document.getElementById('Cchoise').innerHTML = "<br><br><i class='fab fa-free-code-camp init'>";
            document.getElementById('PchoiseId').innerHTML = "<br><br><i class='fab fa-free-code-camp init'>";
         }
     })
});