import axios from 'axios';

// "https://api.nhie.io/v1/statements/random?category[]=harmless&category[]=delicate&category[]=offensive"
const GAME_API = `https://api.nhie.io/v1/statements/random?`;
const OFFENSIVE = 'category[]=offensive';
const DELICATE = 'category[]=delicate';
const HARMLESS = 'category[]=harmless';

export const getSentence = async options => {
  let url = GAME_API;
  const { offensive, delicate, harmless } = options;
  if (offensive) url = `${url}&${OFFENSIVE}`;
  if (delicate) url = `${url}&${DELICATE}`;
  if (harmless) url = `${url}&${HARMLESS}`;

  let data = {};
  try {
    const res = await axios.get(url)
    data = res.data;
  } catch (error) {
    console.error(error);
  }

  return data;
};
