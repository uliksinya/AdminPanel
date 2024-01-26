import React, {useState, useRef} from "react";
import styles from "./MainContent.module.scss";
import LeftArr from "../../assets/img/left-arr.svg";
import RightArr from "../../assets/img/right-arr.svg";
import {Row} from "../Row/Row.jsx";
import {rowsData} from "../../data/data.js";
import {ContentHeader} from "../ContentHeader/ContentHeader.jsx";
import {ModalSectionService} from "../ModalBoxes/ModalSectionService/ModalSectionService.jsx";

export const MainContent = ({sectionName}) => {
    const [pageCount, setPageCount] = useState(1);
    const [activeRow, setRowActive] = useState(0);
    const [modalActive, setModalActive] = useState(false);
    const headerCellResizedRef = useRef(null);
    const [columns, setColumns] = useState([
        {size: "26.9fr"},
        {size: "4.7fr"},
        {size: "4.6fr"},
        {size: "22fr"},
        {size: "22fr"},
        {size: "6fr"},
        {size: "7.77fr"},
        {size: "6.03fr"},
    ]);
    const handleEditActiveRow = (id) => {
        setRowActive(id);
    }
    const handleButtonClick = () => {
        setModalActive(true);
    };
    /* Страницы в футере*/
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
    /* Изменение ширины столбцов таблицы */
    const checkTableWidth = (refTh, width) => {
        const thElements = document.querySelectorAll('thead th');
        let totalWidth = 0;
        thElements.forEach((th, index) => {
            if (index !== refTh.current.cellIndex) {
                totalWidth += th.clientWidth;
                console.log(`+${th.clientWidth}`);
            }
            console.log(th);
        });
        return (totalWidth + width) < 1600;
    }
    const onMouseMove = (e) => {
        const width = e.pageX - (headerCellResizedRef.current.getBoundingClientRect().left + window.scrollX);
        if (checkTableWidth(headerCellResizedRef, width)) {
            setColumns((prevColumns) =>
                prevColumns.map((column, index) =>
                    index === headerCellResizedRef.current.cellIndex
                        ? {...column, size: `minmax(${Math.max(80, width)}px, 1fr)`}
                        : column
                )
            );
        }
        // console.log(`pageX ${e.pageX}`);
        // console.log(`scroll ${window.scrollX}`);
        // console.log(`left ${headerCellResizedRef.current.getBoundingClientRect().left}`);
        // console.log(`width ${width}`);
    };
    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };
    const initResize = ({target}) => {
        headerCellResizedRef.current = target.parentNode;
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };
    return (
        <div className={styles.content_container}>
            <ModalSectionService active={modalActive} setActive={setModalActive} name={sectionName}/>
            <div className={styles.main_container}>
                <ContentHeader name={sectionName} handleButtonClick={handleButtonClick}/>
                <div className={styles.table_container}>
                    <table style={{gridTemplateColumns: columns.map((column) => column.size).join(" ")}}>
                        <thead>
                            <tr>
                                <th className={styles.name}>Наименование<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                                <th className={styles.chapter}>Раздел<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                                <th className={styles.services}>Услуги<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                                <th className={styles.name_be}>Наименование BE<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                                <th className={styles.name_en}>Наименование EN<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                                <th className={styles.letter}>Буква при выдаче<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                                <th className={styles.start_end}>Начало-конец работы<span className={styles.resize_handle}></span></th>
                                <th className={styles.active_state}>Активный</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rowsData.map((rowObj, index) => (
                                <Row
                                    key={rowObj.id}
                                    id={rowObj.id}
                                    activeRow={activeRow}
                                    rowObj={rowObj}
                                    onClick={() => handleEditActiveRow(index)}
                                />
                            ))}
                        </tbody>
                    </table>
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
    );
}