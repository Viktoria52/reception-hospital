import React, {useEffect} from 'react'
import {Link, Route} from "react-router-dom";
import {Auth, setTittle, setToken} from "../../state/auth";
import {useDispatch, useSelector} from "react-redux";
import style from './header.module.css'

const Header = () => {
    const {tokenAuth, isAuth, title} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()
    // console.log(title)
    useEffect(() => {
        // if(isAuth=== true){
        //     dispatch(setTittle(null))
        // }
    }, [isAuth])
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
                    {/*<div className="logo"/>*/}
                    {/*<p className={style.complaints}>Приемы </p>*/}
                    <Link to='/'>
                        <button
                            className={style.exit}
                            onClick={async () => {
                                await localStorage.removeItem('token');
                                await dispatch(setToken(null))
                                dispatch(Auth(false))
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