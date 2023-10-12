//import "./style.css";
const logic = (e)=>{
    const numberRegex = /^\d+$/;
    if(theScreen.innerText === ""){
        theScreen.innerText= e.target.innerText
    }
    else if(numberRegex.test(theScreen.innerText)&& theScreen.innerText.endsWith("+")){ // Put space before a symbol when a number is click
        const symbolAction = " " + parseFloat(e.target.innerText) + " ";
        theScreen.innerText += symbolAction;
    }
    else if(theScreen.innerText !== null && (numberRegex.test(theScreen.innerText))
    //theScreen.innerText === '2' ||theScreen.innerText === '3' || 
   // theScreen.innerText === '4' ||theScreen.innerText === '5' ||
   // theScreen.innerText === '6' ||theScreen.innerText === '7' ||
   // theScreen.innerText === '8' ||theScreen.innerText === '9'     )
   ){
        const newNumberClick = parseFloat(e.target.innerText)
       theScreen.innerText += parseFloat(e.target.innerText)
    }
    //else{//When there is Symbol
        // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 
    //    theScreen.innerText += parseFloat(e.target.innerText)
    //}

 //   else if(){ // When there is a Symbol
        // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 
  //      const symbolAction = " " + parseFloat(e.target.innerText) + " ";
 //       theScreen.innerText += symbolAction;
//    }
    else{
        theScreen.innerText += e.target.innerText
    }
}
const resultEqual= (e)=>{
   // console.log(theScreen.innerText)
 //   console.log(typeof parseFloat(theScreen.innerText))
    if(theScreen.innerText.includes("+")){
        //theScreen.innerText += parseFloat(e.target.innerText) 
        let addCalcule= theScreen.innerText.split(" + ").join()//isarray CHA GPT
        console.log(addCalcule)
        
    }
}
//const sumAction= (e)=>{
   //let addCalcule= theScreen.innerText .split("+").join()
   //parseFloat(theScreen.innerText) + parseFloat( e.target.innerText)
   //console.log(addCalcule)
//}
const sumAction = (e)=>{
    const newButtonClick = e.target.innerText
   const spaceSumSpace = " " + e.target.innerText + " "
     theScreen.innerText += spaceSumSpace // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 

    
    // return
}
const restartAC = (e)=>{
   // if(theScreen.innerText === "AC"){
          theScreen.innerText= "" ;
      //}
}
const theScreen = document.querySelector(".black-screen")
const restart=document.querySelector(".restart") ;
restart.addEventListener("click",restartAC)

const PosNegative=document.querySelector(".positive-negative");
PosNegative.addEventListener("click",logic)

const Percentage=document.querySelector(".percentage");
Percentage.addEventListener("click",logic)

const division=document.querySelector(".division");
division.addEventListener("click",logic)

const seven=document.querySelector(".seven");
seven.addEventListener("click",logic)

const height=document.querySelector(".height");
height.addEventListener("click",logic)

const nine=document.querySelector(".nine");
nine.addEventListener("click",logic)

const multiplication=document.querySelector(".muliplication");
multiplication.addEventListener("click",logic)

const foor=document.querySelector(".four");
foor.addEventListener("click",logic)

const five=document.querySelector(".five");
five.addEventListener("click",logic)

const six=document.querySelector(".six");
six.addEventListener("click",logic)

const subtraction=document.querySelector(".subtraction");
subtraction.addEventListener("click",logic)

const one=document.querySelector(".one");
one.addEventListener("click",logic)

const two=document.querySelector(".two");
two.addEventListener("click",logic)

const three=document.querySelector(".three");
three.addEventListener("click",logic)

const sum=document.querySelector(".sum");
sum.addEventListener("click",sumAction)

const zero=document.querySelector(".zero");
zero.addEventListener("click",logic)

const dot=document.querySelector(".dot");
dot.addEventListener("click",logic)

const equal=document.querySelector(".equal");
equal.addEventListener("click",resultEqual)

