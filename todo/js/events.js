/*function clickHandle(e)
{
	console.log(e.target.parentNode);
	console.log("Clicked");
}
function clickHandle1()
{
	console.log("Clicked 1");
}

let button1=document.querySelector("#button1");
//button1.onclick=clickHandle;
//button1.onclick=clickHandle1;

//button1.addEventListener("click",clickHandle);
//button1.addEventListener("click",clickHandle1);


let button2=document.querySelector("#button2");
let button3=document.querySelector("#button3");
let button4=document.querySelector("#button4");
let digits=document.querySelector("#digits");
button2.addEventListener("click",clickHandle);
button3.addEventListener("click",clickHandle);
button4.addEventListener("click",clickHandle);
function clickHandle(e)
{
	digits.innerHTML=e.target.innerText;

}
*/
/*
function clickHandle1()
{
	digits.innerHTML="1";
}
function clickHandle2()
{
	digits.innerHTML="2";
}

function clickHandle3()
{
	digits.innerHTML="3";
}
*/

let digits=document.querySelector("#digits");
let buttons=document.querySelectorAll("button.btn");
buttons.forEach((item)=>{

	item.addEventListener("click",clickHandle);

});
function clickHandle(e)
{
	digits.innerHTML=e.target.innerText;

}
