let loginDetails = JSON.parse(localStorage.getItem("loginDetails")) || [];
document.querySelector("#btn").addEventListener("click", () => {
  console.log("clicked");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let email = document.getElementById("email");
  if (username.value.trim() !== "" && password.value.trim() !== "" && email.value.trim() !== ""){
    let user = loginDetails.find(
      (user) => user.username === username.value.trim()
    );
    if (user) {
      if (user.password === password.value.trim()) {
        alert("User already exists, Please login to continue.");
        window.location.href = "login.html";
      } else {
        alert("Invalid Password");
      }
    } else if (!user) {
      loginDetails.push({
        username: username.value.trim(),
        password: password.value.trim(),
        email: email.value.trim(),
      });
      localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
      alert("User registered successfully, Please login to continue.");
      window.location.href = "login.html";
    }
  }
});
