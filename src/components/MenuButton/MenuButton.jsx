import styles from './MenuButton.module.scss';
export const MenuButton = ({content, isActive, onClick}) => {

    return (
        isActive
        ?
        <button className={`${styles.menu_button} ${styles.active}`} onClick={onClick}>
            <h3 className={`${styles.menu_button_text} ${styles.active}`}>{content}</h3>
        </button>
        :
        <button className={styles.menu_button} onClick={onClick}>
            <h3 className={styles.menu_button_text}>{content}</h3>
        </button>
    )
}
export default MenuButton;