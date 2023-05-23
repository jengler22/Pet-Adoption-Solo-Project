
const lost_found = (state = [], action) => {
    switch (action.type) {
        case 'SET_LOST':
            return action.payload;
        default:
            return state;
    }
  }

  export default lost_found;