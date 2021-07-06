import React from "react";
import {useForm} from "react-hook-form";
import style from "./register.module.css";

const Register = (props) => {
    // console.log(props.state.authReducer)
    const {register, handleSubmit, watch} = useForm();
    const watchAllFields = watch()

    const onSubmit = (formData) => {
        props.registerAuth(formData.login, formData.password)
    }
    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input
                        {...register("login", {required: true,
                            minLength:8})}
                        type={"text"}
                        placeholder={'login'}
                        onBlur={()=>{}}
                    />
                </div>

                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password", {required: true, minLength: 8})}
                        type={'password'}
                        placeholder={'password'}
                        onBlur={()=>{}}
                    />
                </div>
                {/*{watchAllFields.password.length < 8 ? <p>error</p> :null}*/}
                <div className={style.password}>
                    <p>Repeat password</p>
                    <input
                        {...register("repeatPassword")}
                        type={'password'}
                        placeholder={'password'}/>
                </div>
                {/*{watchAllFields.login.length<8 ? <p> no valid login</p>: null}*/}
                {watchAllFields.password !== watchAllFields.repeatPassword ?
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