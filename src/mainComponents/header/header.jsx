import React from 'react'
import {Link, Route} from "react-router-dom";
import {AuthReducer} from "../../state/authReducer";
import {useDispatch, useSelector} from "react-redux";
import style from './header.module.css'
import jwtServise from "../../api/tokenServise";

const Header = () => {
    const {title} = useSelector((state) => state.authReducer)
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
                    <Link to='/auth'>
                        <button
                            className={style.exit}
                            onClick={ () => {
                                jwtServise.removeToken()
                                dispatch(AuthReducer(false))
                            }}
                        > Выход
                        </button>
                    </Link>
                </Route>
            </div>
        </div>
    )
}


export default Header