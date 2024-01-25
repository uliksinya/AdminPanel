import styles from './DropDown.module.scss';
import RowUp from '../../assets/img/row_up.svg';
import RowDown from '../../assets/img/row_down.svg';
import { useState } from "react";

export const DropDown = ({ isOpen, label, firstService, children }) => {
    const [isMenuOpen, setMenuOpen] = useState(isOpen);

    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div className={styles.dropdown}>
            <div className={isMenuOpen ? `${styles.controller} ${styles.open}` : styles.controller} onClick={handleMenuToggle} >
                {isMenuOpen ? "" : <span>{firstService}</span>}
                <label className={styles.services}>{label}</label>
                <div className={styles.image} >
                    {isMenuOpen ? <img src={RowUp} alt="Row Up" /> : <img src={RowDown} alt="Row Down" />}
                </div>
            </div>
            {isMenuOpen && (
                <ul className={styles.menu}>
                    {children}
                </ul>
            )}
        </div>
    );
};
