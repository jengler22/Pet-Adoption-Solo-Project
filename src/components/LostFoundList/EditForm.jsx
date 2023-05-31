import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function EditForm() {
    const { id } = useParams();
    const lost = useSelector(store => store.lost_found);
    const history = useHistory();
    const dispatch = useDispatch();
   
    const [newDate, setDate] = useState('');
    const [newLocation, setLocation] = useState('');
    const [newDescription, setDescription] = useState('');
    
    const LostFoundSaga = () => {
        dispatch({ type: 'FETCH_LOST' });
    }

    useEffect(() => {
    LostFoundSaga();
    }, []);

    const submitEdit = (id) => {
        dispatch({ type: 'UPDATE_FORM', payload:{ date: newDate, location: newLocation, description: newDescription }});
        // history.goBack();
    }

    // const goBack = () => {
    //     history.goBack();
    // }


    return(
        <>
        <form onSubmit={submitEdit}>
        <input type="date" value={newDate} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={newLocation} onChange={(e) => setLocation(e.target.value)} />
        <textarea type="text" value={newDescription} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={() => submitEdit()} type="submit">Submit</button>
      </form>
        
        </>
    )
}
export default EditForm;