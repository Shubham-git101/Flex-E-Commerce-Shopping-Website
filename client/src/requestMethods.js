import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjYyMWUzMzZhOGNmZjdmOWYwMmYxYjFlZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjU5NDA4MSwiZXhwIjoxNjQ2ODUzMjgxfQ.SAuT-4SrSzgQIWrs_CwOozVUDqoxm1kgO8K2-QOZ7TI"

// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
