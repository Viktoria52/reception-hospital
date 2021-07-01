import Login from "./Login/Login";
import {useState} from "react";
import Register from "./register/register";
import style from "./containerAuth.module.css";


const ContainerAuthorization =() => {
    const [flag, changeFlag] = useState(true);
    return(<div className={style.mainAuth}>
        {flag ?
            <div>
                <Login />
                <p className={style.registration} onClick={()=>changeFlag(!flag)}> Зарегестрироваться </p>  </div>
            :
            <div>
                <Register />
                <p  className={style.authorization} onClick={()=>changeFlag(!flag)}> Авторизоваться</p>
            </div>
        }


    </div>)
}

export default ContainerAuthorization