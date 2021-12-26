import axios from 'axios';

export default async function postData(info) {
  try {
    const result = await axios.post(URL, info);

    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
