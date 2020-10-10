

//  var h1 = document.createElement("h1");
//  h1.textContent = ("Hello World");
//  document.body.append(h1)

// var firstName = ["Steve" ,"Larry" , "Joe" , "Shirley" , "Steph" , "Nate" , "Rick" , "Emily"
//     ];

//  var ul = document.createElement("ul")
//  document.body.append(ul)
//  var li = document.createElement("li")
//  li.textContent = name[0]
//   ul.append(li)


//  for (var i = 0; i < 10; i++){
//   var h1 = document.createElement("h1");
//    h1.textContent = ("Hello World");
//    document.body.append(h1)
//    console.log(i)
//    console.log(name[i])
//  }
// console.log(typeof name)

 for (var index = 0; index < 8; index++) {
   console.log(index)
  console.log(name)
  var flower = document.createElement("h1");
  flower.textContent = name[index]
  document.body.append(flower)
 }