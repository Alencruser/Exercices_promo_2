function conditions() {
	var input=document.getElementById('input').value;

	if (input.length<1) {
		alert('Votre nom doit comporter au moins une lettre.')
	} else if(input.length>10) {
		alert('Votre nom ne doit pas exceder 10 caractères')
	} else {
		alert('Bonjour ' + input + ' !')
	}
}