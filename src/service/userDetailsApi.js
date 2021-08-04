import api from "./endpoint";

const userDetailsApi = async (token) => {
  // const token = JSON.parse(localStorage.getItem("token"));
  return await api
    .get("/customer/mydetails", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((response) => {
      return response.data;
    });
};

export default userDetailsApi;
