function usuario(usuario, rua, numero, bairro, cidade, uf) {
    return `O ${usuario} mora em ${cidade} / ${uf} , no bairro ${bairro} , na ${rua} com nº ${numero}.`;
}
let text = usuario('usuário', '"Rua dos pinheiros"', '1293', 'Centro', 'São Paulo', 'SP');

console.log(text);
