import React, { useState } from 'react';
import styles from "./SearchTextField.module.scss";
import CrossIcon from '../../assets/img/cross.svg';

export const SearchTextField = ({ label, onChange, children, value, clearInput }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e);
    };

    const handleClearInput = () => {
        setInputValue('');
        clearInput();
    };

    return (
        <div className={styles.textfield_container}>
            <div className={styles.controller}>
                <input onChange={handleChange} placeholder={'Введите название ...'} value={inputValue} spellCheck="false"/>
                <label className={styles.label_container}>{label}</label>
                <div className={styles.image} onClick={handleClearInput}>
                    {inputValue && <img src={CrossIcon} alt={'cross'} />}
                </div>
            </div>
            <div className={styles.items_container}>
                {children}
            </div>

        </div>
    );
};
