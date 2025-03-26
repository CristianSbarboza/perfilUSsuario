const titleContainerUser = document.querySelector('#title-container-team')
const contentListUser = document.querySelector('#content-users')
const btnAddUser = document.querySelector('#addIntegrant')
const btnSubmitForm = document.querySelector('#submit-form')


const listUserContainer = document.querySelector('#list-user-container')
const alert = document.querySelector('#alert')

const listTeam = ['manga']
const listUsers = ['joao']


function openModalUser(){
    listUserContainer.classList.remove('display-list')
}

function modalAlert(menssageAlert){
    alert.innerHTML = menssageAlert
    alert.style.opacity = 1

    setTimeout(() => {alert.style.opacity = 0}, 3000)
}


btnSubmitForm.addEventListener('click', (e) => {
    e.preventDefault()

    const nameTeam = document.querySelector('#name-team').value
    let teamEncontrado = false;

    listTeam.forEach(team => {
        if(nameTeam === team){
            teamEncontrado = true

            modalAlert('Equipe existente')
        }
    })


})


btnAddUser.addEventListener('click', (e) => {
    e.preventDefault();

    const nameUser = document.querySelector('#users-team').value;
    let userEncontrado = false; 

    listUsers.forEach(user => {
        if (nameUser === user) {
            userEncontrado = true;

            openModalUser();

            const userAdd = document.createElement('li');
            userAdd.innerHTML = user;
            contentListUser.appendChild(userAdd);
        }
    });

    if (!userEncontrado) {
        modalAlert('Usuário não encontrado');
    }
});



