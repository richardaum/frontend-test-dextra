/* istanbul ignore file */
import Axios from "axios";

export default () => {
  const url = "http://localhost:3001/api/burgers";
  return Axios.get(url);
};
