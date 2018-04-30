function random(min, max){
     var number =0 + (9-0+1)*Math.random();
     return Math.floor(number);
}

function content(min, max) {
	var rand=random(min, max);
	var input;
	var response= 'Veuillez trouver le nombre mystere, il se situe entre 0 et 9';
  var i=0;
  
	console.log(rand);
  
   for (i=0;i<3;i++){

   input=prompt(response);

   if (input<rand)
    alert('Vous avez sous-estimé le nombre !');

  else if(input>rand)
   alert('Vous avez surestimé le nombre !');

  else {
    alert('Félicitations, vous avez trouvé le nombre mystère');
    i=4;
   }
 }
}


  