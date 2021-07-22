import React, {useMemo} from "react";
import {useForm} from "react-hook-form";
import style from "./register.module.css";
import {useDispatch, useSelector} from "react-redux";
import {cleanErrors, loginFailedMessageAC, registerAuth} from "../../../state/authReducer";
import {v4 as uuidv4} from 'uuid'
import ErrorsPassword from "../../reception/errorsPassword/errorsPassword";

const Register = () => {
    const {register, handleSubmit, watch, formState: e} = useForm();
    const dispatch = useDispatch()
    const {registerMessage, errors, messageFailedRegister} = useSelector((state) => state.authReducer)
    const watchAllFields = watch()
    useMemo(() => dispatch(loginFailedMessageAC(null)), [dispatch])
    const onSubmit = (formData) => {
        dispatch(registerAuth(formData.login, formData.password))
    }
    const err = {...e}
    let validLogin = ''
    if (err.errors.login) {
        validLogin = err.errors.login.message
    }

    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input
                        {...register("login", {
                            pattern: {
                                value: /\S\S+/,
                                message: 'cannot be with whiteSpace'
                            }
                        })
                        }
                        type={"text"}
                        required={true}
                        placeholder={'login'}
                        minLength={4}
                        maxLength={30}
                    />
                </div>
                {validLogin &&
                <p className={style.errorsPassword}>{validLogin}</p>
                }
                <p className={style.errorsPassword}>{messageFailedRegister}</p>
                <div>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password",)}
                        type={'password'}
                        required={true}
                        minLength={4}
                        maxLength={40}
                        placeholder={'password'}
                        onChange={() => dispatch(cleanErrors([]))}
                    />
                </div>
                <div>{
                    errors.map((value) => <ErrorsPassword
                            key={uuidv4()}
                            message={value.msg}
                        />
                    )}
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