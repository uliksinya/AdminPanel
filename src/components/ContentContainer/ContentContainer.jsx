import styles from "./ContentContainer.module.scss";
import {ContentHeader} from "../ContentHeader/ContentHeader.jsx";
import LeftArr from "../../assets/img/left-arr.svg";
import RightArr from "../../assets/img/right-arr.svg";
import React, {useState} from "react";
import {Table} from '../Table/Table.jsx';

export const ContentContainer = ({sectionName, withTab, initialColumns, ModalComponent, rowsData}) => {
    const [pageCount, setPageCount] = useState(1);
    const [modalActive, setModalActive] = useState(false);
    const handleButtonClick = () => {
        setModalActive(true);
    };
    const pageForward = () => {
        if (pageCount < 100) {
            setPageCount((prevPageCount) => prevPageCount + 1);
        }
    };
    const pageBack = () => {
        if (pageCount > 1) {
            setPageCount((prevPageCount) => prevPageCount - 1);
        }
    };
    return(
        <div className={styles.content_container}>
            <ModalComponent active={modalActive} setActive={setModalActive} name={sectionName}/>
            <div className={styles.main_container}>
                <ContentHeader name={sectionName} handleButtonClick={handleButtonClick} withTab={withTab}/>
                <div className={styles.table_container}>
                    <Table initialColumns={initialColumns} rowsData={rowsData}/>
                    <div className={styles.main_container_footer}>
                        Страница: {pageCount}
                        <div className={styles.left_arr} onClick={pageBack}>
                            <img src={LeftArr} alt="Left Arrow"/>
                        </div>
                        <div className={styles.right_arr} onClick={pageForward}>
                            <img src={RightArr} alt="Right Arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}