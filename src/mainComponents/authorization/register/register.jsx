import React, {useState} from "react";
import {useForm} from "react-hook-form";
import style from "./register.module.css";
import {useDispatch, useSelector} from "react-redux";
import {registerAuth, validLengthLoginAC} from "../../../state/auth";

const Register = () => {
    const {register, handleSubmit, watch} = useForm();
    const dispatch = useDispatch()
    const {loginLength, messageFailedRegister} = useSelector((state) => state.authReducer)

    const watchAllFields = watch()
    let errLogin = null
    const onSubmit = async (formData) => {
       await console.log(formData)
        dispatch(registerAuth(formData.login, formData.password))
    }
    let text = null

    function onChangeLogin(event) {
        text = event.target.value
    }

    function validationLengthLogin(e) {
        if (text) {
            if (text.length <= 5) {
                dispatch(validLengthLoginAC('length of the login must be more than 5'))
            } else {
                dispatch(validLengthLoginAC(null))
            }
        }
    }

    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input
                        {...register("login", {
                            required: true,
                            // minLength: 5,
                        })}
                        // onChange={onChangeLogin}
                        type={"text"}
                        
                        placeholder={'login'}
                        onBlur={validationLengthLogin}
                    />
                </div>
                {messageFailedRegister &&
                    <p className={style.validLogin}>{messageFailedRegister}</p>
                }
                {loginLength &&
                <p className={style.validLogin}>{loginLength}</p>
                }

                <div>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password",
                            {
                                required: true,
                                minLength: 8
                            })}
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