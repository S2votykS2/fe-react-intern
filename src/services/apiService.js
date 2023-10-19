import axios from "axios";

const getAllUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`, {
    page,
  });
};

export { getAllUsers };
