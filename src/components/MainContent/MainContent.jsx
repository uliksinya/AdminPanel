import React, {useState, useRef, useEffect} from "react";
import styles from "./MainContent.module.scss";
import LeftArr from "../../assets/img/left-arr.svg";
import RightArr from "../../assets/img/right-arr.svg";
import {Row} from "../Row/Row.jsx";
export const MainContent = () => {
    const [pageCount, setPageCount] = useState(1);
    const [isActiveRow, setRowActive] = useState(true);
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
    const onMouseMove = (e) => {
            const width = e.pageX - headerCellResizedRef.current.offsetLeft;
            console.log(`pageX ${e.pageX}`);

            setColumns((prevColumns) =>
                prevColumns.map((column, index) =>
                    index === headerCellResizedRef.current.cellIndex
                        ? { ...column, size: `minmax(${Math.max(80, width)}px, 1fr)` }
                        : column
                ));
            console.log(`width ${width}`);
    };
    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        headerCellResizedRef.current.classList.remove("header--being-resized");
        // headerCellResizedRef.current = null;
    };
    const initResize = ({ target }) => {
        headerCellResizedRef.current = target.parentNode;
        console.log(target.parentNode);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        headerCellResizedRef.current.classList.add("header--being-resized");
    };
    return (
        <div className={styles.main_container}>
            <table style={{ gridTemplateColumns: columns.map((column) => column.size).join(" ") }}>
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
                    <tr>
                        <td>Услуга: ввесение данных в базу ввесение данных в базу  ввесение данных в базу</td>
                        <td>0</td>
                        <td>12</td>
                        <td>Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга </td>
                        <td>Service: entering data into the database entering data into a database entering data into a database</td>
                        <td>-</td>
                        <td>10:00-17:00</td>
                        <td>🙂</td>
                    </tr>
                    <tr>
                        <td>Раздел: Услуги таможенник</td>
                        <td>0</td>
                        <td>10</td>
                        <td>Раздзел: Паслугі мытнік  Раздзел: Паслугі мытнік</td>
                        <td>Section: Customs officer services</td>
                        <td>-</td>
                        <td>10:00-17:00</td>
                        <td>🙂</td>
                    </tr>
                    <Row isActiveRow={isActiveRow}/>
                </tbody>
            </table>
            <div className={styles.main_container_footer}>
                Страница: {pageCount}
                <div className={styles.left_arr} onClick={pageBack}>
                    <img src={LeftArr} alt="Left Arrow" />
                </div>
                <div className={styles.right_arr} onClick={pageForward}>
                    <img src={RightArr} alt="Right Arrow" />
                </div>
            </div>
        </div>
    );
};