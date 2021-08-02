import React , { ChangeEvent, useState} from 'react';
import './login.scss';
import logo from '../ed_icon.svg'
import InputBox from '../components/inputbox';
import {INPUTTYPES} from '../enums/InputTypes';

function Login(){
    const [form, setForm] = useState({
        email: '' ,
        password: '',
        checkbox: false
    })

    function formOnChange(event : ChangeEvent<HTMLFormElement>){
        let temp = form;
        let {value} = event.target;
        console.log(event.target)
        if(event.target.name==='checkbox'){
            value = event.target.checked;
        }
        temp = {
            ...temp,
            [event.target.name] : value
        };
        console.log(temp);
        setForm(temp);
    }

    const inputData = {
        email: {
            name: INPUTTYPES.EMAIL,
            placeholder: 'Email',
            type: INPUTTYPES.EMAIL
        },
        password: {
            name: INPUTTYPES.PASSWORD,
            placeholder: 'Password',
            type: INPUTTYPES.PASSWORD
        },
        remember: {
            name: INPUTTYPES.CHECK,
            placeholder: 'Remember Me',
            type: INPUTTYPES.CHECK
        }
    }

    function onFormSubmit(event: any){
        event.preventDefault();
        // const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    }

    return (
        <div className="form-container">
            <img className="logo" src={logo} alt="logo"/>
            <form className="form" onChange={formOnChange}>
                <div className="form-fields">
                    <InputBox data={inputData.email} value={form.email}></InputBox>
                    <InputBox data={inputData.password} value={form.password}></InputBox>
                    <InputBox data={inputData.remember} value={form.checkbox.toString()}></InputBox>
                </div>  
            </form>
            <button className="login" onClick={onFormSubmit}>Login &rarr;</button>              
        </div>
    );
}

export default Login;