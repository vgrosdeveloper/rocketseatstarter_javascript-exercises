function checaIdade(idade) {
        return new Promise (function(resolve,reject){
            var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject ('Erro na requisição');
                }
            }
        }  
    });
   }
   
   checaIdade(20)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });
   