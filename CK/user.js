// lấy phần Modal
var modal = document.querySelector(".login2");

// Lấy phần button mở Modal
var btn = document.querySelector(".login");

// Lấy phần span đóng Modal
var span = document.querySelector(".con");

// Khi button được click thi mở Modal
btn.onclick = function () {
  modal.style.display = "block";
};
// Khi span được click thì đóng Modal
span.onclick = function () {
  modal.style.display = "none";
};

// Khi click ngoài Modal thì đóng Modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//thông tin
const nam = document.getElementById("name");
const email = document.getElementById("email");
const sdt = document.getElementById("sdt");
const username = document.querySelector(".username");
const useremail = document.querySelector(".txt");
const usersdt = document.querySelector(".about-me");
const user = document.querySelector(".user-card");
document.getElementById("btn").onclick = function () {
  username.textContent = nam.value;
  usersdt.textContent = sdt.value;
  useremail.textContent = email.value;
  return false;
};
//đóng modal
window.ondblclick = function (event) {
  if (event.target == document.getElementById("btn")) {
    modal.style.display = "none";
  }
};
//đóng user
window.onclick = function (event) {
  if (event.target == document.querySelector(".contact")) {
    user.style.display = "none";
  }
};
//đóng login
document.getElementById("btn").ondblclick = function () {
  user.style.display = "block";
};
// thanh tác vụ
const getBtn = document.querySelector(".con1");
const getApp = document.querySelector("#app-sidebar");
getBtn.addEventListener("click", () => {
  getApp.classList.toggle("show");
});

// trả dữ liệu
const nameusercontent = () => {
  let getWeather = document.querySelector(".con");
  let getContact = document.querySelector(".contact");
  getContact.addEventListener("click", () => {
    getWeather.textContent = nam.value;
    document.getElementById("nameuser").textContent = nam.value;
  });
};
nameusercontent();


