import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import catsListSaga from '../../redux/sagas/catsListSaga';

function CatList() {
    const dispatch = useDispatch();
    const cats = useSelector(store => store.cats);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATS' });
    }, []);

    const displaycats = (catsToDisplay) => {
        console.log(catsToDisplay);
        // dispatch gets data into redux & sagas
        // dispatch({ type: 'SET_MOVIE_DETAILS', payload: movieToDisplay })
        // history.push(`/catDetails/${movieToDisplay.id}`);


    return(
        <main>
            <h1>Cats List</h1>
            <section className="catslist">
                {cats.map(cat => {
                    return (
                        <div key={cat.user_id} >
                            <h3> Name: {cat.name}</h3>
                            <p>Breed: {cat.breed} </p>
                            <img src={cat.photo} alt={cat.name} />
                            
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
            }
        }
export default CatList;