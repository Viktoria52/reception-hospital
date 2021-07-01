import React, { useState } from "react";
import {useForm} from "react-hook-form";
// import {NavLink} from "react-router-dom";
import style from "./register.module.css";
import {loginAuth} from "../../../state/auth";

const Register = (props) => {
    const [password1, changePassword1] = useState(null);
    const [password2, changePassword2] = useState(null);
    console.log(props)
    console.log(password2, password1)
    const {register, handleSubmit} = useForm();

    const onSubmit = (formData) => {
        props.registerAuth(formData.login, formData.password)

    }

    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input   {...register("login")} type={"text"} placeholder={'login'}/>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        onChange={(e)=>changePassword1(e.target.value)}
                           {...register("password")}
                        type={'password'}
                        placeholder={'password'}/>
                </div>
                <div className={style.password}>
                    <p>Repeat password</p>
                    <input
                        onChange={(e) => changePassword2(e.target.value) }
                        {...register("repeatPassword")}
                        type={'repeatPassword'}
                        placeholder={'password'}/>
                </div>

                {/*{passwrod1 === passwrod2 ?  console.log('okay!') : <p>error</p>}*/}
                <div className={style.containerAuth}>
                    <input className={style.button} value={'Зарегестрироваться'} type="submit"/>
                    {/*<div className={style.link}>*/}
                    {/*    <NavLink className={s.link} to='/login'>Авторизоваться</NavLink>*/}
                    {/*</div>*/}
                </div>
                <div></div>
            </form>
        </div>
    )

}

export default Register;