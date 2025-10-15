//create an event listener for the print button, with a handler function called printView

var printButton = document.getElementById("printable");
 printButton.addEventListener("click",printView);

//create an event listener for the add button, with a handler function called addTheThing

 var addButton = document.getElementById("addIt");
addButton.addEventListener("click",addTheThing);

// create a blank array named myList
var myList = [];

/* create a variable, myListArea, which references the element with the id of 'wishList'*/

var myListArea = document.getElementById("wishList");

/* function addTheThing gets the value of the text field and then passes it to a function called addToTheList.
 It then runs a function called resetInput*/

function addTheThing() {
var addTheThing = document.getElementById("iWant");
addToTheList(addTheThing);
resetInput(addTheThing);
};

/* function addToTheList, which takes one parameter, 
called thingToAdd, pushes it into the myList array, and then 
adds it to myListArea*/

function addToTheList(thingToAdd) {
myList.push(thingToAdd.value);    
var newListItem = document.createElement("li");
newListItem.innerHTML =  myList.slice(-1);
myListArea.appendChild(newListItem);
};

/* function resetInput, which resets the value of the
input field to blank ("")*/
function resetInput(inputToReset) {
inputToReset.value = "";
inputToReset.focus();
};

var myform = document.getElementById("formArea");
var listPage = document.getElementById("listPage"); 

function printView() {
/*function printView, which outputs a sorted formatted 
view of the list */
myform.style.display = "none";
listPage.className = "print";
var listItem = "";
myList.sort();
for (var i = 0; i < myList.length; i++) {
listItem += "<li>" + myList[i] + "</li>";
}
myListArea.innerHTML = listItem;
};