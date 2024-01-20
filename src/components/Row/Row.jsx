import React from "react";
import styles from "./Row.module.scss"

    export const Row = ({isActiveRow}) => {

        const rowData = [
            {
                name: "Услуга: ввесение данных в базу ввесение данных в базу  ввесение данных в базу",
                chapter: "0",
                services: "12",
                name_be: "Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга ",
                name_en: "Service: entering data into the database entering data into a database entering data into a database",
                letter: "-",
                start_end: "10:00-17:00",
                active_state: "🙂"
            },
            {
                name: "Раздел: Услуги таможенник",
                chapter: "0",
                services: "10",
                name_be: "Раздзел: Паслугі мытнік  Раздзел: Паслугі мытнік",
                name_en: "Section: Customs officer services",
                letter: "-",
                start_end: "10:00-17:00",
                active_state: "🙂"
            }
        ];

        const createRows = (obj, isActiveRow) => {
            const cells = [];
            for (let key in obj) {
                cells.push(<td key={key} className={isActiveRow ? `${styles.active_row}` : ""}>{obj[key]}</td>);
            }
            return cells;
        }

        return (
            rowData.map((obj, index) => (
                <tr key={index}>
                    {createRows(obj, isActiveRow)}
                </tr>
            ))
        );
    }