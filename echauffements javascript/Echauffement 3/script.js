//Vérifier que :
//l'identifiant saisi a plus de 4 caractères
//l'identifiant contient un @
//l'identifiant est "lea@gmail.com" et son mot de passe "12345"
function verif() {
	var mail=document.getElementById('mail').value;
	var mdp=document.getElementById('mdp').value;

	if (mail.length<=4) {
		alert('Votre email doit comporter plus de quatres caracteres')
	} else if (!mail.includes('@')) {
		alert('Votre e-mail doit contenir un @')
	} else if (mail!='lea@gmail.com') {
		alert('L\'email est inconnu, veuillez reessayer.')
	} else if (mdp!='12345') {
		alert('Erreur dans le mot de passe, veuillez reessayer')
	} else {
		alert('Vous êtes bien connecté.')
	}
}