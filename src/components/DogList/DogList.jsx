

import { Container, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function DogList() {
  const dispatch = useDispatch();
  const dogs = useSelector(store => store.dogList);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_DOGS' });
  }, []);

  console.log('check dogs 1');

  return (
    <main>
      <section style={{ textAlign: 'center', border: '1px solid black' }}>
        <h1 className="statement">Dogs Available For Adoption</h1>
        <p>Statement goes here</p>
      </section>
      <Container
        className="dogslist"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {dogs.map(dog => {
          return (
            <Card
              key={dog.user_id}
              style={{
                width: 300,
                margin: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '5px solid #ccc',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {dog.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Breed: {dog.breed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  More Info: {dog.description}
                </Typography>
              </CardContent>
              <img src={dog.photo} alt={dog.name} style={{ width: '100%', height: 'auto' }} />
            </Card>
          );
        })}
      </Container>
    </main>
  );
}

export default DogList;
