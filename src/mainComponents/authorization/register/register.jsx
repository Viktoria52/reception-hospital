import React, {useState} from "react";
import {useForm} from "react-hook-form";
import style from "./register.module.css";

const Register = (props) => {
    // console.log(props.state.authReducer)
    const {register, handleSubmit, watch} = useForm();
    // const {errLogin, setErrLogin} = useState()
    const watchAllFields = watch()
    let errLogin = null
    const onSubmit = async (formData) => {
        console.log(formData)
        // if (formData.login.length < 8) {
        //     setErrLogin('Длина пароля должна быть больше 8 символов')
        // }
        props.registerAuth(formData.login, formData.password)
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
                        onBlur={(e) => {
                            let text = e.target.value
                            console.log(text.length)
                            if(text.length < 5){
                                errLogin = 'Длина пароля должна быть больше 5 символов'
                                console.log(errLogin)
                            }
                        }}
                    />
                </div>
                {errLogin ?
                <p>{errLogin}</p>:
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
                            {/*<div className={style.link}>*/}
                            {/*    <NavLink className={s.link} to='/login'>Авторизоваться</NavLink>*/}
                            {/*</div>*/}
                        </div>
                }


            </form>
        </div>
    )

}

export default Register;