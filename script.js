let names = ['Horst','Inge','Günther'];
let phoneNumbers = ['1234','0815','0911'];

function render() {
    let content = document.getElementById('MyList');
    content.innerHTML = '';
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i]
        content.innerHTML +=`
        <div class="card">
            <b>Name: </b>${name}<br>
            <b>Telefonnummer: </b>${phoneNumber}<br>
         </div>`;
    }
};