import api from './api';

export async function getActivitiesDate(token) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getActivitiesSpace(token) {
  const response = await api.get('activities/space', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
