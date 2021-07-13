import Login from "./Login/Login";
import {useState} from "react";
import Register from "./register/register";
import style from "./containerAuth.module.css";
import {connect, useSelector} from "react-redux";
import {loginAuth, passwordCreator, passwordRepeatCreator, registerAuth} from "../../state/auth";


const ContainerAuthorization =(props) => {
    const [flag, changeFlag] = useState(true);
    const state = useSelector((state) => state)
    return(<div className={style.mainAuth}>
        {/*<div className={style.hospital} />*/}
        {flag ?
            <div className={style.login}>
                <Login
                    loginAuth = {props.loginAuth}
                />
                <p className={style.registration} onClick={()=>changeFlag(!flag)}> Зарегестрироваться </p>  </div>
            :
            <div className={style.register}>
                <Register
                    passwordRepeatCreator={props.passwordRepeatCreator}
                    passwordCreator={props.passwordCreator}
                    state={state}
                    registerAuth={props.registerAuth}/>
                <p  className={style.authorization} onClick={()=>changeFlag(!flag)}> Авторизоваться</p>
            </div>
        }
    </div>)
}

export default connect(null, {registerAuth,passwordCreator, passwordRepeatCreator,loginAuth})(ContainerAuthorization)
// export default ContainerAuthorization