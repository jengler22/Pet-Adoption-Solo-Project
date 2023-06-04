

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
      <section className="top">
        <h1> Dogs List </h1>
        <h3>put words here</h3>
        <br />
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
