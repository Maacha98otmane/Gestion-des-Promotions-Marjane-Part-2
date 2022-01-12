//check input
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

//
import RR from "../classes/Rayon.js";
const formlg = document.getElementById('formlg')
window.addEventListener('DOMContentLoaded', () => {
	formlg.addEventListener('submit', async (e) => {
		e.preventDefault();
		let login = await RR.loginRR(formlg.email.value, formlg.password.value)
		console.log(login)
		if (login.status == true) {
			document.cookie = "RR=" + login.token,
				location.replace('/view/rayon/Promo.html')
		} else {
			console.log("Email or password are incorrect")
		}
	})
})