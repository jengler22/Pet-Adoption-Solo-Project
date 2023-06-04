import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import "./EditForm.css";
import lost_found from '../../redux/reducers/lostfound.reducer';

function EditForm() {
  const { id } = useParams();
  const location = useLocation();
  const  lostFound  = useSelector(store => store.lost_found);
  const   lost = lostFound.filter(lost => lost.id==id)[0];
  const history = useHistory();
  const dispatch = useDispatch();

  const [newDate, setDate] = useState(lost.date.toLocaleString());
  const [newLocation, setLocation] = useState(lost.location);
  const [newDescription, setDescription] = useState(lost.description);


  useEffect(() => {
    console.log('lost:', lostFound, lost);
  }, []);

  const submitEdit = (e) => {
    console.log('new description', newDescription);
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
