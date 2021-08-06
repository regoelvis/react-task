import React , { ChangeEvent, useEffect, useState} from 'react';
import './login.scss';
import logo from '../ed_icon.svg'
import InputBox from '../components/inputbox';
import {INPUTTYPES} from '../enums/InputTypes';
import {getTrue} from '../service/api.service';

function Login(){
    const [form, setForm] = useState({
        email: '' ,
        password: '',
        remember: false
    })

    useEffect(() => {
        console.log('Form changed');
    }, [form])

    function formOnChange(event : ChangeEvent<HTMLFormElement>){
        let temp = form;
        let {value} = event.target;
        console.log(event.target)
        if(event.target.name==='remember'){
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
            name: 'remember',
            placeholder: 'Remember Me',
            type: INPUTTYPES.CHECK
        }
    }

    async function onFormSubmit(event: any){
        event.preventDefault();
        // const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const bool = await getTrue();
        if(bool.ok){
            console.log(bool);
        }
    }

    const inputs = [
        <InputBox data={inputData.email} value={form.email} key="email"></InputBox>,
        <InputBox data={inputData.password} value={form.password} key="password" ></InputBox>,
        <InputBox data={inputData.remember} value={''} key="remember"></InputBox>
    ]

    return (
        <div className="form-container">
            <img className="logo" src={logo} alt="logo"/>
            <form className="form" onChange={formOnChange}>
                <div className="form-fields">
                    {inputs.map((input) => {return input})}
                </div>
            </form>
            {   (form.remember===true) && 
                    <p style={{marginRight: '2rem'}}>You will be remembered</p>
            }
            <button className="login" onClick={onFormSubmit}>Login &rarr;</button>              
        </div>
    );
}

export default Login;