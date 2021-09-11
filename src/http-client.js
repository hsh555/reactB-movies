import axios from "axios";

const httpClient = async (url) => {
  const response = await axios.get(url);
  //   const resJson = await response.json();
  console.log(response);
  return response.data;
};

export default httpClient;
