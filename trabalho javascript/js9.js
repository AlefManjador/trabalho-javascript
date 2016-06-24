var a = prompt("Digite o primeiro numero: ");
var b = prompt("Digite o segundo numero: ");
var c = b-1;
var d = a -1;

for (var i =d+2; i<b; i++) {
	document.write(i+ "<br>");
}


for(var i=c+2;i<a; i++) {
		
document.write(i + "<br>");
	
}

/*aqui pra baixo estão os codigos que tentei fazer e deram erro, 
então  depos de muita luta,consegui fazer um ajuste tecnico avançado ou ,GAMBIARRA, com dois laços FOR*/

/*for(var i=b;i<a; i++) {
		
document.write(i + "<br>");
	
}	*/
/*if (a<b){

menor=a;
maior=b;


}else {
	menor=b;
	maior=a;
}

	
	for(var i=menor;i<maior; i++) {
		
document.write(i + "<br>");
	
	}*/

/*if (a<b) {

	for ( var i=a; i>b; i++) {
		document.write(i);

	}
}else {
	for (var i=a; i<b; i--) {
		document.write(i);
	}
}*/