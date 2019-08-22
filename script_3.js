// on demande un nombre d'étages à l'utilisateur et on la stocke dans une variable "n"
n = prompt("Bienvenue dans ma super pyramide ! Combien d'étages souhaites tu ?")

// on définit la fonction pour créer la demie-pyramide avec comme argument "n"

function halfPyramid (n) {
  
  	for (var i = 1; i <= n; i++) {
   	  var row = '';
    
    for (var j = 1; j <= (n - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '#';
    }
    
    console.log(row);
  }
}

//on appelle la fonction halfPyramid
halfPyramid(n);
