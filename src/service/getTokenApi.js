import api from "./endpoint";
import userDetailsApi from "./userDetailsApi";

async function getTokenApi(user) {
  await api
    .post("/authenticate/login", user)
    .then((response) => {
      if (response.status === 400) {
      } else {
        const token = response.data.accessToken;
        localStorage.setItem("token", token);
      }
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data); // the response is email not found
        console.log(error.response.status); // STATUS 418 when email not found but 403 when pass is wrong
        console.log(error.response.headers);

        return error.response.data;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}
export default getTokenApi;
