import React from 'react';
import  { useState } from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import {InputField} from '../Helper/inputField/input.component';
import {ButtonComponent} from "../Helper/button/button.component";
import {DetailView} from "../detailView/detailView.component";
import {OTPInputField} from"../Helper/otpInput/otpInput.component";
import './forms.scss';
export const StepTwo = (props) => {
    const [currentStepForm2, setCurrentStep] = useState(1);
    const stepTwoValidationSchema = Yup.object({
        Amount: Yup.string().required().label("Amount"),
        Negotiable:Yup.bool().label("Rate Negotiable"),
        Number: Yup.string().required().matches(/^[0-9]+$/, "Must be only digits")
        .min(12, 'Must be exactly 10 digits')
        .max(12, 'Must be exactly 10 digits').label("Enter your Number"),
        Name: Yup.string().required().label("Enter Your Name"),
        Remarks: Yup.string().label("Remarks( Optional )"),
      });
    const handleSubmit = (values) => {
      props.next(values,true);
    };


    const nameList=["Number","Name", "Remarks"];
    const errorList=[true, true, false];
    const labelList=["Enter your Number","Enter Your Name","Remarks( Optional )"]
    const fillOtherDetail=({nameList, errorList, labelList})=>{
      console.log(`nameList ${nameList}`);
      return(
        <div>
        {
          nameList.map((value, id)=>
            <div key={id} className="flex-box">
            <InputField key={id} name={value} error={errorList[id]} labelText={labelList[id]} classBox="input-box-2" classInputField="input2" classLabel="label-2" />
            </div> 
            )
        } 
        </div>
      );
    }
    const triggerNextStateForm=(setState)=>{

        setCurrentStep((prev)=>setState);
        props.tempState(setState);

    }
    // { text over otp }
    const textShow="We've sent an OTP to your mobile number. Please Enter it below to submit your bid"
    // { Journey details}
    const {Source_location, Destination, Car_type, Num_travellers}=props.data;
    const JourneyleftElements=[`${Source_location} - ${Destination}`, `${Num_travellers} Persons, ${Car_type}`];
    return (
      <Formik
        validationSchema={stepTwoValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          
          <Form>
          <DetailView func={props.prev} values={values}  detailType="Journey Details" leftElements={JourneyleftElements} classBox="flex-box-2" box1="detail-box-1" box2="detail-box-2" classDetailType="joruney-class" />
          {currentStepForm2<3?<InputField name={"Amount"} classBox="input-box-3" classInputField="input-3"/>:null}
          <div className="flex-box">
          {currentStepForm2<3?<InputField name={"Negotiable"} type="checkbox" labelText="Rate Negotiable" classBox="box-checkbox-1" classLabel="box-checkbox-text-1"/>:null}
          </div>
          {currentStepForm2>2? <DetailView  detailType="Bid Details" leftElements={[values.Number,values.Name, values.Remarks]} rightElements={[values.Amount]} classBox="flex-box-2" box1="detail-box-1" box2="detail-box-2" classDetailType="joruney-class" />:null}
          {
            currentStepForm2===1
            ?<ButtonComponent func={triggerNextStateForm} setState={2} type="button" labelText="Next"  classBox="button-bid" classButton="bid-press" />
            : currentStepForm2===2
            ?fillOtherDetail({nameList, errorList, labelList})
            :null
          }
          {currentStepForm2===3? <OTPInputField func={triggerNextStateForm} textShow={textShow} number={values.Number} setState={4} editState={2} otpCorrectValues={[1,2,3,4]} />:null}
          {
            (currentStepForm2===2)||(currentStepForm2===3)
            ?<ButtonComponent func={triggerNextStateForm}  setState={currentStepForm2+1} type="button" labelText="Verify OTP"  classBox="button-bid" classButton="bid-press" />
            : currentStepForm2===4
            ?<ButtonComponent type="submit" labelText="Submit Bid"  classBox="button-bid" classButton="bid-press" />
            :null
          }
        
          </Form>
        )}
      </Formik>
    );
  };
  