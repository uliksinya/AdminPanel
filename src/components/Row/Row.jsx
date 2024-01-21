import React from "react";
import styles from "./Row.module.scss";

export const Row = ({ id, rowObj, activeRow, onClick }) => {
    const createRow = (activeRow, index, value) => {
        return (
            <td key={index} className={activeRow === id ? `${styles.active_row}` : ""}>
                {value}
            </td>
        );
    };
    return (
        <tr onClick={onClick}>
            {Object.keys(rowObj).map((key, index) => {
                if (index !== 0) {
                    return createRow(activeRow, index, rowObj[key]);
                }
                return null;
            })}
        </tr>
    );
};
