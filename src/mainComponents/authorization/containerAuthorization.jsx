import Login from "./Login/Login";
import {useEffect, useState} from "react";
import Register from "./register/register";
import style from "./containerAuth.module.css";
import {useDispatch, useSelector} from "react-redux";
import {setTittle} from "../../state/auth";


const ContainerAuthorization =(props) => {
    const [flag, changeFlag] = useState(true);
    const state = useSelector((state) => state)
    const {registerMessage} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(flag)
        if(registerMessage){
            setTimeout(()=> changeFlag(true), 3000)
        }
        if(flag){
           dispatch(setTittle('Войти в систему'))
        } else {
            dispatch(setTittle('Зарегестрироваться в системе'))
        }
    },[registerMessage, flag])
    return(<div className={style.mainAuth}>
        {/*<div className={style.hospital} />*/}
        {flag ?
            <div className={style.login}>
                <Login/>
                <p className={style.registration} onClick={()=>changeFlag(!flag)}> Зарегестрироваться </p>  </div>
            :
            <div className={style.register}>
                <Register/>
                <p  className={style.authorization} onClick={()=>changeFlag(!flag)}> Авторизоваться</p>
            </div>
        }
    </div>)
}

export default ContainerAuthorization
