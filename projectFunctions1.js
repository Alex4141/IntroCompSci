		//
		// Global Variables
		//
		
		//Global Arrays
		//For The Locations
		var locArray = new Array();
		
		//For the Items
		var itemArray = new Array();
		
		function locale() {
		// Attributes
		this.id = "";
		this.name = "";
		this.description = "";
		this.item = "";
		this.found = "false";
		this.score = 5;
	
		// Methods
		this.toString = function() { 
							return this.description + "\n" + "Score: " + pointTotal +"\n";
						}
		}
		
		function item() {
		// Attributes
		this.id = "";
		this.name = "";
		this.description = "";
		
		// Methods
		this.toString = function() {
							return this.description;
						}
		}
		
		function init() {
		var loc0 = new locale();
		loc0.id = 0;
		loc0.name = "basement";
		loc0.description = "You are lost in the Pirate Ship's basement. You are standing on a red rug, and an ominous staircase lies in front of you. \n";
		loc0.item = "Nothing here!";
		loc0.score;

		var loc1 = new locale();
		loc1.id = 1;
		loc1.name = "foyer";
		loc1.description = "You have walked up into a Foyer, a burning candle sits atop plundered cargo. There are two rooms to your sides. \n";
		loc1.item = "Nothing here!";
		loc1.score;

		var loc2 = new locale();
		loc2.id = 2;
		loc2.name = "eastWing";
		loc2.description = "You have walked into the East Wing! Another room lies directly ahead. \n "; 
		loc2.item = "Nothing here!";
		loc2.score;

		var loc3 = new locale();
		loc3.id = 3;
		loc3.name = "westWing";
		loc3.description = "You have walked into the West Wing! Another room lies directly ahead. \n ";
		loc3.item = "Ruby";
		loc3.score;

		var loc4 = new locale();
		loc4.id = 4;
		loc4.name = "crackedRoom";
		loc4.description = "This room has a large crack exposing the ocean. You notice some jettison and an ominous shadow in the water. \n ";
		loc4.item = "Nothing here!";
		loc4.score;

		var loc5 = new locale();
		loc5.id = 5;
		loc5.name = "cptnQuart";
		loc5.description = "This room appears to be the Captain's Quarters. He has them tucked away in his Piggy Bank. \n ";
		loc5.item = "Nothing here!";
		loc5.score;

		var loc6 = new locale();
		loc6.id = 6;
		loc6.name = "armory";
		loc6.description = "This room is the armory. Housing only the most modern technology... Muskets and Gunpowder. \n ";
		loc6.item = "Musket";
		loc6.score;

		var loc7 = new locale();
		loc7.id = 7;
		loc7.name = "theBrig";
		loc7.description = "This room is the prison cell. The brig is full of landlubbers! One prisoner has something for you. \n ";
		loc7.item = "Nothing here!";
		loc7.score;

		var loc8 = new locale();
		loc8.id = 8;
		loc8.name = "windlass";
		loc8.description = "This must be the Windlass Room. You can hear sharp and distinct movement and murmurs from the surface above. \n ";
		loc8.item = "Nothing here!";
		loc8.score;

		var loc9 = new locale();
		loc9.id = 9;
		loc9.name = "secretCabin";
		loc9.description = "You have discovered a secret cabin. Some sort of paper is tucked away neatly beneath the bed. \n ";
		loc9.item = "Map";
		loc9.score;
		
		var item0 = new item();
		item0.id = 0;
		item0.name = "Ruby";
		item0.description = "A secret ruby has been obtained! \n";
		
		var item1 = new item();
		item1.id = 1;
		item1.name = "Musket";
		item1.description = "You decided to pick up a musket! \n";
		
		var item2 = new item();
		item2.id = 2;
		item2.name = "Map";
		item2.description ="You have picked up the ship map! \n";
		
		var item3 = new item();
		item3.id = 3;
		item3.name = "Love Letter";
		item3.description = "You took the prisoner's Love Letter! \n";
		
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
		updateDisplay(locArray[i].toString());
		}
		
		var i = 0;
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
		
		var hasRuby = false;
		var hasMusket = false;
		var hasMap = false;
		
		var pointTotal = 5;
		var navigationErrorCount = 0;
		var extremeError = 5;
	
		//
		// Navigation Functions
		//
		
		// Takes You North
		// Look, for the message 
		function northClick() {
			if (i === 0 || i === 3) {
				i = i + 1;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 2) {
				i = i + 4;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 4) {
				i = i + 3;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 9) {
				i = i - 1;
				pointCounter();
				updateDisplay(locArray[i].toString());
			}  else {
				navigationError();
			}
			userLoc = i;		
		}

		function southClick() {
			if (i === 1 || i === 4) {
				i = i - 1;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 6) {
				i = i - 4;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 8) {
				i = i + 1;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 7) {
				i = i - 3;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else {
				navigationError();
			}
			userLoc = i;
		}

		function eastClick() {
			if (i === 1 || i === 4 || i === 5) {
				i = i + 1;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 3) {
				i = i - 2;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else if (i === 6) {
				i = i + 2;
				pointCounter();
				updateDisplay(locArray[i].toString());
			} else {
				navigationError();
			}
			userLoc =i;
		}

		function westClick() {
			if (i === 1) {
				i = i + 2;
				pointCounter();
			updateDisplay(locArray[i].toString());
			} else if (i === 2 || i === 5 || i === 6) {
				i = i - 1;
				pointCounter();
			updateDisplay(locArray[i].toString());
			} else if (i === 8) {
			i = i - 2;
			pointCounter();
			updateDisplay(locArray[i].toString());
			} else {
			navigationError();
			}
			userLoc=i;
		}
		
		
		//Help Button
		function user_Help() {
			var msg = "Pinny the Parrot: *SQWUAAAAAK!* (You seem to be having trouble lackey) *Sqwuak Sqwuak* (Perhaps use the controls to this ere' vessel.) Use these controls sailor! N, n, S, s, W, w, E, e.";
			updateDisplay(msg);
		}
		
		// Take Items. If they're there
		function user_Take() {
			if (userLoc === "Room4" && !hasRuby) {
			updateDisplay("A secret ruby has been obtained!");
			hasRuby = true; 
		} else if (userLoc === "Room7" && !hasMusket) {
			updateDisplay("You decided to pick up a musket");
			hasMusket = true;
		} else if (userLoc === "Room10" && !hasMap) {
			updateDisplay("You have picked up the ship map");
			hasMap = true;
			document.getElementById('map').style.display = 'block';
			} 
		}
		
		// function user_Take() {
		// 
		
		// Statements made for all possibilities of holding items
		function inventory_Search() {
			msg = "User has:";
			if (hasRuby === true && hasMusket === true && hasMap === true){
				msg = msg + " A Ruby, a Musket, and a Map";
	  	  		updateDisplay(msg);
			} else if (hasRuby === true && hasMusket === true) {
				msg = msg + " A Ruby and a Musket";
	    		updateDisplay(msg);
			} else if (hasRuby === true && hasMap === true) {
				msg = msg + " A Ruby and a Map";
	    		updateDisplay(msg);
			} else if (hasMap === true && hasMusket === true) {
				msg = msg + " A Map and a Musket";
	    		updateDisplay(msg);
			} else if (hasMusket === true) {
				msg = msg + " a Musket";
				updateDisplay(msg);
			} else if (hasRuby === true) {
				msg = msg + " a Ruby";
				updateDisplay(msg);
			} else if (hasMap === true) {
				msg = msg + " A map";
				updatedisplay(msg);
			} else {
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
			if( (locArray[i] === locArray[1] || locArray[i] === locArray[5] || locArray[i] === locArray[6] || locArray[i] === locArray[7] || locArray[i] === locArray[8]) ) {
			document.getElementById("North").disabled = true;
			} else { 
				document.getElementById("North").disabled = false;
			}
		}
	
		// Disables South Button
		function south_ClickDisabled() {
			if( (locArray[i] === locArray[0] || locArray[i] === locArray[3] || locArray[i] === locArray[2] || locArray[i] === locArray[5] || locArray[i] === locArray[9]) ) {
			document.getElementById("South").disabled = true;
			} else { 
			document.getElementById("South").disabled = false;
			}
		}
	
		// Disables East Button
		function east_ClickDisabled() {
			if( (locArray[i] === locArray[0] || locArray[i] === locArray[2] || locArray[i] === locArray[7] || locArray[i] === locArray[8] || locArray[i] === locArray[9]) ) {
			document.getElementById("East").disabled = true;
			} else { 
			document.getElementById("East").disabled = false;
			}
		}
	
		// Disables West Button
		function west_ClickDisabled() {
			if( ( locArray[i] === locArray[0] || locArray[i] === locArray[3] || locArray[i] === locArray[4] || locArray[i] === locArray[7] || locArray[i] === locArray[9]) ) {
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
		// Story / Locale Functions
		//
		function look() {
			var msg = " ";
			switch(userLoc) {
				case "Room1": basement(); break;
				case "Room2": foyer(); break;
				case "Room3": eastWing(); break;
				case "Room4": westWing(); break;
				case "Room5": crackedRoom(); break;
				case "Room6": cptnQuart(); break;
				case "Room7": armory(); break;
				case "Room8": theBrig(); break;
				case "Room9": windlass(); break;
				case "Room10": secretCabin(); break;
				default: msg = "This choice is impossible!";
			}
		}				
		
		//
		// Utility Functions
		//
		
		function pointCounter() {
			if ( (! foyerFound) && (locArray[i] === locArray[1]) ) {
				pointTotal = pointTotal + locArray[1].score;
				foyerFound = true;
			} else if ( (! eastWingFound) && (i === locArray[2].id) ) {
				pointTotal = pointTotal + locArray[2].score;
				eastWingFound = true;
			} else if ( (! westWingFound) && (i === locArray[3].id) ) {
				pointTotal = pointTotal + locArray[3].score;
				westWingFound = true;
			} else if ( (! crackedRoomFound) && (i === locArray[4].id) ) {
				pointTotal = pointTotal + 5;
				crackedRoomFound = true;
			} else if ( (! cptnQuartFound) && (i === locArray[5].id) ) {
				pointTotal = pointTotal + 5;
				cptnQuartFound = true;
			} else if ( (! armoryFound) && (i === locArray[6].id) ) {
				pointTotal = pointTotal + 5;
				armoryFound = true;
			} else if ( (! theBrigFound) && (i === locArray[7].id) ) {
				pointTotal = pointTotal + 5;
				theBrigFound = true;
			} else if ( (! windlassFound) && (i === locArray[8].id) ) {
				pointTotal = pointTotal + 5;
				windlassFound = true;
			} else if ( (! secretCabinFound) && (i === locArray[9].id) ) {
				pointTotal = pointTotal + 5;
				secretCabinFound = true;
			} else {
			}
		}
		
		//Displays the messages	
         function updateDisplay(msg) {
         	var targetTextArea = document.getElementById("target");
         	targetTextArea.value = msg + "\n\n" + targetTextArea.value;
         	disableButton();
         }
			
		
			