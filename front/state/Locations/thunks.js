// REACT REDUX
import { createAsyncThunk } from "@reduxjs/toolkit";

// AXIOS
import axios from "axios";

// LOCAL HOST
import localHost from "../../localHostIp";

export const getLocations = createAsyncThunk("LOCATIONS_REQUEST", () => {
  return axios.get(`http://${localHost}/api/locations`).then((res) => res.data);
});
