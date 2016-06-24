var vetor = new Array ();
var i, proximo;

for (i = 1; i <= 10; i++) {
proximo = vetor.length;


vetor[proximo] = i;

}

for (i=0; i<vetor.length; i++) {

document.write(vetor[i] + "<BR>");

}