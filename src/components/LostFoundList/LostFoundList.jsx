import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import lost_found from "../../redux/reducers/lostfound.reducer";
import LostFoundSaga from "../../redux/sagas/LostFoundSaga";


function LostFoundList () {
    const dispatch = useDispatch();
    const lost_found = useSelector(store => store.lost_found);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_LOST' });
    }, []);

    // const displayLost = (lostToDisplay)  => {
    //     console.log(lostToDisplay);
    // }

    const handleAddForm = () => {
       
        history.push('lostpetform');
    }

    return(
        <>
        <h1>Lost & Found</h1>
        <button onClick={handleAddForm} >Add Post</button>
        <section className="lostpets">
            {lost_found.map( lost => {
                return(
                    <div key={lost.id}>
                        <h3> {lost.picture} </h3>
                        <p> Date Found: {lost.date} </p>
                        <p> Location: {lost.location} </p>
                        <p> Description {lost.description} </p>

                    </div>
                )
            }) }
        </section>
        </>
    )
        }

export default LostFoundList;