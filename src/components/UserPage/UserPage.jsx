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
      {/* <h2>Welcome, {user.username}!</h2> */}
      {/* <p>Your ID is: {user.id}</p> */}
      
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="images/displatcat1.jpg" width="300" height="300" style={{ border: '5px solid black' }} />
          <button onClick={handleKittyButton} style={{ backgroundColor: '#000080', color: 'white', border: '3px solid black', padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>Cats</button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src="images/displaydog1.jpg" width="300" height="300" style={{ border: '5px solid black' }} />
          <button onClick={handleDogoButton} style={{ backgroundColor: '#000080', color: 'white', border: '3px solid black', padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>Dogs</button>
        </div>
      </div>

        <h1 className="statement">Mission Statment
       </h1>
       <p><p>Statement goes here</p></p>
       {/* <LogOutButton className="btn" /> */}
      
      
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
