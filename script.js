let x = 10;
let y;
const pi = 3.1416
var num = 23;
var num = 33;;;
x = 5;
document.getElementById("dataType").textContent = `the data type of x = ${x} is ${typeof (x)} The datatype of pi =${pi} is ${typeof (pi)} The datatype of "I am a string" is ${typeof ("I am a string")}. The datatype of y=${y} is ${typeof (y)}`;
function myFunc() {
    let greeting;
    let time = new Date().getHours();
    if (time < 12) {
        greeting = "Gud Morning";
    }
    else if (time < 18) {
        greeting = "Gud Afternoon";
    }
    else if (time < 20) {
        greeting = "Gud Evening";

    }
    else {
        greeting = "Good Night";

    }

}
document.getElementById("time").innerHTML = time;
document.getElementById("greet").innerHTML = greeting;
let text = "";
let i = 0;
while(i<=10){
    text += `<br>${i}=> The mark in literature is ${Math.random()*100}`;
    i++;
}
document.writeln(`The Numbers are ${text}`);