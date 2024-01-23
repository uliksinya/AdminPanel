export const validateInputRuName = (value) => {
    const trimmedValue = value.trim();
    const regex = /^[А-Яа-яЁё\s,\.\-\/]+$/;

    // Проверка наличия значения
    if (!trimmedValue) {
        return {
            isValid: false,
            errorText: 'Поле обязательно для заполнения',
        };
    }

    // Проверка на длину
    if (trimmedValue.length > 40) {
         console.log(trimmedValue.length);
        const remainingSymbols = 50 - trimmedValue.length;
        if(remainingSymbols > 0){
            return {
                isValid: false,
                errorText: `осталось ${remainingSymbols} символов`,
            };
        }else{
            return {
                isValid: false,
                errorText: `превышен лимит символов`,
            };
        }
    }

    // Проверка на соответствие критериям
    if (!regex.test(trimmedValue)) {
        return {
            isValid: false,
            errorText: 'Некорректно введены данные',
        };
    }

    // Если все проверки прошли успешно
    return {
        isValid: true,
        errorText: '',
    };
};