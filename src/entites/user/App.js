import React, {useContext, useEffect} from "react";

import {observer} from "mobx-react-lite";

import {Context} from "@/entites/user/index"
import {check} from "@/entites/user/API/userAPI";

export const App = observer(() => {
    const {user} = useContext(Context)
    const {team} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            check().then(data => {
                user.setIsAuth(true);
                user.setUser(data);
            })
        }
    }, [])}
)
