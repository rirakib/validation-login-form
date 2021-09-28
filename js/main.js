const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function validateForm() {
	let username = document.forms["form"]["username"].value;
	if (username == "") {
	  alert("username must be filled out");
	  return false;
	}
	else if(username.length < 5){
		alert('Username minimum 5 carechter');
		return false;
	}

	let password = document.forms["form"]["password"].value;
	if (password == "") {
	  alert("Password must be filled out");
	  return false;
	}
	else if(password.length < 6){
		alert('Password minimum 6 carechter');
		return false;
	}


  }
