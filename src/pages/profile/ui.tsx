"use client"
import {RegisterPage} from "@/pages/Register/ui"
import {Link_login} from "@/widgets/Register/ui/Btn_Link_Login/index"
import {Header} from "@/widgets/header/ui/index"
import styles from "./profile.module.scss"
import {UserProfile} from "@/widgets/Profile/ui/information/ui"
import { Avatar } from "@/widgets/Profile/ui/avatar/ui"
import {Hobby } from "@/widgets/Profile/ui/hobby/ui"
import { BrowserRouter as Router } from 'react-router-dom';
export function Profile() {
  return (
      <Router>
          <>
        <div className={styles.body}>
              <Header />
              <div className={styles.profile}>
                  <Avatar />
                  <UserProfile />
                  <Hobby />
              </div>
              </div>
          </>
      </Router>
  );
}