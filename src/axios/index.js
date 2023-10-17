import axios from 'axios';
import { BASE_URL } from '../config/env';

//Fetch Records;
export const fetchRecordsApi = async (endpoint) => {
  const res = await axios.get(BASE_URL + endpoint);
  return res;
};
//Fetch Record;
export const fetchRecordApi = async (endpoint) => {
  const res = await axios.get(BASE_URL + endpoint);
  return res;
};
//Update Records;
export const editRecordApi = async (endpoint) => {
  const res = await axios.put(BASE_URL + endpoint);
  return res;
};

//Delete Records;
export const deleteRecordApi = async (endpoint) => {
  const res = await axios.delete(BASE_URL + endpoint);
  return res;
};

// Insert Records;
export const createRecordApi = async (endpoint) => {
  const res = await axios.post(BASE_URL + endpoint);
  return res;
};
