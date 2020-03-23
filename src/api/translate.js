import axios from 'axios';

const API_URL = 'https://translate1.spanishdict.com/dictionary/translation_ms?lang_from=en&trtext=';

export const translate = async message => {
  let data = {};
  try {
    const res = await axios.get(`${API_URL}${message}`)
    data = res.data;
  } catch (error) {
    console.error(error);
  }

  return data;
};
