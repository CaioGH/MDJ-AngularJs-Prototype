//const MY_CONST = 2; //Constante
//var a = 5; //Variável
//a = 5 //Global
// window.a = 5 //Global [otimizada]

/* Cálculo IMC 

var massa = 65,
	altura = 1.7,
	imc = massa / (altura ** 2);

*/


/*
var  n1 = 1,
     n2 = 2;

	if(n1 > n2)
	{
		console.log('o numero' + n1 + ' é maior');
	}

	if(n1 < n2)

	{
		console.log('o numero' + n2 + ' é maior');
	}

	switch(n1 < n2){
		case 1: console.log('ok'); break;
		default: console.log('nenhuma opção');
	

	*/


/* Verificar se é par ou ímpar.

	var n1 = 426;

	switch(n1%=2){
		case 0: console.log('o numero é par'); break;
		case 1: console.log('o numero é impar'); break;
	}
		
*/

/*
var letra = 'e';

 switch(letra){
           case 'a': console.log('é vogal'); break;
           case 'e': console.log('é vogal'); break;
           case 'i': console.log('é vogal'); break;
           case 'o': console.log('é vogal'); break;
           case 'u': console.log('é vogal'); break;
           case default: console.log('é consoante'); break;
       }
*/

       /*break : para o laço de repetição / continue : pula a etf

*/

/*
for(var i = 0; i <= 10; i++)
{
	var line = '';
		for(var j = 0; j < i; j++){
			line += '*';
		}
		console.log(line);
}
*/

/*setTimeOut(function (){
	console.log('abc');
}, 2000); //2 segundos

/*
Arrow Function:

setTimeOut(() => {
	console.log('def')
},1000);

*/

/*
//Função para arredondar números: Math.round(5.2).
 Declarar função: 
  
  function sum(){
	
  }

  chamar: sum()


declarar uma variável como função: var sum = function (x,y);
*/ 

/*
var meuObjeto = {
	length: '15cm',
	 color: 'yellow',
	 write: function(){
	 	console.log('hello');
	 }
}

meuObjeto.write();
*/

/*
var meuArray = [5,2,12];

//Pegar ultimo elemento: meuArray[meuArray.length - 1]

*/


/*

"For each"

var array = [1,2,5];

 for(var a in array){
	console.log(array[a]);
 }



