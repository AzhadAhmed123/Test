document.getElementById("search").addEventListener("focus", function () {
  this.style.width = "300px"; // Adjust width as desired
});

document.getElementById("search").addEventListener("blur", function () {
  this.style.width = "100px"; // Revert back or keep expanded
});
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const textarea = document.getElementById("textarea").value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("number", number);
  localStorage.setItem("textarea", textarea);
  console.log(name);
  console.log(email);
  console.log(number);
  console.log(textarea);

  alert("Data saved in local storage!");
});

