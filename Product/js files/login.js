let loginDetails = JSON.parse(localStorage.getItem("loginDetails")) || [];
document.querySelector("#btn").addEventListener("click", () => {
    console.log("clicked");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if (
    username.value.trim() !== "" &&
    password.value.trim() !== ""
  ){
    let user = loginDetails.find((user) => user.username === username.value.trim());
    if(user){
      if(user.password === password.value.trim()){
        window.location.href = "homePage.html";
      }else{
        alert("Invalid Password");
      }
    } else if(!user){
      alert("User not found, Please register first");
      window.location.href = "signUp.html";
    }
  } else {
    alert("Please enter username and password");
  }
});