import React, { useState, useEffect } from "react";
import M from "materialize-css";
import InputField from "./inputField";
import { validator } from "../utils/validator";
import { useHistory } from "react-router-dom";

const FormCard = () => {
    M.AutoInit();
    const history = useHistory();
    const studentCard = localStorage;
    const isEdit = studentCard.length > 0;
    const [data, setData] = useState({
        firstName: studentCard.firstName || "",
        lastName: studentCard.lastName || "",
        yearsOld: studentCard.yearsOld || "",
        portfolio: studentCard.portfolio || "https://"
    });
    const [errors, setErrors] = useState({});
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const historyHandle = () => {
        history.push("/");
    };

    useEffect(() => {
        validate();
    }, [data]);
    const validatorConfig = {
        firstName: {
            isRequired: { message: "Имя обязательно" }
        },
        lastName: {
            isRequired: { message: "Фамилия обязательна" }
        },
        yearsOld: {
            isRequired: { message: "Год обязателен" },
            isOldYear: { message: "Поле не корректно" }
        },
        portfolio: {
            isRequired: { message: "Портфолио обязательно" },
            isLink: { message: "Ссылка не корректна" }
        }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = e => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log("data", data);
        Object.keys(data).map(key => localStorage.setItem(key, data[key]));
        M.toast({ html: "Обновлено!" });
        history.push("/");
    };
    return (
        <>
            <div className="container">
                <h1>{isEdit ? "Редактировать" : "Создать"}</h1>
                <div className="row">
                    <form className="col s12" onSubmit={handleSubmit}>
                        <InputField
                            name="firstName"
                            label="Имя"
                            value={data.firstName}
                            onChange={handleChange}
                            error={errors.firstName}
                        />
                        <InputField
                            name="lastName"
                            label="Фамилия"
                            value={data.lastName}
                            onChange={handleChange}
                            error={errors.lastName}
                        />
                        <InputField
                            name="yearsOld"
                            label="Год рождения"
                            type="number"
                            value={data.yearsOld}
                            onChange={handleChange}
                            error={errors.yearsOld}
                        />
                        <InputField
                            name="portfolio"
                            label="Портфолио"
                            value={data.portfolio}
                            onChange={handleChange}
                            error={errors.portfolio}
                        />
                        <div className="col s12">
                            {isEdit && (
                                <button
                                    className="btn teal darken-4"
                                    onClick={historyHandle}
                                >
                                    Назад
                                </button>
                            )}
                            <button
                                className={
                                    "waves-effect waves-light btn" +
                                    (isValid ? "" : " disabled")
                                }
                            >
                                {isEdit ? "Обновить" : "Создать"}
                            </button>
                        </div>
                    </form>
                    <div id="modal1" className="modal">
                        <div className="modal-content">
                            <p>Обновлено!</p>
                        </div>
                        <div className="modal-footer">
                            <a
                                className="modal-close waves-effect waves-green btn-flat"
                                onClick={historyHandle}
                            >
                                OK
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormCard;
