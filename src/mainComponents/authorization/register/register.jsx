import React, {useState} from "react";
import {useForm} from "react-hook-form";
import style from "./register.module.css";
import {useDispatch, useSelector} from "react-redux";
import {registerAuth} from "../../../state/auth";

const Register = () => {
    const {register, handleSubmit, watch} = useForm();
    // const {registerMessage} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    // const {registerMessage} = useSelector((state) => state.authReducer)

    const watchAllFields = watch()
    let errLogin = null
    const onSubmit = async (formData) => {
        console.log(formData)

        dispatch(registerAuth(formData.login, formData.password))
    }
    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input
                        {...register("login", {
                            required: true,
                            minLength: {
                                value: 5,
                                message: 'Длина пароля должна быть больше 5 символов'
                            }
                        })}
                        type={"text"}
                        placeholder={'login'}
                    />
                </div>
                {errLogin ?
                    <p>{errLogin}</p> :
                    null}

                <div>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password", {required: true, minLength: 8})}
                        type={'password'}
                        placeholder={'password'}
                        onBlur={() => {
                        }}
                    />
                </div>

                <div className={style.password}>
                    <p>Repeat password</p>
                    <input
                        {...register("repeatPassword")}
                        type={'password'}
                        placeholder={'password'}/>
                </div>

                {
                    watchAllFields.password !== watchAllFields.repeatPassword ?
                        <p className={style.error}>password dont match</p> :
                        <div className={style.containerAuth}>
                            <input className={style.button} value={'Зарегестрироваться'} type="submit"/>

                        </div>
                }
                {/*{registerMessage &&*/}
                {/*<p className={style.messageReg}>Регистрация прошла успешно</p>}*/}

            </form>
        </div>
    )

}

export default Register;