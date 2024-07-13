import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const searchSettings = {
  key: '44850950-a38c775cff20ba6a666909e04',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
  page: 1,
};

export async function fetchImage() {
  const response = await axios.get('/', { params: searchSettings });
  return response.data;
}