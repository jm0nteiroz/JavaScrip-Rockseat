//alert('Funcionou!');

var listElement = document.querySelector('#app ul');
var inputElment = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


var todos = JSON.parse(localStorage.getItem('list_todos'))||[];

var todos = [
    'Abrir Cs',
    'Esperar Carregar o game',
    'Abrir Local com Bots',
    'exec knife'
];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        
        linkElement.setAttribute('href', '#');    
        
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        
        var linkText = document.createTextNode(' | Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){ 
    var todoText= inputElment.value;
    todos.push(todoText);
    inputElment.value='';
    renderTodos();
    saveToStorage();

}

buttonElement.onclick = addTodo; 

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos();
    saveToStorage();
}

function saveToStorage(){
        //localStorage.setItem('listTodo',JSON.stringify(todos));
        
        
        localStorage.setItem('list_todos',JSON.stringify(todos));
}