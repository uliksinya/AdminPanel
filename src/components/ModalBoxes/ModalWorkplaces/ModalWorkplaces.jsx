import styles from "./ModalWorkplaces.module.scss";
import {useState} from "react";
import {CustomTextField} from "../../CustomTextField/CustomTextField.jsx";
import {validateInputRuName} from "../../../utils/Validators/validatorRu.js";
import {SearchTextField} from "../../SearchTextField/SearchTextField.jsx";

export const ModalWorkplaces = ({active, setActive, name}) => {
    const [selectedValue, setSelectedValue] = useState('window');
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    };
    const [workplaceName, setWorkplaceName] = useState(
        {
            value: '1253',
            isValid: true,
            errorText: ''
        }
    );
    const [numTab, setNumTab] = useState(
        {
            value: '1',
            isValid: true,
            errorText: ''
        }
    );
    const [ipTab, setIpTab] = useState(
        {
            value: '192.168.100.149',
            isValid: true,
            errorText: ''
        }
    );
    const [searchValue, setSearchValue] = useState(
        {
            value: 'Опе',
            isValid: true,
            errorText: ''
        }
    );
    const handleInputWorkplaceName = (e) => {
        const value = e.target.value;
        setWorkplaceName({
            value,
            ...validateInputRuName(value),
        });
    };
    const handleInputNumTab = (e) => {
        const value = e.target.value;
        setNumTab(value);
    };
    const handleInputIpTab = (e) => {
        const value = e.target.value;
        setIpTab(value);
    };
    const handleInputEmployers = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };
    return(
        <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
            <div className={styles.modal_container} onClick={event => event.stopPropagation()}>
                <h2>{name}</h2>
                <div className={styles.radio_container}>
                    <div className={styles.radio}>
                        <input type="radio" id="window" value="window" checked={selectedValue === 'window'} onChange={handleRadioChange}/>
                        <label htmlFor="window">Окно</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="cabinet" value="cabinet" checked={selectedValue === 'cabinet'} onChange={handleRadioChange}/>
                        <label htmlFor="cabinet">Кабинет</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="cashbox" value="cashbox" checked={selectedValue === 'cashbox'} onChange={handleRadioChange}/>
                        <label htmlFor="cashbox">Касса</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="place" value="place" checked={selectedValue === 'place'} onChange={handleRadioChange}/>
                        <label htmlFor="place">Место</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="cabin" value="cabin" checked={selectedValue === 'cabin'} onChange={handleRadioChange}/>
                        <label htmlFor="cabin">Кабинка</label>
                    </div>
                </div>
                <div className={styles.workplace_container}>
                    <CustomTextField
                        labelName={'Наименование рабочего места'}
                        value={workplaceName.value}
                        onChange={handleInputWorkplaceName}
                        isValid={workplaceName.isValid}
                        errorText={workplaceName.errorText}
                        disabled={false}
                        textFieldType={"editValue"}
                    />
                </div>
                <div className={styles.inp_container}>
                    <div className={styles.num_tab_container}>
                        <CustomTextField
                            labelName={'Номер табло'}
                            value={numTab.value}
                            onChange={handleInputNumTab}
                            isValid={numTab.isValid}
                            errorText={numTab.errorText}
                            disabled={false}
                            textFieldType={"editValue"}
                        />
                    </div>
                    <div className={styles.ip_for_tab_container}>
                        <CustomTextField
                            labelName={'IP для табло'}
                            value={ipTab.value}
                            onChange={handleInputIpTab}
                            isValid={ipTab.isValid}
                            errorText={ipTab.errorText}
                            disabled={false}
                            textFieldType={"editValue"}
                        />
                    </div>
                    <div>
                        <SearchTextField
                            label={'Добавить сотрудников'}
                            value={searchValue.value}
                            onChange={handleInputEmployers}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}