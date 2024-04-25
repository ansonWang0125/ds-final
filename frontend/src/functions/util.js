export default function isDataLogin(userData) {
  return Object.keys(userData).length !== 0 && userData.username !== "";
}
