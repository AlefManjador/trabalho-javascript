var numeros;

  // vamos usar o laço for para percorrer todos os elementos
  // da matriz
  for(numeros = 1; numeros<=80; numeros++){
    // vamos exibir o valor do elemento atual
    if (numeros%3 && numeros%6) {
    	console.log(numeros + "*")

    }
    else  { 
    	console.log (numeros + "***")
	}
  } 