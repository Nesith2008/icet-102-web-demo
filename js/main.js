console.log("Hi ICET.....");

var name ="Dulranga";

console.log(name+ " is my name")

function print() {
    console.log("print called...!");
}

print();

function getData() {
    var email = parseInt (document.getElementById('email').value);
    document.getElementById('result').innerHTML=+email+5;
    console.log(email+5);
}

var mark1=75;
    var mark2=40;
    var mark3=15;
    var avg=(mark1+mark2+mark3)/3;
    if (avg>=75) {
        console.log("A");
    } else if(avg>=65) {
        console.log("B");
    } else if(avg>=55) {
        console.log("C");
    } else if(avg>=35) {
        console.log("D");
    }else {
        console.log("F");
    }

    var stdName = 67;

    switch(stdName){
        case 78:
            console.log("Hi yasindu");
            break;
        case "kavindu":
            console.log("Hi kavindu");
            break;
        case "pasindu":
            console.log("Hi pasindu");
            break;
        default:
            console.log("Not mached !");
    }

   

  var month ="March";

     switch(month){
      case "January":
        console.log("Duruthu");
        break;
      case "February":
        console.log("Nawam");
        break;
      case"March":
        console.log("Medin");
        break;
      default:
        console.log("not match");
    
     }

     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");
     console.log("Hi Dulranga");

     for(var i=0; i<10; i++){
        console.log("Hi kavindu");
     }
     function getAlert(){
        var inputValue = document.getElementById('num').value;
        for(i=1;i<6;i++){
            inputValue *=i;
        }
        if((inputValue%2)==0){
            alert("user win");
        }else{
            alert("user failed");
        }
    }


  
    while (false) {
        
    }

    var cars = ("Toyota","BMW","Benz","AUDI","Jeep",89,56);
     console.log(cars[0]);

     console.log(cars);

     var stdName ="kavindu";
     stdName=90 ;

     for (var val of cars) {

        console.log(val);
        
     }

     var rainData = [34,65,7,65,3,23,5,78,9,90,78];
     var total =0;
     for(var x of rainData){
     total+=x;
     }
     var avg = total/11;
     console.log(avg);

     var total=0;
     for(var i=0; i<rainData.length; i++){
     total += rainData[i];
    }
     console.log(total/rainData.length);


    function getCharactors(){
        var input = document.getElementById('user').value;
        var converted = input.toUpperCase();
        var output="[";
        for(var i=0; i< input.length;i++){
            output+=converted.charAt(i)+",";
        }
        output+="]"
        document.getElementById('output').innerHTML=output;
    }

    //////////////////////////////////////

//data types

var stdName = "Yasindu" //----> string
var stdAge = 24 //-----> number
var stdMark = 90.67 //-----> number
var isMarried = true //-----> boolean

//js object
var myCar = { brand: "Toyota", model: "Corolla", engNo: "AE12344", color: "black" } //----> object

//JSON Objects

// {
//     "name":"Yasindu",
//     "address":"panadura",
//     "age":26
// }

/////////////////////////////////////////

//variable types
//var, let, const


var val1 = 10;
val1 = 89;

let var2 = 90;
var2 = 67;

// const var3 = 56;
// var3=78;

//////////////////////////

var val3 = 45;
var val3 = 34;

// let val4 = 78;
// let val4 = 57;

// const val5 = 89;
// const val5 = 34;

/////////////////////////


//var is globle scope
var val6 = 23;

{
    console.log(val6);
    var val7 = 34;
}

console.log(val7);


let val8 = 23;

{
    console.log(val8);
    let val9 = 34;
}

console.log(val9);


const val10 = 23;

{
    console.log(val10);
    const val11 = 34;
}

console.log(val11);

//////////////////////////////

function saveData() {

}

saveData();

const saveData = function () {

}

saveData();

//arrow functions
const deleteData = () => {

}

deleteData();

///////////////////////////

function printData(name,age){
    console.log(name+" "+age);
    return name;
}


