import styles from "../../../../styles/TimeButton.module.css"

type TimeButtonPropsType = {
    isSelected: boolean,
    onClick: () => void,
    time: {
        from: string,
        where: string
    }
}

const TimeButton = (props: TimeButtonPropsType) => {
    const {isSelected, onClick, time} = props
    return (
        <button
            className={`${styles.timeButton} ${isSelected && styles.timeButtonSelected}`}
            onClick={onClick}>
            <span className={styles.timeButton__from}>{time.from}</span>
            <span className={styles.timeButton__dash}>-</span>
            <span className={styles.timeButton__where}>{time.where}</span>
        </button>
    )
}

export default TimeButton