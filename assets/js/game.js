$(document).ready(function(){


var game {
	wins: 	"",
	loses:  "",
	numCount: "",
	userScore: "",
	garnetRandNum: "",
	rubyRandNum: "",
	diamondRandNum: "",
	saphireRandNumb: "",
	gameRandomNumber: ""

	startGame: function() {
		wins = 0;
		loses = 0;
		numCount = 39;
		userScore = 0;
		// append the above vars to their various divs
		// init game here   
		gameRandmomNumber= getRandomNumber();
	    saphiRandNum = getCrystalRandomNumber();
	    rubyRandNum = getCrystalRandomNumber();
	    diamondRandNum = getCrystalRandomNumber();
		garnetRandNumb = getRandomNumber();
	} ,

	getRandomNumber: function() {
		// add code to get game generated random number here
	  randomNumber = Math.floor(Math.random() * 120) + 19 ;
	  return randomNumber;
	},
		
	getCrystalRandomNumber: function() {
		//   add code to genere
		var randomNumber = Math.floor(Math.random() * 120) + 19 ;
		return randomNumber;
	},

	updateUserScore: function(number) {
		this.userScore += number;
		// update user score here
	},

	userClick: function() {
		// when user clics update their score by the value of the hiden random num
		// if the users score matches the  randomNum number then they win.  Upteate wins by one
		// if the users score excees the randomNum number then they loose .  Update loses by one

	},

};

});