import React from 'react';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
function validateNum(value) {
  let error;
  const valu=parseInt(value)
  if (valu>5) {
    error = 'Type value less than 5';
  }
  return error;
}
export const StepOne = (props) => {
    const stepOneValidationSchema = Yup.object({
        Source_location: Yup.string().required().label("Source Location *"),
        Destination: Yup.string().required().label("Destination *"),
        Car_type: Yup.string().required().label("Enter Car Type *"),
        Num_travellers:Yup.number().when('Car_type', {
            is: "SUV", // alternatively: (val) => val == true
            then: Yup.number().max(6),
            otherwise: Yup.number().max(4),
          }).required().label("Number Of Travellers *"),
        toggle:Yup.bool().required(),
    });
    const handleSubmit = (values) => {
      return props.next(values);
    };
    return (
  
      <Formik
        validationSchema={stepOneValidationSchema}
        initialValues={props.data}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
                <div>
                <Field name="Source_location" />
                <div>Source location</div>
                <div><ErrorMessage name="Source_location"/></div>
                </div>
                <div>
                <Field name="Destination" />
                <div>Destination</div>
                </div>
                <div>
                <Field as="select" name="Car_type" >
                    <option value="HatchBack">HatchBack</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                </Field>
                <div>Car Type</div>
                </div>
                <div>
                <Field name="Num_travellers" />
                <div>Num_travellers</div>
                <div><ErrorMessage name="Num_travellers"/></div>
                </div>
                <label>
                <Field type="checkbox" name="toggle"/>
                    Rate it
                </label>
                <button type="submit" > Submit </button>
          </Form>
        )}
      </Formik>
    );
  };
  