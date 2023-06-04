import { Container, Card, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CatList() {
  const dispatch = useDispatch();
  const cats = useSelector(store => store.catList);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CATS' });
  }, []);

  console.log('check cats 1');

  return (
    <main>
      <section className="top" style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Cats List</h1>
      </section>
      <Container
        className="catslist"
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cats.map(cat => {
          return (
            <Card
              key={cat.user_id}
              style={{
                width: 300,
                margin: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  Name: {cat.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Breed: {cat.breed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {cat.description}
                </Typography>
              </CardContent>
              <img src={cat.photo} alt={cat.name} style={{ width: '100%', height: 'auto' }} />
            </Card>
          );
        })}
      </Container>
    </main>
  );
}

export default CatList;
