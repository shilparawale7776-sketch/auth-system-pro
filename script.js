const container = document.getElementById("container");
const toastBox = document.getElementById("toast");

const title = document.getElementById("title");
const desc = document.getElementById("desc");

/* ================= TOGGLE ================= */
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

/* ================= TOAST ================= */
function toast(msg) {
  toastBox.innerText = msg;
  toastBox.classList.add("show");

  setTimeout(() => {
    toastBox.classList.remove("show");
  }, 2000);
}

/* ================= PASSWORD TOGGLE ================= */
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

/* ================= REGISTER (CREATE ACCOUNT) ================= */
function register() {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const pass = document.getElementById("regPass").value.trim();
  const confirm = document.getElementById("confirmPass").value.trim();

  const nameErr = document.getElementById("nameErr");
  const passErr = document.getElementById("passErr");

  nameErr.innerText = "";
  passErr.innerText = "";

  if (!name || !email || !pass || !confirm) {
    toast("⚠️ Please fill all fields");
    return;
  }

  if (name.length < 3) {
    nameErr.innerText = "Name too short";
    return;
  }

  if (pass !== confirm) {
    passErr.innerText = "Passwords do not match";
    toast("❌ Password mismatch");
    return;
  }

  // 👉 SAVE ACCOUNT (FAKE DATABASE)
  const user = {
    name: name,
    email: email,
    password: pass
  };

  localStorage.setItem("user", JSON.stringify(user));

  toast("🎉 Account Created Successfully!");

  // clear fields
  document.getElementById("regName").value = "";
  document.getElementById("regEmail").value = "";
  document.getElementById("regPass").value = "";
  document.getElementById("confirmPass").value = "";

  // switch to login
  container.classList.remove("active");
  title.innerText = "Welcome Back 🔥";
  desc.innerText = "Login to continue";
}

/* ================= LOGIN (VERIFY ACCOUNT) ================= */
function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPass").value.trim();

  if (!email || !pass) {
    toast("⚠️ Please fill all fields");
    return;
  }

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    toast("❌ No account found! Please sign up first");
    return;
  }

  if (email === savedUser.email && pass === savedUser.password) {
    toast("🔥 Login Successful! Welcome " + savedUser.name);
  } else {
    toast("❌ Invalid email or password");
  }
}