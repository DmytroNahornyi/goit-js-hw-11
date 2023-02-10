import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '33445005-670ff6718a077cc10d3f17f6a&q',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 40,
  safesearch: true,
};

export const fetchImages = async (inputValue, page) => {
  const request = await axios.get(`/?q=${inputValue}&page=${page}`);
  return request.data;
};