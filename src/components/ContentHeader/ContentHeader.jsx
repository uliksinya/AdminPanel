import styles from "./ContentHeader.module.scss"
import {Tabs} from "../Tabs/Tabs.jsx";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
export const ContentHeader = ({name, handleButtonClick}) => {
    return(
        <div className={styles.content_header}>
            <div>
                <h2>{name}</h2>
                <Tabs/>
            </div>
            <div className={styles.btn_container}>
                <CustomButton content={"Create"} styleType={"active"} onClick={handleButtonClick}/>
            </div>
        </div>
    )
}