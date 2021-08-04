import api from "./endpoint";

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
      console.log(error.response.data); // the response is email not found
      console.log(error.response.status); // STATUS 418 when email not found but 403 when pass is wrong
      console.log(error.response.headers);
    });
}
export default getTokenApi;
