"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

//declare variables referencing buttons

let submiteButton = document.getElementById("submitButton");

let pwd = document.getElementById("pwd");

let pwd2 = document.getElementById("pwd2");

//added  event listenr for the submitbutton e must be added to represent the event object
submitButton.addEventListener('click', function(e){
	
	//if the 2 passwords do not have the same value the entry will be rejected
	if (pwd.value !== pwd2.value){
		window.alert("Your passwords must match.");
		
		//this was a life saver the code kept on loading the next page even though the passwords did not match this command fixed that issue
		e.preventDefault();
		
	} else if (!passValid(pwd.value, pwd.value2)){
		window.alert("Your password must contain 8 characters with at least one uppercase and lowercase letter, it must also include 1 digit.")
		
		
	}
});
	
	//created a function that will check to see if one uppercase, one lowercase, and one digit has been used
	//in creating a password
function passValid(pwd, pwd2) { 

	const pattern = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
	//I found that this how to check for specific characters used in user text
	return pattern.test(pwd);
	//this will return the value the user entered
	
	
}