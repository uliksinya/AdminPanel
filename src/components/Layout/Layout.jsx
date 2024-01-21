import {SideBar} from "../SideBar/SideBar.jsx";
import {Header} from "../Header/Header.jsx";
import styles from "./Layout.module.scss"
import {ContentHeader} from "../ContentHeader/ContentHeader.jsx";
import {MainContent} from "../MainContent/MainContent.jsx";

export const Layout = () => {
    return(
        <div className={styles.app_container}>
            <SideBar/>
            <div className={styles.right_side}>
                <Header/>
                <ContentHeader/>
                <MainContent/>
            </div>
        </div>
    )
}