import axios from "axios";

export default {
  getCoord: function(str) {
    return axios.get("/api/coord/" + str);
  },
  getWeather: function(lat, lon) {
    return axios.get("/api/weather/" + lat + "/" + lon);
  }
}
