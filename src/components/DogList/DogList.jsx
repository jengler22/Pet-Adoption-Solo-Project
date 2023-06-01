

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

   
        

    return(
        <main>
            <h1>Dogs List</h1>
            <section className="dogslist">
                {dogs.map(dog => {
                    return (
                        <div key={dog.user_id} >
                            <h3> Name: {dog.name}</h3>
                            <p>Breed: {dog.breed} </p>
                            <img src={dog.photo} alt={dog.name} />
                            
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
            
        }
export default DogList;