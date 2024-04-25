import axios from "axios";

const userRequest = axios.create({
  baseURL: "http://localhost:8080/api/users",
  withCredentials: true, // for session cookies
});

const apiUserLogin = (data) => userRequest.post("/login", data);
const apiUserSignup = (data) => userRequest.post("/signup", data);
const apiUserAuth = () => userRequest.get("/auth");
const apiUserLogout = () => userRequest.get("/logout");

export async function userLogin(username, password) {
  const res = await apiUserLogin({ username, password });
  return res;
}

export async function userSignup(username, password) {
  const res = await apiUserSignup({ username, password });
  return res;
}

export async function userAuth() {
  const res = await apiUserAuth();
  return res;
}

export async function userLogout() {
  const res = await apiUserLogout();
  return res;
}
