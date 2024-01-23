import styles from './CustomTextField.module.scss';

export const CustomTextField = ({ labelName, value, onChange, isValid, errorText, disabled, isValue, children }) => {
    return (
        <div className={styles.customTextFieldContainer}>
            <label className={styles.custom_label}>{labelName}</label>
            {isValue ? (
                <div>
                    <textarea
                        spellCheck="false"
                        id="myText"
                        value={value}
                        className={styles.custom_textfield}
                        onChange={onChange}
                        disabled={disabled}
                    />
                    {isValid ? "" : <h3 className={styles.error_text}>{errorText}</h3>}
                </div>
            ) : (
                <div className={styles.custom_textfield}>{children}</div>
            )}
        </div>
    );
};
