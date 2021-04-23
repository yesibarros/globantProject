// REACT REDUX
import { createAsyncThunk } from "@reduxjs/toolkit";

// EXPO
import * as SecureStore from "expo-secure-store";

// AXIOS
import axios from "axios";

// LOCAL HOST
import localHost from "../../localHostIp";

export const getMatchs = createAsyncThunk(
  "MATCHS_REQUEST",
  (data, thunkAPI) => {
    const { loggedUser } = thunkAPI.getState();
    const { toggleRole } = thunkAPI.getState();

    let role = null;
    if (loggedUser.user.role.length > 1) {
      if (toggleRole === false) {
        role = "mentee";
      } else {
        role = "mentor";
      }
    } else {
      role = loggedUser.user.role[0];
    }
    if (role == "mentee") role = "mentor";
    else role = "mentee";

    return SecureStore.getItemAsync("token").then((token) => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return axios
        .get(`http://${localHost}/api/user/userstype`, {
          params: { role: role },
        })
        .then((respuesta) => respuesta.data);
    });
  }
);
