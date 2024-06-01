export function isDataLogin(userData) {
  return Object.keys(userData).length !== 0 && userData.username !== "";
}

export function formatNowDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  return `on ${day} ${month}, ${year}`;
}
