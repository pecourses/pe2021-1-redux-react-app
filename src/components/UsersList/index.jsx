import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, updateUser } from '../../actions';

// Получить состояние из глобального состояния
function UsersList (props) {
  const { users, deleteUserAction, updateUserAction } = props;

  const mapUser = ({ id, name, telNumber, isBanned }, index) => {
    const changeBann = () => {
      updateUserAction({ id: id, isBanned: !isBanned });
    };

    const deleteUser = () => {
      deleteUserAction(id);
    };
    return (
      <li key={id}>
        ID: {id} name: {name} tel.: {telNumber}
        <input type='checkbox' checked={isBanned} onChange={changeBann} />
        <button onClick={deleteUser}>Delete</button>
      </li>
    );
  };

  return <ul>{users.map(mapUser)}</ul>;
}

const mapStateToProps = state => state.userState;
const mapDispatchToProps = dispatch => {
  return {
    deleteUserAction: id => {
      dispatch(deleteUser(id));
    },
    updateUserAction: newUserInfo => {
      dispatch(updateUser(newUserInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

// 1 actionCreators : update(i, value), delete(i)
// 2 mapDispatchToProps
// 3 usersReducer
