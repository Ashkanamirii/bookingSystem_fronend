import api from "../Api/endpoint.js";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

export default function Verification(){
    const queryString = getTokenFromUrl(window.location.search);
    const history = useHistory();
    sendToken(queryString,history)
   return (<h1>{queryString}</h1>)
}

function getTokenFromUrl(address){
const splitted= address.split("token=")
return splitted[1]

}
function sendToken(token,history){
    api
      .get("authenticate/verify/"+token)
      .then((response) => {
        if (response.status === 500) {
          console.log(response.text());
        } else {
          console.log(response.data);
          swal("Your account is activated", response.data, "success").then(() => {
            history.push("/login");
          });
}
})
}