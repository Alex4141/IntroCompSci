		//Global Arrays
		//For The Locations
		var locArray = new Array();
		//For the Items
		var itemArray = new Array();
		
		// Prototype of Location
		//
		function Locale() {
		// Attributes
		this.id = "";
		this.name = "";
		this.description = "";
		this.item = "";
		this.score = 5;
	
		// Methods
		this.toString = function() { 
							return this.description + "\n" + "Score: " + pointTotal + "\n";
						}
		}
		
		//Prototype of Item
		//
		function Item() {
		// Attributes
		this.id = "";
		this.name = "";
		this.description = "";
		
		// Methods
		this.toString = function() {
							return this.description;
						}
		}
		
		
		
		//Initiates usage of loc and item instances
		function init() {
		var loc0 = new Locale();
		loc0.id = 0;
		loc0.name = "basement";
		loc0.description = "You are lost in the Pirate Ship's basement. You are standing on a red rug, and an ominous staircase lies in front of you. \n";
		loc0.item = "Nothing here!";
		loc0.score;

		var loc1 = new Locale();
		loc1.id = 1;
		loc1.name = "foyer";
		loc1.description = "You have walked up into a Foyer, a burning candle sits atop plundered cargo. There are two rooms to your sides. \n";
		loc1.item = "Nothing here!";
		loc1.score;

		var loc2 = new Locale();
		loc2.id = 2;
		loc2.name = "eastWing";
		loc2.description = "You have walked into the East Wing! Another room lies directly ahead. \n "; 
		loc2.item = "Nothing here!";
		loc2.score;

		var loc3 = new Locale();
		loc3.id = 3;
		loc3.name = "westWing";
		loc3.description = "You have walked into the West Wing! Another room lies directly ahead. \n ";
		loc3.item = "Ruby";
		loc3.score;

		var loc4 = new Locale();
		loc4.id = 4;
		loc4.name = "crackedRoom";
		loc4.description = "This room has a large crack exposing the ocean. You notice some jettison and an ominous shadow in the water. \n ";
		loc4.item = "Nothing here!";
		loc4.score;

		var loc5 = new Locale();
		loc5.id = 5;
		loc5.name = "cptnQuart";
		loc5.description = "This room appears to be the Captain's Quarters. He has them tucked away in his Piggy Bank. \n ";
		loc5.item = "Nothing here!";
		loc5.score;

		var loc6 = new Locale();
		loc6.id = 6;
		loc6.name = "armory";
		loc6.description = "This room is the armory. Housing only the most modern technology... Muskets and Gunpowder. \n ";
		loc6.item = "Musket";
		loc6.score;

		var loc7 = new Locale();
		loc7.id = 7;
		loc7.name = "theBrig";
		loc7.description = "This room is the prison cell. The brig is full of landlubbers! One prisoner has something for you. \n ";
		loc7.item = "Nothing here!";
		loc7.score;

		var loc8 = new Locale();
		loc8.id = 8;
		loc8.name = "windlass";
		loc8.description = "This must be the Windlass Room. You can hear sharp and distinct movement and murmurs from the surface above. \n ";
		loc8.item = "Nothing here!";
		loc8.score;

		var loc9 = new Locale();
		loc9.id = 9;
		loc9.name = "secretCabin";
		loc9.description = "You have discovered a secret cabin. Some sort of paper is tucked away neatly beneath the bed. \n ";
		loc9.item = "Map";
		loc9.score;
		
		var item0 = new Item();
		item0.id = 0;
		item0.name = "Ruby";
		item0.description = "A secret ruby has been obtained! \n";
		
		var item1 = new Item();
		item1.id = 1;
		item1.name = "Musket";
		item1.description = "You decided to pick up a musket! \n";
		
		var item2 = new Item();
		item2.id = 2;
		item2.name = "Map";
		item2.description ="You have picked up the ship map! \n";
		
		var item3 = new Item();
		item3.id = 3;
		item3.name = "Raft";
		item3.description = "You took the prisoner's blow-up raft! \n";
		
		var item4 = new Item();
		item4.id = "";
		item4.name = "";
		item4.description = "";
		
		//Storing the 10 instances of location
		locArray[0] = loc0;
		locArray[1] = loc1;
		locArray[2] = loc2;
		locArray[3] = loc3;
		locArray[4] = loc4;
		locArray[5] = loc5;
		locArray[6] = loc6;
		locArray[7] = loc7;
		locArray[8] = loc8;
		locArray[9] = loc9;
		updateDisplay(locArray[x].toString());
		
		//Storing the 4 instances of items
		itemArray[0] = item0;
		itemArray[1] = item1;
		itemArray[2] = item2;
		itemArray[3] = item3;
		itemArray[4] = item4;
		}
		
		//Global Variables
		//
		
		// Navigate indexes
		var x = 0;
		var y = 4;
		
		//Starts user in basement
		var userLoc = locArray[0];
		
		var foyerFound = false;
		var eastWingFound = false;
		var westWingFound = false;
		var crackedRoomFound = false;
		var cptnQuartFound = false;
		var armoryFound = false;
		var theBrigFound = false;
		var windlassFound = false;
		var secretCabinFound = false;
		
		var doubloon = 0;
		var musketDoubloon = false;
		var mapDoubloon = false;
		var raftDoubloon = false;
		var rubyDoubloon = false;
		
		var hasRuby = false;
		var hasMusket = false;
		var hasMap = false;
		var hasRaft = false;
		
		var pointTotal = 5;
		var navigationErrorCount = 0;
		var extremeError = 5;
	
		var currentLoc = 0;

		var NORTH = 0;
		var SOUTH = 1;
		var EAST = 2;
		var WEST = 3;
		
		//2D Array
		var nav = [ //N   S    E    W
			/* 0 */ [1,  -1,   -1,  -1],	
			/* 1 */ [-1,  0,    2,   3],
			/* 2 */ [6,  -1,   -1,   1],
			/* 3 */ [4,  -1,    1,  -1],
			/* 4 */ [7,   3,    5,  -1],
			/* 5 */ [-1, -1,    6,   4],
			/* 6 */	[-1,  2,    8,   5],
			/* 7 */ [-1,  4,   -1,  -1],
			/* 8 */ [-1,  9,   -1,   6],
			/* 9 */ [8,  -1,   -1,  -1]
			];
		
		//Navigating 2D Array
		function nextLoc(dir) {
			var newLoc = nav[currentLoc][dir];
			if (newLoc >= 0 ) {
		 	  currentLoc = newLoc;
		 	  pointCounter();
			} else {
				updateDisplay("You cannot go that way.")
			};
				updateDisplay(locArray[newLoc]);
		}
		
		//
		// Navigation Functions
		//
		
		// Takes You North
		// Look, for the message 
		function northClick() {
		   nextLoc(NORTH);			
		}

		function southClick() {
		   nextLoc(SOUTH);		
		}
		
		function eastClick() {
		   nextLoc(EAST);		
		}
		
		function westClick() {
		   nextLoc(WEST);	
		}
		
		//Help Button
		function user_Help() {
			var msg = "Pinny the Parrot: *SQWUAAAAAK!* (You seem to be having trouble lackey) *Sqwuak Sqwuak* (Perhaps use the controls to this ere' vessel.) Use these controls sailor! N, n, S, s, W, w, E, e.";
			updateDisplay(msg);
		}
		
		//Takes Item If It's There
		function user_Take() {
			if (currentLoc === 3 && ! hasRuby) {
				j = 0;
				hasRuby = true;
				updateDisplay(itemArray[j].toString());
			} else if (currentLoc === 6 && ! hasMusket) {
		 		j = 1;
		 		hasMusket = true;
				updateDisplay(itemArray[j].toString());
			} else if (currentLoc === 9 && ! hasMap) {
				j = 2;
				hasMap = true;
				doubloon = doubloon + 1;
				document.getElementById('map').style.display = 'block';
				updateDisplay(itemArray[j].toString());
			} else if (currentLoc === 7 && ! hasRaft) {
		 		j = 3;
		 		hasRaft = true;
				updateDisplay(itemArray[j].toString());
			 }
		}
		
		// Statements made for all possibilities of holding items
		function inventory_Search() {
			msg = "User has:";
			if (hasRuby === true && hasMusket === true && hasMap === true && hasRaft === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[1].name + " a " + itemArray[2].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasRuby === true && hasMusket === true && hasMap === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[1].name + " a " + itemArray[2].name;
				updateDisplay(msg);
			} else if (hasRuby === true && hasMusket === true && hasRaft === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[1].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasRuby === true && hasMap === true && hasRaft === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[2].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasMusket === true && hasMap === true && hasRaft === true) {
				msg = msg + " a " + itemArray[1].name + " a " + itemArray[2].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasRuby === true && hasMusket === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[1].name;
				updateDisplay(msg);
			} else if (hasRuby === true && hasMap === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[2].name;
				updateDisplay(msg);
			} else if (hasRuby === true && hasRaft === true) {
				msg = msg + " a " + itemArray[0].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasRuby === true) {
				msg = msg + " a " + itemArray[0].name;
				updateDisplay(msg);
			} else if (hasMusket === true && hasMap === true) {
				msg = msg + " a " + itemArray[1].name + " a "  + itemArray[2].name;
				updateDisplay(msg);
			} else if (hasMusket === true && hasRaft === true) {
				msg = msg + " a " + itemArray[1].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasMusket === true) {
				msg = msg + " a " + itemArray[1].name;
				updateDisplay(msg);
			} else if (hasMap === true && hasRaft === true) {
				msg = msg + " a " + itemArray[2].name + " a " + itemArray[3].name;
				updateDisplay(msg);
			} else if (hasMap === true) {
				msg = msg + " a " + itemArray[2].name;
				updateDisplay(msg);
			} else if (hasRaft === true) {
				msg = msg + " a " + itemArray[3].name;
				updateDisplay(msg);
			}
		}
				
		// Text Input/Button Alternatives
		function input_Go() {
			var mainText = document.getElementById("txtCommand").value;
			if (mainText === "N") {
			northClick();
			} else if (mainText === "n"){
			northClick();
			} else if (mainText === "S"){ 
			southClick();
			} else if (mainText === "s"){
			southClick();
			} else if (mainText === "E"){
			eastClick();
			} else if (mainText === "e"){
			eastClick();
			} else if (mainText === "W"){
			westClick();
			} else if (mainText === "w"){
			westClick();
			} else if (mainText === "h"){
			user_Help();
			} else if (mainText === "i"){
			inventory_Search();
			} else {
				updateDisplay("I do not understand this command."); 
			}	
		}
			
		// Takes account of navigation errors AKA the default		
		function navigationError() {
    	navigationErrorCount = navigationErrorCount + 1;
        	if (navigationErrorCount < extremeError) {
        		updateDisplay("You cannot go that way. ");
        	} else {
        		updateDisplay("Cut it out!");
        	}	
    	}	
       
       // Disables North Button
    	function north_ClickDisabled() {
			if(currentLoc === 1 || currentLoc === 5 || currentLoc === 6 || currentLoc === 7 || currentLoc === 8) {
			document.getElementById("North").disabled = true;
			} else { 
				document.getElementById("North").disabled = false;
			}
		}
	
		// Disables South Button
		function south_ClickDisabled() {
			if(currentLoc === 0 || currentLoc === 3 || currentLoc === 2 || currentLoc === 5 || currentLoc === 9) {
			document.getElementById("South").disabled = true;
			} else { 
			document.getElementById("South").disabled = false;
			}
		}
	
		// Disables East Button
		function east_ClickDisabled() {
			if(currentLoc === 0 || currentLoc === 2 || currentLoc === 7 || currentLoc === 8 || currentLoc === 9) {
			document.getElementById("East").disabled = true;
			} else { 
			document.getElementById("East").disabled = false;
			}
		}
	
		// Disables West Button
		function west_ClickDisabled() {
			if(currentLoc === 0 || currentLoc === 3 || currentLoc === 4 || currentLoc === 7 || currentLoc === 9) {
			document.getElementById("West").disabled = true;
		} else { 
			document.getElementById("West").disabled = false;
			}
		}	
	
		// Function Makes Disable Buttons Work
		function disableButton() {
			north_ClickDisabled();
			south_ClickDisabled();
			east_ClickDisabled();
			west_ClickDisabled();
		}

		//
		// Utility Functions
		//
		
		//Score Function
		function pointCounter() {
			if ( (! foyerFound) && (currentLoc === 1) ) {
				pointTotal = pointTotal + 5;
				foyerFound = true;
			} else if ( (! eastWingFound) && (currentLoc === 2) ) {
				pointTotal = pointTotal + 5;
				eastWingFound = true;
			} else if ( (! westWingFound) && (currentLoc === 3) ) {
				pointTotal = pointTotal + 5;
				westWingFound = true;
			} else if ( (! crackedRoomFound) && (currentLoc === 4) ) {
				pointTotal = pointTotal + 5;
				crackedRoomFound = true;
			} else if ( (! cptnQuartFound) && (currentLoc === 5) ) {
				pointTotal = pointTotal + 5;
				cptnQuartFound = true;
			} else if ( (! armoryFound) && (currentLoc === 6) ) {
				pointTotal = pointTotal + 5;
				armoryFound = true;
			} else if ( (! theBrigFound) && (currentLoc === 7) ) {
				pointTotal = pointTotal + 5;
				theBrigFound = true;
			} else if ( (! windlassFound) && (currentLoc === 8) ) {
				pointTotal = pointTotal + 5;
				windlassFound = true;
			} else if ( (! secretCabinFound) && (currentLoc === 9) ) {
				pointTotal = pointTotal + 5;
				secretCabinFound = true;
			} else {
			}
		}
		
		//Actually using items + finishing game
		function user_Use() {
			var mainText = document.getElementById("txtCommand").value;
			updateDisplay("Please input the name of the item you would like to use in the search bar. And reselect the use button.");
				if ( (mainText === "Musket") && (currentLoc === 5) && (hasMusket === true)) {
					doubloon = doubloon + 1;
					updateDisplay("You took a shot at the Captain's Piggy Bank and destroyed it! You now have " + doubloon + " doubloons!");
				} else if ( (mainText === "Map") && (hasMap === true)) {
					updateDisplay("The map is visible right above you!");
				} else if ( (mainText === "Ruby") && (currentLoc === 1) && (hasRuby === true)) {
					doubloon = doubloon + 1;
					updateDisplay("You returned the Ruby to the plundered cargo! You now have " + doubloon + " doubloons!");
					hasRuby = false;
				} else if ( (mainText === "Raft") && (currentLoc === 4) && (hasRaft === true)) {
					doubloon = doubloon + 1;
					updateDisplay("You have successfully escaped on the raft into the ocean! You finished the game with " + doubloon + "/4 doubloons! If you would like to play again select the Play Again button");
					document.getElementById("North").disabled = true;
					document.getElementById("South").disabled = true;
					document.getElementById("East").disabled = true;
					document.getElementById("West").disabled = true;
					document.getElementById("userHelp").disabled = true;
					document.getElementById("userTake").disabled = true;
					document.getElementById("inventory").disabled = true;
					document.getElementById("userUse").disabled = true;
					document.getElementById("goInput").disabled = true;
				} 
		}
		
		//Displays the messages	
         function updateDisplay(msg) {
         	var targetTextArea = document.getElementById("target");
         	targetTextArea.value = msg + "\n\n" + targetTextArea.value;
         	disableButton();
         }
			
		
			