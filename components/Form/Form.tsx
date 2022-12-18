import React, {useEffect, useState} from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import styles from "../../styles/Form.module.css"
import {useRouter} from "next/router";

type FormType = {
    from: string,
    where: string,
    there: string,
    fromThere: string,
}

const Form = () => {
    const router = useRouter()

    const [form, setForm] = useState<FormType>({
        from: "",
        where: "",
        there: "",
        fromThere: "",
    })
    const [isDisabled, setIsDisabled] = useState<boolean>(true)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let url = `/info?from=${form.from}&where=${form.where}&there=${form.there}`
        if (form.fromThere) url += `&fromThere=${form.fromThere}`
        router.push(url)
    }

    useEffect(() => {
        setIsDisabled(!(form.from !== "" && form.where !== "" && form.there !== ""))
    }, [form])

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.form__inputs}>
                <Input
                    label={"Откуда"}
                    placeholder={"Город вылета"}
                    required={true}
                    isDate={false}
                    name="from"
                    value={form.from}
                    onChange={changeHandler}
                />
                <Input
                    label={"Куда"}
                    placeholder={"Город прилёта"}
                    required={true}
                    isDate={false}
                    name="where"
                    value={form.where}
                    onChange={changeHandler}
                />
                <div className={styles.inputs__dates}>
                    <Input
                        label={"Туда"}
                        placeholder={"дд.мм.гг"}
                        required={true}
                        isDate={true}
                        name="there"
                        value={form.there}
                        onChange={changeHandler}
                    />
                    <hr className={styles.dates__line}/>
                    <Input
                        label={"Обратно"}
                        placeholder={"дд.мм.гг"}
                        required={false} isDate={true}
                        name="fromThere"
                        value={form.fromThere}
                        onChange={changeHandler}
                    />
                </div>
            </div>
            <div className={styles.form__submit}>
                <Button text={"Найти билеты"} type={"submit"} disabled={isDisabled}/>
            </div>
        </form>
    )
}

export default Form