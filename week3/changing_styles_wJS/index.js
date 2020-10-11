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

// var states = ["California", "New York", "Texas", "Florida", "North Carolina"];
// var text = "";
// var i;
// for (i = 0; i < states.length; i++) {
//   text += states[i] + "<br>";
// }
// var h2 = document.createElement("h2")
// h2.textContent = ("Whatever text I want")
// document.body.append(h2)
// for(var i = 0; i < 4; i++){
//     var h2 = document.createElement("h2")
//     h2.textContent = ("Whatever text I want")
//     document.body.append(h2)
//     console.log(i)
// }
//  var ul = document.createElement("ul")
//  document.body.append(ul)
//  var li = document.createElement("li")
//  li.textContent = [0]
//   ul.append(li)
// document.getElementById("h2").innerHTML = text;

// document.getElementById("h2").style.color = "cornflowerblue";
// document.getElementById("h2").style.fontFamily = "sans-serif";
// document.getElementById("h2").style.fontSize = "20px";
// document.getElementById("h2").style.fontWeight = "lighter";

// //add new-class
// heading.classList.add(".border")
// console.log(document.querySelector("#h2").className)
// for (var i = 0; i < 5; i++){
//     var h2 = document.createElement("h2");
//      h1.textContent = ("Hello World");
//      document.body.apend(h2)
//      console.log(i)
//      console.log(name[i])
//    }
var states = ["California", "New York", "Texas", "Florida", "North Carolina"];
var div = document.createElement("div")
document.body.append(div)

for (i = 0; i < states.length; i++) {var heading = document.createElement("h1")
div.append(heading)
heading.textContent = states[i]


heading.style.color = "cornflowerblue";
heading.style.fontFamily = "sans-serif";
heading.style.fontSize = "20px";
heading.style.fontWeight = "lighter";

//add new-class
heading.classList.add("border")
console.log(heading.className)

}