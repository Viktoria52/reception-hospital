import {useForm} from "react-hook-form";
import style from "./login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loginAuth} from "../../../state/authReducer";

const Login = () => {
    const {messageFailedLogin} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    console.log(messageFailedLogin)
    const onSubmit = (formData) => {
         dispatch(loginAuth(formData.login, formData.password))
    };
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
                        required={true}
                    />
                </div>



                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password")}
                        type={'password'}
                        required={true}
                        placeholder={'password'}/>
                </div>
                {messageFailedLogin &&
                <p className={style.failedLogin}>{messageFailedLogin}</p>}
                <div className={style.containerAuth}>
                        <input
                        value={'Войти'}
                        className={style.button}
                        type="submit"
                        />
                </div>
            </form>
        </div>
    )

}

export default Login;

// export default connect(null, {loginAuth})(Login);