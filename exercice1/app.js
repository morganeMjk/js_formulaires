const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const telInput = document.getElementById("telInput");
    const passwordInput = document.getElementById("passwordInput");

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        tel: telInput.value,
        password: passwordInput.value,
    };

    const errors = {
        name: false,
        email: false,
        tel: false,
        password: false
    };

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const telError = document.getElementById('telError');
    const passwordError = document.getElementById('passwordError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    telError.style.display = 'none';
    passwordError.style.display = 'none';


    if (!formData.name || !formData.email || !formData.tel || !formData.password) {

        const nameRegex = /'#^[A-Z][A-Za-z\é\è\ê\-]+$'/;
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

        if (!formData.name || !nameRegex.test(formData.name)){
            errors.name = true;
            nameError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)){
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.tel || !telRegex.test(formData.tel)){
            errors.tel = true;
            telError.style.display = 'block';
        }
        if (!formData.password || !passwordRegex.test(formData.password)){
            errors.password = true;
            passwordError.style.display = 'block';
        }
    }

    if (!Object.values(errors).includes(true)) {
        console.log(formData)
        contactForm.reset();
    }
})