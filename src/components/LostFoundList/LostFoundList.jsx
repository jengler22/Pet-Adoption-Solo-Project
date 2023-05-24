import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import lost_found from "../../redux/reducers/lostfound.reducer";
import LostFoundSaga from "../../redux/sagas/LostFoundSaga";


function LostFoundList () {
    const dispatch = useDispatch();
    const lost_found = useSelector(store => store.lost_found);

    useEffect(() => {
        dispatch({ type: 'FETCH_LOST' });
    }, []);

    // const displayLost = (lostToDisplay)  => {
    //     console.log(lostToDisplay);
    // }

    return(
        <>
        <h1>Lost & Found</h1>
        <section className="lostpets">
            {lost_found.map( lost => {
                return(
                    <div key={lost.id}>
                        {lost.picture}
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