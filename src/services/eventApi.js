/* eslint-disable no-console */
import api from './api';

export async function getEventInfo() {
  const response = await api.get('/event');
  console.log(response.data);
  return response.data;
}
//
