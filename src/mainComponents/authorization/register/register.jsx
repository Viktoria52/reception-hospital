import React, {useMemo} from "react";
import {useForm} from "react-hook-form";
import style from "./register.module.css";
import {useDispatch, useSelector} from "react-redux";
import {loginFailedMessageAC, registerAuth} from "../../../state/authReducer";

const Register = () => {
    const {register, handleSubmit, watch} = useForm();
    const dispatch = useDispatch()
    const {registerMessage} = useSelector((state) => state.authReducer)

    const watchAllFields = watch()
    useMemo(() => dispatch(loginFailedMessageAC(null)), [])
    const onSubmit = (formData) => {
        dispatch(registerAuth(formData.login, formData.password))
    }

    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input
                        {...register("login")}
                        type={"text"}
                        required={true}
                        placeholder={'login'}
                        minLength={4}
                    />
                </div>
                <div>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password")}
                        type={'password'}
                        required={true}
                        minLength={8}
                        placeholder={'password'}
                    />
                </div>

                <div className={style.password}>
                    <p>Repeat password</p>
                    <input
                        {...register("repeatPassword")}
                        type={'password'}
                        required={true}
                        placeholder={'password'}/>
                </div>

                {
                    watchAllFields.password !== watchAllFields.repeatPassword ?
                        <p className={style.error}>password dont match</p> :
                        <div className={style.containerAuth}>
                            <input className={style.button} value={'Зарегестрироваться'} type="submit"/>

                        </div>
                }

                {registerMessage &&
                <p className={style.messageReg}>Регистрация прошла успешно</p>}

            </form>
        </div>
    )

}

export default Register;