import { useForm } from "react-hook-form";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    const {register, handleSubmit} = useForm();

    return(<form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <input {...register("login")} type={"text"} placeholder={'login'}/>
        </div>
            <div>
            <input {...register("password")} type={'password'} placeholder={'password'}/>
        </div>
            <input type="submit" />
        </form>
    )

}

export default Login;