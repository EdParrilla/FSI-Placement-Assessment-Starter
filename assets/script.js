// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Edward Parrilla" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = parseInt(gb + cc + sugar);
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

//let gingerBreadCount = document.querySelector('qty-gb');

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function(e) {
// HINT: You can delete this console.log after you no longer need it!
  gb++;
  document.getElementById('qty-gb').textContent = gb;
  total = parseInt(gb + cc + sugar);
  document.getElementById('qty-total').textContent = total;
})

// Working on gingerbread minus
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function(e) {
    if(gb <= 0  ) {gb = 0}
    else {gb--};
    document.getElementById('qty-gb').textContent = gb;
    total = parseInt(gb + cc + sugar);
    document.getElementById('qty-total').textContent = total;

})

// TODO: Hook up event listeners for the rest of the buttons

/// Working on CC ///
////////////////////

const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function(e){
    cc++;
    document.getElementById('qty-cc').textContent = cc;
    total = parseInt(gb + cc + sugar);
    document.getElementById('qty-total').textContent = total;
})

const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function(e) {
    if(cc <= 0  ) {cc = 0}
    else {cc--};
    document.getElementById('qty-cc').textContent = cc;
    total = parseInt(gb + cc + sugar);
    document.getElementById('qty-total').textContent = total;

})

///// working on Sugar  //
// ======================

const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function(e){
    sugar++;
    document.getElementById('qty-sugar').textContent = sugar;
    total = parseInt(gb + cc + sugar);
    document.getElementById('qty-total').textContent = total;
})

const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function(e) {
    if(sugar <= 0  ) {sugar = 0}
    else {sugar--};
    document.getElementById('qty-sugar').textContent = sugar;
    total = parseInt(gb + cc + sugar);
    document.getElementById('qty-total').textContent = total;


})


