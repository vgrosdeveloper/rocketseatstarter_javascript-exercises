const buttonElement = document.querySelector('#app button');
const inputElement = document.querySelector('#app input');
const listElement = document.querySelector('#app ul');

buttonElement.onclick = function () {
    const user = inputElement.value;

    listElement.innerHTML = '<li>Carregando...</li>'

    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {

            listElement.innerHTML = '';

            for (let repo of response.data) {
                const repoElement = document.createElement('li');
                const repoText = document.createTextNode(repo.name);

                repoElement.appendChild(repoText);
                listElement.appendChild(repoElement);
            }
        })
        .catch(function (error) {
            console.warn(error);
            listElement.innerHTML = 'Usuário não existe!';
        })
}