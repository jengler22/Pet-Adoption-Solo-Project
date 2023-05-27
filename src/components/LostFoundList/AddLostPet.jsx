

function AddLostPet() {

    return(

        <>
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
export default AddLostPet;