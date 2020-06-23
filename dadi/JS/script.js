// Lacio dei dadi
var cpuTot = 0;
var humanTot = 0;

btn.addEventListener("click" ,function() {
  var dadoHuman = 0;
  var dadoCPU = 0;
  var humanWins = 0;
  var cpuWins = 0;

// Lacio Contemporanemte i dadi 5 volte!
  for (var i = 0; i < 5; i++) {
    dadoHuman = Math.floor(Math.random()* 6 + 1);
    dadoCPU = Math.floor(Math.random()* 6 + 1);

    if(dadoHuman > dadoCPU) {
      console.log("Vince dado umano");
      humanWins += 1;
    }  else if (dadoHuman < dadoCPU) {
      console.log("Vince dado CPU");
      cpuWins += 1;
    }
    else{
      console.log("Pareggio!");
    }
  }

// Stampo a schermo il risultato del totale delle vittorie
  if (humanWins > cpuWins) {
    alert("Il dado umano ha vinto " + humanWins + " a " + cpuWins);
    humanTot += 1;
    document.getElementById('risUman').innerHTML = "Punteggio totale dado Umano: " + humanTot;
  }  else if (humanWins < cpuWins) {
    alert("Il dado CPU ha vinto " + cpuWins + " a " + humanWins);
    cpuTot += 1;
    document.getElementById('risCPU').innerHTML = "Punteggio totale dado CPU: " + cpuTot;
  }
  else{
    alert("Un bel pareggio!");
  }

// In caso di vittoria conclusiva!
  if (humanTot >= 5) {
    alert ("L'Umano vince!");
    location.reload();
  } else if (cpuTot >= 5) {
    alert ("Vince la CPU!");
    location.reload();
  }
});
