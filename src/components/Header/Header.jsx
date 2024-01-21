import {generateDate, generateTime, updateDateTime} from "../../utils/utilsFunctions.js";
import styles from "./Header.module.scss";
import AdminLogo from "../../assets/img/admin.svg";
export const Header = () => {
    window.onload = function() {
        updateDateTime();
    };
    return(
        <div className={styles.header}>
            <div className={styles.datetime}>
                <div className={styles.time}><span id={"time"}>{generateTime()}</span></div>
                <div className={styles.date}><span id={"date"}>{generateDate()}</span></div>
            </div>
            <div className={styles.admin}>
                <img src={AdminLogo} alt={"admin-logo"}/>
                <div><span>Администратор</span></div>
            </div>
        </div>
    )
}