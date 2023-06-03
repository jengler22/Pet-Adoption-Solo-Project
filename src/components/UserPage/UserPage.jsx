import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleKittyButton = () => {
    // to cats page
    history.push('cats');
  }

  const handleDogoButton = () => {
    // to dogs page
    history.push('dogs');
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      
      <div>
      </div>
      <h3>
        <img src="images/displatcat1.jpg" width = "300" height = "300"/>
        <button onClick={handleKittyButton} >Cats</button>
        <img src="images/displaydog1.jpg" width = "300" height = "300"/>
        <button onClick={handleDogoButton} >Dogs</button>
        </h3>

        <h1 className="statement">Mission Statment
       </h1>
       <p><p>Statement goes here</p></p>
       <LogOutButton className="btn" />
      
      
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
