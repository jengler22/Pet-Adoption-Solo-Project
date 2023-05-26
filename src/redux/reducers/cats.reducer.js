

const catList = (state = [], action) => {
    switch (action.type) {
        case 'SET_CATS':
            return action.payload;
        default:
            return state;
    }
  }

  export default catList;