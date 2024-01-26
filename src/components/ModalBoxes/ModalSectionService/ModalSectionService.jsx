import styles from './ModalSectionService.module.scss'
import {useState} from "react";
import TextField from "@mui/material/TextField";
import {CustomTextField} from "../../CustomTextField/CustomTextField.jsx";
import {validateInputRuName} from "../../../utils/Validators/validatorRu.js";
import {validateInputEnName} from "../../../utils/Validators/validatorEn.js";
import {DropDown} from "../../DropDown/DropDown.jsx";
import {sections, services} from "../../../utils/data.js";
import {validateInputByName} from "../../../utils/Validators/validatorBe.js";
import {CustomButton} from "../../CustomButton/CustomButton.jsx";
import {SearchTextField} from "../../SearchTextField/SearchTextField.jsx";
import RedCross from "../../../assets/img/red_cross.svg";

export const ModalSectionService = ({active, setActive, name}) => {
    const [selectedValue, setSelectedValue] = useState('chapter');
    const [inputRuName, setInputRuName] = useState(
        {
            value: 'Унясенне даных у базу увесенне дадзеных у базу ўвесенне дадзеных у базу',
            isValid: true,
            errorText: ''
        }
    );
    const [inputEnName, setInputEnName] = useState(
        {
            value: 'Унясенне даных у базу увесенне дадзеных у базу ўвесенне дадзеных у базу',
            isValid: true,
            errorText: ''
        }
    );
    const [inputBeName, setInputBeName] = useState(
        {
            value: 'Унясенне даных у базу увесенне дадзеных у базу ўвесенне дадзеных у базу',
            isValid: true,
            errorText: ''
        }
    );
    const [searchValue, setSearchValue] = useState('');
    const [activeDropDownItem, setActiveDropDownItem] = useState(sections[0].section);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleInputRuName = (e) => {
        const value = e.target.value;
        setInputRuName({
            value,
            ...validateInputRuName(value),
        });
    };
    const handleInputEnName = (e) => {
        const value = e.target.value;
        setInputEnName({
            value,
            ...validateInputEnName(value),
        });
    }
    const handleInputBeName = (e) => {
        const value = e.target.value;
        setInputBeName({
            value,
            ...validateInputByName(value),
        });
    }
    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }
    const handleClearInput = () => {
        setSearchValue('');
    }
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
             onClick={() => setActive(false)}>
            <div className={selectedValue === 'chapter' ? styles.chapter_container : styles.service_container}
                 onClick={event => event.stopPropagation()}>
                <h2>{name}</h2>
                {selectedValue === 'chapter'
                    ?
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
                                    value={inputRuName.value}
                                    onChange={handleInputRuName}
                                    isValid={inputRuName.isValid}
                                    errorText={inputRuName.errorText}
                                    disabled={false}
                                    textFieldType={"editValue"}
                                />
                            </div>
                            <div className={styles.name_en}>
                                <CustomTextField
                                    labelName={'Наименование EN'}
                                    value={inputEnName.value}
                                    onChange={handleInputEnName}
                                    isValid={inputEnName.isValid}
                                    errorText={inputEnName.errorText}
                                    disabled={false}
                                    textFieldType={"editValue"}
                                />
                            </div>
                            <div className={styles.search_container}>
                                <SearchTextField
                                    label={'Добавить услуги'}
                                    onChange={handleSearchInput}
                                    value={searchValue}
                                    clearInput={handleClearInput}
                                >
                                    {
                                        services.map(item => (
                                            <div key={item.id} className={styles.service}>
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
                                            step: 300, // 5 min
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
                                            step: 300, // 5 min
                                        }}
                                        className={styles.start_time}
                                        variant={"outlined"}
                                    />
                                </div>
                            </div>
                            <div className={styles.name_be}>
                                <CustomTextField
                                    labelName={'Наименование BE'}
                                    value={inputBeName.value}
                                    onChange={handleInputBeName}
                                    isValid={inputBeName.isValid}
                                    errorText={inputBeName.errorText}
                                    disabled={false}
                                    textFieldType={"editValue"}
                                />
                            </div>
                            <div className={styles.dropdown_container_2}>
                                <DropDown
                                    isMenuOpen={isMenuOpen}
                                    setMenuOpen={setMenuOpen}
                                    label={'Родительский раздел'}
                                    activeService={activeDropDownItem}
                                >
                                    {
                                        sections.map(item => (
                                            <li key={item.id} className={styles.service} onClick={
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
                                            <div key={item.id} className={styles.added_service}>
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
                                <CustomButton content={'отмена'} styleType={'not-active'} onClick={() => setActive(false)}/>
                                <CustomButton content={'сохранить'} styleType={'active'}/>
                            </div>
                        </div>
                    </div>
                    :
                    <div className={styles.service_conent}>
                        <div>
                            <div className={styles.first_row}>
                                <div className={styles.radio_container_service}>
                                    <div className={styles.radio}>
                                        <input
                                            type="radio"
                                            id="charter"
                                            name="group"
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
                                            name="group"
                                            value="service"
                                            checked={selectedValue === 'service'}
                                            onChange={handleRadioChange}
                                        />
                                        <label htmlFor="service">Услуга</label>
                                    </div>
                                </div>
                                <div className={styles.letter_container}>
                                    <CustomTextField
                                        labelName={'Буква при выдаче билета'}
                                        value={'Б'}
                                        disabled={false}
                                        isValue={true}
                                        textFieldType={'notEditValue'}
                                    >
                                        {
                                        <div  className={styles.letter}>
                                            <span>Б</span>
                                        </div>
                                        }
                                    </CustomTextField>
                                </div>
                            </div>
                            <div className={styles.name_ru_sevice}>
                                <CustomTextField
                                    labelName={'Наименование RU'}
                                    value={inputRuName.value}
                                    onChange={handleInputRuName}
                                    isValid={inputRuName.isValid}
                                    errorText={inputRuName.errorText}
                                    disabled={false}
                                    textFieldType={'editValue'}
                                />
                            </div>
                            <div className={styles.name_en}>
                                <CustomTextField
                                    labelName={'Наименование EN'}
                                    value={inputEnName.value}
                                    onChange={handleInputEnName}
                                    isValid={inputEnName.isValid}
                                    errorText={inputEnName.errorText}
                                    disabled={false}
                                    textFieldType={'editValue'}
                                />
                            </div>
                        </div>
                        <div className={styles.right_part}>
                            <div className={`${styles.time_container} ${styles.time_service}`}>
                                <div className={styles.left_time}>
                                    <TextField
                                        id="time"
                                        label="Начало работы"
                                        type="time"
                                        defaultValue="10:00"
                                        inputProps={{
                                            step: 300, // 5 min
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
                                            step: 300, // 5 min
                                        }}
                                        className={styles.start_time}
                                        variant={"outlined"}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.name_be} ${styles.be_service}`}>
                                <CustomTextField
                                    labelName={'Наименование BE'}
                                    value={inputBeName.value}
                                    onChange={handleInputBeName}
                                    isValid={inputBeName.isValid}
                                    errorText={inputBeName.errorText}
                                    disabled={false}
                                    textFieldType={'editValue'}
                                />
                            </div>
                            <div className={`${styles.buttons_container} ${styles.services_buttons}`}>
                                <CustomButton content={'отмена'} styleType={'not-active'}
                                              onClick={() => setActive(false)}/>
                                <CustomButton content={'сохранить'} styleType={'active'}/>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
