

let uname = document.getElementById('uname');
let pass = document.getElementById('pass');
let num = document.getElementById('number');




function validate() {    

   

if (uname.value == "" && pass.value == "" && num.value == "" ) {

    uname.style.border = "solid 2px red";
    pass.style.border = "solid 2px red";
    num.style.border = "solid 2px red";

return false;
    
} else if( uname.value.length <= 3){
    alert("Please enter Username greater than 3 letters.");
    return false;

} else if( pass.value.length <= 3){
    alert("Please enter Password greater than 3 letters.");
    return false;

} else if( result){
    alert("Please enter valid num");
    return false;

} 




else{
    return true;
}
};