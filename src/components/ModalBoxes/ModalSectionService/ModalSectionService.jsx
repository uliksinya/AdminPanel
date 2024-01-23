import styles from './ModalSectionService.module.scss'
import {useState} from "react";
import TextField from "@mui/material/TextField";
import {CustomTextField} from "../../CustomTextField/CustomTextField.jsx";
import {validateInputRuName} from "../../../utils/Validators/validatorRu.js";
import {validateInputEnName} from "../../../utils/Validators/validatorEn.js";
import {DropDown} from "../../DropDown/DropDown.jsx";
import {services} from "../../../utils/data.js";
import {validateInputByName} from "../../../utils/Validators/validatorBe.js";
import {CustomButton} from "../../CustomButton/CustomButton.jsx";
export const ModalSectionService = ({ active, setActive, name}) => {
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
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={event => event.stopPropagation()}>
                <h2>{name}</h2>
                <div className={styles.content}>
                    <div className={styles.left_part}>
                        <div className={styles.radio_container}>
                            <div id={styles.radio}>
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
                            <div id={styles.radio}>
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
                        <div className={styles.name_ru}>
                            <CustomTextField
                                labelName={'Наименование RU'}
                                value={inputRuName.value}
                                onChange={handleInputRuName}
                                isValid={inputRuName.isValid}
                                errorText={inputRuName.errorText}
                                disabled={false}
                                isValue={true}
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
                                isValue={true}
                            />
                        </div>
                        <div className={styles.dropdown_container}>
                            <DropDown isOpen={true} label={'Добавить услуги'} firstService={services[0].content}>
                                {
                                    services.map(item => (
                                        <li key={item.id} className={styles.service}>
                                            {item.content}
                                        </li>
                                    ))
                                }
                            </DropDown>
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
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    inputProps={{
                                        step: 300, // 5 min
                                    }}
                                    // InputProps={{
                                    //     endAdornment: (
                                    //         <img src={TimeIcon} alt="Your Custom Icon" style={{ width: 24, height: 24 }} />
                                    //     ),
                                    // }}
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
                                    // style={{ marginLeft: '10px' }}
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
                                isValue={true}
                            />
                        </div>
                        <div className={styles.dropdown_container_2}>
                            <DropDown isOpen={false} label={'Родительский раздел'} firstService={services[0].content}>
                                {
                                    services.map(item => (
                                        <li key={item.id} className={styles.service}>
                                            {item.content}
                                        </li>
                                    ))
                                }
                            </DropDown>
                        </div>
                        <div className={styles.added_services}>
                            <CustomTextField
                                labelName={'Добавленные услуги'}
                                value={inputBeName.value}
                                onChange={handleInputBeName}
                                isValid={inputBeName.isValid}
                                errorText={inputBeName.errorText}
                                disabled={false}
                                isValue={false}
                            >
                            {
                                services.map(item => (
                                <div key={item.id} className={styles.service}>
                                    {item.content}
                                </div>
                                ))
                            }
                            </CustomTextField>
                        </div>
                        <div className={styles.buttons_container}>
                            <CustomButton content={'отмена'} styleType={'not-active'}/>
                            <CustomButton content={'сохранить'} styleType={'active'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
