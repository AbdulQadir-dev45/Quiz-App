function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

/* =========================
   SIGNUP FUNCTION
========================= */
function signup() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  if (!name || !email || !password || !confirm) {
    alert("All fields are required");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  if (password !== confirm) {
    alert("Passwords do not match");
    return;
  }

  // Save user to localStorage
  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}

/* =========================
   LOGIN FUNCTION
========================= */
function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No account found. Please sign up first.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", storedUser.name);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}

/* =========================
   SHOW USERNAME IN HEADER
========================= */
function showUsername() {
  const userSpan = document.getElementById("user-name");
  const username = localStorage.getItem("username");

  if (userSpan && username) {
    userSpan.innerText = `Welcome, ${username}`;
  }
}

/* =========================
   PAGE PROTECTION (OPTIONAL)
========================= */
function protectPage() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
  }
}

/* =========================
   AUTO RUN ON PAGE LOAD
========================= */
document.addEventListener("DOMContentLoaded", () => {
  showUsername();
});


document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("username");

  const userSpan = document.getElementById("user-name");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  if (user) {
    userSpan.innerText = `Welcome, ${user}`;
    loginBtn.style.display = "none";
    signupBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
  } else {
    logoutBtn.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.onclick = () => {
      localStorage.clear();
      location.href = "login.html";
    };
  }
});