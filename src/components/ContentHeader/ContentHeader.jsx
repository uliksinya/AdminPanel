import styles from "./ContentHeader.module.scss"
import {Tabs} from "../Tabs/Tabs.jsx";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
export const ContentHeader = ({name, handleButtonClick, withTab}) => {
    return(
        <div className={styles.content_header}>
            <div>
                <h2 className={styles.name_container}>{name}</h2>
                {withTab === true
                    ?
                    <div className={styles.tabs_container}><Tabs/></div>
                    :
                    ""
                }
            </div>
            <div className={styles.btn_container}>
                <CustomButton content={"Create"} styleType={"active"} onClick={handleButtonClick}/>
            </div>
        </div>
    )
}