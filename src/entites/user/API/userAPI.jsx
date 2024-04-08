import {api} from "./indexAPI";
import axios from "axios";
import UserStore from "../userStore";
export const register = async (username, email, hashed_password, confirmed_password) => {
    const response = await api.post("http://127.0.0.1:8000/auth/register", { username, email, hashed_password, confirmed_password });
    UserStore.getInstance().setUser(response.data.user); // Update user information in UserStore upon successful registration
    return response;
  }
  
  export const login = async (email, password) => {
    const response = await api.post("http://localhost:8000/auth/login", { email, password });
    const userData = response.data.user; 
    
    if (userData) {
      const userStore = UserStore.getInstance();
      userStore.setUser({ ...userData, id: userData.id }); 
      userStore.setIsAuth(true); 
    } else {
      alert("Failed to get user data");
    }
  
    return response;
};
  
export const check = async () => {
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/auth/refresh",
            {withCredentials: true})
            localStorage.setItem('token', response.data.access_token)
            return response.data.user
    } catch (e) {
        console.log(e);
    }
}


export const logout = async () => {
    return await api.get("/auth/logout")
}

export const reset = async (oldPassword, newPassword) => {
    return await api.post("http://127.0.0.1:8000/profile/password_recovery", { oldPassword, newPassword });
}