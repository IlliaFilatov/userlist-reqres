export const getUsers = (list) => {
  return {
    type: 'GET_USERS',
    data: list
  }
} 
export const editName = (value, index) => {
  return {
    type: 'EDIT_NAME',
    data: {
      value,
      index
    }
  }
} 
export const editSurname = (value, index) => {
  return {
    type: 'EDIT_SURNAME',
    data: {
      value,
      index
    }
  }
} 
export const removeUser = (index) => {
  return {
    type: 'REMOVE_USER',
    data: index
  }
} 
export const logIn = () => {
  return {
    type: 'LOG_IN'
  }
} 