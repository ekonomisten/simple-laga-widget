const form = document.querySelector('#lagaWidgetForm');
const input = document.querySelector('#lagaWidgetRegno');
const btn = document.querySelector('#lagaWidgetSearch');
const msg = document.querySelector('.laga-widget__msg');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

btn.addEventListener('click', function() {

    if(!input.value.match(/^[a-öA-Ö]{3}\d{3}$/)) {
        msg.innerHTML = '<p>Vänligen fyll i registreringsnummret korrekt.</p>';
    } else {
        window.open('https://laga.se/?carbreaker=SB' + input.value);
        input.value = '';
    }

})