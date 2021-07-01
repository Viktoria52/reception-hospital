import {useForm} from "react-hook-form";
import style from "./login.module.css"
import {NavLink} from "react-router-dom";
import s from "../../nav/nav.module.css";
import {loginAuth} from "../../../state/auth";
import {connect} from "react-redux";

const Login = (props) => {
    console.log(props)
    const onSubmit = (formData) => {
        // props.loginAuth(formData.login, formData.password)
        console.log(formData)
    };
    const {register, handleSubmit} = useForm();

    return (<div className={style.mainLogin}>
            <h1 className={style.logIn}>Войти в систему </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input {...register("login")} type={"text"} placeholder={'login'}/>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input {...register("password")} type={'password'} placeholder={'password'}/>
                </div>
                <div className={style.containerAuth}>
                    <input value={'Войти'} className={style.button} type="submit"/>
                    {/*<div className={style.link}>*/}
                    {/*    <NavLink className={s.link} to='/registration'>Зарегестрироваться</NavLink>*/}
                    {/*</div>*/}
                </div>

            </form>
        </div>
    )

}

export default Login;

// export default connect(null, {loginAuth})(Login);