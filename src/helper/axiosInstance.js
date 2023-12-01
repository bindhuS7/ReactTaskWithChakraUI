import axios from "axios";
// import {create} from "react";

export const axiosInstance=axios.create({
    baseURL:"http://localhost:4000/posts"
})
