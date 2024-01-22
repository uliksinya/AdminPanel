import {Tabs} from "../Tabs/Tabs.jsx";
import {CustomButton} from "../CustomButton/CustomButton.jsx";
import {Header} from "../Header/Header.jsx";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

import { useParams } from "react-router-dom";

export const DynamicContent = () => {
    // const section = useParams();
    console.log('noenrooier');
    // В зависимости от раздела отображаем соответствующий контент
    // switch (section) {
    //     case 'section_services':
    //         return <Tabs />;
    //     case 'section2':
    //         return <CustomButton />;
    //     // Добавьте другие разделы по мере необходимости
    //     default:
    //         return <Header />;
    // }
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const section = searchParams.get("section");
        if (!section) {
            setSearchParams("section-service");
        }
    }, []);
    const { section } = useParams();
    console.log(section);
    return(
        <div>meuuuu</div>
    )
};
