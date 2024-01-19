import styles from './ModalSectionService.module.scss'
export const ModalSectionService = ({active, setActive, children}) => {
    return(
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}