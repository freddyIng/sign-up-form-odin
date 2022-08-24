const createAccountBtn=document.getElementById("create-account-btn");
createAccountBtn.addEventListener('click', () => {
	const password=document.getElementById("password"), confirmPassword=document.getElementById('confirm-password');
	if (password.value!==confirmPassword.value){
    	password.className="error";
    	confirmPassword.className="error";
    	let error=document.createElement('p');
    	error.textContent="*Password do not match";
    	error.style.color="red";
    	let form=document.querySelector('form');
    	form.append(error);
    	setTimeout(() =>{
          password.className="";
          confirmPassword.className="";
          form.removeChild(form.lastChild);
    	}, 1000);
	}
});