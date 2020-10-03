//console.log("Hello from Javascript"); 
//nav starts here
var nav = document.createElement("nav")
document.body.append(nav)

var a1 = document.createElement("a")
a1.innerHTML = "Home"
nav.append(a1)

var a2 = document.createElement("a")
a2.innerHTML = "About"
nav.append(a2)

var a3 = document.createElement("a")
a3.innerHTML = "Contact"
nav.append(a3)

var h1 = document.createElement("h1")
 h1.innerHTML = "Here is my Javascript Website!"
 document.body.append(h1)
 
 var p = document.createElement("p")
 p.innerHTML = "Hello world!"
 document.body.append(p)


// OL starts here
var ul = document.createElement("ul")
document.body.append(ul)
 var li1 = document.createElement("li")
 li1.innerHTML = "<h3> Blue </h3>"
 ul.append(li1)

 var li2 = document.createElement("li")
 li2.innerHTML = "<h3> Green </h3>"
 ul.append(li2)

 var li3 = document.createElement("li")
 li3.innerHTML = "<h3> Purple </h3>"
 ul.append(li3)

 var footer = document.createElement("footer")
 footer.innerHTML = "This is a footer"
 document.body.append(footer)

 //For week 3
// var array = ["Blue", "Green", "Purple"]
// console.log(array.length)
// for (var index = 0; index < 6; index++) {
//     var li1 = document.createElement("li")
//     li1.textContent = array[index]
//     ul.append(li1)
// }