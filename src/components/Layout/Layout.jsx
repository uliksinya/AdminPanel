import {SideBar} from "../SideBar/SideBar.jsx";
import {Header} from "../Header/Header.jsx";
import styles from "./Layout.module.scss"
import {Outlet} from 'react-router-dom';
import {ModalSectionService} from "../ModalBoxes/ModalSectionService/ModalSectionService.jsx";
import React from "react";

export const Layout = () => {
    return(
        <div className={styles.app_container}>
            <SideBar/>
            <div className={styles.right_side}>
                <Header/>
                <Outlet/>
            </div>
        </div>

    )
}