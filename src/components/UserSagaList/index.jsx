import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions';

// Получить состояние из глобального состояния
function UsersSagaList (props) {
  const { users, isFetching, error, getUsers } = props;

  useEffect(() => {
    getUsers();
  }, []);

  const mapUser = ({ id, name, telNumber, isBanned }) => {
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

const mapStateToProps = state => state.user;

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actionCreators.getUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersSagaList);

// 1 actionCreators : update(i, value), delete(i)
// 2 mapDispatchToProps
// 3 usersReducer
