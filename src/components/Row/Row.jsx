import React from "react";
import styles from "./Row.module.scss";
import CheckIcon from '../../assets/img/check.svg';
export const Row = ({ id, rowObj, activeRow, onClick }) => {
    const createRow = (activeRow, index, value) => {
        return (
            <td key={index} className={activeRow === id ? `${styles.active_row}` : ""}>
                {typeof value === "boolean" && value === true
                    ?
                    <img src={CheckIcon} alt={"check icon"}/>
                    :
                    value
                }
            </td>
        );
    };
    return (
        <tr onClick={onClick}>
            {Object.keys(rowObj).map((key, index) => {
                if (index !== 0) {
                    return createRow(activeRow, index, rowObj[key]);
                }
            })}
        </tr>
    );
};
