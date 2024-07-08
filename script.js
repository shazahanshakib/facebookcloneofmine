const input1= document.getElementById("input1");
const input2= document.getElementById("input2");
const logBtn= document.getElementById("logBtn");

const pTag= document.getElementById("pTag");
const mainClass= document.getElementById("main");

logBtn.addEventListener("click", function () {
    logInput();
})

function logInput() {
    let inputSec1=input1.value;
    let inputSec2=input2.value;

    if (inputSec1=="" && inputSec2==="") {
        alert("Please give the password and id");
    }
    else{
        mainClass.style.display="none";
        pTag.innerHTML="you are hacked";
        console.log(inputSec1  +" "+ inputSec2);
    }

}

