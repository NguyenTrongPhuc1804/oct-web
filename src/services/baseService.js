import axios from "axios";
import {
  ACCESS_TOKEN,
  KOGLA_URL,
  KOGLA_URL_TEST,
} from "../util/constants/settingSystem";

export const baseServices = {
  put: (url, modal) =>
    axios({
      url: `${KOGLA_URL_TEST}/${url}`,
      method: "PUT",
      data: modal,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    }),
  post: (url, modal) =>
    axios({
      url: `${KOGLA_URL_TEST}/${url}`,
      method: "POST",
      data: modal,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    }),
  get: (url) =>
    axios({
      url: `${KOGLA_URL_TEST}/${url}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    }),
  delete: (url, modal) =>
    axios({
      url: `${KOGLA_URL_TEST}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESS_TOKEN),
      },
    }),
};
