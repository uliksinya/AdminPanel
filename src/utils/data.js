export const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
];
export const services = [
    {id: 1, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 2, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 3, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 4, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 5, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 6, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 7, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 8, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
    {id: 9, content:'Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу Унясенне даных у базу'},
];
export const sections=[
    {id: 1, section: 'Раздел 1'},
    {id: 2, section: 'Раздел 2'},
    {id: 3, section: 'Раздел 3'},
    {id: 4, section: 'Раздел 4'},
    {id: 5, section: 'Раздел 5'},
    {id: 6, section: 'Раздел 6'},
    {id: 7, section: 'Раздел 7'},
    {id: 8, section: 'Раздел 8'},
    {id: 9, section: 'Раздел 9'},
]
export const columnsForTable1 = [
    { size: "26.9fr", className: "name", label: "Наименование" },
    { size: "4.7fr", className: "chapter", label: "Раздел" },
    { size: "4.6fr", className: "services", label: "Услуги" },
    { size: "22fr", className: "name_be", label: "Наименование BE" },
    { size: "22fr", className: "name_en", label: "Наименование EN" },
    { size: "6fr", className: "letter", label: "Буква при выдаче" },
    { size: "7.77fr", className: "start_end", label: "Начало-конец работы" },
    { size: "6.03fr", className: "active_state", label: "Активный" },
];
export const columnsForTable2=[
    {size: "25.62fr", className: "workplace", label: "Рабочее место" },
    {size: "4.68fr", className: "type", label: "Тип" },
    {size: "4.55fr", className: "number", label: "Номер" },
    {size: "51.55fr", className: "employees", label: "Закрепленные сотрудники" },
    {size: "7.59fr", className: "ip", label: "IP табло " },
    {size: "6.01fr", className: "active_2", label: "Активный" },
];
export const rowsData1 = [
    {
        id: 0,
        name: "Услуга: ввесение данных в базу ввесение данных в базу  ввесение данных в базу",
        chapter: "0",
        services: "12",
        name_be: "Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга ",
        name_en: "Service: entering data into the database entering data into a database entering data into a database",
        letter: "-",
        start_end: "10:00-17:00",
        active_state: true
    },
    {
        id: 1,
        name: "Раздел: Услуги таможенник",
        chapter: "0",
        services: "10",
        name_be: "Раздзел: Паслугі мытнік  Раздзел: Паслугі мытнік",
        name_en: "Section: Customs officer services",
        letter: "-",
        start_end: "10:00-17:00",
        active_state: false
    },
    {
        id: 2,
        name: "Услуга: ввесение данных в базу ввесение данных в базу  ввесение данных в базу",
        chapter: "0",
        services: "12",
        name_be: "Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга №1Услуга ",
        name_en: "Service: entering data into the database entering data into a database entering data into a database",
        letter: "-",
        start_end: "10:00-17:00",
        active_state: true
    },
    {
        id: 3,
        name: "Раздел: Услуги таможенник",
        chapter: "0",
        services: "10",
        name_be: "Раздзел: Паслугі мытнік  Раздзел: Паслугі мытнік",
        name_en: "Section: Customs officer services",
        letter: "-",
        start_end: "10:00-17:00",
        active_state: true
    }
];
export const rowsData2 = [
    {
        id: 0,
        workplace: "Рабочее место КПП",
        type: "Окно",
        number: "1",
        employees: "Оператор 1 Иванов П.К, Оператор 1 Сидоров П.К, Оператор 1 Иванов П.К, Оператор 1 Петров П.К, Оператор 1 Маесеенко П.К, Оператор 1 Зеленковский П.К, Оператор 1 Жуковский П.К, \n" +
            "Оператор 1 Петросенко П.К",
        ip: "192.168.100.149 ",
        active_2: true
    },
    {
        id: 1,
        workplace: "Рабочее место КПП",
        type: "Окно",
        number: "1",
        employees: "Оператор 1 Иванов П.К, Оператор 1 Сидоров П.К, Оператор 1 Иванов П.К, Оператор 1 Петров П.К, Оператор 1 Маесеенко П.К, Оператор 1 Зеленковский П.К, Оператор 1 Жуковский П.К, \n" +
            "Оператор 1 Петросенко П.К",
        ip: "192.168.100.149 ",
        active_2: true
    },
    {
        id: 2,
        workplace: "Рабочее место КПП",
        type: "Окно",
        number: "1",
        employees: "Оператор 1 Иванов П.К, Оператор 1 Сидоров П.К, Оператор 1 Иванов П.К, Оператор 1 Петров П.К, Оператор 1 Маесеенко П.К, Оператор 1 Зеленковский П.К, Оператор 1 Жуковский П.К, \n" +
            "Оператор 1 Петросенко П.К",
        ip: "192.168.100.149 ",
        active_2: false
    },
]