import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import lost_found from "../../redux/reducers/lostfound.reducer";
import LostFoundSaga from "../../redux/sagas/LostFoundSaga";
import axios from "axios";


function LostFoundList () {
    const dispatch = useDispatch();
    const lost_found = useSelector(store => store.lost_found);
    const history = useHistory();
    const { id } = useParams();

    const fetchLost = () => {
        dispatch({ type: 'FETCH_LOST', payload: id });
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_LOST' });
    }, []);

    // const displayLost = (lostToDisplay)  => {
    //     console.log(lostToDisplay);
    // }

    const handleDelete = (id) => {
        axios.delete(`/api/lost_found/${id}`).then((response) => {
            console.log(response);
            fetchLost()
        
        }).catch((error) => {
            console.log(`Error in DELETE ${error}`);
            alert('Something went wrong!');
        })
    }


    const handleAddForm = () => {
       
        history.push('lostpetform');
    }

    const toEdit = () => {
        history.push('editform');
    }

    return(
        <>
        <h1>Lost & Found</h1>
<button onClick={handleAddForm}>Add Post</button>
<table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Date Found</th>
      <th>Location</th>
      <th>Description</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {lost_found.map(lost => {
      return (
        <tr key={lost.id}>
          <td>{lost.picture}</td>
          <td>{lost.date}</td>
          <td>{lost.location}</td>
          <td>{lost.description}</td>
          <td><button onClick={toEdit} >Edit Post</button></td>
          <td><button onClick={() => handleDelete(lost.id)}>Delete Post</button></td>
        </tr>
      )
    })}
  </tbody>
</table>

        </>
    )
        }

export default LostFoundList;