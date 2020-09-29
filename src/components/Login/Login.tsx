import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import {log} from "util";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validator";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean

}

export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[required]} placeholder={'login'}  name={'login'} component={Input} />
                </div>
                <div>
                    <Field validate={[required]} type="text" placeholder={'password'} name={'password'} component={Input}/>
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)