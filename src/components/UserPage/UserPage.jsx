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

      <section style={{ textAlign: 'center', border: '5px solid black' }}>
        <h1 className="statement">Helping Minnesota Pets Find Their Homes!</h1>
        <p> Save Them All Minnesota is a website dedicated to helping Minnesotans find their furry loved ones.</p>
         <p> We offer adoption services for both Cats and Dogs,
          as well as helping with the recovery of lost pets. </p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Card style={{ margin: '20px' }}>
          <img src="images/displatcat1.jpg" width="400" height="400" style={{ border: '5px solid black' }} />
          <CardContent>
            <Button onClick={handleKittyButton} variant="contained" style={{ backgroundColor: '#000080', color: 'white', border: '3px solid black', padding: '10px 20px', cursor: 'pointer' }}>Cats</Button>
          </CardContent>
        </Card>
        <Card style={{ margin: '10px' }}>
          <img src="images/displaydog1.jpg" width="400" height="400" style={{ border: '5px solid black' }} />
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
