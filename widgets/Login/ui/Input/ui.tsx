
import styles from "./input.module.scss"
import React from 'react';

interface InputFormProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

export const InputForm: React.FC<InputFormProps> = ({placeholder, value, onChange}) => {
    return (
        <input
            className={styles.some_input}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            type="text"
            placeholder={placeholder}
        />
    );
};

