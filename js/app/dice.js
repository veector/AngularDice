AD.Dice = {
	arrPrefetchedDiceRolls: [],
	get100RandomDiceRolls: function(){
		//Using random numbers provided by Random.org which are more accurate than
		//the JavaScript random number generation.
		return $.ajax({
			url: "http://www.random.org/integers/",
			dataType: "text",
			data: { num : 500, min : 1, max : 6, base : 10, format : "plain", rnd : "new", col : 500 },
		});
	},
	populateDiceRolls: function(){
		var objDice = this;
		this.get100RandomDiceRolls().done(function(data) {
			objDice.arrPrefetchedDiceRolls = objDice.arrPrefetchedDiceRolls.concat(data.split("\t")); 
		}).fail(function(){
			//use JavaScript randomization
			console.log("Random.org number generation failed. Using JavaScript for random numbers instead.");
			var diceArray = [];
			_.times(500, function(idx){
				diceArray[idx] = Math.floor(Math.random() * 6) + 1;
			});
			objDice.arrPrefetchedDiceRolls = objDice.arrPrefetchedDiceRolls.concat(diceArray); 
		});;
	},
	getDiceRolls: function(numDice){
		//Get new dice if the array of current rolls is not enough
		if(this.arrPrefetchedDiceRolls.length < (numDice + 100)){
			this.populateDiceRolls();
		}

		if(numDice == 1){
			return this.arrPrefetchedDiceRolls.splice(0, numDice)[0];
		}else{
			return this.arrPrefetchedDiceRolls.splice(0, numDice);	
		}
	}
}