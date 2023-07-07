import axios from "axios";
import { GET_PROFILE, LOG_IN, LOG_OUT } from "./URLs";
axios.defaults.withCredentials = true;

export function requsetUserProfile() {
  console.log("get account info");
  return axios.get(GET_PROFILE);
}

export function requestLogin(username, password) {
  console.log("request login");
  return axios.post(LOG_IN, { username, password });
}

export function requestLogout() {
  console.log("loging out");
  return axios.get(LOG_OUT);
}
