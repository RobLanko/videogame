let characterOneName="Goku"
let characterOnePoints=100;
let characterTwoName="Vegeta"
let characterTwoPoints=100;
function displayCharacter1(){
    document.getElementById("info-c1").innerHTML=`<p><b>Name:</b> ${characterOneName}</p><p><b>Points:</b> ${characterOnePoints}</p>`;
}
function displayCharacter2(){
    document.getElementById("info-c2").innerHTML=`<p><b>Name:</b> ${characterTwoName}</p><p><b>Points:</b> ${characterTwoPoints}</p>`;
}

displayCharacter1();
displayCharacter2();

function attack1(){
    document.getElementById("console").
    innerHTML=`<p>Attacking ... </p>`;
    //discount points from the character
    var newPoints=characterOnePoints-20;
    //conditional statement
    if(newPoints<=0){
        document.getElementById("console").innerHTML=`<p>G A M E   O V E R ! ! !</p>`;
        document.getElementById("btn-attack").style.display="none";
    }else{
        //update the variable
        characterOnePoints=newPoints;
        //update the display
        displayCharacter1();
        displayCharacter2();
    }
}    
function attack2(){
    document.getElementById("console").innerHTML=`<p>Attacking ... </p>`;
    var newPoints2=characterTwoPoints-15;
    if(newPoints2<=0){
        document.getElementById("console").innerHTML=`<p>G A M E   O V E R ! ! !</p>`;
        document.getElementById("btn-attack").style.display="none";
    }else{
        characterTwoPoints=newPoints2;
        displayCharacter1();
        displayCharacter2();
    }
}
