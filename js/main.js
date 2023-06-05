console.log("Hi ICET.....");

var name ="Dulranga";

console.log(name+ " is my name")

function print() {
    console.log("print called...!");
}

print();

function getData() {
    var email = document.getElementById('email').value;
    document.getElementById('result').innerHTML=email;
    console.log(email);

}