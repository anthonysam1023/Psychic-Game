var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

var compPic = alphabet[Math.floor(Math.random() * alphabet.length)]; 

var userPicks = []

var userPic = "";

var winCount = 0;

var loseCount = 0;

var guesses = 10;

var $winCount = document.getElementById("wins");
var $loseCount = document.getElementById("losses");
var $guesses = document.getElementById("guesses");
var $userPicks = document.getElementById("userPicks")
function reset(){

guesses = 10 
compPic = alphabet[Math.floor(Math.random() * alphabet.length)]
userPicks.length = 0
}

document.onkeyup = function (event) {
    
    var userPic = event.key;
    userPicks.push(userPic)
    
    guesses--
    $guesses.innerHTML = guesses
    $userPicks.innerHTML = userPicks

    
    console.log(userPicks)
    
    console.log (compPic)
    
    if (userPic === compPic) {
        winCount++
        $winCount.innerHTML = winCount
        reset()
    
    }

    
    
    if (guesses === 0) {
        loseCount++
        $loseCount.innerHTML = loseCount
        reset()
        
    }
}

    
    