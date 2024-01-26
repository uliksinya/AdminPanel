import styles from "./Sidebar.module.scss";
import CompanyLogo from "../../assets/img/logo_TehnoSky.png";
import SystemQueueLogo from "../../assets/img/logo_system.png";
import IconMail from "../../assets/img/mail.svg";
import IconGlobe from "../../assets/img/globe.svg"
import {MenuButton} from "../MenuButton/MenuButton.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export const SideBar = () => {
    const [activeButton, setActiveButton] = useState("Разделы и услуги");
    const navigate = useNavigate();
    const handleButtonClick = (content) => {
        setActiveButton(content);
    };
    const redirectToPostPage = (section) => {
        navigate(`${section}`);
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
                        onClick={() => {
                            redirectToPostPage('/section-services');
                            handleButtonClick('Разделы и услуги');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Рабочие места"
                        isActive={activeButton === "Рабочие места"}
                        onClick={() =>  {
                            redirectToPostPage('/workplaces');
                            handleButtonClick('Рабочие места');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Сотрудники"
                        isActive={activeButton === "Сотрудники"}
                        onClick={() => {
                            redirectToPostPage("/employees");
                            handleButtonClick('Сотрудники');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Места на парковке"
                        isActive={activeButton === "Места на парковке"}
                        onClick={() => {
                            redirectToPostPage('/parking-spaces');
                            handleButtonClick('Места на парковке');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Управление счетчиком обнуления талонов"
                        isActive={activeButton === "Управление счетчиком обнуления талонов"}
                        onClick={() => {
                            redirectToPostPage('/counter-management');
                            handleButtonClick('Управление счетчиком обнуления талонов');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Аналитика и отчеты"
                        isActive={activeButton === "Аналитика и отчеты"}
                        onClick={() => {
                            redirectToPostPage('/analytics-and-reports');
                            handleButtonClick('Аналитика и отчеты');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Реклама"
                        isActive={activeButton === "Реклама"}
                        onClick={() => {
                            redirectToPostPage('/advertising');
                            handleButtonClick('Реклама');
                        }}
                    />
                </li>
                <li>
                    <MenuButton
                        content="Личный кабинет"
                        isActive={activeButton === "Личный кабинет"}
                        onClick={() => {
                            redirectToPostPage("/personal-area");
                            handleButtonClick('Личный кабинет');
                        }}
                    />
                </li>
            </ul>
            <div className={styles.menu_footer}>
                <div className={styles.menu_footer_folder}>
                    <img src={IconMail} alt={"mail-icon"}/>
                    <a href='#'><span>info@high-tech.by</span></a>
                </div>
                <div className={styles.menu_footer_folder}>
                    <img src={IconGlobe} alt={"globe-icon"}/>
                    <a href='https://high-tech.by/'><span>high-tech.by</span></a>
                </div>
            </div>
        </div>
    )
}