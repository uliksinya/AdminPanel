import styles from "./ContentHeader.module.scss"
import {Tabs} from "../Tabs/Tabs.jsx";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
export const ContentHeader = () => {
    return(
        <div className={styles.content_header}>
            <div>
                <h2>Разделы и услуги</h2>
                <Tabs/>
            </div>
            <CustomButton content={"Create"} styleType={"active"}/>
        </div>
    )
}