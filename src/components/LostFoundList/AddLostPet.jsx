import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './AddLostPet.css';
import axios from 'axios';


function AddLostPet() {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault(); 
        history.goBack();

      
        // Dispatch action to trigger the Saga
        dispatch({ type: 'SET_NEW_FORM', payload: { date, location, description } });
      
        // Clear the form fields
        setDate('');
        setLocation('');
        setDescription('');
      };
      
return(
  <div className="centered-container">
    <form className="add-lost-pet-form" onSubmit={handleSubmit}>
    <label htmlFor="date">Date:</label>
    <input type="date" id="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} required />
  
    <label htmlFor="location">Location:</label>
    <input type="text" id="location" name="location" value={location} onChange={(event) => setLocation(event.target.value)} required />
  
    <label htmlFor="description">Description:</label>
    <textarea id="description" name="description" value={description} onChange={(event) => setDescription(event.target.value)} required></textarea>
  
    <input type="submit" value="Submit" />
  </form>
  </div>
  
    )
}
export default AddLostPet;