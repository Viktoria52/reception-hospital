import {useForm} from "react-hook-form";
import style from "./login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router";
import {setTittle} from "../../../state/auth";

const Login = (props) => {
    const {registerMessage} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    const onSubmit = async(formData) => {
        await props.loginAuth(formData.login, formData.password)
    };
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
                        placeholder={'login'}

                    />
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