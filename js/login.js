// step 1 : Add click handler with the submit button.

document.getElementById('btn-submit').addEventListener(
    'click', function(){
        // step-2 : get the email address inside the email input field.
        // Always remember to use .value to get text from an input field.
        const emailField = document.getElementById('user-email')
        const email = emailField.value;
        // step -3 : get password
        // 3.a : set ID on the html element.
        // 3.b : get the element.
        // 3.c : get the value from the element.
        const passwordField = document.getElementById('user-password')
        const password = passwordField.value;
        // console.log(email, password)

        // DANGER : DO NOT VERIFY email password on the client side
        // Step-4 : Verify email and password.
        if (email === 'sontan@baap.com' && password === 'secret' ){
            window.location.href = 'bank.html';
        }
        else{
            alert('Mara Kha')
        }
    }
)