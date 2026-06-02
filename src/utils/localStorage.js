export const saveData = (data) => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(data)
  );
};

export const getData = () => {
  return JSON.parse(
    localStorage.getItem("transactions")
  ) || [];
};