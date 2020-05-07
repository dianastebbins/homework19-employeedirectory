import axios from "axios";
const BASEURL = "https://randomuser.me/api/?nat=us&results=20";

export default {
    initialize: function (seed) {
        const seedParam = seed ? "&seed="+seed : "";
        console.log(seedParam);
        return axios.get(BASEURL + seedParam);
    }
};