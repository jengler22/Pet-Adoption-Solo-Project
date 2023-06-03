
const lost_found = (state = [], action) => {
    switch (action.type) {
      case 'SET_LOST':
        return action.payload;
      case 'UPDATE_FORM':
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item
        );
      default:
        return state;
    }
  };
  
  export default lost_found;
  