import {NavLink} from "react-router-dom";


const Nav = () => {
    return(<div>
            <div>
                <NavLink to='/login'> Login</NavLink>
            </div>
            <div>
                <NavLink to='/reception'> Reception</NavLink>
            </div>
        </div>

    )
}

export default Nav;