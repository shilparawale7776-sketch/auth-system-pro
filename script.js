const container = document.getElementById("container");
const title = document.getElementById("title");
const desc = document.getElementById("desc");
const toastBox = document.getElementById("toast");

function toggle() {
  container.classList.toggle("active");

  if (container.classList.contains("active")) {
    title.innerText = "Hello 👋";
    desc.innerText = "Create account to start";
  } else {
    title.innerText = "Welcome Back 🔥";
    desc.innerText = "Login to continue";
  }
}

function toast(msg) {
  toastBox.innerText = msg;
  toastBox.classList.add("show");

  setTimeout(() => {
    toastBox.classList.remove("show");
  }, 2000);
}

function togglePass(id, icon) {
  const input = document.getElementById(id);

  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}