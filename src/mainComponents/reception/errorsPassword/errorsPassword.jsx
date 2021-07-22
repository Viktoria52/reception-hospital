import style from "../../authorization/register/register.module.css";

const ErrorsPassword = (props) => {
    return(<div className={style.errorsPassword}>
            {props.message}
        </div>
    )
}

export default ErrorsPassword