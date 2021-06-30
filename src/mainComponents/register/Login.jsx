import { useForm } from "react-hook-form";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    const {register, handleSubmit} = useForm();

    return(<form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input {...register("name")} type={"text"} placeholder={'enter your name...'}/>
        </div>
            <div>
            <input {...register("lastName")} type={"text"} placeholder={'enter your lastname...'}/>
        </div>
            <div>
            <input {...register("patronymic")} type={"text"} placeholder={'enter your patronymic...'}/>
        </div>
            <div>
            <input {...register("password")} type={'password'} placeholder={'enter your password...'}/>
        </div>
            <input type="submit" />
        </form>
    )

}

export default Login;