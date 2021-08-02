import Login from "./login/Login";
import {useEffect, useState} from "react";
import Register from "./register/register";
import style from "./containerAuth.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setRegisterMessage, setTittle} from "../../state/actions/authActions";
import {registerWithGoogle} from "../../state/authReducer";
import jwtServise from "../../api/tokenServise";
import GoogleLogin from "react-google-login";
import CLIENT_ID from '../../client'
import buttonServ from "../../api/typeButtonService";


const ContainerAuthorization = () => {
    const [flag, changeFlag] = useState(true);
    const {registerMessage} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (registerMessage) {
            setTimeout(() => {
                changeFlag(true) //переключалка на логин после успешной регистрации
                dispatch(setRegisterMessage(null))// очистка сообщения "регистрация прошла успешно"
            }, 3000)
        }
        if (flag) {
            dispatch(setTittle('Войти в систему'))
        } else {
            dispatch(setTittle('Зарегестрироваться в системе'))
        }
    }, [registerMessage, flag, dispatch])

    const responseGoogle = async (response) => {
        if (response) {
            await dispatch(registerWithGoogle(response.Ts.Me, response.googleId))
            buttonServ.setType('google')
        }
    }

    return (<div className={style.containerAuthorization}>
            <div className={style.hospital} />
            <div className={style.mainAuth}>
                {flag ?
                    <div className={style.login}>
                        <Login/>
                        {/*<img src={google} onClick={()=>dispatch(registerWithGoogle('auth/google'))} className={style.googleImage} alt=""/>*/}
                        <p className={style.registration} onClick={() => changeFlag(!flag)}> Зарегестрироваться </p>
                    </div>
                    :
                    <div className={style.register}>
                        <Register/>
                        {/*<p>Войти с помощью Google</p>*/}
                        <p className={style.authorization} onClick={() => changeFlag(!flag)}> Авторизоваться</p>
                    </div>
                }
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Log in with google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                    SameSite={'Lax'}
                    // SameSite={'Strict'}
                    // Secure={'None'}
                    // SameSite={'Strict'}
                    // Set-Cookie={'promo_shown=1'}
                    // SameSite={'Strict'}
                />
                {/*<img src={google} onClick={()=>dispatch(registerWithGoogle('auth/google'))} className={style.googleImage} alt=""/>*/}
            </div>
        </div>
    )
}

export default ContainerAuthorization
