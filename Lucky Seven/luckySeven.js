/*
Creator: Adrian Loera
Date created: 12/26/2019
Date last modified: 12/26/2019

Description:
	This JavaScript file is used to roll the 2 die and 
	add and comparing to see if it is 7 or not, 7 results 
	in + $4 else - $1. It will send back the highest amount 
	of money won, roll number at which the highest amount, 
	starting bet, and total rolls before broke.

	It only accepts integers greater than 0. No other text 
	is accept.
	
*/

function clearErrors(){
	for (var loopCounter = 0; loopCounter < document.forms["numberFun"].elements.length; loopCounter++){
		if (document.forms["numberFun"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
			document.forms["numberFun"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    if (num1 == "" || isNaN(num1) || num1 < 1) {
        alert("Num1 must be filled in with a number greater than 0.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
	var startingBet = parseInt(document.forms["numberFun"]["num1"].value);
	var currentBet = parseInt(document.forms["numberFun"]["num1"].value);
	var rollDice1 = 0;
	var rollDice2 = 0;
	var rollCount = 0;
	var highestAmount = parseInt(document.forms["numberFun"]["num1"].value);
	var highRollCount = 0;
	while (currentBet > 0){
		rollDice1 = Math.floor(Math.random() * 6) + 1;
		rollDice2 = Math.floor(Math.random() * 6) + 1;
		rollDice = rollDice1 + rollDice2;
		rollCount++;
		if (rollDice == 7){
			currentBet += 4;
		}
		else{
			currentBet -= 1;
		}
		
		if (currentBet > highestAmount){
			highestAmount = currentBet;
			highRollCount = rollCount;
		}
		
	}
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("startBet").innerText = startingBet;
   document.getElementById("totalRolls").innerText = rollCount;
   document.getElementById("highAmount").innerText = highestAmount;
   document.getElementById("rollHighAmount").innerText = highRollCount;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}