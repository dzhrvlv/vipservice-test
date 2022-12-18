import TimeForm from "./TimeForm/TimeForm";
import styles from "../../styles/FlightCard.module.css"
import {useRouter} from "next/router";

const FlightCard = () => {
    const router = useRouter()

    const {from, where, there, fromThere} = router.query

    return (
        <div className={styles.card}>
            <div className={styles.card__forms}>
                <TimeForm from={from} where={where} date={there}/>
                {fromThere &&
                    <TimeForm from={where} where={from} date={fromThere}/>
                }
            </div>
            <div className={styles.card__price}>
                <span className={styles.price__text}>{fromThere ? "8 300 Р" : "4 150 Р"}</span>
            </div>
        </div>

    )
}

export default FlightCard