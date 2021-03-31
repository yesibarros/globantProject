import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const localHost = require("../../localHostIp");

export const getLocations = createAsyncThunk("LOCATIONS_REQUEST", () => {
  return axios.get(`http://${localHost}/api/locations`).then((res) => res.data);
});
