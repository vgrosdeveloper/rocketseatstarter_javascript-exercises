let inputElement = document.querySelector('input');
        const buscarGitHub = document.querySelector('button').addEventListener('click', function () {
            return new Promise(function (resolve, reject) {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://api.github.com/users/' + inputElement.value + '/repos');
                xhr.send(null);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(JSON.parse(xhr.responseText))
                        } else {
                            reject('Erro na requisição');
                        }
                    }
                } 
            }, 3000)
            })
                .then(function (response) {
                    for (const responses of response) {
                        let listElement = document.querySelector('ul');
                        let list = document.createElement('li');
                        let listText = document.createTextNode(responses.name);
                        list.appendChild(listText);
                        listElement.appendChild(list);
                    }
                })
                .catch(function () {
                    showError();
                });
    
        function showLoading(){
            listElement.innerHTML = " ";
            listText = document.createTextNode("Carregando");
            let list = document.createElement('li');
            list.appendChild(listText);
            listElement.appendChild(list);
        }
        function showError(){
            listElement.innerHTML = " ";
            listText = document.createTextNode("Erro");
            let list = document.createElement('li');
            list.appendChild(listText);
            listElement.appendChild(list);
        }

