"use strict"

let form1=document.getElementById("dataform");
let list=document.getElementById("result");
let resultstudent=[];

function  Students(firstname,country,ispass){

this.firstname=firstname;
this.country=country;
this.ispass=ispass;
this.age=this.randomage(15,20);
resultstudent.push(this);







}
Students.prototype.randomage = function () {
    return this.age = Math.floor(Math.random() * (20-15+1)+15);
};
function settingitem(){
let data=JSON.stringify(resultstudent);
localStorage.setItem("result",data)





}
function gettingitem(){
let stringobj=localStorage.getItem("result");
let normalobj=JSON.parse(stringobj);

if(normalobj!==null){
resultstudent=normalobj;

}



renderlist();


}















function renderlist(){
list.textContent='';
for(let i=0;i<resultstudent.length;i++){

let liel=document.createElement("li");
let infop=document.createElement("p");
let temp;
if(resultstudent[i].ispass){

temp="pass";



}else{

temp="fail"

}

infop.textContent=`${resultstudent[i].firstname}   resultt a ${temp}  ${resultstudent[i].country } ${resultstudent[i].age}`;
liel.appendChild(infop);
list.appendChild(liel);







}







}







function handlefunction(event){
    event.preventDefault();

let firstname=event.target.firstname.value;
let country=event.target.country.value;
let ispass=event.target.ispass.checked;
console.log(event.target);
new Students(firstname,country,ispass)

settingitem();
renderlist();



}











gettingitem();
form1.addEventListener("submit",handlefunction)