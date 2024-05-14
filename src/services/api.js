import axios from "axios";

export const api =  axios.create({
    baseURL: "https://back-end-rocketmovies-de6s.onrender.com" // endereço do bac-end -->


});

//api.get("/users/:id")