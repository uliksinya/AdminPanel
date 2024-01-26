import styles from './DropDown.module.scss';
import RowUp from '../../assets/img/row_up.svg';
import RowDown from '../../assets/img/row_down.svg';

export const DropDown = ({isMenuOpen, setMenuOpen, label, activeService, children}) => {
    const handleMenuToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div className={styles.dropdown}>
            <div className={isMenuOpen ? `${styles.controller} ${styles.open}` : styles.controller}
                 onClick={handleMenuToggle}>
                <span>{activeService}</span>
                <label className={styles.services}>{label}</label>
                <div className={styles.image}>
                    {isMenuOpen ? <img src={RowUp} alt="Row Up"/> : <img src={RowDown} alt="Row Down"/>}
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
