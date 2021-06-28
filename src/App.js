import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList'


function App() {

  const[usersList, setUsersList] = useState([]);

  const newUserHandler = (newUserName, newUserAge) => {
    setUsersList( prevState => {
      return [...prevState, {name: newUserName, age: newUserAge}]
    })
  }

  return (
    <div>
        <AddUser onAddUser={newUserHandler} />
        <UserList listOfUsers={usersList} />
    </div>
  );
}

export default App;
