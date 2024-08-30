let fanstatus = false ;
let air = false;
let fanspeed = 1;
let hotspeed = 29;
let coldspeed = 16;
function aircon(){
    if(air == false ){
        air = true;
        console.log(`air is open and ${hotspeed}`);
    }else{
        air = false;
        console.log(`air is close `);
    }
}
function fan(){
    if (air == true && fanstatus == false){
        fanstatus = true;
        fanspeed = 1;
        console.log(`fan is open and fanspeed ${fanspeed}`)
    }else if(fanstatus == true&& air == true && fanspeed < 3){
        fanspeed++
        console.log(`fan is open and fanspeed ${fanspeed}`)
    }else{
        fanstatus = false;
    }
}
function Increase(){
    if(air == true &&  hotspeed <= 29 && hotspeed > 16){
        hotspeed--
        console.log(`hotspeed is ${hotspeed}`)
    }
}
function Decrease(){
    if(air == true && coldspeed >= 16 && coldspeed < 29){
        coldspeed++
        console.log(`coldspeed is ${coldspeed}`)
    }
}
// ##################################3 calc ====>
let num1 = 0;
let num2 = 0;

function calc() {
  num1 = +prompt("أدخل الرقم الأول:");
  num2 = +prompt("أدخل الرقم الثاني:");
}
function addNos() {
  console.log(num1 + num2);
}

function subtract() {
  console.log(num1 - num2);
}

function multiply() {
  console.log(num1 * num2);
}

function divide() {
  if (num1 !== 0) {
    console.log(num1 / num2);
  } else {
    console.log("لا يمكن القسمة على صفر") ;
  }
}
