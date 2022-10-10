
let signaturePad = new SignaturePad(document.getElementById('signature-pad'));
const email = document.getElementById("email");
const myForm = document.getElementById('district-form');
myForm.noValidate = true;
myform.addEventListener('submit', validateForm);


$(document).ready(function(){
    $('sign').sign({
        resetButton: $('#resetSign'),
        lineWidth: 5,
        width: 600,
        height: 400
    })
})


email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address (e.g. you@example.com)");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

function validateForm(e) {
    const form = e.target;
    if (form.checkValidity()) {
      // form is valid - make further checks
    }
    else {
      // form is invalid - cancel submit
      e.preventDefault();
      // apply invalid class
      Array.from(form.elements).forEach(i => {
        if (i.checkValidity()) {
          // field is valid - remove class
          i.parentElement.classList.remove('invalid');
        }
        else {
          // field is invalid - add class
          i.parentElement.classList.add('invalid');
        }
      });
    }
  };