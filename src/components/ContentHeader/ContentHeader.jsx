import styles from "./ContentHeader.module.scss"
import {Tabs} from "../Tabs/Tabs.jsx";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {ModalSectionService} from "../ModalBoxes/ModalSectionService/ModalSectionService.jsx";
import {useState} from "react";
export const ContentHeader = () => {
    const [modalActive, setModalActive] = useState(false);
    const handleButtonClick = () => {
        setModalActive(true);
        console.log("ubiuviu");
        console.log(modalActive);
    };

    return(
        <div className={styles.content_header}>
            <div>
                <h2>Разделы и услуги</h2>
                <Tabs/>
            </div>
            <CustomButton content={"Create"} styleType={"active"} onClick={handleButtonClick}/>
            <ModalSectionService active={modalActive} setActive={setModalActive}>
                <p>oewnowno</p>
            </ModalSectionService>
        </div>
    )
}