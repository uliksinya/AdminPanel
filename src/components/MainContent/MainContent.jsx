import styles from "./MainContent.module.scss";
import LeftArr from "../../assets/img/left-arr.svg";
import RightArr from "../../assets/img/right-arr.svg";
import {useState} from "react";

export const MainContent = () => {
    const [pageCount, setPageCount] = useState(1);
    function pageForward(){
        if (pageCount < 100){
            setPageCount(pageCount + 1);
        }
        console.log("in function")
    }
    function pageBack(){
        if(pageCount > 1){
            setPageCount(pageCount - 1);
        }
    }
    return(
        <div className={styles.main_container}>
            <div className={styles.table}>
                <div className={`${styles.table_header} ${styles.name}`}>Наименование</div>
                <div className={`${styles.table_header} ${styles.chapter}`}>Раздел</div>
                <div className={`${styles.table_header} ${styles.services}`}>Услуги</div>
                <div className={`${styles.table_header} ${styles.name_be}`}>Наименование BE</div>
                <div className={`${styles.table_header} ${styles.name_en}`}>Наименование EN</div>
                <div className={`${styles.table_header} ${styles.letter}`}>Буква при выдаче</div>
                <div className={`${styles.table_header} ${styles.start_end}`}>Начало-конец работы</div>
                <div className={`${styles.table_header} ${styles.active_state}`}>Активный</div>


                    <div className={styles.table_item}>
                        Услуга: ввесение данных в базу
                        ввесение данных в базу  ввесение данных в базу
                    </div>
                    <div className={styles.table_item}>0</div>
                    <div className={styles.table_item}>12</div>
                    <div className={styles.table_item}>
                        Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга
                    </div>
                    <div className={styles.table_item}>
                        Service: entering data into the database
                        entering data into a database entering data into a database
                    </div>
                    <div className={styles.table_item}>-</div>
                    <div className={styles.table_item}>10:00-17:00</div>
                    <div className={styles.table_item}></div>

            </div>


            <div className={styles.main_container_footer}>
                Страница: {pageCount}
                <div className={styles.left_arr} onClick={pageBack}><img src={LeftArr}/></div>
                <div className={styles.right_arr} onClick={pageForward}><img src={RightArr}/></div>
            </div>
        </div>
    )
}