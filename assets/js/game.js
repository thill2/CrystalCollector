
var computer = Math.floor((Math.random() * 100) + 19);
var winCount = 0;
var loseCount = 0;
var stoneOne = Math.floor((Math.random() * 10) + 1);
var stoneTwo = Math.floor((Math.random() * 10) + 1);
var stoneThree = Math.floor((Math.random() * 10) + 1);
var stoneFour = Math.floor((Math.random() * 10) + 1);
var total = 0;


function newGame(){
	stoneOne = Math.floor((Math.random() * 10) + 1);
	stoneTwo = Math.floor((Math.random() * 10) + 1);
	stoneThree = Math.floor((Math.random() * 10) + 1);
	stoneFour = Math.floor((Math.random() * 10) + 1);
}


function gamePlay(){
	if(total === computer){
		winCount++;
		$("#wins").text(winCount);
		$("#points").text("You Won!");
		computer = Math.floor((Math.random() * 100) + 19);
		$("#number").text(computer);
		total = 0;
		$("#currentScore").text(total);
		newGame();
	} else if(total > computer){
		loseCount++;
		$("#losses").html(loseCount);
		$("#points").text("You Lost!");
    computer = Math.floor((Math.random() * 100) + 19);
		$("#number").text(computer);
		total = 0;
		$("#currentScore").text(total);
		newGame();
	}
}


$("#number").text(computer);


$("#stone1").on("click", function(){
	total += stoneOne;
	$("#currentScore").text(total);
	gamePlay();
});
console.log("1: " + stoneOne)

$("#stone2").on("click", function(){
	total += stoneTwo;
	$("#currentScore").text(total);
	gamePlay();
});
console.log("2: " + stoneTwo)

$("#stone3").on("click", function(){
	total += stoneThree;
	$("#currentScore").text(total);
	gamePlay();
});
console.log("3: " + stoneThree)

$("#stone4").on("click", function(){
	total += stoneFour;
	$("#currentScore").text(total);
	gamePlay();
});
console.log("4: " + stoneFour)

console.log(total);