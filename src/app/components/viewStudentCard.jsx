import React from "react";
import { legalNames, getFullYears } from "../helper";

const ViewStudentCard = () => {
    const studentCard = localStorage;

    if (studentCard.length > 0) {
        return (
            <>
                <h1>Карточка студента</h1>

                <p>
                    <strong>{legalNames.firstName}: </strong>
                    {studentCard.firstName}
                </p>
                <p>
                    <strong>{legalNames.lastName}: </strong>
                    {studentCard.lastName}
                </p>
                <p>
                    <strong>{legalNames.yearsOld}: </strong>
                    {studentCard.yearsOld} {getFullYears(studentCard.yearsOld)}
                </p>
                <p>
                    <strong>{legalNames.portfolio}: </strong>
                    <a href="{studentCard.portfolio}">
                        {studentCard.portfolio}
                    </a>
                </p>

                <a href="/create" className="btn">
                    Изменить
                </a>
            </>
        );
    }
    return (
        <>
            <h1>Карточка студента</h1>
            <p>no data</p>
            <a href="/create" className="btn">
                Создать
            </a>
        </>
    );
};

export default ViewStudentCard;
