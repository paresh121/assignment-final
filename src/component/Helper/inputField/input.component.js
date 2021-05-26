import { Field, ErrorMessage } from "formik";
import React from 'react';
import './input.styles.scss'
export const InputField= ({name, select,type, error, labelText, classBox, classInputField, classLabel, errorClass }) => {
    return (
        <div className={classBox}>

            {select? 
                <Field as="select" name={name} className={classInputField} >
                    {
                        select.map((item,index)=>{return <option key={index} value={item}>{item}</option> })
                    }
                </Field>

                :<Field name={name} type={type}className={classInputField}/>}

            {classLabel?<div className={classLabel}>{labelText}</div>:null}
            {error?<div className ="error"><ErrorMessage name={name}/></div>:null}
        </div>
    );
}