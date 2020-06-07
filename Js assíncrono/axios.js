axios.get('https://api.github.com/users/Joaom0nteiro')
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
})
;