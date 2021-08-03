import { useEffect } from "react";
import authenticateApi from "./../service/authenticateApi";
import {useHistory} from "react-router-dom"
export default function Verification() {
  const history = useHistory()
  const queryString = getTokenFromUrl(window.location.search);

  useEffect(() => {
    authenticateApi(queryString);
    history.push("/login");
  }, []);

  return <h1>Verify your account</h1>;
}

function getTokenFromUrl(address) {
  const splitted = address.split("token=");
  return splitted[1];
}
