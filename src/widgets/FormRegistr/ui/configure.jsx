import { useState } from 'react';
export const useFormState = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hashed_password, setHashedPassword] = useState("");
    const [confirmed_password, setConfirmedPassword] = useState("");

    return { username, setUsername, email, setEmail, hashed_password, setHashedPassword, confirmed_password, setConfirmedPassword ,password,setPassword};
};