var a = prompt("Digite seu salario: ");
var b = 0.08;
var c = 0.09;
var d = 0.11;

liquido=a-b;
liquido2=a-c;
liquido3=a-d;


if(a<1555.94) {
	document.write("Seu salario liquido com desconto de 0.08% de INSS é : "+liquido);
}
else if (a>1555.84 && a<2592.92) {
	document.write("Seu salario liquido com desconto de 0.09% de INSS é : " +liquido2);
}
else if (a>2592.92 && a<5189.82) {
	document.write("Seu salario liquido  com desconto de 0.11% de INSS é : "+liquido3);
}