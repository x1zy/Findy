import styles from "./btn.module.scss"
import React from 'react';

interface ButtonFormProps {
    onClick: () => void;
}

export const ButtonForm: React.FC<ButtonFormProps> = ({onClick}) => {
    return (
        <button className={styles.login_button} type="button" onClick={onClick}>
            Логин
        </button>
    );
};

