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


let q1 = +prompt("ادخل قيمه الميراث");
let q2 = confirm("هل يوجد زوجه");
if(q2==true){
    let meraxValue = q1 * (1/8);
    let merasWife =  meraxValue;
    let q3 = +prompt(" كم عدد الولاد الذكور");
    if(q2 >= 1){
        let merasBoy = (q1*(1/2)/q3);
        let boyValue = merasBoy;
        let q4 = +prompt("كم عدد البنات");
        if(q4 >= 1){
            let merasGirl = (boyValue -merasWife/q4);
            let girlValue = merasGirl;
            document.write(`<div style = "background-color:blanchedalmond; text-align: center;"><pre style = "color:gray ; font-size:3rem " >ميراث الزوجه هو : ${merasWife}</pre>
                <pre style = "color:gray ; font-size:3rem ">ميراث البنات هو : ${girlValue}</pre>
               <pre style = "color:gray ; font-size:3rem ">ميراث الولاد هو : ${boyValue}</pre></div>`);
        }else{
            document.write("اكمل السؤال");
        }
    }else{
        document.write("اكمل السؤال");
    }
}else{
    let q3 = +prompt(" كم عدد الولاد الذكور");
    if(q3 >= 1){
        let merasBoy = ((q1 * (75/100))/ q3);
        let boyValue = merasBoy;
        let q4 = +prompt("كم عدد البنات");
        if(q4 >= 1){
            let merasGirl = (((q1)-(boyValue))/ q4);
            let girlValue = merasGirl;
            document.write(`<div style = "background-color:blanchedalmond; text-align: center;">
                <pre style = "color:gray ; font-size:3rem ">ميراث البنات هو : ${girlValue}</pre>
               <pre style = "color:gray ; font-size:3rem ">ميراث الولاد هو : ${boyValue}</pre></div>`);
        }else{
            document.write("اكمل السؤال");
        }
    }else{
        document.write("اكمل السؤال");
    }
}

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
