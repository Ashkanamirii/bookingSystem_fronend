import api from "../baseUrl/endpoint";


function GetUser(user) {

    console.log(user);
    api
      .post("/authenticate/login", user)
      .then((response) => {
        if (response.status === 400) {
          console.log(response.text());
        } else {
          console.log(response.data);
          const token=  response.data.accessToken;

          api
          .get("/customer/mydetails", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((response) => {
            localStorage.setItem("currentUser", JSON.stringify(response.data));
            // const {id, firstName,lastName, email, securityNumber} = response.data;
            console.log(response.data);
            return response.data
          })

        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data); // the response is email not found
          console.log(error.response.status); // STATUS 418 when email not found but 403 when pass is wrong
          console.log(error.response.headers);

          return error.response.data

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
  export default GetUser;