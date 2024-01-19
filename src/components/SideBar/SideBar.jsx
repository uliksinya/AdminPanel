import styles from "./SideBar.module.scss";
import CompanyLogo from "../../assets/img/logo_TehnoSky.png";
import SystemQueueLogo from "../../assets/img/logo_system.png";
import IconMail from "../../assets/img/mail.svg";
import IconGlobe from "../../assets/img/globe.svg"
import {MenuButton} from "../MenuButton/MenuButton.jsx";
import {useState} from "react";
export const SideBar = () => {
    const [activeButton, setActiveButton] = useState("Разделы и услуги");

    const handleButtonClick = (content) => {
        setActiveButton(content);
        console.log("Clicked on:", content);
    };
    return (
        <div className={styles.sidebar}>
            <div className={styles.company_logo}>
                <img src={CompanyLogo} alt="tehnosky-logo"/>
            </div>
            <div className={styles.system_queue}>
                <img src={SystemQueueLogo} alt="system-queue-logo"/>
                <div className={styles.system_queue_text}>
                    <p>система управления очередью</p>
                </div>
            </div>
            <ul className={styles.menu}>
                <li>
                    <MenuButton
                    content="Разделы и услуги"
                    isActive={activeButton === "Разделы и услуги"}
                    onClick={() => handleButtonClick("Разделы и услуги")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Рабочие места"
                        isActive={activeButton === "Рабочие места"}
                        onClick={() => handleButtonClick("Рабочие места")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Сотрудники"
                        isActive={activeButton === "Сотрудники"}
                        onClick={() => handleButtonClick("Сотрудники")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Места на парковке"
                        isActive={activeButton === "Места на парковке"}
                        onClick={() => handleButtonClick("Места на парковке")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Управление счетчиком обнуления талонов"
                        isActive={activeButton === "Управление счетчиком обнуления талонов"}
                        onClick={() => handleButtonClick("Управление счетчиком обнуления талонов")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Аналитика и отчеты"
                        isActive={activeButton === "Аналитика и отчеты"}
                        onClick={() => handleButtonClick("Аналитика и отчеты")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Реклама"
                        isActive={activeButton === "Реклама"}
                        onClick={() => handleButtonClick("Реклама")}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Личный кабинет"
                        isActive={activeButton === "Личный кабинет"}
                        onClick={() => handleButtonClick("Личный кабинет")}
                    />
                </li>
            </ul>
            <div className={styles.menu_footer}>
                <div className={styles.menu_footer_folder}>
                    <img src={IconMail} id={styles.mail} alt={"mail-icon"}/>
                    <a href='info@high-tech.by'><span>info@high-tech.by</span></a>
                </div>
                <div className={styles.menu_footer_folder}>
                    <img src={IconGlobe} id={styles.globe} alt={"globe-icon"}/>
                    <a href='https://high-tech.by/'><span>high-tech.by</span></a>
                </div>
            </div>
        </div>
    )
}