import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BACKEND_BASE,
});

export function login(data) {
  return instance.post('/api/login', {
    data
  });
}

export function getCustomer(data) {
  return instance.post('/api/profile', {
    data
  });
}

export function resetPassword(data) {
  return instance.post('/api/reset', {
    data
  });
}
