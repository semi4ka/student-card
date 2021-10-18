export const validator = (data, config) => {
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
            case "isRequired": {
                statusValidate = data.trim() === "";
                break;
            }
            case "isLink": {
                const linkRegExp = /^https?:\/\/\S+\.[\w-]{2,32}/g;
                statusValidate = !linkRegExp.test(data);
                break;
            }
            case "isOldYear": {
                const val = Number(data.trim());
                statusValidate = !(val < 2021 && val > 1900);
                break;
            }
            default:
                break;
        }
        if (statusValidate) return config.message;
    }
    const errors = {};
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const res = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (res && !errors[fieldName]) {
                errors[fieldName] = res;
            }
        }
    }
    return errors;
};
