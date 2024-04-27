function togglePasswordVisibility(){
  var password=document.getElementById("password");
  var eye=document.getElementById("eye");
  if(password.type === "password"){
    password.type="text";
    eye.src="open.jpeg";
  }else{
    password.type="password";
    eye.src="close.jpeg";
  }
}