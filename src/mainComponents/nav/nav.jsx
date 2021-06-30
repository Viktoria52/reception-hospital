import {NavLink} from "react-router-dom";
import s from './nav.module.css'

const Nav = () => {
    return(<div className={s.main}>
            <div >
                <NavLink className={s.link} to='/login'>Login</NavLink>
            </div>
            <div >
                <NavLink className={s.link} to='/reception'>Receptions</NavLink>
            </div>
            <div>
                <NavLink  className={s.link} to='/newReception'> new Reception</NavLink>
            </div>
        </div>

    )
}

export default Nav;