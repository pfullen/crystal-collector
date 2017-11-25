$(document).ready(function(){


var game = {
	wins: 		 	  0,
	losses: 		  0,
	numCount: 		  0,
	userScore: 		  0,
	garnetRandNum:    0,
	rubyRandNum: 	  0,
	diamondRandNum:   0,
	saphireRandNumb:  0,
	gameRandomNumber: 0,

	startGame: function() {
		
		numCount = 0;
		userScore = 0;
		// append the above vars to their various divs
		$('#total-score').text("Total Score: " + userScore);
		$('#game-message').text("");
		gameRandmomNumber = this.getRandomNumber();
		$('#random-number').text('Total up to this number to win: ' + gameRandmomNumber );

		// These are hidden
	    saphireRandNum = this.getCrystalRandomNumber();
	    rubyRandNum = this.getCrystalRandomNumber();
	    diamondRandNum = this.getCrystalRandomNumber();
		garnetRandNum = this.getCrystalRandomNumber();
		console.log(gameRandmomNumber);
		console.log(saphireRandNum);
		console.log(rubyRandNum);
		console.log(garnetRandNum);
		console.log(diamondRandNum);
	} ,

	getRandomNumber: function() {
		// add code to get game generated random number here
	  randomNumber = Math.floor(Math.random() * 121) + 19 ;
	  return randomNumber;
	},
		
	getCrystalRandomNumber: function() {
		//   add code to genere
		var randomNumber = Math.floor(Math.random() * 13) + 1 ;
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

	gameResult: function(result) {
		

		$('.main-body').hide();
        $('.result-body').show();
        $('#game-message').text(result);

        $('#result-button').on("click", function() {
        		$('.main-body').show();
        		$('.result-body').hide();
        		game.startGame();
        });


	}

};
   $('.gems').on("click", function(e) {
   		console.log(this.id);

   		switch (this.id ) {

			case "diamond": 
				console.log("you just clicked " + this.id);
				userScore += diamondRandNum;
				break;
			case "ruby": 
				console.log("you just clicked ruby" + this.id);
				 userScore += rubyRandNum;
				break;
			case "saphire": 
				console.log("you just clicked " + this.id);
				userScore += saphireRandNum;
				break;
			case "garnet": 
				console.log("you just clicked " + this.id);
				userScore += garnetRandNum;
				break;			
		}
         
		$('#total-score').text("Total Score: " + userScore);

		if (userScore === gameRandmomNumber) {
			    game.wins++;
			$('#wins').text('Wins: ' + game.wins);
			     var result = "You win!!!"				
			   	game.gameResult(result);			
		} else if ( userScore > gameRandmomNumber) {
				game.losses++;
				$('#losses').text('Losses: ' + game.losses);
				var result = "You lose!!!"
				game.gameResult(result);				
			
		}
   });
   game.startGame();
});