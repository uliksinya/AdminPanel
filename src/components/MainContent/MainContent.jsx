import React, {useState, useRef, useEffect} from "react";
import styles from "./MainContent.module.scss";
import LeftArr from "../../assets/img/left-arr.svg";
import RightArr from "../../assets/img/right-arr.svg";

export const MainContent = () => {
    const [pageCount, setPageCount] = useState(1);
    const [columns, setColumns] = useState([
        // { startSize: "26.9fr", size: "26.9fr" },
        // { startSize: "4.7fr", size: "4.7fr" },
        // { startSize: "4.6fr", size: "4.6fr" },
        // { startSize: "22fr", size: "22fr" },
        // { startSize: "22f", size: "22fr" },
        // { startSize: "6fr", size: "6fr" },
        // { startSize: "7.77fr", size: "7.77fr" },
        // { startSize: "6.03fr", size: "6.03fr" },
        {size: "1fr"},
        {size: "1fr"},
        {size: "1fr"},
        {size: "1fr"},
        {size: "1fr"},
        {size: "1fr"},
        {size: "1fr"},
        {size: "1fr"},
    ]);
    const horizontalScrollOffsetRef = useRef(0);
    const headerBeingResizedRef = useRef(null);

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
        requestAnimationFrame(() => {
            // horizontalScrollOffsetRef.current = window.scrollX;
            const width = horizontalScrollOffsetRef.current + e.clientX - headerBeingResizedRef.current.offsetLeft;
            console.log( headerBeingResizedRef.current);
            console.log(e.clientX);
            console.log( headerBeingResizedRef.current.offsetLeft);
            console.log(headerBeingResizedRef.current.cellIndex);

            setColumns((prevColumns) =>
                prevColumns.map((column, index) =>
                    index === headerBeingResizedRef.current.cellIndex
                        ? { ...column, size: `minmax(${Math.max(20, width)}px, 1fr)` }
                        : column
                ));
            console.log(`width ${width}`)

            console.log(horizontalScrollOffsetRef.current);
        });
    };
    const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
        headerBeingResizedRef.current.classList.remove("header--being-resized");
        // headerBeingResizedRef.current = null;
    };

    const initResize = ({ target }) => {
        headerBeingResizedRef.current = target.parentNode;
        console.log(target.parentNode);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        headerBeingResizedRef.current.classList.add("header--being-resized");
    };
    console.log(columns);
    return (
        <div className={styles.main_container}>
            <table style={{ gridTemplateColumns: columns.map((column) => column.size).join(" ") }}>
                <thead>
                    <tr>
                        <th>Наименование<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Раздел<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Услуги<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Наименование BE<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Наименование EN<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Буква при выдаче<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Начало-конец работы<span className={styles.resize_handle} onMouseDown={initResize}></span></th>
                        <th>Активный</th>
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
