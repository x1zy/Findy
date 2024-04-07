"use client"

import React, { useState } from 'react';
import { reset } from "@/entites/user/API/userAPI";
import { login } from "@/entites/user/API/userAPI"; 
import styles from "../Input/input.module.scss";
import UserStore from "@/entites/user/userStore";

export const PasswordResetForm = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isOldPasswordVerified, setIsOldPasswordVerified] = useState(false);
  const userStore = UserStore.getInstance();

  const handlePasswordReset = async () => {
    try {
      const loginPassword = userStore.user.password; 
      const response = await login(userStore.user.email, oldPassword); 
      if (response && response.data && response.data.access_token) {
        if (oldPassword === loginPassword) {
          
          await reset(oldPassword, newPassword);
          console.log("Password reset successful");
        } else {
          console.error("Old password verification failed");
        }
      } else {
        throw new Error('Invalid response data received');
      }
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        className={styles.some_input}
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        type="password"
        placeholder="Enter Old Password"
      />
      <input
        className={styles.some_input}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
        placeholder="Enter New Password"
      />
      <button onClick={handlePasswordReset}>Reset Password</button>
    </div>
  );
}