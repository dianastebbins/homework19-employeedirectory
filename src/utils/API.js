import axios from "axios";
const BASEURL = "https://randomuser.me/api/?nat=us&results=200";

export default {
    initialize: function (seed) {
        const seedParam = seed ? "&seed="+seed : "";
        return axios.get(BASEURL + seedParam);
    }
};