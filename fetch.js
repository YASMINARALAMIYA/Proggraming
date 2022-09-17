function loadData(){
    const url= 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
  .then(response => response.json())
  .then(json => console.log(json))
    
}








function localData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUser(data))
    
}

function displayUser(data){
   const ul= document.getElementById('user-list');
    for (const user of data){
        console.log(user.email)
        const li= document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li);
    }

}