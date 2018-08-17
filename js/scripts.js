'use strict';

let display = ''; 

function calc(b) {

    if(b.value=='C') {
        display = '';
    }
    else if(b.value == '='){
        display = eval(display);
    }
    else {
        display += b.value;
    }
        
    document.getElementById("res").value = display;
}



    