function submitBtn() {
    validateFirst();
    validateLastName();
    validateEmail();
    validateUsername();
    validatePassword();
    validateDOB();
    validatePhone();
    validateAmount();
    validateYear();
};

function validateFirst() {
    const firstEl = document.getElementById('First-Name');
    const pat = /^[A-Za-z]{1,}$/;
    if (!pat.test(firstEl.value)) {
        alert('Enter correct First Name.');
        firstEl.focus();
    }
    if(firstEl.value==""){
        alert("Enter First Name");
    }


}

function validateLastName() {
    const lastEl = document.getElementById('Last-Name');
    const pat = /^[A-za-z]{1,}$/;
    if (!pat.test(lastEl.value)) {
        window.alert('Enter correct Last Name.');
        lastEl.focus();
    }
    if(lastEl.value==""){
        window.alert('Enter Last Name.');
        lastEl.focus();
    }
}

function validateEmail() {
    const emailEl = document.getElementById('E-mail');
    const pat = /^[0-9a-zA-Z]+@gmail.com$/;
    if(emailEl.value==""){
        window.alert('Enter E-mail.');
        emailEl.focus();
    }
    if (!pat.test(emailEl.value)) {
        window.alert('Wrong E-mail entered. E-mail type: xxx@gmail.com');
        emailEl.focus();
    }
}

function validateDOB() {
    const dobEl = document.getElementById('Date-Of-Birth');
    const pat = /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/;
    if (!pat.test(dobEl.value)) {
        window.alert('Enter correct DOB.');
    }
}

function validatePhone() {
    const phoneEl = document.getElementById('Phone');
    const pat = /^[6-9]{1}[0-9]{9}$/;
    if (!pat.test(phoneEl.value)) {
        window.alert('Wrong Phone entered. Enter correct Phone Number.');
    }
    const p=document.getElementById('Phone').value;
    const p1=parseInt(p);
    if(p1.length!=10){
        window.alert('Enter 10 digit Phone Number.');
    }
}

function validateUsername() {
    const usernameEl = document.getElementById('Username');
    const pat = /^[_a-zA-Z0-9]{8,}$/;
    if (!pat.test(usernameEl.value)) {
        window.alert('Wrong Username entered. Enter correct Usernamer.');
    }
}


function validatePassword() {
    const passwordEl = document.getElementById('Password');
    if (passwordEl.value.length == 0) {
        window.alert('Enter Password.');
    }
    if(passwordEl.value.length<8){
        window.alert('Password must be 8 characters long.');
    }
}

function validateAmount() {
    const amountEl = document.getElementById('Insurance-Amount');
    const pat = /^[0-9]{4,}$/;
    if (!pat.test(amountEl.value)) {
        window.alert('Enter correct Amount Number.');
    }
}


function validateYear() {
    const yearEl = document.getElementById('Year');
    const pat = /^[1-3][0-9]{1}$/;
    if (!pat.test(yearEl.value)) {
        window.alert('Enter correct year.');
    }
}