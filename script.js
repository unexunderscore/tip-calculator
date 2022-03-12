const greetings = "Hi there!";
console.log(greetings);


// Only support number key press and dot . for decimals
function validate(evt) {
    var theEvent = evt || window.event;
    
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }


// Only support number key press 
  function validate_people(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]/;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  //Selecting the summary divs
const tipAmount = document.getElementById('tipAmountSummary');
const totalAmount = document.getElementById('totalAmountSummary');

  //Selecting the bill 'value'
const bill = document.getElementById('bill');

  //Selecting number of people 'value'
const nPeople = document.getElementById('numbOfPeople');

  //Selecting error div
const error = document.getElementById('errorNumber');
const errorBill = document.getElementById('errorNumberBill');

  //Selecting custom input
const custom = document.getElementById('custom-input');

let tipPer = 0;
let total = 0;


function tipCalculator(){
  let divider = document.activeElement.value;

  // Checking number of people (divider number) is zero, if yes then error shows up.
  if(nPeople.value == 0){
    error.innerText = "Can't be zero";
    error.style.display = "inline";
    nPeople.style.outline = "2px solid rgba(218, 47, 47, 0.685)"; 
    return;

  } else if(isNaN(nPeople.value)){
    error.innerText = "Can't be text";
    error.style.display = "inline";
    nPeople.style.outline = "2px solid rgba(218, 47, 47, 0.685)"; 
    return;
  }
  else {
    error.style.display = "none";
    nPeople.style.outline = "none";
  }

  

  
  // Calculating the bill and tip
  tipPer = (((bill.value)*(divider/100))/(nPeople.value));
  total = (((bill.value)/(nPeople.value))+tipPer);


  // Set the divs visiable
  tipAmount.style.display = "block";
  totalAmount.style.display = "block";

  // Write out the amounts
  tipAmount.innerHTML = '$'+ tipPer.toFixed(2);
  totalAmount.innerHTML = '$'+ total.toFixed(2);

}

function reset(){
  // Set everything to default
  tipAmount.style.display = "none";
  totalAmount.style.display = "none";
  error.style.display = "none";
  errorBill.style.display = "none";
  nPeople.style.outline = "none";
  bill.style.outline = "none";
  custom.style.outline = "none";
  
  bill.value = '';
  nPeople.value = '';
  custom.value = '';
  
}

function checkCustomInput(){
  if(isNaN(custom.value)){
    custom.style.outline = "2px solid rgba(218, 47, 47, 0.685)"; 
    return;
  }
  else {
    custom.style.outline = "2px solid hsl(172, 67%, 45%)"; 
    
  }
}

function checkBillInput(){
  if(isNaN(bill.value)){
    errorBill.innerText = "Can't be text";
    errorBill.style.display = "inline";
    bill.style.outline = "2px solid rgba(218, 47, 47, 0.685)"; 
    return;

  }else {
    errorBill.style.display = "none";
    bill.style.outline = "none";
  }

}