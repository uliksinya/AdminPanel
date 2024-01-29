import {useState} from "react";
import styles from './Tabs.module.scss'

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Все");
    const handleButtonClick = (content) => {
        setActiveTab(content);
    };
    return (
        <div className={styles.tabs}>
            <div
                className={activeTab === "Все" ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => handleButtonClick("Все")}
                id={styles.all}
            >
                Все
                <span className={activeTab === "Все" ? styles.line : ""}></span>
            </div>
            <div
                className={activeTab === "Разделы" ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => handleButtonClick("Разделы")}
                id={styles.sections}
            >
                Разделы
                <span className={activeTab === "Разделы" ? styles.line : ""}></span>
            </div>
            <div
                className={activeTab === "Услуги" ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => handleButtonClick("Услуги")}
                id={styles.services}
            >
                Услуги
                <span className={activeTab === "Услуги" ? styles.line : ""}></span>
            </div>
        </div>
    )
}