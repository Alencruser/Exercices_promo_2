//Le programme demande la couleur du cheval blanc d'Henri 4, puis combien y a-t-il de 7 nains ?
	

function fq() {
	alert('Quelle est la couleur du cheval Blanc d\'Henri 4 ?')
}

function sq() {

	var answer=document.getElementById('input').value;

	if(answer != 'blanc') {
		alert('Mauvaise reponse, veuillez recommencer.')
	}
	else {
		alert('Félicitation, voici la deuxième question : Combien y a t-il de 7 nains ?')
	}
}
function ans() {

	var answer=document.getElementById('input').value;

	if (answer != '7') {
		alert('Vous y êtes presque ! Un petit effort')
	}
	else {
		alert('Bravo, vous n\'avez rien gagne si ce n\'est la satisfaction d\'avoir fini !')
	}
}