console.log("hey everyone");
document.getElementById("answer").readOnly = true;

let screen = document.getElementById("answer");

buttons= document.querySelectorAll("button");
let screenValue = "";

for(item of buttons){
    item.addEventListener("click",(e) =>{
        buttonText = e.target.innerText;
        if(buttonText == "X"){
            buttonText = "*";
            screenValue +=buttonText;
            screen.value= screenValue;
        }else if(buttonText == "C"){
            screenValue="";
            screen.value = screenValue;
        }else if(buttonText == "="){
            checkForBracketMulti();
        }
        else{
            screenValue +=buttonText;
            screen.value= screenValue;
        }
    });
}

//57 = 9 ("(")    48 = 0 (")")      53= 5 ("%")
document.addEventListener("keydown", function(even){
    console.log(event.which);
    if(event.shiftKey==57){
        event.key = "(";
    }else if(event.shiftKey == 48){
        event.key=")";
    }else if(event.shiftkey == 53){
        event.key = "%";
    }
    if(even.key <=9 ||
        event.key == "+"||
        event.key == "-"||
        event.key == "*"||
        event.key == "."||
        event.key == "/"||
        event.key == "%"||
        event.key == "("||
        event.key == ")"){
            screenValue +=event.key;
            screen.value = screenValue;
    }
    
    //13 = enter
    // 187 = equal sign 
    // 46 = delete      8 = backspace
    // 67 = clear   82 = r 
    if(event.keyCode == 13 || event.keyCode == 187){
        checkForBracketMulti();
    }else if(event.keyCode == 46){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }else if(event.keyCode ==8){
        screenValue = screenValue.slice(0, -1);
        screen.value = screenValue;
    }else if(event.keyCode == 67){
        screenValue = "";
        screen.value = screenValue;
        console.clear();
    }else if(event.keyCode == 82){
        location.reload();
    }

});

window.onerror = function(){
    aleart("Input is invalid");
    screenValue= "";
    screen.value = screenValue;
    console.clear();
};

window.onBracketMultiplication = function(){
    screenValue = addStr(screen.value, screen.value.indexOf("("), "*");
    screen.value = eval (screenValue);
}

function addStr(str, index, stringToAdd){
    return(
        str.substring(0, index) + stringToAdd + str.substring(index, str.length)
    );
}
function checkForBracketMulti(){

    //isNaN = not a number
    if(screen.value.includes("(") && !isNaN(screen.value.charAt(screen.value.indexOf("(")-1))){
        window.onBracketMultiplication();
        return;
    }
    else{
        screen.value = eval(screenValue);
    }
}
