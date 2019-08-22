//On crée un champ de remplissage pour l'utilisateur
let phrase = prompt("Service après-vente bonjour, que veux-tu?");

//Si la phrase se termine par un "?"
if (phrase.endsWith("?")) 
  console.log("Ouais Ouais..."); //On affiche ce message dans la console

//Si la phrase est en majuscule, et n'est pas vide de caractères
else if (phrase === phrase.toUpperCase() && phrase.trim() != "") 
	console.log("Pwa, calme-toi..."); //On affiche ce message dans la console

//Si l'utilisateur utilise le mot Fortnite, quelque soit sa façon de l'écrire ("Fortnite", "fORtnite", "fortnite" etc)
else if (phrase.toLowerCase().includes("fortnite"))
	console.log("On s'fait une partie soum-soum ?"); //On affiche ce message dans la console

//Si l'utilisateur envoie un message vide (même si l'utilisateur s'amuse à taper des espaces vides)
else if (phrase.trim() === "" ) 
 	console.log("t'es en PLS ?"); //On affiche ce message dans la console

else
// Pour tout le reste, y'a j'men balek
	console.log("Balek..."); //On affiche ce message dans la console

