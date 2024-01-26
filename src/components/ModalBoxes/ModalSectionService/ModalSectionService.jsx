import styles from './ModalSectionService.module.scss'
import {useState} from "react";
import {SectionContent} from "./SectionContent/SectionContent.jsx";
import {ServiceContent} from "./ServiceContent/ServiceContent.jsx";

export const ModalSectionService = ({active, setActive, name}) => {
    const [selectedValue, setSelectedValue] = useState('chapter');

    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
            <div className={selectedValue === 'chapter' ? styles.chapter_container : styles.service_container}
                 onClick={event => event.stopPropagation()}>
                <h2>{name}</h2>
                {selectedValue === 'chapter'
                    ?
                    <SectionContent
                        selectedValue={selectedValue}
                        handleRadioChange={handleRadioChange}
                        setActiveModal={setActive}
                    />
                    :
                    <ServiceContent
                        selectedValue={selectedValue}
                        handleRadioChange={handleRadioChange}
                        setActiveModal={setActive}
                    />
                }
            </div>
        </div>
    );
}
