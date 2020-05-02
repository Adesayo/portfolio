function validateForm(){

var name=document.getElementById('name').value;
var number=document.getElementById('number').value;
var email=document.getElementById('email').value;
var message=document.getElementById('message').value;


  if(name=="" || number=="" || email=="" || message=="")
  {
document.getElementById('result').innerHTML="All fields required!";
return false;
}

if(isNaN(number) ||number.lenght < 11 ||number.lenght > 11 ){
  document.getElementById('result').innerHTML="Enter a valid phone number!";
  return false;
}

if(email.indexOf("@") == -1 ||email.lenght < 9 ){
  document.getElementById('result').innerHTML="Enter a valid email address!";
  return false;
}
else{
  alert("Form submitted successfully");
  return true;
}




}















//
