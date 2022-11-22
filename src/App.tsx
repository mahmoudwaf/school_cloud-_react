import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios  from 'axios';

function App() {
  function loadUsers(){
    fetch('https://school-backend.azurewebsites.net/users').then(response =>{
      return response.json();
    }).then(json => {
          let usersTable = document.getElementById('usersTable') as HTMLTableElement;
         json.forEach((user: any) => {
            //usersListDiv.innerHTML = usersListDiv.innerHTML +  user.username +"<br>";
            let row = usersTable.insertRow();
            let cell_1 = row.insertCell();
            cell_1.innerHTML = user.userId;

            let cell_2 = row.insertCell();
            cell_2.innerHTML = user.username;

            let cell_3 = row.insertCell();
            cell_3.innerHTML = user.email;

            let cell_4 = row.insertCell();
            cell_4.innerHTML = user.roles;

            let cell_5 = row.insertCell();
            cell_5.innerHTML = "<div style='color:red'>X</div>";
            cell_5.addEventListener("click",() =>{
              deleteUser(user.userId);
            })

            usersTable.appendChild(row)
         })
    })
  }

  let deleteUser = (userId:string) =>{
    axios.delete("https://school-backend.azurewebsites.net/users/"+userId)
    .then(response => {
        alert(JSON.stringify(response));
    })
  }

useEffect(() =>{
    loadUsers();   
},[]);


  return (
    <div className="App">
        Welcome to School Application
        <div>Users List</div>
        <table id="usersTable">
          <tr>
              <td>User ID</td>
              <td>User Name</td>
              <td>Email</td>
              <td>Roles</td>
              <td>Action</td>
          </tr>
        </table>
    </div>
  );
}

export default App;
