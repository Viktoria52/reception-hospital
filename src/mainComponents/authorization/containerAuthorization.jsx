import Login from "./login/Login";
import {useEffect, useState} from "react";
import Register from "./register/register";
import style from "./containerAuth.module.css";
import {useDispatch, useSelector} from "react-redux";
import {registerWithGoogle, setRegisterMessage, setTittle} from "../../state/authReducer";
import google from '../../assets/google.jpg'
import {Link} from "react-router-dom";


const ContainerAuthorization =() => {
    const [flag, changeFlag] = useState(true);
    const {registerMessage} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(registerMessage){
            setTimeout(()=> {
                changeFlag(true) //переключалка на логин после успешной регистрации
                dispatch(setRegisterMessage(null))// очистка сообщения "регистрация прошла успешно"
            }, 3000)
        }
        if(flag){
           dispatch(setTittle('Войти в систему'))
        } else {
            dispatch(setTittle('Зарегестрироваться в системе'))
        }
    },[registerMessage, flag, dispatch])

    return(<div className={style.containerAuthorization}>
            <div className={style.hospital}> </div>
        <div className={style.mainAuth}>
            {flag ?
                <div className={style.login}>
                    <Login/>
                    <p className={style.registration} onClick={()=>changeFlag(!flag)}> Зарегестрироваться </p>  </div>
                :
                <div className={style.register}>
                    <Register/>
                    {/*<p>Войти с помощью Google</p>*/}
                  
                        <img src={google} onClick={()=>dispatch(registerWithGoogle())} className={style.googleImage} alt=""/>
                   
                    <p  className={style.authorization} onClick={()=>changeFlag(!flag)}> Авторизоваться</p>
                </div>
            }
        </div>
    </div>
        )
}

export default ContainerAuthorization
