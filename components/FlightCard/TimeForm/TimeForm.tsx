import styles from "../../../styles/TimeForm.module.css"
import logo from "../../../public/logo.png"
import bagIcon from "../../../public/icons/bag.svg"
import baggageIcon from "../../../public/icons/baggage.svg"
import TimeButton from "./TimeButton/TimeButton";
import {useState} from "react";

const times = [
    {
        from: "09:20",
        where: "11:05"
    },
    {
        from: "10:20",
        where: "12:05"
    },
    {
        from: "11:20",
        where: "13:05"
    }
]

const TimeForm = (props: any) => {
    const [selectedTime, setSelectedTime] = useState(0)

    const selectTimeHandler = (i) => {
        if (selectedTime !== i) setSelectedTime(i)
    }

    return (
        <div className={styles.form}>
            <div className={styles.form__type}>
                <div className={styles.type__text}>Невозвратный</div>
                <div className={styles.type__company}>
                    <div><img src={logo.src} alt="logo"/></div>
                    <div className={styles.company__name}>S7 AirLines</div>
                </div>
            </div>
            <div className={styles.form__time}>
                <div className={styles.time__wrap}>
                    <div className={styles.time}>
                        <span className={styles.time__value}>{times[selectedTime].from}</span>
                        <span className={styles.time__city}>{props.from}</span>
                        <span className={styles.time__date}>{props.date}</span>
                    </div>
                    <div className={styles.time__route}>
                        <div className={styles.route__titles}>
                            <span>SVO</span>
                            <span>ROV</span>
                        </div>
                        <div className={styles.route__graph}>
                            <div className={styles.graph__point}/>
                            <div className={styles.graph__line}/>
                            <div className={styles.graph__point}/>
                        </div>
                        <div className={styles.route__way}>В пути 1 ч 55 мин</div>
                    </div>
                    <div className={styles.time}>
                        <span className={styles.time__value}>{times[selectedTime].where}</span>
                        <span className={styles.time__city}>{props.where}</span>
                        <span className={styles.time__date}>{props.date}</span>
                    </div>
                    <div className={styles.form__bag}>
                        <button className={styles.bag__button}><img src={bagIcon.src} alt="bagIcon"/></button>
                        <button className={styles.bag__button}><img src={baggageIcon.src} alt="baggageIcon"/></button>
                    </div>
                </div>
                <div className={styles.time__choose}>
                    {times.map((time, index) =>
                        <TimeButton
                            key={index}
                            time={time}
                            onClick={() => selectTimeHandler(index)}
                            isSelected={selectedTime === index}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default TimeForm