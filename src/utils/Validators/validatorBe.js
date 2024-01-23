export const validateInputByName = (value) => {
    const trimmedValue = value.trim();
    const regex = /^[А-ЯЁа-яё ,.\/-]*$/;

    if (!trimmedValue) {
        return {
            isValid: false,
            errorText: "Поле обязательно для заполнения",
        };
    }

    if (trimmedValue.length > 34) {
        const remainingSymbols = 50 - trimmedValue.length;
        if (remainingSymbols > 0) {
            return {
                isValid: false,
                errorText: `Осталось ${remainingSymbols} символов`,
            };
        } else {
            return {
                isValid: false,
                errorText: `Превышен лимит символов`,
            };
        }
    }

    if (!regex.test(trimmedValue)) {
        return {
            isValid: false,
            errorText: "Некорректно введены данные",
        };
    }

    return {
        isValid: true,
        errorText: "",
    };
};
