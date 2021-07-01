import Login from "./Login/Login";
import {useState} from "react";
import Register from "./register/register";
import style from "./containerAuth.module.css";
import {connect, useSelector} from "react-redux";
import {passwordCreator, passwordRepeatCreator, registerAuth} from "../../state/auth";


const ContainerAuthorization =(props) => {
    const [flag, changeFlag] = useState(true);
    const state = useSelector((state) => state)
    return(<div className={style.mainAuth}>
        {flag ?
            <div>
                <Login />
                <p className={style.registration} onClick={()=>changeFlag(!flag)}> Зарегестрироваться </p>  </div>
            :
            <div>
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

// export default compose()
export default connect(null, {registerAuth,passwordCreator, passwordRepeatCreator})(ContainerAuthorization)
// export default ContainerAuthorization