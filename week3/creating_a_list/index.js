

 var h1 = document.createElement("h1");
 h1.textContent = ("Hello World");
 document.body.append(h1)
 h1.style.color = "blue";
 h1.style.fontFamily = "Arial";
 h1.style.fontSize = "50px";
 h1.style.backgroundColor = "red";
 
var firstName = [`Steve` ,`Larry` , `Joe` , `Shirley` , `Steph` , `Nate` , `Rick` , `Emily`
    ];
//     var firstName = [0, 1]
// console.log(firstName)
//  var ul = document.createElement("ul")
//  document.body.append(ul)
//  var li = document.createElement("li")
//  li.textContent = firstName[0]
//   ul.append(li)


 for (var i = 0; i < 10; i++){
  var h1 = document.createElement("h1");
   h1.textContent = ("Hello World");
   document.body.append(h1)
   console.log(i)
   console.log(firstName[i])
 }
console.log(typeof firstName)


 for (index = 0; index < 8; index++) {
   console.log(index)
  console.log(firstName)
  var flower = document.createElement("h1");
  flower.textContent = firstName[index]
  document.body.append(flower)
 }