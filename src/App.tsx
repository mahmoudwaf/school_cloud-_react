import './App.css';
function App() {



  return (
    <div className="App">
      Welcome to School Application
      <div>Users Dashboard</div>
      <table id="usersTable">
        <thead>
          <tr>
            <td>User ID</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Roles</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ahmed Sayed</td>
            <td>ahmed@gmail.com</td>
            <td>Admin</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
