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

    // const displaycats = (catsToDisplay) => {
    //     console.log(catsToDisplay);
        

    return(
        <main>
            <h1>Cats List</h1>
            <section className="catslist">
                {cats.map(cats => {
                    return (
                        <div key={cats.user_id} >
                            <h3> Name: {cats.name}</h3>
                            <p>Breed: {cats.breed} </p>
                            <p>Description: { cats.description } </p>
                            <img src={cats.photo} alt={cats.name} />
                            
                            
                        </div>
                    );
                })}
            </section>
        </main>

    );
            
        }
export default CatList;