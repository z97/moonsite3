export const fetchByType = (type) => {
  return fetch("https://run.mocky.io/v3/2d06d2c1-5a77-4ecd-843a-53247bcb0b94")
    .then((res) => res.json())
    .then((res) => res.filter((data) => data.type === type));
};

export default { fetchByType };
