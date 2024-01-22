import styles from './ModalSectionService.module.scss'
export const ModalSectionService = ({active, setActive, name}) => {
    return(
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={event => event.stopPropagation()}>
               <h2>{name}</h2>
                <div className={styles.radio_container}>
                    <div id={styles.radio}>
                        <input type="radio" id="charter" name="group" value="chapter" checked />
                        <label htmlFor="charter">Раздел</label>
                    </div>
                    <div id={styles.radio}>
                        <input type="radio" id="service" name="group" value="service" />
                        <label htmlFor="service">Услуга</label>
                    </div>
                </div>
            </div>
        </div>
    )
}