import {useForm} from "react-hook-form";
import style from "./login.module.css"
import {useSelector} from "react-redux";
import {Redirect} from "react-router";

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginAuth(formData.login, formData.password)
    };
    const {tokenAuth} = useSelector((state) => state.authReducer)
    // console.log(tokenAuth)
    const {register, handleSubmit} = useForm();
    return (<div className={style.mainLogin}>
            <h1 className={style.logIn}>Войти в систему </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.login}>
                    <p>Login:</p>
                    <input
                        {...register("login")}
                        type={"text"}
                        placeholder={'login'}/>
                </div>
                <div className={style.password}>
                    <p>Password:</p>
                    <input {...register("password")} type={'password'} placeholder={'password'}/>
                </div>
                <div className={style.containerAuth}>

                    {/*<Link to={l => ({tokenAuth, pathname:'/reception' })}>*/}
                        <input
                        value={'Войти'}
                        className={style.button}
                        type="submit"
                        />
                    {/*{ tokenAuth &&*/}
                    {/*    <Redirect to={'/reception'} />*/}

                    {/*}*/}
                    {/*</Link>*/}



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