import { Field} from "formik";
import {Edit} from"../edit/edit.component";
import React, {useRef} from 'react';
import './otp.styles.scss'
export const OTPInputField= ({func, setState, editState, textShow, number, otpCorrectValues}) => {
    const ar=[useRef(null),useRef(null),useRef(null),useRef(null)];
    const func1=(i)=>{
        if(i<(ar.length-1)){
        i+=1;
        ar[i].current.focus();
        }
    }
    return (
        <div>
        <div className="flexOtpBox">
            <div className="otpTextBox">
                {`${textShow} ${number}`}
                <Edit func={func} setState={editState}/>
            </div>
        </div>
            <div className="otpNumberBox">
            <div className="flexOtpBox">
                <input  className='inputOtpBox' maxlength="1"   onChange={()=>func1(0)} ref={ar[0]}/>
                <input  className='inputOtpBox' maxlength="1"   onChange={()=>func1(1)} ref={ar[1]}/>
                <input  className='inputOtpBox' maxlength="1"   onChange={()=>func1(2)} ref={ar[2]}/>
                <input  className='inputOtpBox' maxlength="1"   onChange={()=>func(setState)} ref={ar[3]}/>
                </div>
            </div>
        </div>
    );
}