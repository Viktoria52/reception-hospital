import {useForm} from "react-hook-form";
import style from "./login.module.css"
import {useDispatch, useSelector} from "react-redux";
import {loginAuth} from "../../../state/authReducer";
import buttonServ from "../../../api/typeButtonService";

const Login = () => {
    const {messageFailedLogin, passwordFailMessage} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(loginAuth(formData.login, formData.password))
        buttonServ.setType('basic')
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
                {messageFailedLogin &&
                <p className={style.failedLogin}>{messageFailedLogin}</p>}
                <div className={style.password}>
                    <p>Password:</p>
                    <input
                        {...register("password")}
                        type={'password'}
                        required={true}
                        placeholder={'password'}/>
                </div>
                {passwordFailMessage && <p className={style.failedLogin}>{passwordFailMessage}</p>}
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