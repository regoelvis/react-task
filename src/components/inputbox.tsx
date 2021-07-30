import React from 'react';
import './inputbox.scss';

function InputBox(props : Inputs){
    return (
        <section className="form-control">
            <label htmlFor={props.data.name}>{props.data.placeholder}</label>
            <input type={props.data.type} name={props.data.name} id={props.data.name} placeholder={props.data.placeholder} value={props.value}></input>
        </section>
    );
}

interface Inputs{
    data: {
        name: string,
        type: string,
        placeholder: string
    },
    value: string
}

export default InputBox;