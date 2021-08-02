import React from 'react'
import {Link, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import style from './header.module.css'
import jwtServise from "../../api/tokenServise";
import {AuthReducer} from "../../state/actions/authActions";
import {GoogleLogout} from "react-google-login";
import CLIENT_ID from '../../client'
import buttonServ from "../../api/typeButtonService";


const Header = () => {
    const logout = (response) => {
        console.log(response)
        jwtServise.removeToken()
        dispatch(AuthReducer(false))
    }
    const {title} = useSelector((state) => state.authReducer)
    let typeAuth = buttonServ.getType()
    const dispatch = useDispatch()

    return (
        <div className={style.main}>
            <div className={style.logo}/>
            <div>
                <Route path='/'>
                    {title &&
                    <p className={style.title}>{title}</p>}
                </Route>
            </div>
            <div className={style.buttonContainer}>
                <Route path="/reception">
                    {typeAuth==='basic' &&
                    <Link to='/auth'>
                        <button
                            className={style.exit}
                            onClick={() => {
                                jwtServise.removeToken()
                                dispatch(AuthReducer(false))
                            }}
                        > Выход
                        </button>
                    </Link>
                    }
                    {typeAuth==='google' &&
                    <Link to='/auth'>
                        <GoogleLogout
                            clientId={CLIENT_ID}
                            buttonText="Logout"
                            onLogoutSuccess={logout}>
                        </GoogleLogout>
                    </Link>

                    }



                </Route>
            </div>
        </div>
    )
}


export default Header