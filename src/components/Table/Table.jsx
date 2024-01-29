import styles from "./Table.module.scss";
import {Row} from "../Row/Row.jsx";
import React, {useEffect, useRef, useState} from "react";
export const Table = ({initialColumns, rowsData}) => {
    const [activeRow, setRowActive] = useState(0);
    const headerCellResizedRef = useRef(null);
    const [columns, setColumns] = useState(initialColumns);

    useEffect(() => {
        setColumns(initialColumns);
    }, [initialColumns]);
    const handleEditActiveRow = (id) => {
        setRowActive(id);
    }
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
        <table style={{gridTemplateColumns: columns.map((column) => column.size).join(" ")}}>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index} className={styles[column.className]}>
                        {column.label}
                        {index === columns.length - 1
                            ?
                            ""
                            :
                            <span className={styles.resize_handle} onMouseDown={initResize}></span>
                        }
                    </th>
                ))}
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
            {console.log(rowsData)}
            </tbody>
        </table>
    )
}