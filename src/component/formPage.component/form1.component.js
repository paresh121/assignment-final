import React from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import {InputField} from '../Helper/inputField/input.component';
import {ButtonComponent} from "../Helper/button/button.component";
import './forms.scss';
export const StepOne = (props) => {
    const stepOneValidationSchema = Yup.object({
        Source_location: Yup.string().required().label("Source Location *"),
        Destination: Yup.string().required().label("Destination *"),
        Car_type: Yup.string().required().label("Enter Car Type *"),
        Num_travellers:Yup.number().when('Car_type', {
            is: "SUV", // alternatively: (val) => val == true
            then: Yup.number().max(6),
            otherwise: Yup.number().max(4),
          }).label("Number Of Travellers "),
    });
    const handleSubmit = (values) => {
      console.log("called handle submit");
      return props.next(values);
    };
    return (
  
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={(values)=>handleSubmit(values)}
      >
        {() => (
          <Form>
                <div className="flex-box">
                        <InputField name={"Source_location"} error={true} labelText="Source location *" classBox="input-box" classInputField="input1" classLabel="label-1" />
                        <InputField name={"Destination"} error={true} labelText="Destination *" classBox="input-box" classInputField="input1" classLabel="label-1" />
                </div>  
                <InputField name={"Car_type"} select={["HatchBack", "Sedan", "SUV"]} error={false} labelText="Car type" classBox="input-box-2" classInputField="input2" classLabel="label-2" />      
                <div className="flex-box">
                        <InputField name={"Num_travellers"} error={true} labelText="Number of travellers" classBox="input-box-2" classInputField="input2" classLabel="label-2" />
                </div> 
                <ButtonComponent type="submit" labelText="Enter Bid details"  classBox="button-bid" classButton="bid-press" /> 
        </Form>
        )}
      </Formik>
    );
  };
  