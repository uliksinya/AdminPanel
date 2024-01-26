import styles from './ServiceContent.module.scss';
import {CustomTextField} from "../../../CustomTextField/CustomTextField.jsx";
import TextField from "@mui/material/TextField";
import {CustomButton} from "../../../CustomButton/CustomButton.jsx";
import {useState} from "react";
import {validateInputRuName} from "../../../../utils/Validators/validatorRu.js";
import {validateInputEnName} from "../../../../utils/Validators/validatorEn.js";
import {validateInputByName} from "../../../../utils/Validators/validatorBe.js";
export const ServiceContent = ({selectedValue, handleRadioChange, setActiveModal}) => {
    const [serviceInputs, setServiceInputs] = useState({
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
        }
    })

    const handleInputChange = (value, language) => {
        switch (language) {
            case 'ru':
                setServiceInputs((prevInputs) => ({
                    ...prevInputs,
                    inputRuName: {
                        ...prevInputs.inputRuName,
                        value: value,
                        ...validateInputRuName(value),
                    }
                }));
                break;
            case 'en':
                setServiceInputs((prevInputs) => ({
                    ...prevInputs,
                    inputEnName: {
                        ...prevInputs.inputEnName,
                        value: value,
                        ...validateInputEnName(value)
                    }
                }));
                break;
            case 'be':
                setServiceInputs((prevInputs) => ({
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
    return (
        <div className={styles.service_content}>
            <div>
                <div className={styles.first_row}>
                    <div className={styles.radio_container}>
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
                                <div className={styles.letter}>
                                    <span>Б</span>
                                </div>
                            }
                        </CustomTextField>
                    </div>
                </div>
                <div className={styles.name_ru}>
                    <CustomTextField
                        labelName={'Наименование RU'}
                        value={serviceInputs.inputRuName.value}
                        onChange={(e) => handleInputChange(e.target.value, 'ru')}
                        isValid={serviceInputs.inputRuName.isValid}
                        errorText={serviceInputs.inputRuName.errorText}
                        disabled={false}
                        textFieldType={'editValue'}
                    />
                </div>
                <div className={styles.name_en}>
                    <CustomTextField
                        labelName={'Наименование EN'}
                        value={serviceInputs.inputEnName.value}
                        onChange={(e) => handleInputChange(e.target.value, 'en')}
                        isValid={serviceInputs.inputEnName.isValid}
                        errorText={serviceInputs.inputEnName.errorText}
                        disabled={false}
                        textFieldType={'editValue'}
                    />
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
                            className={styles.time}
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
                            className={styles.time}
                            variant={"outlined"}
                        />
                    </div>
                </div>
                <div className={styles.name_be}>
                    <CustomTextField
                        labelName={'Наименование BE'}
                        value={serviceInputs.inputBeName.value}
                        onChange={(e) => handleInputChange(e.target.value, 'be')}
                        isValid={serviceInputs.inputBeName.isValid}
                        errorText={serviceInputs.inputBeName.errorText}
                        disabled={false}
                        textFieldType={'editValue'}
                    />
                </div>
                <div className={styles.buttons_container}>
                    <CustomButton content={'отмена'} styleType={'not-active'} onClick={() => setActiveModal(false)}/>
                    <CustomButton content={'сохранить'} styleType={'active'}/>
                </div>
            </div>
        </div>
    )
}