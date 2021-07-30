import {Redirect, useLocation} from "react-router";
import {useDispatch} from "react-redux";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const RedirectGoogle = () => {
    const dispatch = useDispatch()

    const token = localStorage.setItem("Token", useQuery().get('token'));
    // dispatch(loginSuccess(token))
    return <Redirect from='/' to='/todo'/>
}
export default RedirectGoogle

