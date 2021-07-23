$(function(){
    let div2 = document.getElementById("datadiv2");
    $('#btn2').click(function(){
        let myRequest = new XMLHttpRequest();
        myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
        myRequest.onload = function(){
            let dataList=JSON.parse(myRequest.responseText);
            google(dataList);
        };
        myRequest.send();
    });

    function google(data){
        let myString = "";
        for(i=0;i<data.length;i++){
            myString += "<p>" + data[i].name + "is a " + data[i].species + ".</p>";
        }
        div2.insertAdjacentHTML("beforeend",myString);
    }
})