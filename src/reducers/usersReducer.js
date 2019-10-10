const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS':
      return state = state.concat(action.data)
    case 'EDIT_NAME':
        let newName = [...state];
        newName[action.data.index].first_name = action.data.value;
        return newName;
    case 'EDIT_SURNAME':
      let newSurname = [...state];
      newSurname[action.data.index].last_name = action.data.value;
      return newSurname;
    case 'REMOVE_USER':
        let newState = [...state];
        newState.splice(action.data, 1);
        return newState;
    default:
      return state 
  }
};

export default usersReducer;