"use client"
import styles from "./information.module.scss"
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserStore from "@/entites/user/userStore";
import { observer } from "mobx-react-lite";
import axios from "axios";

export const UserProfile = observer(() => {
  const userStore = UserStore.getInstance();
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('id');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/auth/refresh/${userId}`);
        const username = response.data.username;
        userStore.setUser({ id: userId, username: username });
      } catch (error) {
        console.error(error);
      }
    };

    if (userId) {
      fetchUsername();
    }
  }, [userId]); // добавлен userId в зависимости

  return (
    <div className={styles.information_container}>
      <div className={styles.name}>
        <p className={styles.edit}>Редактировать</p>
        <p className={styles.username}>Username: {userStore.user.username}</p>
      </div>
      <div className={styles.social}>
        <div>@</div>
        <img src="/Group.png" alt="Вконтакте" />
      </div>
      <div className={styles.about_me}>
        <div className={styles.about_name}>О себе</div>
        <div className={styles.about_text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolores aliquid quo neque vitae obcaecati! Vel ad nesciunt eos recusandae illo, obcaecati voluptas ipsum minus amet facere ipsa incidunt est.
        </div>
      </div>
    </div>
  );
});