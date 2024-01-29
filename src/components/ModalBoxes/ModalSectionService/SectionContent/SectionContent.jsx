import styles from "./SectionContent.module.scss";
import {CustomTextField} from "../../../CustomTextField/CustomTextField.jsx";
import {SearchTextField} from "../../../SearchTextField/SearchTextField.jsx";
import {sections, services} from "../../../../utils/data.js";
import TextField from "@mui/material/TextField";
import {DropDown} from "../../../DropDown/DropDown.jsx";
import RedCross from "../../../../assets/img/red_cross.svg";
import {CustomButton} from "../../../CustomButton/CustomButton.jsx";
import {useState} from "react";
import {validateInputRuName} from "../../../../utils/Validators/validatorRu.js";
import {validateInputEnName} from "../../../../utils/Validators/validatorEn.js";
import {validateInputByName} from "../../../../utils/Validators/validatorBe.js";
export const SectionContent = ({selectedValue, handleRadioChange, setActiveModal}) => {
    const [activeDropDownItem, setActiveDropDownItem] = useState(sections[0].section);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [chapterInputs, setChapterInputs] = useState({
        inputRuName: {
            value: 'Унясенне даных у базу увесенне дадзеных у базу ўвесенне дадзеных у базу',
            isValid: true,
            errorText: ''
        },
        inputEnName: {
            value: 'Унясенне даных у базу увесенне дадзеных у базу ўвесенне дадзеных у базу',
            isValid: true,
            errorText: ''
        },
        inputBeName: {
            value: 'Унясенне даных у базу увесенне дадзеных у базу ўвесенне дадзеных у базу',
            isValid: true,
            errorText: ''
        },
        inputSearch: {
            value: ''
        }
    })
    const handleInputChange = (value, language) => {
        // const value = e.target.value;
        switch (language) {
            case 'ru':
                setChapterInputs((prevInputs) => ({
                    ...prevInputs,
                    inputRuName: {
                        ...prevInputs.inputRuName,
                        value: value,
                        ...validateInputRuName(value),
                    }
                }));
                break;
            case 'en':
                setChapterInputs((prevInputs) => ({
                    ...prevInputs,
                    inputEnName: {
                        ...prevInputs.inputEnName,
                        value: value,
                        ...validateInputEnName(value)
                    }
                }));
                break;
            case 'be':
                setChapterInputs((prevInputs) => ({
                    ...prevInputs,
                    inputBeName: {
                        ...prevInputs.inputBeName,
                        value: value,
                        ...validateInputByName(value)
                    }
                }));
                break;
        }
    };
    const handleSearchInputChange = (e, field) => {
        const value = e.target.value;
        setChapterInputs((prevInputs) => ({
            ...prevInputs,
            [field]: {
                ...prevInputs[field],
                value: value,
            }
        }));
    };
    const handleSearchInput = (e) => {
        handleSearchInputChange(e, 'inputSearch');
    }
    const handleClearInput = () => {
        handleSearchInputChange({target: {value: ''}}, 'inputSearch');
    }

    return (
        <div className={styles.chapter_content}>
            <div>
                <div className={styles.radio_container}>
                    <div className={styles.radio}>
                        <input
                            type="radio"
                            id="charter"
                            value="chapter"
                            checked={selectedValue === 'chapter'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="charter">Раздел</label>
                    </div>
                    <div className={styles.radio}>
                        <input
                            type="radio"
                            id="service"
                            value="service"
                            checked={selectedValue === 'service'}
                            onChange={handleRadioChange}
                        />
                        <label htmlFor="service">Услуга</label>
                    </div>
                </div>
                <div className={styles.name_ru}>
                    <CustomTextField
                        labelName={'Наименование RU'}
                        value={chapterInputs.inputRuName.value}
                        onChange={(e) => handleInputChange(e.target.value, 'ru')}
                        isValid={chapterInputs.inputRuName.isValid}
                        errorText={chapterInputs.inputRuName.errorText}
                        disabled={false}
                        textFieldType={"editValue"}
                    />
                </div>
                <div className={styles.name_en}>
                    <CustomTextField
                        labelName={'Наименование EN'}
                        value={chapterInputs.inputEnName.value}
                        onChange={(e) => handleInputChange(e.target.value, 'en')}
                        isValid={chapterInputs.inputEnName.isValid}
                        errorText={chapterInputs.inputEnName.errorText}
                        disabled={false}
                        textFieldType={"editValue"}
                    />
                </div>
                <div className={styles.search_container}>
                    <SearchTextField
                        label={'Добавить услуги'}
                        onChange={handleSearchInput}
                        value={chapterInputs.inputSearch.value}
                        clearInput={handleClearInput}
                    >
                        {
                            services.map(item => (
                                <div key={item.id} className={styles.service_item}>
                                    {item.content}
                                </div>
                            ))
                        }
                    </SearchTextField>
                </div>
            </div>
            <div className={styles.right_part}>
                <div className={styles.time_container}>
                    <div className={styles.left_time}>
                        <TextField
                            id="time"
                            label="Начало работы"
                            type="time"
                            defaultValue="10:00"
                            inputProps={{
                                step: 300,
                            }}
                            className={styles.start_time}
                        />
                    </div>
                    <div className={styles.right_time}>
                        <TextField
                            id="time"
                            label="Конец работы"
                            type="time"
                            defaultValue="18:00"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300,
                            }}
                            className={styles.start_time}
                            variant={"outlined"}
                        />
                    </div>
                </div>
                <div className={styles.name_be}>
                    <CustomTextField
                        labelName={'Наименование BE'}
                        value={chapterInputs.inputBeName.value}
                        onChange={(e) => handleInputChange(e.target.value, 'be')}
                        isValid={chapterInputs.inputBeName.isValid}
                        errorText={chapterInputs.inputBeName.errorText}
                        disabled={false}
                        textFieldType={"editValue"}
                    />
                </div>
                <div className={styles.chapters_dropdown}>
                    <DropDown
                        isMenuOpen={isMenuOpen}
                        setMenuOpen={setMenuOpen}
                        label={'Родительский раздел'}
                        activeService={activeDropDownItem}
                    >
                        {
                            sections.map(item => (
                                <li key={item.id} className={styles.service_item} onClick={
                                    () => {
                                        setActiveDropDownItem(item.section);
                                        setMenuOpen(false);
                                    }
                                }>
                                    {item.section}
                                </li>
                            ))
                        }
                    </DropDown>
                </div>
                <div className={styles.added_services}>
                    <CustomTextField
                        labelName={'Добавленные услуги'}
                        disabled={false}
                        isValue={false}
                        textFieldType={"notEditValue"}
                    >
                        {
                            services.map(item => (
                                <div key={item.id} className={styles.added_service_item}>
                                    <div>
                                        <img src={RedCross} alt={'cross'}/>
                                    </div>
                                    {item.content}
                                </div>
                            ))
                        }
                    </CustomTextField>
                </div>
                <div className={styles.buttons_container}>
                    <CustomButton content={'отмена'} styleType={'not-active'} onClick={() => setActiveModal(false)}/>
                    <CustomButton content={'сохранить'} styleType={'active'}/>
                </div>
            </div>
        </div>
    )
}