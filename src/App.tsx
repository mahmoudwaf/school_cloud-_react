 import './App.css';
function App() {
   


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
          </tr>
          <tr>
            <td>1</td>
            <td>Ahmed Sayed</td>
            <td>ahmed@gmail.com</td>
            <td>Admin</td>
          </tr>
        </table>
         
    </div>
  );
}

export default App;
