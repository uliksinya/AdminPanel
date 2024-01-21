import React, {useState, useRef, useEffect} from "react";
import styles from "./MainContent.module.scss";
import LeftArr from "../../assets/img/left-arr.svg";
import RightArr from "../../assets/img/right-arr.svg";
import {Row} from "../Row/Row.jsx";
import {rowsData} from "../../data/data.js";
export const MainContent = () => {
    const [pageCount, setPageCount] = useState(1);
    const [activeRow, setRowActive] = useState(0);
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
    const headerCellResizedRef = useRef(null);
    /* Изменение активной строки при клике и при помощи клавиш*/
    const handleEditActiveRow = (id) => {
        setRowActive(id);
    }
    const handleKeyDown = (e) => {
        switch (e.key) {
            case "ArrowUp":
                setRowActive((prevActiveRow) =>
                    prevActiveRow > 0 ? prevActiveRow - 1 : prevActiveRow
                );
                break;
            case "ArrowDown":
                setRowActive((prevActiveRow) =>
                    prevActiveRow < rowsData.length - 1
                        ? prevActiveRow + 1
                        : prevActiveRow
                );
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeRow]);

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
        console.log(`ths ${thElements}`);
        let totalWidth = 0;
        thElements.forEach((th, index) => {
            if (index !== refTh.current.cellIndex) {
                totalWidth += th.clientWidth;
                console.log(`+${th.clientWidth}`);
            }
            console.log(th);
        });
        console.log(totalWidth+width);
        return (totalWidth + width) < 1600;
    }
    const onMouseMove = (e) => {
            const width = e.pageX - (headerCellResizedRef.current.getBoundingClientRect().left + window.scrollX);
            if(checkTableWidth(headerCellResizedRef, width)){
                setColumns((prevColumns) =>
                    prevColumns.map((column, index) =>
                        index === headerCellResizedRef.current.cellIndex
                            ? { ...column, size: `minmax(${Math.max(80, width)}px, 1fr)` }
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
        //headerCellResizedRef.current.classList.remove("header--being-resized");
        //headerCellResizedRef.current = null;
    };
    const initResize = ({ target }) => {
        headerCellResizedRef.current = target.parentNode;
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
        //headerCellResizedRef.current.classList.add("header--being-resized");
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
                    <img src={LeftArr} alt="Left Arrow" />
                </div>
                <div className={styles.right_arr} onClick={pageForward}>
                    <img src={RightArr} alt="Right Arrow" />
                </div>
            </div>
        </div>
    );
}