//
//Locations Base Class
//
function locale(){
	// Attributes
	this.id = "";
	this.name = "";
	this.description = "";
	this.item = "";
	
	// Methods
	this.toString = function() {
						return "[This is " + this.id + " name: " + this.name + " description: " + this.description + " item: " + this.item"]";
					}
}

//function init() {
var loc1 = new Locale();
loc1.id = "locBasement";
loc1.name = "basement";
loc1.description = "You are lost in the Pirate Ship's basement. You are standing on a red rug, and an ominous staircase lies in front of you. \n";
loc1.item = "Nothing here!";
display(loc1.toString());

var loc2 = new Locale();
loc2.id = "locFoyer";
loc2.name = "foyer";
loc2.description = "You have walked up into a Foyer, a burning candle sits atop plundered cargo. There are two rooms to your sides. \n";
loc2.item = "Nothing here!";
display(loc2.toString());

var loc3 = new Locale();
loc3.id = "locEastWing";
loc3.name = "eastWing";
loc3.description = "You have walked into the East Wing! Another room lies directly ahead. \n "; 
loc3.item = "Nothing here!";
display(loc3.toString());

var loc4 = new Locale();
loc4.id = "locWestWing";
loc4.name = "westWing";
loc4.description = "You have walked into the West Wing! Another room lies directly ahead. \n ";
loc4.item = "Ruby";
display(loc4.toString());

var loc5 = new Locale();
loc5.id = "locCrackedRoom";
loc5.name = "crackedRoom";
loc5.description = "This room has a large crack exposing the ocean. You notice some jettison and an ominous shadow in the water. \n ";
loc5.item = "Nothing here!";
display(loc5.toString());

var loc6 = new Locale();
loc6.id = "locCptnQuart";
loc6.name = "cptnQuart";
loc6.description = "This room appears to be the Captain's Quarters. He has them tucked away in his Piggy Bank. \n ";
loc6.item = "Nothing here!";
display(loc6.toString());

var loc7 = new Locale();
loc7.id = "locArmory";
loc7.name = "armory";
loc7.description = "This room is the armory. Housing only the most modern technology... Muskets and Gunpowder. \n ";
loc7.item = "Musket";
display(loc7.toString());

var loc8 = new Locale();
loc8.id = "locTheBrig";
loc8.name = "theBrig";
loc8.description = "This room is the prison cell. The brig is full of landlubbers! \n ";
loc8.item = "Nothing here!";
display(loc8.toString());

var loc9 = new Locale();
loc9.id = "locWindlass";
loc9.name = "windlass";
loc9.description = "This must be the Windlass Room. You can hear sharp and distinct movement and murmurs from the surface above. \n ";
loc9.item = "Nothing here!";
display(loc9.toString());

var loc10 = new Locale();
loc10.id = "locSecretCabin";
loc10.name = "secretCabin";
loc10.description = "You have discovered a secret cabin. Some sort of paper is tucked away neatly beneath the bed. \n ";
loc10.item = "Map";
display(loc10.toString());
// }

//Global Array
var locArray = new Array();
// Storing Instances of the Location
locArray[0] = loc1;
locArray[1] = loc2;
locArray[2] = loc3;
locArray[3] = loc4;
locArray[4] = loc5;
locArray[5] = loc6;
locArray[6] = loc7;
locArray[7] = loc8;
locArray[8] = loc9;
locArray[9] = loc10;

