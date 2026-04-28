body {
  margin: 0;
  font-family: Arial;
  background: linear-gradient(to right, #141e30, #243b55);
  color: white;
}

.container {
  text-align: center;
  padding: 30px;
}

/* HEADER CARD */
.header-card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  margin: auto;
  margin-bottom: 30px;
  backdrop-filter: blur(10px);
}

.header-card h1 {
  margin-bottom: 10px;
}

/* BUTTONS */
button {
  padding: 12px 25px;
  margin: 15px;
  cursor: pointer;
  background: #ff4c4c;
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
}

/* DROPDOWN */
.dropdown {
  display: none;
  flex-direction: column;
  align-items: center;
}

.dropdown a {
  display: block;
  padding: 10px;
  width: 250px;
  margin: 5px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  color: white;
  text-decoration: none;
}

.dropdown a:hover {
  background: #ff4c4c;
}
