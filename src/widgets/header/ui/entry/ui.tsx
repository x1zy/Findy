"use client"
import { observer } from "mobx-react-lite";
import UserStore from "@/entites/user/userStore";
import Link from "next/link";

export const Entry = observer(() => {
  const userStore = UserStore.getInstance(); 

  return (
    <div>
      {userStore.isAuthenticated() ? (
        <Link
          legacyBehavior
         href={{ pathname: "/pages/profilePage" , query: { id: userStore.user.id } }}
        >
          <a>Профиль</a>
        </Link>
      ) : (
        <Link legacyBehavior href="/pages/registerPage">
          <a>Вход</a>
        </Link>
      )}
    </div>
  );
});
