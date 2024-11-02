import axios from "axios";

const API_URL = "http://localhost:5000/api/users";

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  localStorage.setItem("token", response.data.token); // Store JWT token
  localStorage.setItem("email", email);
  return response.data;
};

export const logout = async (email: string | any) => {
  const response = await axios.post(`${API_URL}/logout`, { email });
  localStorage.removeItem("token");
  localStorage.removeItem("email");
  return response.data;
};
