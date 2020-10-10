// var ul = document.createElement("ul")
// document.body.append(ul)
//  var li1 = document.createElement("li")
//  li1.innerHTML = "<h2> California </h2>"
//  ul.append(li1)

//  var li2 = document.createElement("li")
//  li2.innerHTML = "<h2> New York </h2>"
//  ul.append(li2)

//  var li3 = document.createElement("li")
//  li3.innerHTML = "<h2> Florida </h2>"
//  ul.append(li3)

//  var li4 = document.createElement("li")
//  li4.innerHTML = "<h2> Texas </h2>"
//  ul.append(li4)

//  var li5 = document.createElement("li")
//  li5.innerHTML = "<h2> North Carolina </h2>"
//  ul.append(li5)

var states = ["California", "New York", "Texas", "Florida", "North Carolina"];
var text = "";
var i;
for (i = 0; i < states.length; i++) {
  text += states[i] + "<br>";
}
document.getElementById("hello").innerHTML = text;

document.getElementById("hello").style.color = "cornflowerblue";
document.getElementById("hello").style.fontFamily = "sans-serif";
document.getElementById("hello").style.fontSize = "20px";
document.getElementById("hello").style.fontWeight = "lighter";

//add new-class
document.querySelector("#hello").classList.add(".border")
console.log(document.querySelector("#hello").className)
// for (var i = 0; i < 5; i++){
//     var h2 = document.createElement("h2");
//      h1.textContent = ("Hello World");
//      document.body.apend(h2)
//      console.log(i)
//      console.log(name[i])
//    }



document.getElementById("h2")