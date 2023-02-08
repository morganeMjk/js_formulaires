const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {

	event.preventDefault();

    const nameInput = document.getElementById('nameInput');
    const numberInput = document.getElementById('numberInput');
    const roadInput = document.getElementById('roadInput');
    const zipCodeInput = document.getElementById('zipCodeInput');
    const cityInput = document.getElementById('cityInput');
    const telInput = document.getElementById('telInput');
    const sizeSelect = document.getElementById('sizeSelect');
    const sauceSelect = document.getElementById('sauceSelect');



    const formData = {
        name: nameInput.value,
        number: numberInput.value,
        road: roadInput.value,
        zipCode: zipCodeInput.value,
        city: cityInput.value,
        tel: telInput.value,
        size: sizeSelect.value,
        sauce: sauceSelect.value
    };

    const errors = {
        name: false,
        number: false,
        road: false,
        zipCode: false,
        city: false,
        tel: false,
        size: false,
        sauce: false,
    };

    const nameError = document.getElementById('nameError');
    const numberError = document.getElementById('numberError');
    const roadError = document.getElementById('roadError');
    const zipCodeError = document.getElementById('zipCodeError');
    const cityError = document.getElementById('cityError');
    const telError = document.getElementById('telError');
    const sizeError = document.getElementById('sizeError');
    const sauceError = document.getElementById('sauceError');

    nameError.style.display = 'none';
    numberError.style.display = 'none';
    roadError.style.display = 'none';
    zipCodeError.style.display = 'none';
    cityError.style.display = 'none';
    telError.style.display = 'none';
    sizeError.style.display = 'none';
    sauceError.style.display = 'none';

    const nameRegex = /^[a-zA-Z ]+$/;
    const numberRegex = /[0-9]/;
    const zipCodeRegex = /^(([0-95]{2}|2A|2B)[0-9]{3})$|^[971-974]$/;
    const telRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    
    if (!formData.name || !nameRegex.test(formData.name)) {
        errors.name = true;
        nameError.style.display = 'block';
        nameInput.focus();
    }
    if (!formData.number || !numberRegex.test(formData.number)) {
        errors.number = true;
        numberError.style.display = 'block';
        numberInput.focus();
    }
    if (!formData.road || !nameRegex.test(formData.road)) {
        errors.road = true;
        roadError.style.display = 'block';
        roadInput.focus();
    }
    if (!formData.zipCode || !zipCodeRegex.test(formData.zipCode)) {
        errors.zipCode = true;
        zipCodeError.style.display = 'block';
        zipCodeInput.focus();
    }
    if (!formData.city || !nameRegex.test(formData.city)) {
        errors.city = true;
        cityError.style.display = 'block';
        cityInput.focus();
    }
    if (!formData.tel || !telRegex.test(formData.tel)) {
        errors.tel = true;
        telError.style.display = 'block';
        telInput.focus();
    }


    if (sizeSelect.value == " ") {
        errors.size = true;
        sizeError.style.display = 'block';
        sizeSelect.focus();
    }
        
    if (sauceSelect.value == " ") {
        errors.sauce = true;
        sauceError.style.display = 'block';
        sauceSelect.focus();
    }


    let price = 0;

    if (sizeSelect.value == "small") {
        price += 3;
    }
    if (sizeSelect.value == "medium") {
        price += 4;
    }
    if (sizeSelect.value == "large") {
        price += 5;
    }

    if (sauceSelect.value == "sauce tomate" || sauceSelect.value =="creme fraiche") {
        price += 0.5;
    }


    const jambon = document.getElementById('jambon');
    const chorizo = document.getElementById('chorizo');
    const hachee = document.getElementById('hachee');
    const lardons = document.getElementById('lardons');
    const bacon = document.getElementById('bacon');
    const merguez = document.getElementById('merguez');
    const mozza = document.getElementById('mozza');
    const emmental = document.getElementById('emmental');
    const chevre = document.getElementById('chevre');
    const raclette = document.getElementById('raclette');
    const bleu = document.getElementById('bleu');


    const checkboxIngr = {
        jambon: jambon.checked,
        chorizo: chorizo.checked,
        hachee: hachee.checked,
        lardons: lardons.checked,
        bacon: bacon.checked,
        merguez: merguez.checked,
        mozza: mozza.checked,
        emmental: emmental.checked,
        chevre: chevre.checked,
        raclette: raclette.checked,
        bleu: bleu.checked
    };


    for (const key in checkboxIngr) {
        if (checkboxIngr[key] == true){
            price += 0.5;
        }
    }

    const tomates = document.getElementById('tomates');
    const champignons = document.getElementById('champignons');
    const oignons = document.getElementById('oignons');
    const pdt = document.getElementById('pdt');
    const poivrons = document.getElementById('poivrons');
    const olives = document.getElementById('olives');

    const checkboxLeg = {
        tomates: tomates.checked,
        champignons: champignons.checked,
        oignons: oignons.checked,
        pdt: pdt.checked,
        poivrons: poivrons.checked,
        olives: olives.checked,
    };


    for (const key in checkboxLeg) {
        if (checkboxLeg[key] == true){
            price += 0.1;
        }
    }



    const oeuf = document.getElementById('oeuf');
    const miel = document.getElementById('miel');
    const ananas = document.getElementById('ananas');


    const checkboxCompl = {
        oeuf: oeuf.checked,
        miel: miel.checked,
        ananas: ananas.checked,
    };


    for (const key in checkboxCompl) {
        if (checkboxCompl[key] == true){
            price += 1;
        }
    }

    if (checkboxCompl['ananas'] == true) {
        alert('De l\'ananas ?.. sur une pizza ?.. SERIEUSEMENT ?!!')
    }





    if (!Object.values(errors).includes(true)) {
        console.log(formData);
        alert('c\'est parti');

        const main = document.getElementById('main');
        const newTitle = document.createElement('h2');
        const div = document.createElement('div');
        newTitle.textContent = `T'en a pour ${price.toFixed(2)} euros`;
        main.appendChild(newTitle);
        main.style.paddingBottom = '100px';
        newTitle.style.color = 'orange'

        contactForm.reset();
    }
})
