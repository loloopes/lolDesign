import axios from 'axios';

export default async function postData(calls, setResult) {
  try {
    const { data: { withContract, withoutContract } } = await axios.post('http://localhost:3001/calculator', calls);

    setResult({ withContract, withoutContract });
  } catch (err) {
    console.log(err);
  }
}
