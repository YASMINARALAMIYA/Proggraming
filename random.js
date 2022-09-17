const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res=>res.json ())
    .then(data=>console.log(data.results))
}



const displayUsers = users => {
    const usersContainer = document.getElementById('user-container');
    for (const user of users){
        const UserDiv = document.createElement('div');
        userDiv.innerHTML = `
        <h3>user name</h3>
        <p>user info</p> `
        usersContainer.appendChild(userDiv)
    }
}


loadUsers()