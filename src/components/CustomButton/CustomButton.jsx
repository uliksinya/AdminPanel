import styles from './CustomButton.module.scss';
export const CustomButton = ({content, styleType}) => {
    return(
        styleType === 'active'
        ?
        <button className={`${styles.active} ${styles.normal}`}>
            {content}
        </button>
        :
        <button className={styles.normal}>
            {content}
        </button>
    )
}