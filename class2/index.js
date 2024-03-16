const food = ("rice", "beans","cowleg", "pepper soup")

let txt = ''
food.foreach(foodCollection())

function foodCollection(value){
    txt += ` ${value} <br>`;
    console.log(txt)
}
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById().innerHTML = food;

// function add(, value) {
    
// }
function myFunction(value, index) {
    text += index + ": " + value + "<br>"; 
  }