import styles from "../../../styles/Button.module.css"

type ButtonPropsType = {
    type: "button" | "submit" | "reset",
    disabled: boolean,
    text: string
}

const Button = (props: ButtonPropsType) => {
    const {type, disabled, text} = props

    return (
        <button className={styles.button} type={type} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button