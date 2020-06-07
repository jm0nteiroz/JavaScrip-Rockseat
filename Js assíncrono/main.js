//Ajax é a principal forma de consumir as infos do servidor
//mas essa sintaxe é confusa, vamos aprender uma biblioteca mais limpa


var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/Joaom0nteiro');
xhr.send(null);

xhr.onreadystatechange = function (){
    if(xhr.readyState===4){

        console.log(JSON.parse(xhr.responseText));
    }
}