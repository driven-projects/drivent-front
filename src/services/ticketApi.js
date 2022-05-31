import api from './api';

export async function get(token, eventId) {
  const response = await api.get(`/tickets/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
