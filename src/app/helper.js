export const legalNames = {
    firstName: "Имя",
    lastName: "Фамилия",
    yearsOld: "Год рождения",
    portfolio: "Портфолио"
};

export const getFullYears = year => {
    const date = new Date();
    const yearNow = date.getFullYear();
    const full = yearNow - year;
    const lastNum = full % 10;
    let str = "лет";
    if (lastNum === 1) {
        str = "год";
    } else if (lastNum > 1 && lastNum < 5) {
        str = "года";
    }

    return `(${full} ${str})`;
};
