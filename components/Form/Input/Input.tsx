import React from "react";
import styles from "../../../styles/Input.module.css"
import calendar from "../../../public/icons/calendar.svg"
import calendarBlue from "../../../public/icons/calendar-blue.svg"

type InputPropsType = {
    label: string,
    placeholder: string,
    isDate: boolean,
    name: string,
    required: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: string
}

const Input = (props: InputPropsType) => {
    const {label, placeholder, isDate, name, required, onChange, value} = props

    return (
        <div className={styles.input}>
            <span className={styles.input__label}>{label}</span>
            <div className={styles.input__wrap}>
                {props.isDate &&
                    <i className={styles.input__icon}>
                        <img
                            src={value === "" ? calendar.src : calendarBlue.src}
                            alt="calendarIcon"
                        />
                    </i>
                }
                <input className={styles.input__field}
                       type="text"
                       name={name}
                       placeholder={placeholder}
                       required={required}
                       onChange={onChange}
                       value={value}
                       pattern={isDate ? "[0-9]{2}.[0-9]{2}.[0-9]{2}" : "[А-Яа-яЁё]{2,20}"}
                />
            </div>
        </div>
    )
}

export default Input