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
            >
                Все
            </div>
            <div
                className={activeTab === "Разделы" ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => handleButtonClick("Разделы")}
            >
                Разделы
            </div>
            <div
                className={activeTab === "Услуги" ? `${styles.tab} ${styles.active}` : styles.tab}
                onClick={() => handleButtonClick("Услуги")}
            >
                Услуги
            </div>
        </div>
    )
}