/*
	author: Caio Souza.
    @description: Validating the login.
    @Latest changes: 12.01.2018 / 01:48. 
*/

function validateLogin()
{

	var user = document.login.user.value, password = document.login.password.value;
	user = user.toLowerCase();
	password = password.toLowerCase();

	if (user == "teste" && password == "teste") 
	{
		window.location = "homeView.html";
	}

	else
	{
		alert("Senha ou Usuário inválido.");
	}
}

