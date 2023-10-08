import "./style.css";
const logic = (e)=>{
    if( theScreen.innerText === ""){
        parseInt(e.target.innerText )
        theScreen.innerText= e.target.innerText ;
        theScreen.style.color="white"
        theScreen.style.display="flex"
        theScreen.style.justifyContent="end"
        theScreen.style.alignItems="flex-end"
        theScreen.style.fontSize="50px"
        console.log(e.target.innerText )
        console.log(e)
    }//typeof theScreen.innerText === "number"
    if(theScreen.innerText !== "" &&  theScreen.innerText == '1'||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"){
        const newNumberClick = e.target.innerText
        theScreen.innerText += newNumberClick
    }
}

const theScreen = document.querySelector(".black-screen")
const restart=document.querySelector(".restart") ;
restart.addEventListener("click",logic)

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
sum.addEventListener("click",logic)

const zero=document.querySelector(".zero");
zero.addEventListener("click",logic)

const dot=document.querySelector(".dot");
dot.addEventListener("click",logic)

const equal=document.querySelector(".equal");
equal.addEventListener("click",logic)

