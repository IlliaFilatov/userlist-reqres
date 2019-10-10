const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return state = true
    default:
      return state 
  }
};

export default loggedReducer;