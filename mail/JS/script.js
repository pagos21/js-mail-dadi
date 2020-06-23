// Creo array
notaDB = ["johnwick@continental.org", "bob@crypto.com", "alice@crypto.com"];

// on click
btn.addEventListener("click", function() {
  email = document.getElementById("userEmail").value;

  if (notaDB.includes(email)) {
    alert("Bentornato:\n" + email);
  }
  else{
    alert("Ma chi sei?\nEffettua la registrazione!");
  }
});

// ALT 
var founded = false;
for (var i = 0; i < notaDB.length; i++) {
  if (mail == notaDB[i]) {
    founded = true;
  }
}

if (founded == true) {
    console.log("SI!");
}
else if (founded == false) {
  console.log("No!");
}
