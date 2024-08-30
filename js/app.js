// ######## transformation if ===> switch #############
// let res = prompt("Enter Country");
// switch (true){
//     case (res == "cairo"):
//         document.write("5%");
//         break;
//     case (res == "Alx"):
//         document.write("10%");
//         break;
//     case (res == "aswan"):
//         document.write("30%");
//         break;
//     default:
//         document.write("لا يوجد خصم");
// }

// ##########################################################################################

// let q1 = +prompt("ادخل قيمه الميراث");
// let q2 = confirm("هل يوجد زوجه");
// if(q2==true){
//     let meraxValue = q1 * (1/8);
//     let merasWife =  meraxValue;
//     let q3 = +prompt(" كم عدد الولاد الذكور");
//     if(q2 >= 1){
//         let merasBoy = (q1*(1/2)/q3);
//         let boyValue = merasBoy;
//         let q4 = +prompt("كم عدد البنات");
//         if(q4 >= 1){
//             let merasGirl = (boyValue -merasWife/q4);
//             let girlValue = merasGirl;
//             document.write(`<div style = "background-color:blanchedalmond; text-align: center;"><pre style = "color:gray ; font-size:3rem " >ميراث الزوجه هو : ${merasWife}</pre>
//                 <pre style = "color:gray ; font-size:3rem ">ميراث البنات هو : ${girlValue}</pre>
//                <pre style = "color:gray ; font-size:3rem ">ميراث الولاد هو : ${boyValue}</pre></div>`);
//         }else{
//             document.write("اكمل السؤال");
//         }
//     }else{
//         document.write("اكمل السؤال");
//     }
// }else{
//     let q3 = +prompt(" كم عدد الولاد الذكور");
//     if(q3 >= 1){
//         let merasBoy = ((q1 * (75/100))/ q3);
//         let boyValue = merasBoy;
//         let q4 = +prompt("كم عدد البنات");
//         if(q4 >= 1){
//             let merasGirl = (((q1)-(boyValue))/ q4);
//             let girlValue = merasGirl;
//             document.write(`<div style = "background-color:blanchedalmond; text-align: center;">
//                 <pre style = "color:gray ; font-size:3rem ">ميراث البنات هو : ${girlValue}</pre>
//                <pre style = "color:gray ; font-size:3rem ">ميراث الولاد هو : ${boyValue}</pre></div>`);
//         }else{
//             document.write("اكمل السؤال");
//         }
//     }else{
//         document.write("اكمل السؤال");
//     }
// }

// #############################################################################################

// let q1 = +prompt("ادخل قيمه الميراث");
// let q2 = confirm("هل يوجد زوجه");
// if(q2==true){
//     let meraxValue = q1 * (1/8);
//     let merasWife =  meraxValue;
//     let q3 = +prompt(" كم عدد البنات");
//     if(q3 >= 1){
//         let merasgirl = (((q1 - merasWife)*(1/2)) / q3);
//         let girlValue = merasgirl;
//         let q4 = +prompt("كم عددالاولاد الذكور");
//         if(q4 >= 1){
//             let merasBoy = (((merasWife + merasWife) - q1) / q4);
//             let boyValue = merasBoy;
//             document.write(`<div style = "background-color:blanchedalmond; text-align: center;"><pre style = "color:gray ; font-size:3rem " >ميراث الزوجه هو : ${merasWife}</pre>
//                 <pre style = "color:gray ; font-size:3rem ">ميراث البنات هو : ${girlValue}</pre>
//                <pre style = "color:gray ; font-size:3rem ">ميراث الولاد هو : ${boyValue}</pre></div>`);
//         }else{
//         document.write("اكمل السؤال")
//         }
//     }else{
//         document.write(girlValue)
//     }
// }else{
//     document.write(merasWife)
// }
// let fanstatus = false;
// let fanstat = 1
// let hotSpeed = 29;

//  function fanspeed(){
//     if (fanstatus == false){
//        fanstatus = true;
//        fanstat = 1;
//        console.log(`fan is open and fanspeed: ${fanstat}`);
//      }
//      else if (fanstatus == true && fanstat < 3){
//         fanstat++
//         console.log(`fan is open and fanspeed:${fanstat}`);
//      }
//      else
//      {
//         fanstatus = false;
//         console.log("fan is close");
//     }
//     function cold(){
//         let coldSpeed = 16;
//         if(fanstatus == false && fanstat == 1){
//             console.log(coldSpeed)
//         }
//     }
// }
// #########################  Sheet1
// let x = "hoseiny";
// console.log(x.split("").reverse().join());
// ######################################

// let user1 = `Eraa`;
// let theName = `eraa`;
// if(user1.toUpperCase == theName.toLowerCase ){
//     console.log('true');
// }
// else{
//     console.log('false');
// }
// ######################################

// function isAllUppercase (str){
//     return str === str.toUpperCase() && str !== str.toLowerCase();
// }
// console.log(isAllUppercase("HALLO"));
// ######################################

// let theName = "Moamen";
// console.log(theName.slice(1 , 5))
// ######################################

// let firstName = "hoseiny";
// let lastName = "mahmoud";
// let endName = "abd Rahman"
// console.log(`name : ${firstName} ${lastName} ${endName}`);
// ######################################

// let arr1 = ["ali" , "hosam" , "omer"];
// let arr2 = ["ali" , "hosam" , "omer"];
// if( arr1 === arr2 ){
//     console.log("true");
// }else{
//     console.log("false")
// }
// ######################################

// let theName = "  hoseiny  ";
// console.log (theName.trim())
// ######################################

// let user = "ww.moamen.eraa";
// console.log(user.includes("ww"));
// let user = "“oMOamen”";
// console.log(user.replaceAll("O","").replaceAll("o",""))
// ######################################
// let text = "SoWhatYesOhh";
// let text1 = "So";
// let text2 = "Ah";
// console.log(text.includes(text1,text2) && text.includes(text2) )
// #######################################sheet2
// let num1 = 10;
// let num2 = 10;
// let sum = num1+num2;
// if(sum==15 || num1==15 ||num2==15){
//     console.log("true");
// }else{
//     console.log("false");
// }
// ##########################################

// let x = Math.sqrt(16);
// console.log(x)

// let taskes = [];
// let addNew = () => {
//   let task = prompt("Emter New taskes");
//   taskes.push(task);
//   console.log(taskes);
// };

// let delNew = () => {
//   let deltest = +prompt("Enter Tak to del");
//   taskes.splice(deltest - 1, 1);
//   console.log(taskes);
// };
// let EditNew = () => {
//   let deltest = +prompt("Enter Tak to del");
//   let EditNew = prompt("Enter edit");
//   taskes.splice(deltest - 1, 1 , EditNew);
//   console.log(taskes);
// };
// let phones = ["iphone x", "iphone 11" , "iphone 12"];
// let prices = ["450", "500", "600"];
// let qtys = ["10","20","30"];
// let showdata = (() => {
//   console.clear();
//   phones.forEach((phone, index) => {
//     console.log(`phone : ${phones[index]} ==> ${prices[index]} ==> quty ==> ${qtys[index]}`)
//    });
// })
// showdata();
// let addPhone = () =>{
//   phones.push(prompt("Enter New name "));
//   prices.push(prompt("Enter New prices "));
//   qtys.push(prompt("Enter New qtys"));
//   showdata();
// }
// let delphone = () =>{
//   let indexPhone = +prompt("Enter index phone");

// }
// let hosfunction = ()=>{


// }
