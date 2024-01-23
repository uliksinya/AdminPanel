export const validateInputEnName = (value) => {
    const trimmedValue = value.trim();
    const regex = /^[A-Za-z ,.\/-]*$/;

    if (!trimmedValue) {
        return{
            isValid: false,
            errorText: "Поле обязательно для заполнения",
        };
    }

    // Проверка на длину
    if (trimmedValue.length > 40) {
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

    if (!regex.test(trimmedValue)) {
        return{
            isValid: false,
            errorText: "Некорректно введены данные",
        };
    }

    // Если все проверки пройдены, устанавливаем isValid в true
    return{
        isValid: true,
        errorText: "",
    };
};
