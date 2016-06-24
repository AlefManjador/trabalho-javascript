var numero = prompt("Digite um numero inteiro: ");
var resto; 
var soma=0;

        while (numero>0)
        {
        resto=numero%10;
        numero=(numero-resto)/10;
        soma=soma+resto;
        }

document.write("O somatório é "+soma);

/*05/08/1995 ,5 cep ,4 ultimo cartao*/