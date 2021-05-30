"use strict"
let carform=document.getElementById("orderform");
let table1=document.getElementById("tablecar");

let cars=[];
 


function Carworld(typecar,numbercar){


this.typecar=typecar;
this.numbercar=numbercar;
this.price=this.randomprice();

cars.push(this);


}

Carworld.prototype.randomprice = function () {
    return this.price = Math.floor(Math.random() * 10000);
};

function settingitem(){

let data=JSON.stringify(cars);
localStorage.setItem('car',data);



}
function gettingitem(){
let stringobj=localStorage.getItem("car");
let normalobj=JSON.parse(stringobj);

if(normalobj!==null){


    cars=normalobj;





}
rendertable();












}


function rendertable(){

  table1.textContent='';
let table=document.createElement("table");
table1.appendChild(table);

let tr1=document.createElement("tr");
table.appendChild(tr1);



let th2=document.createElement("th");
tr1.appendChild(th2);
th2.textContent="typecar";


let th3=document.createElement("th");
tr1.appendChild(th3);
th3.textContent="numbercar";

let th4=document.createElement("th");
tr1.appendChild(th4);
th4.textContent="price";



for(let i=0;i<cars.length;i++){

let row=document.createElement("tr");
table.appendChild(row);


let typecartd=document.createElement("td");
row.appendChild(typecartd);
typecartd.textContent=cars[i].typecar;

let numbercartd=document.createElement("td");
row.appendChild(numbercartd);
numbercartd.textContent=cars[i].numbercar;

let pricetd=document.createElement("td");
row.appendChild(pricetd);
pricetd.textContent=cars[i].price;







}







}


function handlesubmit(event){

  event.preventDefault();

  let typecar=event.target.typecar.value;
let numbercar=event.target.numbercar.value;
new Carworld(typecar,numbercar);



settingitem();
rendertable();

}
gettingitem();
carform.addEventListener("submit",handlesubmit);


    




















































