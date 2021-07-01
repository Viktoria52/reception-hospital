import {useForm} from "react-hook-form";
import {NavLink} from "react-router-dom";
import style from "./register.module.css";
import s from "../../nav/nav.module.css";


const Register = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    const {register, handleSubmit} = useForm();

    return (<div className={style.mainLogin}>
            <h1 className={style.registration}>Регистрация</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input   {...register("login")} type={"text"} placeholder={'login'}/>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input {...register("password")} type={'password'} placeholder={'password'}/>
                </div>
                <div className={style.password}>
                    <p>Repeat password</p>
                    <input   {...register("password")} type={'repeatPassword'} placeholder={'password'}/>
                </div>
                <div className={style.containerAuth}>
                    <input className={style.button} value={'Зарегестрироваться'} type="submit"/>
                    {/*<div className={style.link}>*/}
                    {/*    <NavLink className={s.link} to='/login'>Авторизоваться</NavLink>*/}
                    {/*</div>*/}
                </div>

            </form>
        </div>
    )

}

export default Register;