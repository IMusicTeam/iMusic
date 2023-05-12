import uuid from 'react-uuid';
import api from 'Services/API';

export const authenticate = (email, password) =>
  api.post('/user/login', { email, password });

export const userLogin = (data) => {
  return api.post('/user/signin', data);
};

// export const userLogin = (email, encryptedPayload) =>
//   api.post('/user/encrypt/login', encryptedPayload, { params: { email: email } });
