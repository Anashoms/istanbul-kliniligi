/*
Template Name: Tijuana - Tzuchi Turkey
Author: Themesdesign
Website: https://themesdesign.in/
Contact: themesbrand@gmail.com
File: Form validation Js File
*/



// parsley validation
$(document).ready(function() {
	$('.custom-validation').parsley();
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
	  .forEach(function (form) {
		form.addEventListener('submit', function (event) {
		  if (!form.checkValidity()) {
			event.preventDefault()
			event.stopPropagation()
		  }
  
		  form.classList.add('was-validated')
		}, false)
	  })
  })()