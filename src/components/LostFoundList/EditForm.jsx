import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import "./EditForm.css";

function EditForm() {
  const { id } = useParams();
  const lost = useSelector(store => store.lost_found);
  const history = useHistory();
  const dispatch = useDispatch();

  const [newDate, setDate] = useState('');
  const [newLocation, setLocation] = useState('');
  const [newDescription, setDescription] = useState('');

//   useEffect(() => {
//     dispatch({ type: '' });
//   }, []);

  const submitEdit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_FORM',
      payload: {
        id,
        date: newDate,
        location: newLocation,
        description: newDescription
      }
    });
    history.goBack();
  }

  return (
    <div className="centered-container">
      <form className="add-lost-pet-form" onSubmit={submitEdit}>
        
        <input type="date" value={newDate} onChange={(e) => setDate(e.target.value)} />
        <input type="text" value={newLocation} onChange={(e) => setLocation(e.target.value)} />
        <textarea type="text" value={newDescription} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditForm;
