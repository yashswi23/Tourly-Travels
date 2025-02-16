function registerUser(event) {
  event.preventDefault(); // Prevent form from refreshing
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmpassword').value.trim();
  const mobile = document.getElementById('phone').value.trim();

  // Validate fields
  if (!name || !email || !password || !confirmPassword || !mobile) {
      document.getElementById('message').innerText = "All fields are required!";
      return;
  }
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById('message').innerText = "Invalid email format!";
      return;
  }
  
  if (password.length < 6) {
      document.getElementById('message').innerText = "Password must be at least 6 characters long!";
      return;
  }

  if (password !== confirmPassword) {
      document.getElementById('message').innerText = "Passwords do not match!";
      return;
  }

  const mobilePattern = /^\d{10}$/;
  if (!mobilePattern.test(mobile)) {
      document.getElementById('message').innerText = "Mobile number must be 10 digits!";
      return;
  }

  // Fetch the current user data
  fetch("http://localhost:3000/users")
      .then(response => response.json())
      .then(users => {
          let existingUser = users.find(user => user.email === email);
          if (existingUser) {
              document.getElementById('message').innerText = "User with this email already exists!";
              return;
          } else {
              let newUser = { name, email, password, mobile };

              return fetch("http://localhost:3000/users", {
                  method: "POST",
                  body: JSON.stringify(newUser), //conevrt js to json
                  headers: { "Content-Type": "application/json" }
              });
          }
      })
      .then(response => {
          if (response && response.status === 201) {
              alert("User registered successfully!");
              window.location.href = "login.html"; // Redirect to login page after registration
          }
      })
      .catch(error => {
          document.getElementById('message').innerText = "Error: " + error;
      });
}

function loginUser(event) {
  event.preventDefault(); // Prevent form from refreshing

  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Validate fields
  if (!email || !password) { 
      document.getElementById('message').innerText = "Email and password are required!";
      return;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById('message').innerText = "Invalid email format!";
      return;
  }

  // Fetch the current user data
  fetch("http://localhost:3000/users")
      .then(response => {
          if (!response.ok) {
              throw new Error("Network response was not ok: " + response.statusText);
          }
          return response.json();
      })
      .then(users => {
          const user = users.find(user => user.email === email && user.password === password);
          if (user) {
              alert("Login successful");
              localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user in local storage
              window.location.href = "../home.html"; // Redirect to home page
          } else {
              document.getElementById('message').innerText = "Invalid email or password!";
          }
      })
      .catch(error => {
          document.getElementById('message').innerText = "Error: " + error;
      });
}
