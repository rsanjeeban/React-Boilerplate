import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BACKEND_BASE,
});

export function getProfile(data) {
  return instance.get('/api/profile', {
    data
  });
}

export function updateProfile(data) {
  return instance.post('/api/profile', {
    data
  });
}
