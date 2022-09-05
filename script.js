
let signaturePad = new SignaturePad(document.getElementById('signature-pad'));


$(document).ready(function(){
    $('sign').sign({
        resetButton: $('#resetSign'),
        lineWidth: 5,
        width: 600,
        height: 400
    })
})