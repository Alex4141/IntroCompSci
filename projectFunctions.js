		//
		// Global Variables
		//
		
		var userLoc = "Room1";
		var room2Found = false;
		var room3Found = false;
		var room4Found = false;
		var room5Found = false;
		var room6Found = false;
		var room7Found = false;
		var room8Found = false;
		var room9Found = false;
		var room10Found = false;
		
		var hasRuby = false;
		var hasMusket = false;
		var hasMap = false;
		
		var pointTotal = 5;
		var navigationErrorCount = 0;
		var extremeError = 5;
		
		//
		// Initialization
		// onload is on the body tag
		
		function init() {
			look();
		}
		
		//
		// Navigation Functions
		//
		
		//Button Takes You North
		function northClick() {
			if (userLoc === "Room1") {
				userLoc ="Room2";
				look();
			} else if (userLoc === "Room4") {
				userLoc = "Room5";	
				look();
			} else if (userLoc === "Room3") {
				userLoc = "Room7";
				look();
			} else if (userLoc === "Room5") {
				userLoc = "Room8";
				look();
			} else if (userLoc === "Room10") {
				userLoc = "Room9";
				look();
			} else {
				navigationError();
			}
		}
		
		//Button Takes You South	
		function southClick() {
			if (userLoc === "Room2") {
				userLoc = "Room1";
				look();
			} else if(userLoc === "Room5") {
				userLoc = "Room4";
				look();
			} else if (userLoc === "Room7") {
				userLoc = "Room3";
				look();
			} else if (userLoc === "Room9") {
				userLoc = "Room10";
				look();
			} else if (userLoc === "Room8") {
				userLoc = "Room5";
				look();
			} else {
				navigationError();
			}
		}
		
		//Button Takes You East
		function eastClick() {
			if (userLoc === "Room2") {
				userLoc = "Room3";
				look();
			} else if (userLoc === "Room4") {
				userLoc = "Room2";	
				look();
			} else if(userLoc === "Room5") {
				userLoc = "Room6";
				look();
			} else if (userLoc === "Room6") {
				userLoc = "Room7";
				look();
			} else if (userLoc === "Room7") {
				userLoc = "Room9";
				look();
			} else {
				navigationError();
			}
		}
		
		//Button Takes You West
		function westClick() {
			if (userLoc === "Room2") {
				userLoc = "Room4";
				look();
			} else if(userLoc === "Room3") {
				userLoc = "Room2";
				look();
			} else if(userLoc === "Room6") {
				userLoc = "Room5";
				look();
			} else if (userLoc === "Room7") {
				userLoc = "Room6";
				look();
			} else if (userLoc === "Room9") {
				userLoc = "Room7";
				look();
			} else {
				navigationError();
			}
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
			if( (userLoc === "Room2" || userLoc === "Room6" || userLoc === "Room7" || userLoc === "Room8" || userLoc === "Room9") ) {
			document.getElementById("North").disabled = true;
			} else { 
				document.getElementById("North").disabled = false;
			}
		}
	
		// Disables South Button
		function south_ClickDisabled() {
			if( (userLoc === "Room1" || userLoc === "Room4" || userLoc === "Room3" || userLoc === "Room6" || userLoc === "Room10") ) {
			document.getElementById("South").disabled = true;
			} else { 
			document.getElementById("South").disabled = false;
			}
		}
	
		// Disables East Button
		function east_ClickDisabled() {
			if( (userLoc === "Room1" || userLoc === "Room3" || userLoc === "Room8" || userLoc === "Room9" || userLoc === "Room10") ) {
			document.getElementById("East").disabled = true;
			} else { 
			document.getElementById("East").disabled = false;
			}
		}
	
		// Disables West Button
		function west_ClickDisabled() {
			if( (userLoc === "Room1" || userLoc === "Room4" || userLoc === "Room5" || userLoc === "Room8" || userLoc === "Room10") ) {
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
			if ( (! room2Found) && (userLoc === "Room2") ) {
				pointTotal = pointTotal + 5;
				room2Found = true;
			} else if ( (! room3Found) && (userLoc === "Room3") ) {
				pointTotal = pointTotal + 5;
				room3Found = true;
			} else if ( (! room4Found) && (userLoc === "Room4") ) {
				pointTotal = pointTotal + 5;
				room4Found = true;
			} else if ( (! room5Found) && (userLoc === "Room5") ) {
				pointTotal = pointTotal + 5;
				room5Found = true;
			} else if ( (! room6Found) && (userLoc === "Room6") ) {
				pointTotal = pointTotal + 5;
				room6Found = true;
			} else if ( (! room7Found) && (userLoc === "Room7") ) {
				pointTotal = pointTotal + 5;
				room7Found = true;
			} else if ( (! room8Found) && (userLoc === "Room8") ) {
				pointTotal = pointTotal + 5;
				room8Found = true;
			} else if ( (! room9Found) && (userLoc === "Room9") ) {
				pointTotal = pointTotal + 5;
				room9Found = true;
			} else if ( (! room10Found) && (userLoc === "Room10") ) {
				pointTotal = pointTotal + 5;
				room10Found = true;
			}
		}
		
		//Displays the messages
		function updateDisplay(msg) {
			var targetTextArea = document.getElementById("target");
			targetTextArea.value = msg + "\n\n" + targetTextArea.value;
			}
			