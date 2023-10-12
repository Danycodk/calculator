import "./style.css";
const logic = (e)=>{
    const numberRegex = /^\d+$/;
    if(theScreen.innerText === ""){
        theScreen.innerText= Number(e.target.innerText)
    }
    else if(theScreen.innerText !== null && (numberRegex.test
        (theScreen.innerText))){
        const newNumberClick = Number(e.target.innerText)
       theScreen.innerText += Number(e.target.innerText)
       console.log(theScreen.innerText+"Numbers click Logic Func")
    }
    else if(theScreen.innerText.endsWith("+")||theScreen.innerText.endsWith("/") ||theScreen.innerText.endsWith("*")||theScreen.innerText.endsWith("-") ){
        theScreen.innerText += " " + e.target.innerText 
        //console.log(theScreen.innerText+"This is the else click Logic Func")
    }
    else{
        theScreen.innerText +=  Number(e.target.innerText)
    }
}

const sumAction = (e)=>{
    const newButtonClick = e.target.innerText
    console.log(newButtonClick)
   const spaceSumSpace =" " + newButtonClick + " "
   // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 
    theScreen.innerText += spaceSumSpace 
    //console.log(theScreen.innerText+"ON est dans la FUNCTION SUMACTION")
}

const muliplicationAction = (e)=>{
    const newButtonClick = e.target.innerText
    console.log(newButtonClick)
   const spaceSumSpace =" " + newButtonClick + " "
   // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 
    theScreen.innerText += spaceSumSpace 
    //console.log(theScreen.innerText+"ON est dans la FUNCTION SUMACTION")
}

const subtractionAction = (e)=>{
    const newButtonClick = e.target.innerText
    console.log(newButtonClick)
   const spaceSumSpace =" " + newButtonClick + " "
   // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 
    theScreen.innerText += spaceSumSpace 
    //console.log(theScreen.innerText+"ON est dans la FUNCTION SUMACTION")
}

const divisionAction = (e)=>{
    const newButtonClick = e.target.innerText
    console.log(newButtonClick)
   const spaceSumSpace =" " + newButtonClick + " "
   // I PUT SPACE BETWEEN NUMBERS AND SYMBOLS 
    theScreen.innerText += spaceSumSpace 
    //console.log(theScreen.innerText+"ON est dans la FUNCTION SUMACTION")
}


const resultEqual= (e)=>{
        //theScreen.innerText += parseFloat(e.target.innerText) //isarray CHA GPT
        let addCalcule= theScreen.innerText.split(" ")
        //addCalcule.forEach((element) => console.log(parseInt(element) ) )
       const result=  eval(addCalcule.join(" "))
        console.log(result)
 }
const restartAC = (e)=>{
           theScreen.innerText= "" ;
 }
const theScreen = document.querySelector(".black-screen")
const restart=document.querySelector(".restart") ;
restart.addEventListener("click",restartAC)

const PosNegative=document.querySelector(".positive-negative");
PosNegative.addEventListener("click",logic)

const Percentage=document.querySelector(".percentage");
Percentage.addEventListener("click",logic)

const division=document.querySelector(".division");
division.addEventListener("click",divisionAction)

const seven=document.querySelector(".seven");
seven.addEventListener("click",logic)

const height=document.querySelector(".height");
height.addEventListener("click",logic)

const nine=document.querySelector(".nine");
nine.addEventListener("click",logic)

const multiplication=document.querySelector(".muliplication");
multiplication.addEventListener("click",muliplicationAction)

const foor=document.querySelector(".four");
foor.addEventListener("click",logic)

const five=document.querySelector(".five");
five.addEventListener("click",logic)

const six=document.querySelector(".six");
six.addEventListener("click",logic)

const subtraction=document.querySelector(".subtraction");
subtraction.addEventListener("click",subtractionAction)

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