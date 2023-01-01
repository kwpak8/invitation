var num = 0;

function Setting(){
	var account1 = document.getElementById('account1');
	var account2 = document.getElementById('account2');
}

function AccountShow(num){
	Setting();

	if(num == 1)
	{
		account1.style.display = "block";
		account2.style.display = "none";
	}
	else if(num == 2)
	{
		account1.style.display = "none";
		account2.style.display = "block";	
	}
	else{
		account1.style.display = "none";
		account2.style.display = "none";	
	}
}

function CloseAll(){
	Setting();
	
	account1.style.display = "none";
	account2.style.display = "none";	
}