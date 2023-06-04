import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card, CardContent, Button } from '@mui/material';

function UserPage() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const handleKittyButton = () => {
    history.push('cats');
  }

  const handleDogoButton = () => {
    history.push('dogs');
  }

  return (
    <div className="container">

      <section style={{ textAlign: 'center', border: '1px solid black' }}>
        <h1 className="statement">Mission Statement</h1>
        <p>Statement goes here</p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ margin: '10px' }}>
          <img src="images/displatcat1.jpg" width="300" height="300" style={{ border: '5px solid black' }} />
          <CardContent>
            <Button onClick={handleKittyButton} variant="contained" style={{ backgroundColor: '#000080', color: 'white', border: '3px solid black', padding: '10px 20px', cursor: 'pointer' }}>Cats</Button>
          </CardContent>
        </Card>
        <Card style={{ margin: '10px' }}>
          <img src="images/displaydog1.jpg" width="300" height="300" style={{ border: '5px solid black' }} />
          <CardContent>
            <Button onClick={handleDogoButton} variant="contained" style={{ backgroundColor: '#000080', color: 'white', border: '3px solid black', padding: '10px 20px', cursor: 'pointer' }}>Dogs</Button>
          </CardContent>
        </Card>
      </div>

      
      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

export default UserPage;
