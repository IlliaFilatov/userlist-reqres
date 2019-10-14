import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser, editName, editSurname } from '../actions';

function UserList() {
  
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  
  const editUser = (e) => {
    let newName = prompt('Enter new name: ');
    let newSurname = prompt('Enter new surname: ');
    let userIndex = e.target.closest('.user').getAttribute('user-id');

    if(newName !== null && newName.length !== 0) {
      dispatch(editName(newName, userIndex));
    }
    if(newSurname !== null && newSurname.length !== 0) {
      dispatch(editSurname(newSurname, userIndex));
    }
  }

  return (
    <div>
      <h1>User List</h1>
      <div className="user-list">
      {
        users.map((el, index) => 
          <div user-id={index} key={index} className="user">
            <img className="user__avatar" src={el.avatar} alt=""/>
            <p className="user__name">
              <span>{el.first_name} </span>
              <span>{el.last_name} </span>
            </p>
            <button className="user__edit" onClick=
              {(e) => editUser(e)}>Edit</button>
            <button className="user__remove" onClick={() => dispatch(removeUser(index))}>&#215;</button>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default UserList;