import {SideBar} from "../SideBar/SideBar.jsx";
import {Header} from "../Header/Header.jsx";
import style from "./Layout.module.scss"
import {ContentHeader} from "../ContentHeader/ContentHeader.jsx";
import {MainContent} from "../MainContent/MainContent.jsx";

export const Layout = () => {
    return(
        <div className={style.app_container}>
            <SideBar/>
            <div>
                <Header/>
                <ContentHeader/>
                <MainContent/>
            </div>
        </div>
    )
}