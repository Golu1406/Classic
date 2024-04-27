function togglePasswordVisibility(){
  var passwordInput=document.getElementById("passwordInput");
  var eyeIcon=document.getElementById("eyeIcon");
  if(passwordInput.type === "password"){
    passwordInput.type="text";
    eyeIcon.src="open.jpeg";
  }else{
    passwordInput.type="password";
    eyeIcon.src="close.jpeg";
  }
}