import axios from 'axios';
import { HOST } from 'src/constants/requests';


const requests = {
  post: (path, data) => axios.post(HOST + path, data)
};

export default requests;
