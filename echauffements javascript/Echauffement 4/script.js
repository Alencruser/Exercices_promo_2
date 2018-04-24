//e programme tire au hasard une opération ( + * - ) et deux chiffres
//Le programme demande le résultat de l'opération à l'utilisateur » ex : "combien font 4 * 7"
//Affiche si la réponse est juste ou fausse
function gimme() {
	var x=Math.floor(Math.random() * 10);
	var y=Math.floor(Math.random() * 10);
	var result=["*","+","-"];
	var index=result[Math.floor(Math.random()*result.length)];
	var resultat=(x+index+y);
	console.log(resultat);
	alert(resultat);
	var answer=document.getElementById('ans');

	function verify() {
	
	if (answer!=resultat) {
		alert('Malheureusement vous vous êtes trompé, ce n\'est pas grave, recommencez !')
	} else {
		alert('Bon resultat, vous êtes fort !')
	}
}
}
