console.log("Hello from Javascript");

var ul = document.createElement("ul")
document.body.append(ul)

var li1 = document.createElement("li1")
li1.innerHTML = "<h2> Blue </h2>"
ul.append(li1)

var li2 = document.createElement("li2")
li2.innerHTML = "<h1> Green </h1>"
ul.append(li2)

var li3 = document.createElement("li")
li3.innerHTML = "<h2> Purple </h2>"
ul.append(li3)
var array = ["Blue", "Green", "Purple"]
console.log(array.length)
for (var index = 0; index < 6; index++) {
    var li1 = document.createElement("li")
    li1.textContent = array[index]
    ul.append(li1)
}

/*<nav><a>HOME</a><a>ABOUT</a><a>CONTACT</a></nav>
    <h1>hi</h1>
    <p>description</p>
    <ol>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
    <ol></ol>*/
    
    var nav = document.createElement("nav")
    document.body.append(nav)

    var a1 = document.createElement = ("a")
    a1.innerHTML = "<h1> blue </h1>"
    nav.append(a1)

    var a2 = document.createElement = ("a")
    a1.innerHTML = "<h1> blue </h1>"
    nav.append(a1)

    var a3 = document.createElement = ("a")
    a1.innerHTML = "<h1> blue </h1>"
    nav.append(a1)

    nav.style.display 