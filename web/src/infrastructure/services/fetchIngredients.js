import Axios from "axios";

export default () => {
  const url = "http://localhost:3001/api/ingredients";
  return Axios.get(url);
};
