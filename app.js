function localData1(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
}



function displayUser1(data){
    console.log(data);
}