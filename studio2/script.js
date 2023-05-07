( function(){
    "use strict"; 
    console.log("reading js"); 

async function getData(){

    //gets file and headers
    const myCravings = await fetch('data/cravings.json'); 

    //gets actual json file and lets us do something with it
    const data = await myCravings.json(); 

    //inputs data when button is clicked, if else statement is to avoid undefined message at beginning
    if (checkButton(data) == undefined){
        document.querySelector('#food').innerHTML = ""; 
        document.querySelector('#foodImg').className = "hidden";
    }
    else{
        document.querySelector('#food').innerHTML = checkButton(data);
        document.querySelector('#foodImg').className = "visible";
    }
}

function checkButton(data){

    //selects all buttons
    let button = document.querySelectorAll("button"); 

    let html = " "; 

    button[0].addEventListener('click', function(){
        console.log("10am");
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['10 AM'];
        document.querySelector('#foodImg').src = "images/water.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1)"; 
        document.querySelector('h4').style.transform = "scale(1)";
        return html; 
    });

    button[1].addEventListener('click', function(){
        console.log("11am"); 
        document.querySelector('article').style.right = "15%"; 
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['11 AM'];
        document.querySelector('#foodImg').src = "images/cream.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1)"; 
        document.querySelector('h4').style.transform = "scale(1)";
        return html; 
    });

    button[2].addEventListener('click', function(){
        console.log("12pm"); 
        console.log(`${document.querySelector('#foodImg').className}`);
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['12 PM'];
        document.querySelector('#foodImg').src = "";  
        document.querySelector('#foodImg').src = "images/blank.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1)"; 
        document.querySelector('h4').style.transform = "scale(1)";
        return html; 
    });

    button[3].addEventListener('click', function(){
        console.log("1pm"); 
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['1 PM'];
        document.querySelector('#foodImg').src = "images/water.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1.2)"; 
        document.querySelector('#foodImg').style.transform
        document.querySelector('h4').style.transform = "scale(1.2)";
        return html; 
    });

    button[4].addEventListener('click', function(){
        console.log("2pm"); 
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['2 PM'];
        document.querySelector('#foodImg').src = "images/water.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1.4)"; 
        document.querySelector('h4').style.transform = "scale(1.4)";
        return html; 
    });

    button[5].addEventListener('click', function(){
        console.log("3pm"); 
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['3 PM'];
        document.querySelector('#foodImg').src = "images/water.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1.6)"; 
        document.querySelector('h4').style.transform = "scale(1.6)";
        return html; 
    });

    button[6].addEventListener('click', function(){
        console.log("4pm"); 
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['4 PM'];
        document.querySelector('#foodImg').src = "images/water.svg"; 
        document.querySelector('#foodImg').style.transform = "scale(1.8)"; 
        document.querySelector('h4').style.transform = "scale(1.8)";
        return html; 
    });

    button[7].addEventListener('click', function(){
        console.log("5pm"); 
        document.querySelector('#foodImg').className = "visible";
        //reset html before entering new text
        document.querySelector('#food').innerHTML = '';
        document.querySelector('#food').innerHTML = data['5 PM'];
        document.querySelector('#foodImg').src = "images/fish.svg";  
        document.querySelector('#foodImg').style.transform = "scale(1.4)"; 
        document.querySelector('h4').style.transform = "scale(1)";
        return html; 
    });
}

getData(); 

})(); 