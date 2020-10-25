  function display()
{
var a = document.myForm.fname.value;
var b = document.myForm.lname.value;
var c = document.myForm.age.value;
var d = document.myForm.gender.value;
var e = document.myForm.location.value;

var items=document.getElementsByName("diet");
console.log(document.getElementsByName("diet"))
var food = ""
for(var i = 0; i< document.getElementsByName("diet").length; i++){
	console.log(document.getElementsByName("diet")[i].checked)
	if(document.getElementsByName("diet")[i].checked){

		 food+=document.getElementsByName("diet")[i].value+" "
	}
}
console.log(food)
alert("First name: "+a+"\n "+"Last name: "+b+"\n  "+"Age: "+c+" \n"+"Gender: "+d+" \n "+"Location: "+e+"\n "+"Diet: "+food);
}

const form = document.myForm

 form.addEventListener("submit", (event) => {
	 event.preventDefault()
	display()
 })   
