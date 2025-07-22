let sumHome = document.getElementById ("score-home")
let sumAway = document.getElementById ("score-away")
let saveEl = document.getElementById ("save-el")
let count = 0
let count2 = 0
//console.log(sumHome)

function increment1(){
  count +=  1
  sumHome.innerText = count
 }
function increment2(){
  count +=  2
  sumHome.innerText = count
 }
 function increment3(){
  count +=  3
  sumHome.innerText = count
 }
 
 function add1(){
  count2 +=  1
  sumAway.innerText = count2
 }
 
 function add2(){
  count2 +=  2
  sumAway.innerText = count2
 }
 
 function add3(){
  count2 +=  3
  sumAway.innerText = count2
 }
 
 function save (){
  let countStr = " " + count + "-" + count2 + " " + ","
  saveEl.innerText += countStr 
  sumHome.textContent = 0
  sumAway.textContent = 0
  count =0
  count2=0
  
 }

 
 