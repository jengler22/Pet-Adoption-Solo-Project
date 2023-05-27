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
                        <h3> {lost.picture} </h3>
                        <p> Date Found: {lost.date} </p>
                        <p> Location: {lost.location} </p>
                        <p> Description {lost.description} </p>

                    </div>
                )
            }) }
        </section>
        <h1>Lost & Found Form</h1>
  <form>
    <label for="date">Date:</label>
    <input type="date" id="date" name="date" required />

    <label for="location">Location:</label>
    <input type="text" id="location" name="location" required />

    <label for="description">Description:</label>
    <textarea id="description" name="description" required></textarea>

    <input type="submit" value="Submit" />
  </form>
        </>
    )
}
export default LostFoundList;