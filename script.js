const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function validation()
{
	var phone=document.forms['frmname']['mobile no'];
	if(isNaN(phone.value) || phone.value.length!=10)
	{
		alert('invalid phone number');
		return false;
	}
	return true;
}
$('#userPassword').keyup(function() {
	var password = $('#userPassword').val();
  
	var pattern = /^[a-zA-Z0-9- ]*$/;
  
	var lengthValidationMessage = $('#length');
	var ucVM = $('#upperCase');
	var lcVM = $('#lowerCase');
	var nbVM = $('#number');
	var scVM = $('#specialCharacter');
  
	if (password === '') {
	  ucVM.removeClass('invalid').removeClass('valid');
	  lcVM.removeClass('invalid').removeClass('valid');
	  lengthValidationMessage.removeClass('invalid').removeClass('valid');
	  nbVM.removeClass('invalid').removeClass('valid');
	  scVM.removeClass('invalid').removeClass('valid');
  
	  return false;
	}
  
	//length Validation
	if (!IsLengthValid(password)) {
	  lengthValidationMessage.removeClass('valid').addClass('invalid');
	} else
	  lengthValidationMessage.removeClass('invalid').addClass('valid');
  
	//upperCase Validation
	if (!IsUpperCaseValid(password))
	  ucVM.removeClass('valid').addClass('invalid');
	else
	  ucVM.removeClass('invalid').addClass('valid');
  
	//lowerCase Validation
	if (!IsLowerCaseValid(password))
	  lcVM.removeClass('valid').addClass('invalid');
	else
	  lcVM.removeClass('invalid').addClass('valid');
  
	//numbers Validation
	if (!IsNumberValid(password))
	  nbVM.removeClass('valid').addClass('invalid');
	else
	  nbVM.removeClass('invalid').addClass('valid');

  });
  
  function IsLengthValid(password) {
	if (password.length >= 8) {
	  return true;
	} else
	  return false;
  }
  
  function IsUpperCaseValid(password) {
	var upperCase = new RegExp('[A-Z]');
  
	if (!password.match(upperCase))
	  return false;
	else
	  return true;
  }
  
  function IsLowerCaseValid(password) {
	var lowerCase = new RegExp('[a-z]');
  
	if (!password.match(lowerCase))
	  return false;
	else
	  return true;
  }
  
  function IsNumberValid(password) {
	var numbers = new RegExp('[0-9]');
  
	if (!password.match(numbers))
	  return false;
	else
	  return true;
  }
  