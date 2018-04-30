function calculatrice() {
	var fnumb=parseInt(prompt('Veuillez entrer votre premier nombre'),10);
	console.log(fnumb);
	var operator=prompt('Veuillez entrer votre opérateur');
	var snumb=parseInt(prompt('Veuillez entrer votre deuxième nombre'),10);
	console.log(snumb);

	 if (operator=="+"){
		alert (fnumb+snumb);
	} else if (operator =="-"){
		alert (fnumb-snumb);
	} else if (operator=="*"){
		alert (fnumb*snumb);
	} else if (operator=="/"){
		alert (fnumb/snumb);
	}
}
