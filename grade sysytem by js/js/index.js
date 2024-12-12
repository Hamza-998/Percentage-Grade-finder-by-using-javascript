let name = prompt("Enter Name")

let physics = +prompt("Enter Your Physic Number")
let chemistry = +prompt("Enter Your Chemistry Number")
let biology = +prompt("Enter Your Biology Number")
let math = +prompt("Enter Your Math Number")
let urdu = +prompt("Enter Your Urdu Number")

let obtainedmarks = physics + chemistry + biology + math + urdu ;
let percentage = obtainedmarks / 500 * 100;

if (percentage >= 90 && percentage <= 100) {
    document.write( " your percentage is " + percentage + " and your grade is A+")
}
else if (percentage >= 80 && percentage <= 89) {
    document.write(" your percentage is " + percentage + " and your grade is A")
}
else if (percentage >= 70 && percentage <= 79) {
    document.write( " your percentage is " + percentage + " and your grade is B+")
}
else if (percentage >= 60 && percentage <= 69) {
    document.write(" your percentage is " + percentage + " and your grade is B")
}
else if (percentage >= 50 && percentage <= 59) {
    document.write( " your percentage is " + percentage + " and your grade is C")
}
else if (percentage >= 0 && percentage <= 49) {
    document.write(" your percentage is " + percentage + " and your grade is Fail")
}


