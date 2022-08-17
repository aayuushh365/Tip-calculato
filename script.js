/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeople = document.getElementById('numberOfPeople');
const perpersontotal = document.getElementById('perPersonTotal');
// Get number of people from number of people div
let numberofpeople = Number(numberOfPeople.innerText);
// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value);
  // get the tip from user & convert it into a percentage (divide by 100)
  const tippercentage = Number(tipInput.value)/100;
  // if there is no tip, return 0
  // if there is a tip,
  // get the total tip amount
  const tipamount = bill*tippercentage;
// calculate the total (tip amount + bill)
const totaltip = tipamount + bill;
// calculate the per person total (total divided by number of people)
const perPersonTotal = totaltip / numberofpeople;
// update the perPersonTotal on DOM & show it to user
perpersontotal.innerText = `$${perPersonTotal.toFixed(2).toLocaleString(`en-US`)}`;
};
// ** Splits the bill between more people **
const increasePeople = () => {
// increment the amount of people
numberofpeople += 1;
 // update the DOM with the new number of people
numberOfPeople.innerText = numberofpeople;
  // calculate the bill based on the new number of people
  calculateBill();  
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  if(numberofpeople <=1){
    alert('You can\'t split the bill with less than 1 person');
    return;
  }
  // if amount is 1 or less simply return
numberofpeople -=1;
numberOfPeople.innerText = numberofpeople;
calculateBill();  
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};
