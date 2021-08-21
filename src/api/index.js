import axios from 'axios';

const axiosOptions = {
  baseUrl: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosOptions);

const users = [
  {
    id: Symbol(),
    name: 'name1',
    telNumber: '+380123456789',
    isBanned: false,
  },
  {
    id: Symbol(),
    name: 'name2',
    telNumber: '+380123456789',
    isBanned: false,
  },
];

// 'http://127.0.0.1:5000/api/users'
// export const getUsers = () => apiInstance.get('/users');
//{data:users}

export const getUsers = () => {
  return Promise.resolve({ data: users });
};
