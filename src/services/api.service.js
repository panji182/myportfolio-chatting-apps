import axios from "axios";
// NOTES : this API services will works only if CORS Browser is Disabled

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getQuestionOne = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${BASE_URL}frontend/web/question/one`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};

export const getQuestionTwo = () => {
  return new Promise(async (resolve, reject) => {
    await axios
      .get(`${BASE_URL}frontend/web/question/two`)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
};
