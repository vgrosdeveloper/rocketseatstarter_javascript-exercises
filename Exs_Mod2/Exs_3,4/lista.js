var nomes = ["Diego", "Gabriel", "Lucas"];

let inputValue = document.querySelector('input');
        let names = ["Diego", "Gabriel", "Lucas"];
        document.querySelector('#addnome').addEventListener('click', () => {
            addItem(inputValue.value);
            inputValue.value = "";
        });
        function addItem(text){
            let ul = document.querySelector('ul');
            let li = document.createElement('li');
            let liText = document.createTextNode(text);
            li.appendChild(liText);
            ul.appendChild(li);
      }
    for (nome of nomes) {
        addItem(nome);
    }