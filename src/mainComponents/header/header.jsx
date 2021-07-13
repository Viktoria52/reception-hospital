import React from 'react'
import {Link, Route} from "react-router-dom";
import {Auth} from "./state/auth";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const {tokenAuth, isAuth, title} = useSelector((state) => state.authReducer)
    const dispatch = useDispatch()

    return (
        <div>

            <div className="logo"/>
            {title &&
            <p className='title'>{title}</p>}
            <Route path="/reception">
                {/*<div className="logo"/>*/}
                <p className="complaints">Приемы </p>
                <Link to='/'>
                    <button
                        className='exit'
                        onClick={async () => {
                            await localStorage.removeItem('token');
                            dispatch(Auth(false))
                        }}
                    > Выход
                    </button>
                </Link>

            </Route>


        </div>
    )
}


export default Header