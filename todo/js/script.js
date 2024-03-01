//console.log("Hello");
//console.dir(document.all[4]);
/*
getElementsByTagName
getElementsByClassName
getElementById
querySelector()
querySelectorAll

innerText
innerHTML
name
value

*/
//let elements=document.getElementsByTagName("p");
//console.log(elements);
//for(i=0;i<elements.length;i++)
//console.log(elements[i]);
/*elements.forEach((item)=>{


});
*/




//elements[1].innerHTML="<b>Demo</b>";
//let elements1=document.getElementsByClassName("x");
//console.log(elements1);
//let element=document.getElementById("x");

/*let elements=document.querySelectorAll("p.x");
console.log(elements);
elements.forEach((item)=>{

console.log(item);
});*/

/*
	setAttribute("attributename",value);
	getAttribute("attribute");
	attributes
	getAttributeNode("attribute");



let para=document.querySelector("#x");
console.log(para.getAttributeNode("class"));
//para.setAttribute("data",10);
console.log(para.attributes["id"]);


let div=document.querySelector("div.x");
let att="backgroundColor";
div.style[att]="red";

//div.style.backgroundColor="red";
div.style.padding=10;
*/
let div=document.querySelector("div.x");
console.log(div.classList);
// add,remove,replace,toggle,item
div.classList.item(0);

div.classList.remove("x");
div.classList.add("redclass");
div.classList.replace("x","redclass");








