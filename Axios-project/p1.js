/**
 * let Accesories=[

    {
        name:"laptop",
        type:"machine",
        "purchase-date":"25th jan" 
    },
    {
        name:"Mobile",
        type:"machine",
        "purchase-date":"1st jun" 
    },

];

console.log(Accesories[0])

 */

/*https://jsonplaceholder.typicode.com/todos*/

let btn = document.getElementById("btn1");
let diva = document.getElementById("datadiv1");

btn.addEventListener('click',callFunction);


function callFunction(){
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET',"https://jsonplaceholder.typicode.com/todos/1");
    myRequest.onload = function(){
        let listData = JSON.parse(myRequest.responseText);
        mSoft(listData);
    };
    myRequest.send();
}

function mSoft(data){
    let onString = "" ;
    for(a=0;a<data.length;a++){
        onString += "<p>" + onString[a].id  + "is a " + onString[a].title + ".</p>"; 
    }
    //diva.insertAdjacentHTML("beforeend",onString);
    console.log(onString);
}

