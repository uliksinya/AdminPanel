import styles from './CustomButton.module.scss';
export const CustomButton = ({content, styleType, onClick}) => {
    return(
        styleType === 'active'
        ?
        <button className={`${styles.active} ${styles.normal}`} onClick={onClick}>
            {content}
        </button>
        :
        <button className={styles.normal} onClick={onClick}>
            {content}
        </button>
    )
}