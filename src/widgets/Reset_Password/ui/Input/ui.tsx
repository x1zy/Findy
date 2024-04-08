
import styles from "./input.module.scss"
import React from 'react';

interface InputFormProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const InputReset: React.FC<InputFormProps> = ({ label, value, onChange }) => {
    return (
        <input
            className={styles.some_input}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            type="text"
            placeholder={label}
        />
    );
}

