const form = document.querySelector('form');
// Input fields
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
// SMTP Email
function sendEmail() {
    const bodyMessage = `
    Full Name : ${fullName.value} <br>
    Email Id : ${email.value} <br>
    Message : ${message.value} `

    Email.send({
        SecureToken: "7cbad551-345e-4883-94a4-d7b945231314",
        To: 'testingphase745@gmail.com',
        From: "testingphase745@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == 'OK') {
                // Sweetalert 
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}
//Checking inputs
function checkInputs() {
    const inputs = document.querySelectorAll('.js-input');
    for (const input of inputs) {
        if (input.value == '') {
            //Adding error class if input field is empty
            input.parentElement.classList.add('error');
        }
        //Email Check
        if (inputs[1].value != '') {
            checkEmail();
        }
        inputs[1].addEventListener('keyup', () => {
            checkEmail();
        })

        input.addEventListener('keyup', () => {
            if (!input.value == '') {
                // Removing error class while typing any value in input fields
                input.parentElement.classList.remove('error');
            }
            else {
                // Adding error class while removing all value in input fields
                input.parentElement.classList.add('error');
            }
        })
    }
}
//Checking correct email format
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const emailErrorTxt = document.querySelector('.email-txt');
    if (!email.value.match(emailRegex)) {
        email.parentElement.classList.add('error')
        if (email.value != '') {
            // if email input field not empty and not match above criteria then show below error text
            emailErrorTxt.innerHTML = 'Enter valid email';
        }
        else {
            //if email field input is empty then show below error text
            emailErrorTxt.innerHTML = 'Email can\'t be empty';
        }
    }
    else {
        email.parentElement.classList.remove('error')
    }
}
// Form Submission
form.addEventListener('submit', (e) => {
    //Avoid reloading below code
    e.preventDefault();
    // Check inputs field
    checkInputs();
    // Chexk below condition to send email
    if (!fullName.parentElement.classList.contains('error') && !email.parentElement.classList.contains('error') && !subject.parentElement.classList.contains('error') && !message.parentElement.classList.contains('error')) {
        // Send email
        sendEmail();
        // Reset form 
        form.reset();
        return false;
    }
});

